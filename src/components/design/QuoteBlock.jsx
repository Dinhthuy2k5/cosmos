// src/components/design/QuoteBlock.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function QuoteBlock({ text, author, role, color = "#a78bfa" }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl mx-auto py-16 px-8 [perspective:1200px]"
        >
            {/* Glow phía sau */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: color }}
            />

            {/* Nháy mở/đóng */}
            <Quote
                className="absolute top-0 left-0 opacity-20"
                size={80}
                style={{ color }}
            />

            <div
                className="relative text-center"
                style={{ transform: "translateZ(50px)" }}
            >
                <p className="text-2xl md:text-4xl font-light italic text-white leading-snug mb-8">
                    "{text}"
                </p>
                {author && (
                    <div>
                        <div
                            className="text-sm font-black uppercase tracking-[0.3em] mb-1"
                            style={{ color }}
                        >
                            {author}
                        </div>
                        {role && (
                            <div className="text-xs text-gray-500 font-light">{role}</div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}