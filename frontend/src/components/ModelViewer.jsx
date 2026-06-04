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

function Model({ url }) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} scale={2} />
    </Center>
  );
}

// ✅ Inner component that forces a resize after mount
function ResizeHandler() {
  const { gl, camera, size } = useThree();

  useEffect(() => {
    // Force the renderer to re-read container dimensions after first paint
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
    }, 50); // Small delay — lets the browser finish layout

    return () => clearTimeout(timeout);
  }, []); // Runs once after mount

  return null;
}

export default function ModelViewer({ url, autoRotate = false }) {
  const containerRef = useRef(null);

  return (
    // ✅ Wrapper div must be h-full to pass height down to Canvas
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        shadows
        camera={{ fov: 50, position: [0, 0, 3] }}
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
          minDistance={3}
          maxDistance={1}
          target={[0, 0, 0]}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
