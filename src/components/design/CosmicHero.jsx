// src/components/design/CosmicHero.jsx
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Tạo các hạt nhỏ trôi nổi (deterministic để tránh re-render)
function useParticles(count = 50) {
    return useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: (i * 37.7) % 100,
            y: (i * 61.3) % 100,
            size: 1 + ((i * 7) % 3),
            duration: 8 + ((i * 3) % 6),
            delay: (i % 5) * 0.6,
        }));
    }, [count]);
}

export default function CosmicHero({
    title,
    subtitle,
    heroImg,
    chapter,
    accentColor = "#00f0ff",
    children,
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // 3 lớp parallax di chuyển ở các tốc độ khác nhau
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const midY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const particles = useParticles(60);

    return (
        <section
            ref={ref}
            className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        >
            {/* === LỚP 1: Ảnh nền === */}
            <motion.div
                style={{ y: bgY, scale: bgScale }}
                className="absolute inset-0"
            >
                <img
                    src={heroImg}
                    alt={title}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1128]/60 to-[#0c1128]" />
            </motion.div>

            {/* === LỚP 2: Particle field 3D === */}
            <motion.div
                style={{ y: midY }}
                className="absolute inset-0 pointer-events-none"
            >
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            background: accentColor,
                            boxShadow: `0 0 ${p.size * 4}px ${accentColor}`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>

            {/* === LỚP 3: Glow blob === */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[130px] opacity-30 pointer-events-none"
                style={{ background: accentColor }}
            />

            {/* === LỚP 4: Nội dung === */}
            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-10 text-center px-6 max-w-4xl [transform-style:preserve-3d]"
            >
                {chapter && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: accentColor }}
                        />
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/80">
                            {chapter}
                        </span>
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 40, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] text-white mb-6"
                    style={{
                        textShadow: `0 0 60px ${accentColor}50`,
                        transform: "translateZ(80px)",
                    }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45 }}
                    className="text-lg md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    style={{ transform: "translateZ(40px)" }}
                >
                    {subtitle}
                </motion.p>

                {children}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.4 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Cuộn xuống
                </span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent" />
            </motion.div>
        </section>
    );
}