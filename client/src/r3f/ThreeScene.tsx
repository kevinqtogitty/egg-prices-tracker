import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Eggs } from './3dModel';
import { EggModel } from './EggModel';

const ThreeScene = () => {
  return (
    <Canvas shadows={true}>
      <OrbitControls />
      <OrthographicCamera makeDefault zoom={425} position={[4, 5, 7]} />
      <ambientLight />
      <EggModel />
      <pointLight
        position={[2, 3, 0]}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
    </Canvas>
  );
};

export default ThreeScene;
