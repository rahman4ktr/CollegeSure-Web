"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + state.pointer.y * 0.3;
      meshRef.current.rotation.y = time * 0.3 + state.pointer.x * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -time * 0.15;
      ringRef.current.rotation.x = time * 0.1;
    }
  });

  return (
    <group>
      {/* Central 3D Gem / Polyhedron */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.15 : 1.05}
        >
          <icosahedronGeometry args={[1.6, 1]} />
          <MeshWobbleMaterial
            color={hovered ? "#F97316" : "#0D9488"}
            factor={0.3}
            speed={1.5}
            roughness={0.25}
            metalness={0.7}
            wireframe={false}
          />
        </mesh>

        {/* Wireframe accent shell */}
        <mesh scale={1.8}>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial
            color="#0B3C5D"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      {/* Orbiting Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.5, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#F97316"
          emissive="#F97316"
          emissiveIntensity={0.5}
          roughness={0.1}
        />
      </mesh>

      {/* Outer floating node spheres */}
      {[
        { pos: [-2.2, 1.5, -0.5], color: "#0D9488", scale: 0.25 },
        { pos: [2.3, -1.2, 0.8], color: "#0B3C5D", scale: 0.35 },
        { pos: [1.8, 1.8, -1.0], color: "#F97316", scale: 0.2 },
        { pos: [-1.9, -1.8, 0.5], color: "#14b8a6", scale: 0.3 },
      ].map((node, i) => (
        <Float key={i} speed={3 + i} rotationIntensity={1} floatIntensity={2}>
          <mesh position={node.pos as [number, number, number]} scale={node.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={node.color}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3DCanvas() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setMounted(true);
    const checkMobile = () => {
      if (isMounted) setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      isMounted = false;
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[380px] sm:h-[450px] bg-gradient-to-br from-[#0B3C5D]/10 via-[#0D9488]/10 to-transparent rounded-2xl flex items-center justify-center animate-pulse">
        <div className="w-16 h-16 rounded-full border-2 border-[#0D9488] border-t-transparent animate-spin" />
      </div>
    );
  }

  // Graceful degrade on mobile for maximum battery & frame rate
  if (isMobile) {
    return (
      <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B3C5D] to-[#1a5276] p-6 flex flex-col justify-center items-center text-center shadow-xl">
        <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 animate-bounce">
          <span className="text-4xl">🎓</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">CollegeSure Guidance</h3>
        <p className="text-sm text-white/80 max-w-xs">
          Interactive 3D counseling platform designed for your future success.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0D9488" />
        <pointLight position={[5, -5, 5]} intensity={1.2} color="#F97316" />

        <FloatingShape />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
