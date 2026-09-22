import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function NgoaiHanhTinh() {
    const sections = [
        {
            title: "Những Thế Giới Xa Lạ",
            content: "Ngoại hành tinh (exoplanet) là hành tinh quay quanh ngôi sao khác Mặt Trời. Trước năm 1995, chúng ta chỉ biết 8 hành tinh trong Hệ Mặt Trời.\n\nNgày nay, hơn 5.600 ngoại hành tinh đã được xác nhận, và hơn 10.000 ứng viên đang chờ xác minh. Các nhà thiên văn ước tính Ngân Hà có hàng trăm tỷ hành tinh — trung bình mỗi ngôi sao có ít nhất 1 hành tinh.",
            img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 5600, suffix: "+", label: "Ngoại hành tinh xác nhận", color: "#a78bfa" },
                { value: 1995, label: "Năm phát hiện đầu tiên", color: "#a78bfa" },
                { value: 4000, suffix: "+", label: "Hệ sao có hành tinh", color: "#a78bfa" },
            ],
        },
        {
            title: "Phát Hiện Đầu Tiên — 1995",
            content: "Ngày 06/10/1995, Michel Mayor và Didier Queloz công bố phát hiện 51 Pegasi b — hành tinh đầu tiên quay quanh sao giống Mặt Trời.\n\nĐiều bất ngờ: 51 Pegasi b là 'sao Mộc nóng' (hot Jupiter) — hành tinh khí khổng lồ quay quanh sao chỉ trong 4.2 ngày, ở khoảng cách 1/20 khoảng cách Trái Đất-Mặt Trời. Điều này thách thức mọi lý thuyết hình thành hành tinh.\n\nHai ông nhận giải Nobel Vật lý 2019 cho khám phá này.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            title: "Các Phương Pháp Phát Hiện",
            content: "Không thể chụp ảnh trực tiếp ngoại hành tinh (quá mờ so với sao mẹ), các nhà thiên văn dùng 4 phương pháp gián tiếp:\n\n🚀 Vận tốc xuyên tâm (Radial Velocity): đo sự dao động của sao do hành tinh kéo. Phương pháp đầu tiên (1995).\n\n🌑 Quá cảnh (Transit): đo sự giảm sáng nhẹ của sao khi hành tinh đi qua trước nó. Kepler và TESS dùng phương pháp này — phát hiện hàng ngàn hành tinh.\n\n🔍 Vi thấu kính hấp dẫn (Microlensing): hành tinh làm cong ánh sáng sao nền.\n\n📸 Chụp ảnh trực tiếp (Direct Imaging): chụp hành tinh khổng lồ xa sao mẹ, dùng coronagraph để chặn ánh sáng sao.",
            bullets: [
                "Kepler (2009-2018): 2.700 hành tinh xác nhận",
                "TESS (2018-nay): tìm hành tinh quanh sao gần",
                "JWST: phân tích khí quyển ngoại hành tinh",
                "PLATO (2026): tìm hành tinh giống Trái Đất",
            ],
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Nếu chúng ta không đơn độc trong vũ trụ, thì tại sao vậy? Nếu chúng ta đơn độc, thì thật là lãng phí không gian.",
            author: "Arthur C. Clarke",
            role: "Nhà văn khoa học viễn tưởng",
        },
        {
            title: "Vùng Sinh Sống — Goldilocks Zone",
            content: "Vùng sinh sống (Habitable Zone) là vùng quanh sao có nhiệt độ cho phép nước tồn tại dạng lỏng — điều kiện tiên quyết cho sự sống như chúng ta biết.\n\nKhông quá nóng (nước bốc hơi), không quá lạnh (nước đóng băng) — giống như cháo của Goldilocks vừa phải. Do đó có tên 'Goldilocks Zone'.\n\nTrái Đất nằm trong vùng này của Mặt Trời. Một số ngoại hành tinh đáng chú ý cũng nằm trong vùng sinh sống của sao mẹ:\n\n• Proxima Centauri b — hành tinh gần nhất, cách 4.24 ly\n• TRAPPIST-1 e, f, g — 3 hành tinh đá trong vùng sinh sống\n• Kepler-452b — 'Trái Đất thứ 2', cách 1.400 ly\n• K2-18b — có hơi nước trong khí quyển",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Săn Tìm Sự Sống — Sinh Học Vũ Trụ",
            content: "Câu hỏi 'chúng ta có đơn độc không?' là một trong những câu hỏi lớn nhất của khoa học.\n\nKính James Webb (JWST) đang phân tích khí quyển ngoại hành tinh bằng spectroscopy — tìm dấu hiệu của hơi nước, oxy, methane, CO2. Sự kết hợp của oxy + methane được xem là 'dấu hiệu sinh học' (biosignature) vì cả hai khó tồn tại đồng thời mà không có sự sống.\n\nNếu phát hiện được biosignature, đây sẽ là khám phá vĩ đại nhất lịch sử nhân loại.\n\nDự án Breakthrough Listen đang dùng kính radio để nghe tín hiệu từ 1 triệu sao gần nhất — tìm kiếm trí tuệ ngoài Trái Đất (SETI).",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Nghịch Lý Fermi", desc: "Nếu có sự sống ngoài kia, họ đâu rồi?", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f654e0?q=80&w=600", link: "/vat-chat/fermi", color: "#10b981", badge: "Vật chất" },
        { title: "Nguồn Gốc Sự Sống", desc: "Sự sống hình thành từ đâu?", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-chat/su-song", color: "#10b981", badge: "Vật chất" },
        { title: "Ngôi Sao", desc: "Sao mẹ của mọi ngoại hành tinh.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/ngoi-sao", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Ngoại Hành Tinh"
            subtitle="Hành tinh quay quanh những ngôi sao xa xôi"
            heroImg="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000"
            chapter="Thiên văn · Chương 05"
            accentColor="#a78bfa"
            readingTime="8 phút"
            tags={["Exoplanet", "Kepler", "JWST", "TRAPPIST-1"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}