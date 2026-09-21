// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Background3D from './components/Background3D'; // Import file mới

// ... (các import pages giữ nguyên)
import Home from './pages/Home';
import SuMenh from './pages/SuMenh';
import LienHe from './pages/LienHe';
import BigBang from './pages/BigBang';
import Relativity from './pages/Relativity';
import Quantum from './pages/Quantum';
import BlackHole from './pages/BlackHole';
import DarkMatter from './pages/DarkMatter';
import TechEngine from './pages/tech/TechEngine';
import TechTelescope from './pages/tech/TechTelescope';
import TechStation from './pages/tech/TechStation';
import TechPlanet from './pages/tech/TechPlanet';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Thay đổi: Thêm relative và z-10 cho nội dung để đè lên 3D */}
      <div className="bg-[#0c1128] min-h-screen text-white font-['Outfit'] selection:bg-blue-500/30 relative">
        <Background3D />

        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/su-menh" element={<SuMenh />} />
            <Route path="/lien-he" element={<LienHe />} />
            <Route path="/tri-thuc/big-bang" element={<BigBang />} />
            <Route path="/tri-thuc/tuong-doi" element={<Relativity />} />
            <Route path="/tri-thuc/luong-tu" element={<Quantum />} />
            <Route path="/tri-thuc/lo-den" element={<BlackHole />} />
            <Route path="/tri-thuc/vat-chat-toi" element={<DarkMatter />} />
            <Route path="/cong-nghe/dong-co" element={<TechEngine />} />
            <Route path="/cong-nghe/vien-vong" element={<TechTelescope />} />
            <Route path="/cong-nghe/tram-khong-gian" element={<TechStation />} />
            <Route path="/cong-nghe/khai-pha" element={<TechPlanet />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}