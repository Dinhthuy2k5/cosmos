// src/pages/NotFound.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[130px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative text-center z-10 max-w-xl"
            >
                <div className="text-[180px] md:text-[280px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#00f0ff] via-purple-400 to-transparent">
                    404
                </div>
                <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.4em] text-[#00f0ff] mb-6">
                    <Sparkles size={12} /> Lạc vào hư vô
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                    Trang này đã tan biến vào vũ trụ
                </h1>
                <p className="text-gray-400 font-light mb-10 leading-relaxed">
                    Có vẻ như bạn đã du hành đến một vùng không-thời gian chưa được lập bản đồ.
                    Hãy quay về trạm không gian.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-all"
                >
                    <Home size={16} /> Về Trang chủ
                </Link>
            </motion.div>
        </main>
    );
}