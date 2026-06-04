import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls, useGLTF, Environment,
  Html, useProgress, Center,
} from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)}% loaded</Html>;
}

// ✅ Fixed: JSX moved out of useEffect into the component's render return
function Model({ url }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} scale={3} />
    </Center>
  );
}

// ✅ Inner component that forces a resize after mount
function ResizeHandler() {
  const { gl, camera } = useThree();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const canvas = gl.domElement;
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      gl.setSize(width, height);
      if (camera.isPerspectiveCamera) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, []);
  return null;
}

export default function ModelViewer({ url, autoRotate = false }) {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        shadows
        camera={{ fov: 50, position: [0, 0, 4] }}
        gl={{ alpha: true }}
        style={{ width: "100%", height: "100%", display: "block" }}
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
      >
        <ResizeHandler />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Environment preset="forest" />
        <Suspense key={url} fallback={<Loader />}>
          <Model url={url} />
        </Suspense>
        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={3.7}
          maxDistance={6}
          target={[0, 0, 0]}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
