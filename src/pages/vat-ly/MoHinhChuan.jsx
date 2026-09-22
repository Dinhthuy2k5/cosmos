import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function MoHinhChuan() {
    const sections = [
        {
            title: "Bản Đồ Của Mọi Hạt",
            content: "Mô hình chuẩn (Standard Model) là lý thuyết thành công nhất trong vật lý hiện đại — mô tả mọi hạt cơ bản và ba trong bốn lực cơ bản (trừ hấp dẫn).\n\nĐược xây dựng qua nhiều thập kỷ từ thập niên 1960-1970, mô hình chuẩn dự đoán chính xác đến 10 chữ số thập phân cho nhiều đại lượng — chính xác nhất trong mọi lý thuyết khoa học.",
            img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 12, label: "Hạt fermion (vật chất)", color: "#06b6d4" },
                { value: 5, label: "Hạt boson (lực)", color: "#06b6d4" },
                { value: 1, label: "Hạt Higgs", color: "#06b6d4" },
            ],
        },
        {
            title: "12 Hạt Vật Chất — Fermion",
            content: "Fermion chia thành 2 nhóm, mỗi nhóm 6 hạt:\n\nQuark (6 loại): up, down, charm, strange, top, bottom. Quark không tồn tại độc lập — chúng luôn kết hợp thành hadron (proton, neutron).\n\nLepton (6 loại): electron, muon, tau + 3 neutrino tương ứng. Lepton tồn tại độc lập, không tham gia lực mạnh.\n\nMỗi hạt đều có phản hạt với điện tích ngược dấu.",
            bullets: [
                "Thế hệ 1: up, down, electron, e-neutrino (vật chất thường)",
                "Thế hệ 2: charm, strange, muon, μ-neutrino (nặng hơn)",
                "Thế hệ 3: top, bottom, tau, τ-neutrino (nặng nhất)",
                "Vật chất thường chỉ dùng thế hệ 1 — 2 thế hệ kia xuất hiện trong vũ trụ sơ khai",
            ],
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            title: "Boson — Những Hạt Truyền Lực",
            content: "Lực được truyền qua boson — hạt có spin nguyên. Có 4 boson gauge, mỗi loại truyền một lực:\n\n• Photon (γ) — lực điện từ, không khối lượng, tầm xa vô hạn.\n\n• Gluon (g) — lực mạnh, giữ quark trong proton.\n\n• W⁺, W⁻, Z⁰ — lực yếu, gây phân rã phóng xạ.\n\n• Graviton (chưa tìm thấy) — lý thuyết, truyền hấp dẫn.\n\nBoson thứ 5 là Higgs — trao khối lượng cho mọi hạt khác.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Hạt Higgs là viên gạch cuối cùng còn thiếu trong tòa nhà của vật lý hiện đại. Nhưng tòa nhà còn nhiều phòng trống chưa khám phá.",
            author: "Fabiola Gianotti",
            role: "Cựu phát ngôn viên ATLAS, CERN",
        },
        {
            title: "Vai Trò Của Higgs",
            content: "Năm 1964, Peter Higgs và 5 nhà vật lý khác đề xuất: vũ trụ tràn ngập một trường vô hướng — trường Higgs. Khi hạt đi qua trường này, chúng tương tác với nó và nhận khối lượng.\n\nHạt càng tương tác mạnh với trường Higgs, càng nặng. Photon không tương tác → không khối lượng. Quark top tương tác cực mạnh → nặng gấp 350.000 lần electron.\n\nNăm 2012, máy gia tốc LHC tại CERN xác nhận hạt Higgs với khối lượng 125 GeV — giải Nobel Vật lý 2013 cho Higgs và Englert.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Những Điều Mô Hình Chuẩn Không Giải Thích",
            content: "Dù thành công, mô hình chuẩn vẫn khiếm khuyết:\n\n• Không bao gồm hấp dẫn — cần thuyết hấp dẫn lượng tử.\n\n• Không giải thích vật chất tối (27% vũ trụ).\n\n• Không giải thích năng lượng tối (68% vũ trụ).\n\n• Không giải thích tại sao vũ trụ có nhiều vật chất hơn phản vật chất.\n\n• Không dự đoán được khối lượng neutrino.\n\n• Cần 19 tham số tự do phải đo từ thực nghiệm — thiếu tính tiên đoán.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Hạt Cơ Bản", desc: "Chi tiết từng hạt trong mô hình chuẩn.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-chat/hat-co-ban", color: "#10b981", badge: "Vật chất" },
        { title: "4 Lực Cơ Bản", desc: "Kiến trúc của mọi tương tác vũ trụ.", img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=600", link: "/vat-ly/luc-co-ban", color: "#06b6d4", badge: "Vật lý" },
        { title: "Cơ Học Lượng Tử", desc: "Nền tảng của mô hình chuẩn.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-ly/luong-tu", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Mô Hình Chuẩn"
            subtitle="Bản đồ hoàn chỉnh nhất của vật chất và lực"
            heroImg="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=2000"
            chapter="Vật lý · Chương 03"
            accentColor="#06b6d4"
            readingTime="9 phút"
            tags={["Standard Model", "Higgs", "Quark", "LHC"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}