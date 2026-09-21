// src/components/Background3D.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

function Starfield() {
    const groupRef = useRef();

    // Tự động xoay nhẹ bầu trời sao theo thời gian
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x -= delta * 0.02;
            groupRef.current.rotation.y -= delta * 0.01;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
            <Sparkles count={200} scale={20} size={2} speed={0.4} opacity={0.5} color="#00f0ff" />
        </group>
    );
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Camera được đẩy ra xa để thấy toàn cảnh */}
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Starfield />
            </Canvas>
        </div>
    );
}