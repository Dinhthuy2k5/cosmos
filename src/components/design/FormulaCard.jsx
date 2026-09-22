// src/components/design/FormulaCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sigma, Lightbulb } from 'lucide-react';

export default function FormulaCard({
    formula,
    meaning,
    variables = [],
    example,
    color = "#00f0ff",
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-3xl mx-auto my-4 [perspective:1200px]"
        >
            {/* Glow phía sau */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-[110px] opacity-20 pointer-events-none"
                style={{ background: color }}
            />

            <div
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Header */}
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
                    <Sigma size={16} style={{ color }} />
                    <span
                        className="text-[10px] font-bold uppercase tracking-[0.3em]"
                        style={{ color }}
                    >
                        Công thức
                    </span>
                </div>

                {/* Formula */}
                <div className="px-8 py-8 text-center border-b border-white/5">
                    <div
                        className="text-2xl md:text-4xl font-serif italic tracking-tight text-white [text-shadow:0_0_30px_currentColor]"
                        style={{ color, fontFamily: 'Georgia, Cambria, serif' }}
                    >
                        {formula}
                    </div>
                </div>

                {/* Meaning */}
                {meaning && (
                    <div className="px-8 py-6 border-b border-white/5">
                        <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                            {meaning}
                        </p>
                    </div>
                )}

                {/* Variables */}
                {variables.length > 0 && (
                    <div className="px-8 py-6 border-b border-white/5 bg-black/20">
                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
                            Ý nghĩa các ký hiệu
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                            {variables.map((v, i) => (
                                <div key={i} className="flex items-baseline gap-3">
                                    <span
                                        className="font-serif italic font-bold min-w-[1.5rem]"
                                        style={{ color, fontFamily: 'Georgia, serif' }}
                                    >
                                        {v.symbol}
                                    </span>
                                    <span className="text-gray-400 font-light">{v.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Example */}
                {example && (
                    <div className="px-8 py-6 bg-black/10">
                        <div className="flex items-start gap-3">
                            <Lightbulb
                                size={16}
                                className="mt-1 flex-shrink-0"
                                style={{ color }}
                            />
                            <div>
                                <div
                                    className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2"
                                    style={{ color }}
                                >
                                    Ví dụ
                                </div>
                                <p className="text-gray-400 font-light leading-relaxed text-sm">
                                    {example}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}