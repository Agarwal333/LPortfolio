/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 laptop1.gltf --transform
Author: gozdemrl (https://sketchfab.com/gozdemrl)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ordinary-behavior-laptop-05ad8ea622744bd69aeefacb41ea466c
Title: Ordinary Behavior | Laptop
*/


import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/laptop1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Hdmi} position={[60.47, 100.83, 0.06]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.material_19} position={[59.09, 100.86, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Keys} position={[-1.3, 103.57, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Kasa} position={[30.56, 101.3, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.Glass} position={[0, 135.67, 0.66]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Parke} position={[0, 111.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.Koltuk} position={[22.38, 116.06, 27.16]} rotation={[-Math.PI / 2, 0, 2.57]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials.Hali} position={[0, 111.24, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={materials.Firca} position={[-39.05, 127.76, 15.29]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={materials.Palet} position={[-31.91, 127.77, 19.84]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_10.geometry} material={materials.Tuval} position={[-4.25, 128.52, 15.22]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_11.geometry} material={materials.Desk} position={[-37.59, 118.71, 27.03]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_12.geometry} material={materials.Boya_Kutusu} position={[-5.43, 123.4, 5.12]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_13.geometry} material={materials.Sandalye} position={[18.93, 121.68, -19.45]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_14.geometry} material={materials.sovale} position={[0.76, 138.16, -16.47]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_15.geometry} material={materials.Lamba} position={[0.56, 177.61, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_16.geometry} material={materials.Lamba_metal} position={[0, 184.29, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_17.geometry} material={materials.clips} position={[0.02, 107.41, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_18.geometry} material={materials.zemin1} position={[0, 110.02, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_19.geometry} material={materials.material} position={[-59.94, 100.35, 0.05]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
          <mesh geometry={nodes.defaultMaterial_20.geometry} material={materials.Base_Wall} position={[0, 136.09, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={120} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/laptop1-transformed.glb')