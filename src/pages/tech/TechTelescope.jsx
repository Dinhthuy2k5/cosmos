import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, ArrowLeft, ArrowRight, Eye } from 'lucide-react';

export default function TechTelescope() {
    return (
        <main className="min-h-screen bg-[#0c1128] pt-48 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] mb-8 hover:underline">
                    <ArrowLeft size={16} /> Quay lại trang chủ
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-2xl text-[#00f0ff] border border-white/10">
                        <Target size={36} />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Công nghệ đột phá[cite: 5]</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Viễn Vọng Vũ Trụ & Gương Quang Học</h1>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-video my-12 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200" alt="Telescope" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
                    <p>
                        Các kính viễn vọng không gian thế hệ mới hoạt động như những cỗ máy thời gian thực thụ. Bằng cách thu nhận ánh sáng hồng ngoại từ những thiên hà cách xa hàng tỷ năm ánh sáng, chúng cho phép chúng ta nhìn xuyên qua không gian để quan sát hình ảnh của vũ trụ từ thuở sơ khai.
                    </p>
                    <h3 className="text-2xl font-bold text-white">Công nghệ gương mạ vàng beryllium</h3>
                    <p>
                        Để chụp được những tia sáng yếu ớt từ rìa vũ trụ, hệ thống quang học phải được giữ ở nhiệt độ cực lạnh (-266°C) và sử dụng các gương phản xạ mạ vàng siêu nhẹ, có thể gấp gọn trong khoang tên lửa trước khi mở rộng chính xác ngoài quỹ đạo.
                    </p>

                    {/* Khung liên kết tri thức */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md my-12 space-y-4">
                        <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
                            <Eye size={20} /> Liên kết tri thức nền tảng
                        </div>
                        <p className="text-sm text-gray-400">
                            Viễn vọng vũ trụ cung cấp bằng chứng thực nghiệm quan trọng nhất để chứng minh sự kiện <strong className="text-white">Khởi thủy Vũ trụ (Big Bang)</strong> và sự giãn nở dưới tác động của Năng lượng tối.
                        </p>
                        <Link to="/tri-thuc/big-bang" className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/25 px-6 py-2.5 rounded-full text-sm font-bold transition-all">
                            Khám phá về Khởi thủy Vũ trụ <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}