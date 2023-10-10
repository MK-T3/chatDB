import {  useFrame } from "@react-three/fiber";
import React, { useRef, useMemo,useState,useEffect } from "react";
import { framerMotionConfig } from "../config";
import { animate, useMotionValue } from "framer-motion";
import { Text, TrackballControls } from '@react-three/drei'
import * as THREE from 'three'
import { generate } from "random-words";
import { useNavigate } from "react-router-dom";

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: 'public/font/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  const movePage = useNavigate();

  const handle =()=>{
    movePage('/InputPage');
  }

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#4F46E5' : 'white'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={handle} {...props} {...fontProps} children={children} />
}
function Cloud({ count = 4, radius = 10 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), generate()])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export const Experience = (props) => {
  const mesh = useRef();
  const {menuOpened} = props;
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -10 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 1 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.002;
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <mesh ref={mesh}>
        <Cloud count={8} radius={15} />
      </mesh>
    </>
  );
};
