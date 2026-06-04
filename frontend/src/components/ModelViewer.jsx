import { Center, Environment, OrbitControls, PerspectiveCamera, useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


const Loading = () => {
  const progress = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-sm font-medium">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
}


const ModelViewer = ({ url }) => {
  if (!url) return null;
  const { scene } = useGLTF(url);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Canvas
        resize={{ scroll: false, offsetSize: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Camera — makeDefault so OrbitControls attaches to it */}
        <PerspectiveCamera makeDefault fov={45} position={[0, 1, 5]} />

        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 40, 5]}
          intensity={5}
        />

        {/* Model */}
        <Center>
          <Suspense fallback={<Loading />}>
            <primitive object={scene} scale={3.7} />
          </Suspense>
        </Center>
        <Environment preset="sunset" />
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
