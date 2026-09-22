// src/components/design/ArticleSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';

export default function ArticleSection({
    index,
    title,
    content,
    img,
    imgAlt,
    reverse = false,
    color = "#00f0ff",
    bulletPoints = [],
    small = false,
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="[perspective:2000px] [transform-style:preserve-3d]"
        >
            <div
                className={`flex flex-col gap-12 items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                    } ${small ? "max-w-4xl mx-auto" : ""}`}
            >
                {/* Cột chữ */}
                <div className="flex-1 space-y-5 [transform:translateZ(40px)]">
                    {index !== undefined && (
                        <div className="flex items-center gap-3">
                            <Hash size={18} style={{ color }} />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                                Phần {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                    )}

                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-[1.05]">
                        {title}
                    </h2>

                    <div
                        className="w-16 h-1 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${color}, transparent)`,
                        }}
                    />

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light whitespace-pre-line">
                        {content}
                    </p>

                    {bulletPoints.length > 0 && (
                        <ul className="space-y-3 mt-6">
                            {bulletPoints.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                                    className="flex items-start gap-3 text-gray-300 font-light"
                                >
                                    <span
                                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                                    />
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Cột ảnh */}
                {img && (
                    <div className="flex-1 w-full [transform:translateZ(70px)]">
                        <motion.div
                            whileHover={{ scale: 1.03, rotateY: reverse ? 4 : -4 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 group shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <img
                                src={img}
                                alt={imgAlt || title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms]"
                            />
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 50%, ${color}40, transparent 70%)`,
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none"
                            />
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.section>
    );
}