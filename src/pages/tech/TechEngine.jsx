import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, ArrowLeft, ArrowRight, Zap } from 'lucide-react';

export default function TechEngine() {
    return (
        <main className="min-h-screen bg-[#0c1128] pt-48 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] mb-8 hover:underline">
                    <ArrowLeft size={16} /> Quay lại trang chủ
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-2xl text-[#00f0ff] border border-white/10">
                        <Rocket size={36} />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Công nghệ đột phá #02</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Công Nghệ Động Cơ & Hệ Thống Đẩy</h1>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-video my-12 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200" alt="Engine" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
                    <p>
                        Để vượt qua các khoảng cách khổng lồ giữa các vì sao, tên lửa hóa học truyền thống là không đủ. Động cơ thế hệ mới tận dụng lực đẩy ion, phản ứng nhiệt hạch thu nhỏ và năng lượng từ trường tương đối tính.
                    </p>
                    <h3 className="text-2xl font-bold text-white">Nguyên lý hoạt động cốt lõi</h3>
                    <p>
                        Hệ thống đẩy ion phóng các hạt tích điện (xenon) bằng điện trường cực mạnh với tốc độ lên tới 40 km/s. Dù lực đẩy ban đầu rất nhỏ, nhưng trong chân không vũ trụ không có ma sát, con tàu sẽ tích lũy vận tốc cực lớn theo thời gian.
                    </p>

                    {/* KHUNG LIÊN KẾT TRI THỨC */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md my-12 space-y-4">
                        <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
                            <Zap size={20} /> Liên kết tri thức nền tảng
                        </div>
                        <p className="text-sm text-gray-400">
                            Công nghệ động cơ tốc độ cao chịu ảnh hưởng trực tiếp bởi hệ quả của <strong className="text-white">Thuyết Tương Đối</strong>. Khi tàu đạt vận tốc gần ánh sáng, thời gian trên tàu sẽ chậm lại so với Trái Đất.
                        </p>
                        <Link to="/tri-thuc/tuong-doi" className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/25 px-6 py-2.5 rounded-full text-sm font-bold transition-all">
                            Khám phá Thuyết Tương Đối <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}