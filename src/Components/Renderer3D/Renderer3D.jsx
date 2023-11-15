import { useState, Suspense, useRef } from "react";
import { Canvas ,useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Stage } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    "/assets/models/apple_iphone_15_pro_max_black/scene.gltf"
  );
  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={3} />
    </>
  );
};

const Renderer3D = () => {
  const [isControlsEnabled, setControlsEnabled] = useState(true);
  const ref = useRef(); 
  return (
    <div style={{ position: "relative", fontSize: "1.5rem" }}>
      {isControlsEnabled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0)",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              color: "white",
              zIndex: 1,
            }}
            onClick={() => setControlsEnabled(false)}
          >
            <p>Click to View</p>
          </div>
      )}
      <Canvas
      style={{height:"50vh", weight:"100vw"}}
      shadows dpr={[2, 2]}
        camera={{
          position: [0.1, 0.1, 0.12],
          fov: 70,
          aspect: window.innerWidth / window.innerHeight,
          damping: 1,
        }}
      >
        <OrbitControls ref={ref}
          autoRotate={isControlsEnabled}
          autoRotateSpeed={2}
          enableDamping={true}
        />
        <Suspense fallback={null}>
        <Stage controls={ref} preset="portrait" intensity={.2}  environment="city">
          <Model />
          </Stage>
        </Suspense>
        
      </Canvas>
    </div>
  );
};

export { Renderer3D };