import { useEffect, useState } from "react";

export const usePersonControls = () => {
  const keys = {
    KeyW: "jump",
    KeyS: "crouch",
    KeyA: "left",
    KeyD: "right",
    Space: "shoot",
    ArrowLeft: "lookLeft",
    ArrowRight: "lookRight",
    ArrowUp: "lookUp",
    ArrowDown: "lookDown",
  };

  const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState(
    Object.values(keys).reduce((acc: Record<string, false>, key: string) => {
      acc[key] = false;
      return acc;
    }, {})
  );

  const setMovementStatus = (code, status) => {
    setMovement((m) => ({ ...m, [code]: status }));
  };

  useEffect(() => {
    const handleKeyDown = (ev) => {
      setMovementStatus(moveFieldByKey(ev.code), true);
    };

    const handleKeyUp = (ev) => {
      setMovementStatus(moveFieldByKey(ev.code), false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};
