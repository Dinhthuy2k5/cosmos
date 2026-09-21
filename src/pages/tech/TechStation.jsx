import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, ArrowLeft, ArrowRight, Shield } from 'lucide-react';

export default function TechStation() {
    return (
        <main className="min-h-screen bg-[#0c1128] pt-48 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] mb-8 hover:underline">
                    <ArrowLeft size={16} /> Quay lại trang chủ
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-2xl text-[#00f0ff] border border-white/10">
                        <Layout size={36} />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Công nghệ đột phá[cite: 5]</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Trạm Không Gian & Môi Trường Sinh Thái</h1>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-video my-12 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200" alt="Station" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
                    <p>
                        Trạm không gian là các tiền đồn quỹ đạo khép kín, nơi con người sinh sống, làm việc và tiến hành các thí nghiệm khoa học đột phá trong điều kiện vi trọng lực và bức xạ vũ trụ khắc nghiệt.
                    </p>
                    <h3 className="text-2xl font-bold text-white">Hệ thống hỗ trợ sự sống khép kín (ECLSS)</h3>
                    <p>
                        Công nghệ này tái chế gần như 100% lượng nước từ mồ hôi và nước tiểu thành nước tinh khiết, đồng thời duy trì áp suất và nồng độ oxy nhân tạo, giúp con người tồn tại lâu dài ngoài quỹ đạo Trái Đất.
                    </p>

                    {/* Khung liên kết tri thức */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md my-12 space-y-4">
                        <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
                            <Shield size={20} /> Liên kết tri thức nền tảng
                        </div>
                        <p className="text-sm text-gray-400">
                            Các nghiên cứu về vật liệu nano và cấu trúc phân tử sinh học thực hiện tại trạm không gian chịu sự chi phối trực tiếp của các hiện tượng trong <strong className="text-white">Cơ học lượng tử</strong>.
                        </p>
                        <Link to="/tri-thuc/luong-tu" className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/25 px-6 py-2.5 rounded-full text-sm font-bold transition-all">
                            Tìm hiểu Cơ học lượng tử <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}