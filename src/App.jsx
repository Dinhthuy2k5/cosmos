// src/App.jsx
import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Background3D from './components/Background3D';

// Trang chính
import Home from './pages/Home';
import SuMenh from './pages/SuMenh';
import LienHe from './pages/LienHe';

// VŨ TRỤ HỌC
import BigBang from './pages/vu-tru-hoc/BigBang';
import LamPhat from './pages/vu-tru-hoc/LamPhat';
import BucXaNen from './pages/vu-tru-hoc/BucXaNen';
import VatChatToi from './pages/vu-tru-hoc/VatChatToi';
import NangLuongToi from './pages/vu-tru-hoc/NangLuongToi';
import TuongLaiVuTru from './pages/vu-tru-hoc/TuongLaiVuTru';

// VẬT LÝ
import TuongDoi from './pages/vat-ly/TuongDoi';
import LuongTu from './pages/vat-ly/LuongTu';
import MoHinhChuan from './pages/vat-ly/MoHinhChuan';
import LucCoBan from './pages/vat-ly/LucCoBan';
import SongHapDan from './pages/vat-ly/SongHapDan';

// THIÊN VĂN
import NgoiSao from './pages/thien-van/NgoiSao';
import ThienHa from './pages/thien-van/ThienHa';
import LoDen from './pages/thien-van/LoDen';
import TinhVan from './pages/thien-van/TinhVan';
import NgoaiHanhTinh from './pages/thien-van/NgoaiHanhTinh';
import SieuTanTinh from './pages/thien-van/SieuTanTinh';

// KHÔNG-THỜI GIAN
import ThoiGian from './pages/khong-thoi-gian/ThoiGian';
import KhongGian from './pages/khong-thoi-gian/KhongGian';
import LoSau from './pages/khong-thoi-gian/LoSau';
import DuHanhThoiGian from './pages/khong-thoi-gian/DuHanhThoiGian';

// VẬT CHẤT
import NguyenTu from './pages/vat-chat/NguyenTu';
import HatCoBan from './pages/vat-chat/HatCoBan';
import TrangThai from './pages/vat-chat/TrangThai';
import SuSong from './pages/vat-chat/SuSong';
import Fermi from './pages/vat-chat/Fermi';

// Công nghệ (giữ nguyên)
import TechEngine from './pages/tech/TechEngine';
import TechTelescope from './pages/tech/TechTelescope';
import TechStation from './pages/tech/TechStation';
import TechPlanet from './pages/tech/TechPlanet';

// 404
import NotFound from './pages/NotFound';

// ===== SCROLL TO TOP — chạy SYNC trước paint =====
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Tắt scroll restoration của browser
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Reset scroll NGAY LẬP TỨC (không animate)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// ===== WRAPPER để force remount Routes khi pathname đổi =====
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/su-menh" element={<SuMenh />} />
      <Route path="/lien-he" element={<LienHe />} />

      {/* VŨ TRỤ HỌC */}
      <Route path="/vu-tru-hoc/big-bang" element={<BigBang />} />
      <Route path="/vu-tru-hoc/lam-phat" element={<LamPhat />} />
      <Route path="/vu-tru-hoc/buc-xa-nen" element={<BucXaNen />} />
      <Route path="/vu-tru-hoc/vat-chat-toi" element={<VatChatToi />} />
      <Route path="/vu-tru-hoc/nang-luong-toi" element={<NangLuongToi />} />
      <Route path="/vu-tru-hoc/tuong-lai" element={<TuongLaiVuTru />} />

      {/* VẬT LÝ */}
      <Route path="/vat-ly/tuong-doi" element={<TuongDoi />} />
      <Route path="/vat-ly/luong-tu" element={<LuongTu />} />
      <Route path="/vat-ly/mo-hinh-chuan" element={<MoHinhChuan />} />
      <Route path="/vat-ly/luc-co-ban" element={<LucCoBan />} />
      <Route path="/vat-ly/song-hap-dan" element={<SongHapDan />} />

      {/* THIÊN VĂN */}
      <Route path="/thien-van/ngoi-sao" element={<NgoiSao />} />
      <Route path="/thien-van/thien-ha" element={<ThienHa />} />
      <Route path="/thien-van/lo-den" element={<LoDen />} />
      <Route path="/thien-van/tinh-van" element={<TinhVan />} />
      <Route path="/thien-van/ngoai-hanh-tinh" element={<NgoaiHanhTinh />} />
      <Route path="/thien-van/sieu-tan-tinh" element={<SieuTanTinh />} />

      {/* KHÔNG-THỜI GIAN */}
      <Route path="/khong-thoi-gian/thoi-gian" element={<ThoiGian />} />
      <Route path="/khong-thoi-gian/khong-gian" element={<KhongGian />} />
      <Route path="/khong-thoi-gian/lo-sau" element={<LoSau />} />
      <Route path="/khong-thoi-gian/du-hanh" element={<DuHanhThoiGian />} />

      {/* VẬT CHẤT */}
      <Route path="/vat-chat/nguyen-tu" element={<NguyenTu />} />
      <Route path="/vat-chat/hat-co-ban" element={<HatCoBan />} />
      <Route path="/vat-chat/trang-thai" element={<TrangThai />} />
      <Route path="/vat-chat/su-song" element={<SuSong />} />
      <Route path="/vat-chat/fermi" element={<Fermi />} />

      {/* Công nghệ */}
      <Route path="/cong-nghe/dong-co" element={<TechEngine />} />
      <Route path="/cong-nghe/vien-vong" element={<TechTelescope />} />
      <Route path="/cong-nghe/tram-khong-gian" element={<TechStation />} />
      <Route path="/cong-nghe/khai-pha" element={<TechPlanet />} />

      {/* Redirect từ route cũ */}
      <Route path="/tri-thuc/big-bang" element={<BigBang />} />
      <Route path="/tri-thuc/tuong-doi" element={<TuongDoi />} />
      <Route path="/tri-thuc/luong-tu" element={<LuongTu />} />
      <Route path="/tri-thuc/lo-den" element={<LoDen />} />
      <Route path="/tri-thuc/vat-chat-toi" element={<VatChatToi />} />
      <Route path="/tri-thuc/tuong-lai" element={<TuongLaiVuTru />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#0c1128] min-h-screen text-white font-['Outfit'] selection:bg-[#00f0ff]/30 relative">
        <Background3D />
        <div className="relative z-10">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}