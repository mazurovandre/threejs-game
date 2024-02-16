import { useTexture } from "@react-three/drei";
import React from "react";

export const Sphere: React.FC = () => {
  const texture = useTexture("/terrazo.png");

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={0}
        metalness={0.5}
      />
    </mesh>
  );
};
