import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Eggs } from './3dModel';

const ThreeScene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <OrthographicCamera makeDefault zoom={425} position={[4, 5, 7]} />
      <ambientLight />
      <Eggs />
    </Canvas>
  );
};

export default ThreeScene;
