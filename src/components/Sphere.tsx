import { useSphere } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";
import { usePersonControls } from "../hooks/usePersonControls";

const SPEED = 6;

export const Sphere: React.FC = () => {
  const texture = useTexture("/terrazo.png");
  const { left, right } = usePersonControls();

  const [meshRef, api] = useSphere(() => ({
    mass: 0,
    position: [0, 0, 0],
    type: "Dynamic",
  }));

  useFrame(() => {
    if (!meshRef.current) return;

    const direction = new Vector3(0, 0, 0);

    direction
      .setX(Number(right) - Number(left))
      .normalize()
      .multiplyScalar(SPEED);

    api.velocity.set(direction.x, 0, direction.z);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={1}
        metalness={1}
      />
    </mesh>
  );
};
