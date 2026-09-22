import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function SieuTanTinh() {
    const sections = [
        {
            title: "Vụ Nổ Sáng Nhất Vũ Trụ",
            content: "Siêu tân tinh (supernova) là vụ nổ của sao khổng lồ khi kết thúc vòng đời — hoặc của sao lùn trắng vượt giới hạn khối lượng. Trong tích tắc, một siêu tân tinh có thể sáng hơn cả một thiên hà chứa hàng trăm tỷ ngôi sao.\n\nĐây là những sự kiện dữ dội nhất trong vũ trụ, giải phóng năng lượng tương đương 10²⁸ megaton TNT — bằng toàn bộ năng lượng Mặt Trời phát ra trong 10 tỷ năm.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 10, prefix: "10²⁸ ", suffix: " megaton", label: "Năng lượng giải phóng", color: "#a78bfa" },
                { value: 10, suffix: "% vận tốc sáng", label: "Vật chất phóng ra", color: "#a78bfa" },
                { value: 1054, label: "Năm Crab Nebula nổ", color: "#a78bfa" },
            ],
        },
        {
            title: "Hai Loại Siêu Tân Tinh",
            content: "Siêu tân tinh được chia thành 2 loại chính theo cơ chế:\n\n⭐ Loại II — Sụp đổ lõi (Core-collapse): sao > 8 M☉ cạn kiệt nhiên liệu, lõi sắt sụp đổ trong < 1 giây. Vỏ ngoài bật ra với vận tốc 10.000 km/s. Đây là loại phổ biến nhất.\n\n⭐ Loại Ia — Phản ứng nhiệt hạch đột ngột: sao lùn trắng hút vật chất từ sao đồng hành, vượt giới hạn Chandrasekhar (1.4 M☉), đốt cháy carbon trong vài giây. Loại này có độ sáng đồng nhất — dùng làm 'nến chuẩn' đo khoảng cách vũ trụ.\n\nCòn có loại Ib, Ic, IIn — biến thể của sụp đổ lõi với thành phần hóa học khác.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "M_Ch ≈ 1.44 M☉",
            meaning: "Giới hạn Chandrasekhar — khối lượng tối đa của sao lùn trắng. Vượt quá giới hạn này, áp suất thoái hóa electron không đủ chống lại hấp dẫn, sao sụp đổ và phát nổ thành siêu tân tinh loại Ia.",
            variables: [
                { symbol: "M_Ch", desc: "Khối lượng Chandrasekhar" },
                { symbol: "M☉", desc: "Khối lượng Mặt Trời (1.989×10³⁰ kg)" },
            ],
            example: "Sao lùn trắng có khối lượng 1.4 M☉ tương đương nén Mặt Trời vào thể tích Trái Đất. Mật độ ~10⁹ kg/m³ — một muỗng cà phê vật chất nặng 5 tấn. Nếu vượt giới hạn, nó bùng nổ trong vài giây, sáng gấp 5 tỷ lần Mặt Trời.",
        },
        {
            type: "quote",
            content: "Chúng ta là con của những ngôi sao. Chúng ta được làm từ vật chất mà các ngôi sao đã tạo ra và phóng vào vũ trụ khi chúng chết.",
            author: "Carl Sagan",
            role: "Cosmos (1980)",
        },
        {
            title: "Các Siêu Tân Tinh Lịch Sử",
            content: "Siêu tân tinh đã được ghi nhận trong lịch sử nhân loại:\n\n🌟 SN 185 — Người Trung Quốc ghi nhận 'khách tinh' sáng 8 tháng.\n\n🌟 SN 1006 — Sáng nhất trong lịch sử ghi chép, có thể nhìn ban ngày trong vài tuần. Cách 7.200 ly.\n\n🌟 SN 1054 — Tạo Crab Nebula, quan sát bởi Trung Quốc và Nhật Bản. Tàn dư chứa pulsar 33 ms.\n\n🌟 SN 1572 (Tycho) — Tycho Brahe quan sát, chứng minh các sao có thể thay đổi — phá vỡ quan niệm 'bất biến' của thiên đàng.\n\n🌟 SN 1604 (Kepler) — Siêu tân tinh cuối cùng quan sát bằng mắt thường trong Ngân Hà.\n\n🌟 SN 1987A — Siêu tân tinh gần nhất trong 400 năm, cách 168.000 ly, quan sát bằng neutrino và ánh sáng.",
            bullets: [
                "SN 1006: sáng nhất từng ghi nhận",
                "SN 1054: tạo Crab Nebula với pulsar 33ms",
                "SN 1987A: sự kiện đầu tiên phát hiện neutrino từ siêu tân tinh",
                "Betelgeuse: 'ứng viên' tiếp theo, có thể nổ trong 100.000 năm tới",
            ],
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Di Sản Của Siêu Tân Tinh",
            content: "Siêu tân tinh không chỉ là 'cái chết' — chúng là kiến trúc sư của vũ trụ hiện tại:\n\n1. Phân tán nguyên tố nặng: vàng, bạch kim, uranium chỉ sinh ra trong siêu tân tinh hoặc va chạm sao neutron. Một vụ nổ có thể tạo ra vài khối lượng Trái Đất của vàng.\n\n2. Kích thích hình thành sao mới: sóng xung kích nén tinh vân gần đó → kích hoạt hình thành sao. Cái chết của sao này là sự sinh của sao khác.\n\n3. Tạo sao neutron và lỗ đen: lõi còn lại sau nổ trở thành pulsar hoặc lỗ đen.\n\n4. Sóng hấp dẫn: va chạm sao neutron tạo sóng hấp dẫn quan sát được bởi LIGO (GW170817).\n\n5. Bức xạ vũ trụ: gia tốc hạt đến năng lượng cực cao.\n\nMọi nguyên tử trong cơ thể bạn từng nằm trong lõi sao khổng lồ, và được phóng ra vũ trụ qua siêu tân tinh. Bạn được làm từ những ngôi sao đã chết.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Ngôi Sao", desc: "Vòng đời kết thúc bằng siêu tân tinh.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/ngoi-sao", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Lỗ Đen", desc: "Tàn dư của siêu tân tinh dữ dội nhất.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Sóng Hấp Dẫn", desc: "Tiếng vọng của sao neutron va chạm.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/vat-ly/song-hap-dan", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Siêu Tân Tinh"
            subtitle="Cái chết rực rỡ nhất của những ngôi sao khổng lồ"
            heroImg="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000"
            chapter="Thiên văn · Chương 06"
            accentColor="#a78bfa"
            readingTime="9 phút"
            tags={["Supernova", "Chandrasekhar", "Crab Nebula", "SN 1054"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}