// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronDown, Rocket,
    Sparkles, Atom, Telescope, Clock3, Dna
} from 'lucide-react';

// === CẤU TRÚC MENU ===
const CATEGORIES = [
    {
        name: "Vũ trụ học",
        icon: Sparkles,
        color: "#f59e0b",
        links: [
            { name: "Vụ Nổ Lớn", path: "/vu-tru-hoc/big-bang" },
            { name: "Lạm Phát", path: "/vu-tru-hoc/lam-phat" },
            { name: "Bức Xạ Nền", path: "/vu-tru-hoc/buc-xa-nen" },
            { name: "Vật Chất Tối", path: "/vu-tru-hoc/vat-chat-toi" },
            { name: "Năng Lượng Tối", path: "/vu-tru-hoc/nang-luong-toi" },
            { name: "Số Phận Vũ Trụ", path: "/vu-tru-hoc/tuong-lai" },
        ],
    },
    {
        name: "Vật lý",
        icon: Atom,
        color: "#06b6d4",
        links: [
            { name: "Thuyết Tương Đối", path: "/vat-ly/tuong-doi" },
            { name: "Cơ Học Lượng Tử", path: "/vat-ly/luong-tu" },
            { name: "Mô Hình Chuẩn", path: "/vat-ly/mo-hinh-chuan" },
            { name: "4 Lực Cơ Bản", path: "/vat-ly/luc-co-ban" },
            { name: "Sóng Hấp Dẫn", path: "/vat-ly/song-hap-dan" },
        ],
    },
    {
        name: "Thiên văn",
        icon: Telescope,
        color: "#a78bfa",
        links: [
            { name: "Ngôi Sao", path: "/thien-van/ngoi-sao" },
            { name: "Thiên Hà", path: "/thien-van/thien-ha" },
            { name: "Lỗ Đen", path: "/thien-van/lo-den" },
            { name: "Tinh Vân", path: "/thien-van/tinh-van" },
            { name: "Ngoại Hành Tinh", path: "/thien-van/ngoai-hanh-tinh" },
            { name: "Siêu Tân Tinh", path: "/thien-van/sieu-tan-tinh" },
        ],
    },
    {
        name: "Không-thời gian",
        icon: Clock3,
        color: "#ec4899",
        links: [
            { name: "Thời Gian", path: "/khong-thoi-gian/thoi-gian" },
            { name: "Không Gian", path: "/khong-thoi-gian/khong-gian" },
            { name: "Lỗ Sâu", path: "/khong-thoi-gian/lo-sau" },
            { name: "Du Hành Thời Gian", path: "/khong-thoi-gian/du-hanh" },
        ],
    },
    {
        name: "Vật chất",
        icon: Dna,
        color: "#10b981",
        links: [
            { name: "Nguyên Tử", path: "/vat-chat/nguyen-tu" },
            { name: "Hạt Cơ Bản", path: "/vat-chat/hat-co-ban" },
            { name: "Trạng Thái Vật Chất", path: "/vat-chat/trang-thai" },
            { name: "Nguồn Gốc Sự Sống", path: "/vat-chat/su-song" },
            { name: "Nghịch Lý Fermi", path: "/vat-chat/fermi" },
        ],
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Đóng menu khi đổi route
    useEffect(() => {
        setActiveMenu(null);
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseLeave={() => setActiveMenu(null)}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-[background-color,backdrop-filter,box-shadow] duration-500 rounded-[28px] border ${scrolled
                    ? "bg-white/10 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-white/10"
                    : "bg-white/5 backdrop-blur-md border-white/10"
                }`}
        >
            <div className="flex items-center justify-between px-6 py-3.5">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-purple-500 flex items-center justify-center">
                        <Rocket size={16} className="text-white" />
                    </div>
                    <span className="text-lg font-black tracking-tighter text-white">
                        ASTRAL.
                    </span>
                </Link>

                <div className="hidden lg:flex items-center gap-1">
                    <Link
                        to="/"
                        className={`px-4 py-2 text-sm font-medium rounded-full hover:bg-white/5 transition-colors ${location.pathname === "/" ? "text-white" : "text-gray-400"
                            }`}
                    >
                        Trang chủ
                    </Link>

                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={cat.name}
                                onMouseEnter={() => setActiveMenu(cat.name)}
                                className="relative"
                            >
                                <button
                                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full hover:bg-white/5 transition-colors ${activeMenu === cat.name
                                        ? "text-white bg-white/5"
                                        : "text-gray-400"
                                        }`}
                                >
                                    <Icon size={14} style={{ color: cat.color }} />
                                    {cat.name}
                                    <ChevronDown
                                        size={12}
                                        className={`transition-transform duration-300 ${activeMenu === cat.name ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                            </div>
                        );
                    })}

                    <Link
                        to="/su-menh"
                        className={`px-4 py-2 text-sm font-medium rounded-full hover:bg-white/5 transition-colors ${location.pathname === "/su-menh" ? "text-white" : "text-gray-400"
                            }`}
                    >
                        Sứ mệnh
                    </Link>
                </div>

                <Link
                    to="/lien-he"
                    className="hidden lg:block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                    Khởi Hành
                </Link>

                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* === MEGA MENU DROPDOWN === */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden lg:block overflow-hidden border-t border-white/10"
                    >
                        {CATEGORIES.filter((c) => c.name === activeMenu).map((cat) => (
                            <div key={cat.name} className="p-6">
                                <div className="grid grid-cols-3 gap-3">
                                    {cat.links.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className="group px-4 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
                                        >
                                            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                                {link.name}
                                            </span>
                                            <span
                                                className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{ background: cat.color }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === MOBILE MENU === */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-1 max-h-[70vh] overflow-y-auto">
                            <Link to="/" className="py-3 text-white font-medium">
                                Trang chủ
                            </Link>
                            {CATEGORIES.map((cat) => (
                                <details key={cat.name} className="group">
                                    <summary className="py-3 text-gray-300 font-medium cursor-pointer flex items-center gap-2">
                                        <cat.icon size={14} style={{ color: cat.color }} />
                                        {cat.name}
                                    </summary>
                                    <div className="pl-6 pb-2 space-y-1">
                                        {cat.links.map((link) => (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className="block py-2 text-sm text-gray-400 hover:text-white"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ))}
                            <Link to="/su-menh" className="py-3 text-gray-300">
                                Sứ mệnh
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export const Footer = () => (
    <footer className="bg-[#0c1128]/80 backdrop-blur-md pt-24 pb-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-purple-500 flex items-center justify-center">
                            <Rocket size={16} className="text-white" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">
                            ASTRAL.
                        </span>
                    </div>
                    <p className="text-gray-400 max-w-xs font-light text-sm leading-relaxed">
                        Bách khoa toàn thư về vũ trụ, thời gian và vật chất. Khám phá những bí
                        ẩn vĩ đại nhất của vũ trụ.
                    </p>
                </div>

                {CATEGORIES.slice(0, 3).map((cat) => (
                    <div key={cat.name}>
                        <h4 className="text-white font-bold mb-4 tracking-wide text-sm flex items-center gap-2">
                            <cat.icon size={14} style={{ color: cat.color }} />
                            {cat.name}
                        </h4>
                        <ul className="space-y-2 text-gray-500 font-light text-xs">
                            {cat.links.slice(0, 4).map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8 gap-4">
                <p>© {new Date().getFullYear()} ASTRAL. Bách khoa toàn thư vũ trụ.</p>
                <p>Made with ❤️ among the stars</p>
            </div>
        </div>
    </footer>
);