import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingElements() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (torusRef.current && sphereRef.current) {
      torusRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.3;
      torusRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.2;
      
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <>
      <Torus ref={torusRef} args={[3, 0.5, 16, 100]}>
        <meshStandardMaterial 
          color="#3B82F6" 
          wireframe 
          opacity={0.4} 
          transparent 
          emissive="#3B82F6"
          emissiveIntensity={0.3}
        />
      </Torus>
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[2, 0, 0]}>
        <meshStandardMaterial 
          color="#22C55E" 
          opacity={0.3} 
          transparent 
          emissive="#22C55E"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </>
  );
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      className="h-screen w-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22C55E" />
      <FloatingElements />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}