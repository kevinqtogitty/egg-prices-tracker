/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: João Kalva (https://sketchfab.com/joaokalva)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/frying-egg-5dc6e33e6ff64ede997c37f83281f2ce
title: Frying Egg
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Eggs() {
  const { nodes, materials } = useGLTF('/frying_egg.glb');
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.03, 0.13, 0]} rotation={[0, 1.18, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Stove}
          />
          <group
            position={[0.03, 0.18, 0.05]}
            rotation={[-0.06, -0.21, 0.3]}
            scale={0.98}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Fumes}
            />
          </group>
          <group
            position={[-0.01, 0.17, 0.01]}
            rotation={[1.57, -0.15, 0.79]}
            scale={1.25}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Fumes}
            />
          </group>
          <group
            position={[-0.03, 0.18, -0.08]}
            rotation={[0.94, -0.4, 0.86]}
            scale={0.98}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.Fumes}
            />
          </group>
          <group
            position={[-0.01, 0.18, -0.04]}
            rotation={[-1.12, 0.45, -1.81]}
            scale={[-0.75, 0.75, 0.31]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.Fumes}
            />
          </group>
          <group
            position={[-0.07, 0.16, -0.01]}
            rotation={[1.17, 0.71, -0.41]}
            scale={0.56}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.Fumes}
            />
          </group>
          <group position={[0.01, -0.12, -0.05]} scale={2.68}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.Floor}
            />
          </group>
          <group
            position={[-0.13, -0.12, 0.1]}
            rotation={[0.68, 0.32, 0.37]}
            scale={0.7}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.material_0}
            />
          </group>
          <group
            position={[-0.13, -0.12, 0.14]}
            rotation={[-Math.PI, -0.37, 0]}
            scale={0.7}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.material_0}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/frying_egg.glb');