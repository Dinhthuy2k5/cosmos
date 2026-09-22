// src/components/CosmicTimeline.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const timelineEvents = [
    { time: "13.8 Tỷ năm trước", title: "Vụ Nổ Lớn", desc: "Khởi nguyên của không gian, thời gian và mọi vật chất.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000", color: "from-orange-500 to-red-600", link: "/vu-tru-hoc/big-bang" },
    { time: "10⁻³² giây sau", title: "Lạm Phát Vũ Trụ", desc: "Vũ trụ giãn nở với tốc độ kinh hoàng trong tích tắc đầu tiên.", img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1000", color: "from-yellow-400 to-orange-500", link: "/vu-tru-hoc/lam-phat" },
    { time: "380.000 năm sau", title: "Tái Kết Hợp", desc: "Electron kết hợp với hạt nhân tạo thành nguyên tử đầu tiên.", img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000", color: "from-purple-500 to-pink-500", link: "/vu-tru-hoc/buc-xa-nen" },
    { time: "200 Triệu năm sau", title: "Ngôi Sao Đầu Tiên", desc: "Ánh sáng đầu tiên chiếu rọi xuyên qua bóng tối vĩnh cửu.", img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000", color: "from-blue-500 to-cyan-400", link: "/thien-van/ngoi-sao" },
    { time: "1 Tỷ năm sau", title: "Thiên Hà Đầu Tiên", desc: "Các thiên hà nguyên thủy hình thành từ bụi và khí hydro.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000", color: "from-indigo-500 to-purple-500", link: "/thien-van/thien-ha" },
    { time: "9.2 Tỷ năm trước", title: "Hệ Mặt Trời", desc: "Mặt Trời và 8 hành tinh ra đời từ một tinh vân khổng lồ.", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000", color: "from-yellow-500 to-orange-500", link: "/vu-tru-hoc/tuong-lai" },
    { time: "4.6 Tỷ năm trước", title: "Trái Đất Hình Thành", desc: "Ngôi nhà duy nhất được biết đến của sự sống trong vũ trụ.", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000", color: "from-blue-600 to-green-400", link: "/vat-chat/su-song" },
    { time: "300.000 năm trước", title: "Kỷ Nguyên Nhân Loại", desc: "Homo sapiens xuất hiện và bắt đầu hành trình chinh phục tri thức.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000", color: "from-[#00f0ff] to-blue-500", link: "/su-menh" },
    { time: "Tương lai", title: "Điểm Kết Thúc", desc: "Vũ trụ có thể chìm vào bóng tối vĩnh cửu, hoặc tái sinh.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f654e0?q=80&w=1000", color: "from-slate-600 to-gray-900", link: "/vu-tru-hoc/tuong-lai" },
];

const TOTAL_CARDS = timelineEvents.length;

// ===== Tinh chỉnh =====
const ANGLE_STEP = 24;      // Độ giữa các thẻ (thấp hơn trước → gần nhau hơn)
const X_PER_DEGREE = 22;    // Pixel ngang mỗi độ
const Z_PER_DEGREE = 2.5;   // Độ sâu
const CARD_WIDTH = 340;
const CARD_HEIGHT = 440;
const STAGE_TOP = "62%";    // ← Tâm stage ở 62% màn hình (thấp hơn heading)

// ===== THẺ ĐÍNH TRÊN TƯỜNG 3D =====
function TimelineCard3D({ event, index, scrollYProgress }) {
    const startIdx = TOTAL_CARDS + 2;
    const endIdx = -3;

    const angle = useTransform(
        scrollYProgress,
        [0, 1],
        [(index - startIdx) * ANGLE_STEP, (index - endIdx) * ANGLE_STEP]
    );

    const x = useTransform(angle, a => a * X_PER_DEGREE);
    const z = useTransform(angle, a => -Math.abs(a) * Z_PER_DEGREE);

    const rotateY = useTransform(angle, a => {
        const r = -a;
        return Math.max(-90, Math.min(90, r));
    });

    // Fade khi thẻ ra khỏi vùng nhìn
    const opacity = useTransform(angle, [-85, -65, 65, 85], [0, 1, 1, 0]);

    const scale = useTransform(angle, a => {
        const abs = Math.abs(a);
        return Math.max(0.62, 1 - abs * 0.0035);
    });

    return (
        <motion.div
            style={{
                position: "absolute",
                top: STAGE_TOP,
                left: "50%",
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginLeft: -CARD_WIDTH / 2,
                marginTop: -CARD_HEIGHT / 2,
                x,
                z,
                rotateY,
                opacity,
                scale,
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
            }}
        >
            <Link to={event.link} className="block h-full">
                <div className="relative rounded-3xl overflow-hidden h-full border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] bg-black/40 backdrop-blur-sm group cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 group-hover:opacity-50 transition-opacity duration-700 z-10`} />

                    <img
                        src={event.img}
                        alt={event.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-[#0c1128]/60 to-transparent z-20" />

                    <div className="absolute top-6 left-6 z-30">
                        <div className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase bg-gradient-to-r ${event.color} text-white shadow-lg shadow-black/50`}>
                            {event.time}
                        </div>
                    </div>

                    <div className="absolute top-4 right-6 z-20 text-7xl font-black text-white/5 select-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7 z-30">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter leading-none">
                            {event.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm font-light">
                            {event.desc}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[#00f0ff] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                            Khám phá <span className="text-lg">→</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#00f0ff]/40 transition-colors duration-500 z-40 pointer-events-none" />
                </div>
            </Link>
        </motion.div>
    );
}

// ===== MAIN COMPONENT =====
export default function CosmicTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-[#0c1128]/70">
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* ===== HEADING — Top, z-50, tách khỏi stage ===== */}
                <div className="absolute top-0 left-0 right-0 pt-20 md:pt-24 text-center px-6 z-50 pointer-events-none">
                    <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#00f0ff] mb-3">
                        Niên Biểu Vũ Trụ
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none mb-3">
                        Lịch Sử{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-purple-400 to-orange-400">
                            Vũ Trụ
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto font-light text-xs md:text-sm">
                        13.8 tỷ năm – từ hư vô đến hiện tại.
                    </p>
                </div>

                {/* ===== STAGE 3D — z-0, perspective-origin ở 62% (thấp hơn heading) ===== */}
                <div className="absolute inset-0 z-0 [perspective:1400px] [perspective-origin:50%_62%] [transform-style:preserve-3d]">
                    {timelineEvents.map((event, i) => (
                        <TimelineCard3D
                            key={i}
                            event={event}
                            index={i}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>

                {/* ===== PROGRESS BAR — bottom, z-50 ===== */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[280px] md:w-[400px] z-50">
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