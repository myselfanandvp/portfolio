import { Suspense, useEffect, useCallback, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Center,
  Environment,
  Html,
  useProgress,
} from '@react-three/drei';
import * as THREE from 'three';

// ── Suppress library-level noisy deprecation warnings ────────────────────────
if (typeof window !== 'undefined') {
  const _warn = console.warn.bind(console);
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    if (typeof args[0] === 'string' && args[0].includes('THREE.WebGLShadowMap')) return;
    _warn(...args);
  };
}

// ── Loader ────────────────────────────────────────────────────────────────────
const SimpleLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        color: 'white',
        background: 'rgba(0,0,0,0.75)',
        padding: '8px 16px',
        borderRadius: '20px',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        userSelect: 'none',
      }}>
        {Math.round(progress)}% loaded
      </div>
    </Html>
  );
};

// ── Auto-fit camera to model bounding box ─────────────────────────────────────
const CameraFitter = ({ sceneRef }) => {
  const { camera, invalidate } = useThree();

  useEffect(() => {
    if (!sceneRef.current) return;

    const box = new THREE.Box3().setFromObject(sceneRef.current);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Move camera back enough so the whole model fits in view
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const distance = (maxDim / 2) / Math.tan(fov / 2);

    // Add 10% padding so the model isn't flush against edges
    camera.position.set(center.x, center.y, center.z + distance * 1.1);
    camera.near = distance * 0.01;
    camera.far = distance * 10;

    // Direct camera to look at the computed center of the model
    camera.lookAt(center);
    camera.updateProjectionMatrix();

    invalidate();
  }, [camera, sceneRef, invalidate]);

  return null;
};

// ── Model ─────────────────────────────────────────────────────────────────────
const Model = ({ url, sceneRef }) => {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((obj) => {
      if (!obj.isMesh) return;
      obj.castShadow = true;
      obj.receiveShadow = true;
      // Removed manual premultiplyAlpha and needsUpdate mutations to fix WebGL texture warnings
    });
  }, [scene]);

  return <primitive ref={sceneRef} object={scene} />;
};

// ── Viewer ────────────────────────────────────────────────────────────────────
const SimpleModelViewer = ({
  url,
  width = '100%',
  height = '100%',
  autoRotate = false,
  environmentPreset = 'forest',
}) => {
  const sceneRef = useRef();

  useEffect(() => {
    if (url) useGLTF.preload(url);
  }, [url]);

  const handleCreated = useCallback(({ gl }) => {
    // Configured color profile and exposure rules safely for modern Three versions
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.0;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, []);

  const POLAR = Math.PI / 2;

  return (
    <div style={{ width, height, position: 'relative' }}>
      <Canvas
        // Setup modern shadow mapping without triggering old PCFSoftShadowMap defaults
        shadows="percentage"
        dpr={[1, 2]}
        // Dynamically handles active frame loop updates based on rotation state
        frameloop={autoRotate ? "always" : "demand"}
        camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 5] }}
        onCreated={handleCreated}
        onWheel={(e) => e.stopPropagation()}
        style={{ touchAction: 'none' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />

        <Environment preset={environmentPreset} />

        <Suspense fallback={<SimpleLoader />}>
          <Center>
            <Model url={url} sceneRef={sceneRef} />
          </Center>
          <CameraFitter sceneRef={sceneRef} />
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableDamping={false}
          minPolarAngle={POLAR}
          maxPolarAngle={POLAR}
          autoRotate={autoRotate}
          autoRotateSpeed={1.0}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.NONE,
            RIGHT: THREE.MOUSE.NONE,
          }}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.NONE,
          }}
        />
      </Canvas>
    </div>
  );
};

export default SimpleModelViewer;
