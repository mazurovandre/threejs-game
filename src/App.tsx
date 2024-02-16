import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Sphere } from "./components/Sphere";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Sphere />
      <Environment preset="dawn" background blur={0.6} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
