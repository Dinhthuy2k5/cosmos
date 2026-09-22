// src/components/design/StatCounter.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(target, inView, duration = 1800) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = null;
        let frameId;
        const step = (ts) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(target * eased);
            if (progress < 1) frameId = requestAnimationFrame(step);
        };
        frameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameId);
    }, [inView, target, duration]);
    return value;
}

function StatItem({ value, suffix = "", prefix = "", label, decimals = 0, color = "#00f0ff" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const animated = useCountUp(value, inView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:border-white/25 transition-colors"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
            />
            <div
                className="text-5xl md:text-6xl font-black tracking-tighter mb-3"
                style={{ color }}
            >
                {prefix}
                {animated.toFixed(decimals)}
                {suffix}
            </div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                {label}
            </div>
        </motion.div>
    );
}

export default function StatCounter({ stats, columns = 3 }) {
    const gridCols = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4",
    }[columns] || "grid-cols-1 md:grid-cols-3";

    return (
        <div className={`grid ${gridCols} gap-6`}>
            {stats.map((s, i) => (
                <StatItem key={i} {...s} />
            ))}
        </div>
    );
}