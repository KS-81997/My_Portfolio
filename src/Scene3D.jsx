import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Rig({ children }) {
  const group = useRef()
  useFrame(({ pointer }, dt) => {
    const g = group.current
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * 0.5, 3, dt)
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.3, 3, dt)
  })
  return <group ref={group}>{children}</group>
}

function Core() {
  const ring1 = useRef()
  const ring2 = useRef()
  const wire = useRef()
  useFrame((_, dt) => {
    ring1.current.rotation.x += dt * 0.5
    ring1.current.rotation.y += dt * 0.3
    ring2.current.rotation.y -= dt * 0.4
    ring2.current.rotation.z += dt * 0.35
    wire.current.rotation.y += dt * 0.15
    wire.current.rotation.x -= dt * 0.1
  })
  return (
    <group position={[2.2, 0, 0]}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.25, 24]} />
          <MeshDistortMaterial color="#6d5dfc" distort={0.45} speed={2.2} roughness={0.15} metalness={0.7} emissive="#1b1466" emissiveIntensity={0.6} />
        </mesh>
        <mesh ref={wire}>
          <icosahedronGeometry args={[1.9, 1]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
        </mesh>
        <mesh ref={ring1}>
          <torusGeometry args={[2.4, 0.02, 16, 120]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
        <mesh ref={ring2}>
          <torusGeometry args={[2.9, 0.02, 16, 120]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
      </Float>
    </group>
  )
}

function Shards() {
  const items = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        pos: [(Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8, -Math.random() * 6 - 1],
        scale: 0.15 + Math.random() * 0.3,
        color: ['#22d3ee', '#a78bfa', '#f472b6'][i % 3],
        shape: i % 3,
      })),
    []
  )
  return items.map((s, i) => (
    <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={2} floatIntensity={2}>
      <mesh position={s.pos} scale={s.scale}>
        {s.shape === 0 ? <octahedronGeometry /> : s.shape === 1 ? <boxGeometry /> : <tetrahedronGeometry />}
        <meshStandardMaterial color={s.color} metalness={0.6} roughness={0.2} emissive={s.color} emissiveIntensity={0.25} />
      </mesh>
    </Float>
  ))
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#22d3ee" />
      <pointLight position={[-6, -3, 3]} intensity={40} color="#f472b6" />
      <Stars radius={60} depth={40} count={2500} factor={3} fade speed={1} />
      <Rig>
        <Core />
        <Shards />
      </Rig>
    </Canvas>
  )
}
