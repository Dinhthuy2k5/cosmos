// src/components/design/InfoCard3D.jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function InfoCard3D({
    title, description, img, icon: Icon, to,
    color = "#00f0ff", badge, stat, className = "",
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const content = (
        <div className="relative rounded-3xl overflow-hidden h-full border border-white/15 bg-[#0c1128]/60 backdrop-blur-md group-hover:border-white/40 transition-colors shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* Ảnh nền — tăng opacity */}
            {img && (
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-[#0c1128]/75 to-[#0c1128]/20" />
                </div>
            )}

            {/* Glow accent */}
            <div
                className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at 50% 0%, ${color}, transparent 65%)` }}
            />

            {/* Content */}
            <div className="relative p-8 flex flex-col h-full min-h-[280px] z-10">
                <div className="flex items-start justify-between mb-6">
                    {Icon && (
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center border backdrop-blur-md"
                            style={{
                                borderColor: `${color}50`,
                                background: `${color}18`,
                                color,
                                boxShadow: `0 0 20px ${color}30`,
                            }}
                        >
                            <Icon size={26} strokeWidth={1.5} />
                        </div>
                    )}
                    {badge && (
                        <span
                            className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-sm"
                            style={{
                                borderColor: `${color}60`,
                                background: `${color}20`,
                                color,
                            }}
                        >
                            {badge}
                        </span>
                    )}
                </div>

                {stat && (
                    <div className="text-4xl md:text-5xl font-black tracking-tighter mb-3" style={{ color }}>
                        {stat}
                    </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                    {title}
                </h3>
                <p className="text-gray-200 font-light leading-relaxed text-sm flex-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                    {description}
                </p>

                {to && (
                    <div
                        className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-500"
                        style={{ color }}
                    >
                        Khám phá <ArrowRight size={14} />
                    </div>
                )}
            </div>

            {/* Viền sáng trên */}
            <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />
        </div>
    );

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(30px)" }} className="h-full">
                {to ? <Link to={to} className="block h-full">{content}</Link> : content}
            </div>
        </motion.div>
    );
}