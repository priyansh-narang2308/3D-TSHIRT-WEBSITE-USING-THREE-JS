import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "./../store/index";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakPoint =
      typeof window !== "undefined" && window.innerWidth <= 1260;
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

    // Set initial position of the camera
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Update camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Update model rotation
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
