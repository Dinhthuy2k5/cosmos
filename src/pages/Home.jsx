// src/pages/Home.jsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, Rocket, Zap, Globe2, Moon, Compass, Star, ArrowRight, Target, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import CosmicTimeline from '../components/CosmicTimeline';

// Component thẻ 3D Tilt
const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }} className="h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // ===== CLIP-PATH & BACKGROUND =====
    const clipPathSize = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    // ===== LỚP 1: giữ nguyên, rồi mờ hẳn trước khi lớp 2 xuất hiện =====
    const textY1 = useTransform(scrollYProgress, [0, 0.4], ["0%", "40%"]);
    const layer1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);

    // ===== LỚP 2: chỉ xuất hiện SAU khi lớp 1 đã tắt =====
    const textY2 = useTransform(scrollYProgress, [0.25, 0.5], ["10%", "0%"]);
    const layer2Opacity = useTransform(scrollYProgress, [0.28, 0.45], [0, 1]);
    const layer2Scale = useTransform(scrollYProgress, [0.28, 0.6], [0.95, 1]);

    const logos = [
        { name: "NASA", icon: Rocket },
        { name: "SpaceX", icon: Zap },
        { name: "ESA", icon: Globe2 },
        { name: "JAXA", icon: Moon },
        { name: "Blue Origin", icon: Compass },
        { name: "Roscosmos", icon: Star },
    ];

    const technologies = [
        { title: "Khai phá Hành tinh", desc: "Nghiên cứu bề mặt và tìm kiếm sự sống ngoại hành tinh.", icon: Globe2, link: "/cong-nghe/khai-pha" },
        { title: "Công nghệ Động cơ", desc: "Phát triển hệ thống đẩy ion và tên lửa thế hệ mới.", icon: Rocket, link: "/cong-nghe/dong-co" },
        { title: "Trạm Không gian", desc: "Xây dựng các module sinh thái ngoài không gian.", icon: Layout, link: "/cong-nghe/tram-khong-gian" },
        { title: "Viễn vọng Vũ trụ", desc: "Thu thập ánh sáng từ thuở sơ khai của vũ trụ.", icon: Target, link: "/cong-nghe/vien-vong" },
    ];

    const projects = [
        { title: "Artemis I", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000" },
        { title: "James Webb", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000" },
        { title: "Trạm ISS", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000" },
        { title: "Curiosity", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000" },
        { title: "Tinh vân Orion", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000" }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(0);

    return (
        /* ⚠️ ĐÃ BỎ overflow-hidden Ở ĐÂY - đây là nguyên nhân chính khiến sticky bị hỏng */
        <main className="relative">
            {/* ============ 1. HERO SECTION ============ */}
            {/* Giảm từ 300vh → 200vh để cuộn ngắn hơn */}
            <section ref={containerRef} className="h-[200vh] relative w-full bg-[#0c1128]/50">
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1200px]">

                    {/* ===== LỚP 1: NỀN TỐI + CHỮ "KỶ NGUYÊN VŨ TRỤ" ===== */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000"
                            alt="Bg-1"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1128]/40 via-transparent to-[#0c1128]/60" />
                        <motion.div
                            style={{ y: textY1, opacity: layer1Opacity }}
                            className="z-10 text-center px-4 [transform-style:preserve-3d]"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="text-xs font-bold uppercase tracking-[0.5em] text-[#00f0ff] mb-8"
                            >
                                ✦ Chương I · Khởi Nguyên ✦
                            </motion.div>
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 [transform:translateZ(60px)]">
                                Kỷ Nguyên<br />Vũ Trụ
                            </h1>
                            <p className="mt-8 text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto">
                                Hành trình vạn dặm bắt đầu từ một bước chân nhỏ bé giữa hư vô.
                            </p>
                        </motion.div>
                    </div>

                    {/* ===== LỚP 2: VÒNG TRÒN MỞ RA - NỘI DUNG HOÀN TOÀN KHÁC ===== */}
                    <motion.div
                        className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0c1128] overflow-hidden"
                        style={{ clipPath: useTransform(clipPathSize, v => `circle(${v} at center)`) }}
                    >
                        {/* Ảnh nền khác hoàn toàn so với lớp 1 */}
                        <motion.img
                            style={{ scale: backgroundScale }}
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
                            alt="Bg-2"
                            className="absolute inset-0 w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-[#0c1128]/20 to-blue-900/40" />

                        {/* Chữ mới xuất hiện khi vòng tròn mở ra */}
                        <motion.div
                            style={{ y: textY2, opacity: layer2Opacity, scale: layer2Scale }}
                            className="z-10 text-center px-4 [transform-style:preserve-3d]"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-xs font-bold uppercase tracking-[0.5em] text-purple-300 mb-8"
                            >
                                ✦ Chương II · Chinh Phục ✦
                            </motion.div>
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.95] text-white [transform:translateZ(100px)] drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                                Vươn Tới<br />Những Vì Sao
                            </h1>
                            <p className="mt-8 text-lg md:text-xl text-gray-300 font-light max-w-xl mx-auto">
                                Từ Trái Đất đến rìa vũ trụ quan sát được. Không có giới hạn nào cho trí tò mò của nhân loại.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/50"
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </div>
            </section>

            {/* ============ 2. INFINITE TICKER ============ */}
            <section className="py-24 border-y border-white/5 bg-[#0c1128]/80 relative overflow-hidden backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-4 bg-[#00f0ff]/10 px-4 py-1.5 rounded-full">Đối Tác Chiến Lược</div>
                    <h3 className="text-2xl font-medium text-gray-300">Đồng hành cùng các cơ quan hàng không vũ trụ hàng đầu</h3>
                </div>
                <div className="relative flex w-full">
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0c1128] to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0c1128] to-transparent z-10" />
                    <motion.div
                        className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, idx) => {
                            const Icon = logo.icon;
                            return (
                                <div key={idx} className="flex items-center gap-3 text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
                                    <Icon size={28} /><span className="text-xl font-bold tracking-tight">{logo.name}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ============ 3. CÔNG NGHỆ ĐỘT PHÁ ============ */}
            <section className="py-32 bg-[#0c1128]/80 backdrop-blur-sm [perspective:1000px]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-white">
                            Công nghệ đột phá cho kỷ nguyên không gian.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {technologies.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <TiltCard className="h-full">
                                    <Link
                                        to={tech.link}
                                        className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 overflow-hidden hover:bg-white/10 hover:border-[#00f0ff]/50 transition-all block h-full shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                                    >
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/10 text-white group-hover:text-[#00f0ff] transition-colors">
                                            <tech.icon size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-between">
                                            {tech.title} <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00f0ff]" />
                                        </h3>
                                        <p className="text-gray-400 font-light leading-relaxed text-lg">{tech.desc}</p>
                                    </Link>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ 3.5. COSMIC TIMELINE ============ */}
            <CosmicTimeline />

            {/* ============ 4. WORK GALLERY ============ */}
            <section className="py-32 bg-[#0c1128]/80 backdrop-blur-sm [perspective:1200px]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Thành Tựu</h2>
                        <Link to="/su-menh" className="flex items-center gap-2 text-[#00f0ff] font-medium hover:gap-4 transition-all">
                            Xem toàn bộ hồ sơ <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[450px] [transform-style:preserve-3d]">
                        {projects.map((project, idx) => {
                            const isActive = hoveredIndex === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    layout
                                    initial={false}
                                    animate={{
                                        flex: isActive ? 4 : 0.8,
                                        rotateY: isActive ? 0 : (idx < hoveredIndex ? 15 : -15),
                                    }}
                                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                    className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
                                    style={{ flexBasis: '0', transformStyle: "preserve-3d" }}
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover duration-1000 group-hover:scale-105"
                                    />
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute bottom-0 left-0 p-8 z-20 w-full flex flex-col justify-end h-full"
                                            >
                                                <h3 className="text-3xl font-black text-white tracking-tight mb-2">{project.title}</h3>
                                                <span className="text-sm text-[#00f0ff] font-medium">Khám phá thông số chi tiết</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {!isActive && (
                                        <div className="hidden lg:flex absolute inset-0 z-20 items-center justify-center">
                                            <h3 className="text-white text-xl font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap opacity-50">
                                                {project.title}
                                            </h3>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}