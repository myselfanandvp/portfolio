import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Loading() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />

        <p className="text-sm font-medium text-white">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}

function Model({ url }) {
  const { scene } = useGLTF(url);

  return (
    <Center>
      <primitive object={scene} scale={3.7} />
    </Center>
  );
}

function ModelViewer({ url }) {
  if (!url) return null;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas
        resize={{ scroll: false, offsetSize: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Camera */}
        <PerspectiveCamera
          makeDefault
          fov={45}
          position={[0, 1, 5]}
        />

        {/* Lights */}
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[5, 40, 5]}
          intensity={5}
        />

        {/* Model */}
        <Suspense fallback={<Loading />}>
          <Model url={url} />
          <Environment preset="sunset" />
        </Suspense>
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
useGLTF.preload(
  `${import.meta.env.BASE_URL}models/mini_model.glb`
);
export default ModelViewer;
