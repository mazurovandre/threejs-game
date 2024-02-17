import { Physics } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Sphere } from "./components/Sphere";

function App() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>
      <Physics>
        <Sphere />
        <Environment preset="forest" background />
        <OrbitControls enableRotate={false} />
      </Physics>
    </Canvas>
  );
}

export default App;
