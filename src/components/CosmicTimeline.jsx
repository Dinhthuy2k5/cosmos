// src/components/CosmicTimeline.jsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const timelineEvents = [
    { time: "13.8 Tỷ năm trước", title: "Vụ Nổ Lớn", desc: "Khởi nguyên của không gian, thời gian và mọi vật chất.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000", color: "from-orange-500 to-red-600", link: "/tri-thuc/big-bang" },
    { time: "10⁻³² giây sau", title: "Lạm Phát Vũ Trụ", desc: "Vũ trụ giãn nở với tốc độ kinh hoàng trong tích tắc đầu tiên.", img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1000", color: "from-yellow-400 to-orange-500", link: "/tri-thuc/big-bang" },
    { time: "380.000 năm sau", title: "Tái Kết Hợp", desc: "Electron kết hợp với hạt nhân tạo thành nguyên tử đầu tiên.", img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000", color: "from-purple-500 to-pink-500", link: "/tri-thuc/big-bang" },
    { time: "200 Triệu năm sau", title: "Ngôi Sao Đầu Tiên", desc: "Ánh sáng đầu tiên chiếu rọi xuyên qua bóng tối vĩnh cửu.", img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000", color: "from-blue-500 to-cyan-400", link: "/tri-thuc/big-bang" },
    { time: "1 Tỷ năm sau", title: "Thiên Hà Đầu Tiên", desc: "Các thiên hà nguyên thủy hình thành từ bụi và khí hydro.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000", color: "from-indigo-500 to-purple-500", link: "/tri-thuc/big-bang" },
    { time: "9.2 Tỷ năm trước", title: "Hệ Mặt Trời", desc: "Mặt Trời và 8 hành tinh ra đời từ một tinh vân khổng lồ.", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000", color: "from-yellow-500 to-orange-500", link: "/tri-thuc/tuong-doi" },
    { time: "4.6 Tỷ năm trước", title: "Trái Đất Hình Thành", desc: "Ngôi nhà duy nhất được biết đến của sự sống trong vũ trụ.", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000", color: "from-blue-600 to-green-400", link: "/tri-thuc/tuong-doi" },
    { time: "300.000 năm trước", title: "Kỷ Nguyên Nhân Loại", desc: "Homo sapiens xuất hiện và bắt đầu hành trình chinh phục tri thức.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000", color: "from-[#00f0ff] to-blue-500", link: "/su-menh" },
    { time: "Tương lai", title: "Điểm Kết Thúc", desc: "Vũ trụ có thể chìm vào bóng tối vĩnh cửu, hoặc tái sinh.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1000", color: "from-slate-600 to-gray-900", link: "/tri-thuc/tuong-lai" },
];

function TimelineCard({ event, index, total }) {
    const [isHovered, setIsHovered] = useState(false);
    const centerIndex = (total - 1) / 2;
    const offset = index - centerIndex;
    const rotateY = offset * 6;
    const translateY = Math.abs(offset) * 20;
    const translateZ = -Math.abs(offset) * 60;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transformStyle: "preserve-3d",
                transform: isHovered
                    ? `rotateY(0deg) translateY(-40px) translateZ(120px) scale(1.05)`
                    : `rotateY(${rotateY}deg) translateY(${translateY}px) translateZ(${translateZ}px)`,
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="relative flex-shrink-0 w-[320px] md:w-[360px] group cursor-pointer"
        >
            <Link to={event.link}>
                <div className="relative rounded-3xl overflow-hidden h-[460px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] bg-black/40 backdrop-blur-sm">
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 group-hover:opacity-50 transition-opacity duration-700 z-10`} />
                    <img src={event.img} alt={event.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.15]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-[#0c1128]/60 to-transparent z-20" />

                    <div className="absolute top-6 left-6 z-30">
                        <div className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase bg-gradient-to-r ${event.color} text-white shadow-lg shadow-black/50`}>
                            {event.time}
                        </div>
                    </div>

                    <div className="absolute top-4 right-6 z-20 text-8xl font-black text-white/5 select-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter leading-none">{event.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm font-light">{event.desc}</p>
                        <div className="mt-6 flex items-center gap-2 text-[#00f0ff] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                            Khám phá <span className="text-lg">→</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00f0ff]/40 transition-colors duration-500 z-40 pointer-events-none" />
                </div>
            </Link>
        </motion.div>
    );
}

export default function CosmicTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-85%"]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="relative h-[500vh] bg-[#0c1128]/70"
            /* Quan trọng: clip-path trên section để các thẻ không tràn ra ngoài */
            style={{ clipPath: "inset(0)" }}
        >
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden [perspective:2500px]">
                <div className="text-center mb-12 px-6">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#00f0ff] mb-4">
                        Niên Biểu Vũ Trụ
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-4">
                        Lịch Sử <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-purple-400 to-orange-400">Vũ Trụ</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto font-light text-sm">
                        13.8 tỷ năm – từ hư vô đến hiện tại. Cuộn để du hành xuyên thời gian.
                    </p>
                </div>

                <div className="relative flex items-center">
                    <motion.div
                        style={{ x }}
                        className="flex gap-12 pl-[30vw] [transform-style:preserve-3d]"
                    >
                        {timelineEvents.map((event, i) => (
                            <TimelineCard key={i} event={event} index={i} total={timelineEvents.length} />
                        ))}
                    </motion.div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[280px] md:w-[400px]">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <span>Khởi Nguyên</span>
                        <span>Hiện Tại</span>
                        <span>Tương Lai</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            style={{ width: progressWidth }}
                            className="h-full bg-gradient-to-r from-[#00f0ff] via-purple-500 to-orange-400 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}