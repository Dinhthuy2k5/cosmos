// src/components/design/ArticleLayout.jsx
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, Sparkles } from 'lucide-react';
import CosmicHero from './CosmicHero';
import ArticleSection from './ArticleSection';
import QuoteBlock from './QuoteBlock';
import StatCounter from './StatCounter';
import InfoCard3D from './InfoCard3D';
import FormulaCard from './FormulaCard';

// === THANH ĐỌC TIẾN TRÌNH ===
function ReadingProgress({ color }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <motion.div
            style={{ scaleX, background: `linear-gradient(90deg, ${color}, #a78bfa)` }}
            className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        />
    );
}

// === NÚT QUAY LẠI ===
function BackButton() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-24 left-6 md:top-28 md:left-10 z-30"
        >
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 text-white text-xs font-bold uppercase tracking-widest transition-all"
            >
                <ChevronLeft size={14} /> Trang chủ
            </Link>
        </motion.div>
    );
}

export default function ArticleLayout({
    title,
    subtitle,
    heroImg,
    chapter,
    accentColor = "#00f0ff",
    readingTime,
    sections = [],
    relatedArticles = [],
    tags = [],
}) {
    return (
        <main className="min-h-screen bg-transparent overflow-x-hidden">
            <ReadingProgress color={accentColor} />
            <BackButton />

            {/* Hero */}
            <CosmicHero
                title={title}
                subtitle={subtitle}
                heroImg={heroImg}
                chapter={chapter}
                accentColor={accentColor}
            >
                {readingTime && (
                    <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50">
                        <Clock size={14} /> {readingTime} đọc
                    </div>
                )}
            </CosmicHero>

            {/* Tags */}
            {tags.length > 0 && (
                <section className="max-w-4xl mx-auto px-6 pt-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 text-gray-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Sections */}
            <section className="max-w-6xl mx-auto px-6 py-20 space-y-32">
                {sections.map((sec, idx) => {
                    // === Quote ===
                    if (sec.type === "quote") {
                        return (
                            <QuoteBlock
                                key={idx}
                                text={sec.content}
                                author={sec.author}
                                role={sec.role}
                                color={accentColor}
                            />
                        );
                    }

                    // === Stats ===
                    if (sec.type === "stats") {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="py-8"
                            >
                                <div className="text-center mb-12">
                                    <div
                                        className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3"
                                        style={{ color: accentColor }}
                                    >
                                        Số liệu then chốt
                                    </div>
                                </div>
                                <StatCounter
                                    stats={sec.items}
                                    columns={sec.items.length >= 4 ? 4 : 3}
                                />
                            </motion.div>
                        );
                    }

                    // === FORMULA ===
                    if (sec.type === "formula") {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <FormulaCard
                                    formula={sec.formula}
                                    meaning={sec.meaning}
                                    variables={sec.variables}
                                    example={sec.example}
                                    color={accentColor}
                                />
                            </motion.div>
                        );
                    }

                    // === Đoạn văn bản ===
                    return (
                        <ArticleSection
                            key={idx}
                            index={idx}
                            title={sec.title}
                            content={sec.content}
                            img={sec.img}
                            imgAlt={sec.imgAlt || sec.title}
                            reverse={idx % 2 === 1}
                            color={accentColor}
                            bulletPoints={sec.bullets}
                        />
                    );
                })}
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="max-w-7xl mx-auto px-6 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 px-4 py-2 rounded-full border border-white/10"
                            style={{ color: accentColor, borderColor: `${accentColor}30` }}
                        >
                            <Sparkles size={12} /> Đọc tiếp
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                            Hành trình tiếp theo
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedArticles.map((rel, i) => (
                            <InfoCard3D
                                key={i}
                                title={rel.title}
                                description={rel.desc}
                                img={rel.img}
                                to={rel.link}
                                color={rel.color || accentColor}
                                badge={rel.badge}
                            />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}