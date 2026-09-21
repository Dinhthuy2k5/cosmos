// src/pages/LienHe.jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Radio } from 'lucide-react';

const TiltWrapper = ({ children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct); y.set(yPct);
    };

    return (
        <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="w-full">
            {children}
        </motion.div>
    );
};

export default function LienHe() {
    return (
        <main className="min-h-screen bg-transparent pt-48 pb-32 px-6 [perspective:1500px]">
            <div className="max-w-2xl mx-auto text-center mb-16 [transform:translateZ(50px)]">
                <Radio className="mx-auto text-[#00f0ff] mb-6 animate-pulse" size={48} />
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                    Thiết lập liên lạc
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-400 font-light">
                    Gửi tín hiệu vô tuyến đến đài chỉ huy của chúng tôi.
                </motion.p>
            </div>

            <div className="max-w-2xl mx-auto">
                <TiltWrapper>
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <form className="space-y-6" style={{ transform: "translateZ(30px)" }}>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Tên định danh</label>
                                <input type="text" placeholder="Họ tên của bạn" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Kênh liên lạc</label>
                                <input type="email" placeholder="Email của bạn" className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Nội dung truyền tải</label>
                                <textarea placeholder="Nhập tin nhắn..." rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"></textarea>
                            </div>
                            <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-[#00f0ff] hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                                <Mail size={20} /> Phát Tín Hiệu
                            </button>
                        </form>
                    </motion.div>
                </TiltWrapper>
            </div>
        </main>
    );
}