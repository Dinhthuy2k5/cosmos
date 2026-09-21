// src/components/ArticleLayout.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Clock, Hash } from 'lucide-react';

const ReadingProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-purple-500 to-orange-400 origin-left z-[60]"
        />
    );
};

export default function ArticleLayout({ title, subtitle, heroImg, sections, relatedArticles = [] }) {
    const heroRef = useRef(null);

    return (
        <main className="min-h-screen bg-transparent [perspective:2000px] overflow-hidden">
            <ReadingProgress />

            {/* ===== HERO 3D ===== */}
            <section
                ref={heroRef}
                className="relative h-[70vh] flex items-center justify-center overflow-hidden [transform-style:preserve-3d]"
            >
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.45 }}
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        src={heroImg}
                        alt={title}
                        className="w-full h-full object-cover mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1128]/60 to-[#0c1128]" />
                    {/* Vòng sáng 3D phía sau tiêu đề */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mt-20 [transform:translateZ(80px)]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-[#00f0ff] mb-6 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20"
                    >
                        <Clock size={12} /> Bài viết chuyên sâu
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30, rotateX: -40 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(0,240,255,0.4)] leading-none"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-[#00f0ff] font-light"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </section>

            {/* ===== NỘI DUNG CHÍNH ===== */}
            <section className="max-w-6xl mx-auto px-6 py-24 space-y-40 [transform-style:preserve-3d]">
                {sections.map((sec, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 120, rotateX: 20, z: -150 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="[transform-style:preserve-3d]"
                        >
                            {sec.type === "quote" ? (
                                /* === BLOCK QUOTE === */
                                <div className="relative max-w-4xl mx-auto py-12 [transform:translateZ(50px)]">
                                    <Quote className="text-[#00f0ff] mb-6 mx-auto" size={48} />
                                    <blockquote className="text-2xl md:text-4xl font-light italic text-white text-center leading-snug mb-8">
                                        "{sec.content}"
                                    </blockquote>
                                    {sec.author && (
                                        <div className="text-center text-[#00f0ff] font-bold tracking-widest uppercase text-sm">
                                            — {sec.author}
                                        </div>
                                    )}
                                </div>
                            ) : sec.type === "stats" ? (
                                /* === STATS GRID === */
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [transform:translateZ(40px)]">
                                    {sec.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -10, rotateY: 5, translateZ: 30 }}
                                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:border-[#00f0ff]/40 transition-all"
                                        >
                                            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#00f0ff] to-purple-500 mb-3">
                                                {item.value}
                                            </div>
                                            <div className="text-gray-400 text-sm uppercase tracking-widest font-bold">
                                                {item.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                /* === SECTION THƯỜNG (2 cột xen kẽ) === */
                                <div className={`flex flex-col gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} [transform-style:preserve-3d]`}>
                                    <div className="flex-1 space-y-6 [transform:translateZ(40px)]">
                                        <div className="flex items-center gap-3">
                                            <Hash className="text-[#00f0ff]" size={24} />
                                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
                                                Phần {String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                                            {sec.title}
                                        </h2>
                                        <div className="w-16 h-1 bg-gradient-to-r from-[#00f0ff] to-purple-500 rounded-full" />
                                        <p className="text-lg text-gray-300 leading-relaxed font-light whitespace-pre-line">
                                            {sec.content}
                                        </p>
                                    </div>

                                    <div className="flex-1 w-full [transform:translateZ(70px)]">
                                        <motion.div
                                            whileHover={{ scale: 1.02, rotateY: isEven ? -3 : 3 }}
                                            transition={{ duration: 0.6 }}
                                            className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                                            style={{ transformStyle: "preserve-3d" }}
                                        >
                                            <img
                                                src={sec.img}
                                                alt={sec.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            {/* Viền sáng 3D */}
                                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00f0ff]/40 rounded-3xl transition-colors duration-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </section>

            {/* ===== BÀI VIẾT LIÊN QUAN ===== */}
            {relatedArticles.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 pb-32 [perspective:1500px]">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#00f0ff] mb-4">
                            Đọc tiếp
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                            Hành trình tiếp theo
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((rel, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60, rotateY: -20 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8 }}
                                whileHover={{ y: -12, rotateY: 5, translateZ: 40 }}
                                className="[transform-style:preserve-3d]"
                            >
                                <Link
                                    to={rel.link}
                                    className="group block bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#00f0ff]/40 transition-all h-full"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={rel.img}
                                            alt={rel.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                                            {rel.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-light mb-4">
                                            {rel.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-[#00f0ff] text-xs font-bold uppercase tracking-widest">
                                            Đọc ngay <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}