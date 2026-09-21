import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe2, ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export default function TechPlanet() {
    return (
        <main className="min-h-screen bg-[#0c1128] pt-48 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#00f0ff] mb-8 hover:underline">
                    <ArrowLeft size={16} /> Quay lại trang chủ
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-2xl text-[#00f0ff] border border-white/10">
                        <Globe2 size={36} />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Công nghệ đột phá[cite: 5]</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Khai Phá Hành Tinh & Ngoại Hành Tinh</h1>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-video my-12 border border-white/10">
                    <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200" alt="Planet" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
                    <p>
                        Công nghệ thám hiểm bề mặt sử dụng các robot tự hành (Rovers) trang bị quang phổ kế laser và ra đa xuyên lòng đất để tìm kiếm các dấu hiệu sinh học cổ đại, phân tích thành phần địa chất trên các hành tinh đá xa xôi.
                    </p>
                    <h3 className="text-2xl font-bold text-white">Phương pháp quá cảnh tìm ngoại hành tinh</h3>
                    <p>
                        Bằng cách theo dõi độ sáng của các ngôi sao mẹ, các hệ thống phân tích tự động có thể phát hiện sự sụt giảm ánh sáng nhỏ khi một hành tinh di chuyển qua trước mặt chúng, từ đó tính toán khối lượng và quỹ đạo.
                    </p>

                    {/* Khung liên kết tri thức */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md my-12 space-y-4">
                        <div className="flex items-center gap-2 text-[#00f0ff] font-bold">
                            <Compass size={20} /> Liên kết tri thức nền tảng
                        </div>
                        <p className="text-sm text-gray-400">
                            Chuyển động quỹ đạo và lực hấp dẫn giữ các hành tinh quay quanh ngôi sao được giải thích hoàn hảo bởi <strong className="text-white">Thuyết Tương Đối</strong>.
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