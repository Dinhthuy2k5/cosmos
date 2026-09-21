import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BookOpen } from 'lucide-react';

export default function SuMenh() {
    return (
        <main className="min-h-screen bg-[#0c1128] pt-48 pb-32 px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                    Sứ mệnh của chúng tôi
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-400 font-light">
                    Mở rộng ranh giới của nhân loại, tìm kiếm tri thức ở những nơi tối tăm nhất của vũ trụ.
                </motion.p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors">
                    <Rocket className="text-[#00f0ff] mb-6" size={40} />
                    <h3 className="text-2xl font-bold mb-4 text-white">Khám phá Đa Hành Tinh</h3>
                    <p className="text-gray-400 leading-relaxed font-light">Đưa con người vượt ra khỏi quỹ đạo Trái Đất, thiết lập các căn cứ vĩnh viễn trên Mặt Trăng và Sao Hỏa trong thập kỷ tới. Biến nhân loại thành một giống loài đa hành tinh.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors">
                    <BookOpen className="text-purple-400 mb-6" size={40} />
                    <h3 className="text-2xl font-bold mb-4 text-white">Lan tỏa Tri thức</h3>
                    <p className="text-gray-400 leading-relaxed font-light">Công bố mọi dữ liệu nghiên cứu, hình ảnh thiên văn và báo cáo khoa học để giáo dục thế hệ trẻ và cộng đồng đam mê vũ trụ. Tri thức là tài sản chung của toàn nhân loại.</p>
                </motion.div>
            </div>
        </main>
    );
}