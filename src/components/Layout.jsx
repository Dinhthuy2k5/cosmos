// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topics = [
        { name: 'Khởi thủy Vũ trụ', path: '/tri-thuc/big-bang' },
        { name: 'Thuyết Tương Đối', path: '/tri-thuc/tuong-doi' },
        { name: 'Cơ Học Lượng Tử', path: '/tri-thuc/luong-tu' },
        { name: 'Lỗ Đen & Kỳ Dị', path: '/tri-thuc/lo-den' },
        { name: 'Vật Chất Tối', path: '/tri-thuc/vat-chat-toi' },
        { name: 'Điểm Kết Thúc', path: '/tri-thuc/tuong-lai' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, rotateX: -20 }} animate={{ y: 0, rotateX: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 [perspective:1000px] ${scrolled ? 'bg-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10' : 'bg-white/5 backdrop-blur-md border-white/10'
                } border ${isOpen ? 'rounded-3xl' : 'rounded-full'}`}
        >
            <div className="flex items-center justify-between px-6 py-4 [transform-style:preserve-3d]">
                <Link to="/" className="text-xl font-black tracking-tighter text-white [transform:translateZ(30px)]">ASTRAL.</Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium [transform-style:preserve-3d]">
                    <Link to="/" className={`hover:text-white transition-colors [transform:translateZ(20px)] ${location.pathname === '/' ? 'text-white' : 'text-gray-400'}`}>Trang chủ</Link>
                    <Link to="/su-menh" className={`hover:text-white transition-colors [transform:translateZ(20px)] ${location.pathname === '/su-menh' ? 'text-white' : 'text-gray-400'}`}>Sứ mệnh</Link>

                    <div className="relative [transform-style:preserve-3d]" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors py-2 [transform:translateZ(20px)]">
                            Tri thức <ChevronDown size={16} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {showDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -90, y: -20 }}
                                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                                    exit={{ opacity: 0, rotateX: -90, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ transformOrigin: "top center" }}
                                    className="absolute top-full left-0 mt-2 w-56 bg-[#0c1128]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                                >
                                    {topics.map(t => (
                                        <Link key={t.path} to={t.path} className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all hover:translate-x-2">{t.name}</Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/lien-he" className={`hover:text-white transition-colors [transform:translateZ(20px)] ${location.pathname === '/lien-he' ? 'text-white' : 'text-gray-400'}`}>Liên hệ</Link>
                </div>

                <Link to="/lien-he" className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] [transform:translateZ(40px)]">Khởi Hành</Link>
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>

            {/* Mobile Menu (Giữ nguyên) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-white/10 overflow-hidden">
                        <div className="flex flex-col px-6 py-6 gap-6">
                            <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Trang chủ</Link>
                            <Link to="/su-menh" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Sứ mệnh</Link>
                            <Link to="/lien-he" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">Liên hệ</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export const Footer = () => (
    <footer className="bg-[#0c1128]/80 backdrop-blur-md pt-32 pb-12 border-t border-white/5 relative z-10">
        {/* ... (Giữ nguyên nội dung Footer) ... */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <div className="text-2xl font-black tracking-tighter text-white mb-4">ASTRAL.</div>
                <p className="text-gray-400 max-w-xs font-light">Khởi nguồn của những chuyến đi không có điểm kết thúc. Định hình tương lai nhân loại ngoài vũ trụ.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 tracking-wide">Điều hướng</h4>
                <ul className="space-y-4 text-gray-400 font-light">
                    <li><Link to="/su-menh" className="hover:text-white transition-colors">Sứ mệnh</Link></li>
                    <li><Link to="/lien-he" className="hover:text-white transition-colors">Liên hệ</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 border-t border-white/5 pt-8 gap-4">
            <p>© {new Date().getFullYear()} ASTRAL Space Program. All rights reserved.</p>
        </div>
    </footer>
);