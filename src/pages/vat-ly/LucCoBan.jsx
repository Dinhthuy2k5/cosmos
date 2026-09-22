import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function LucCoBan() {
    const sections = [
        {
            title: "Bốn Trụ Cột Của Tương Tác",
            content: "Mọi hiện tượng trong vũ trụ — từ hạt nhân nguyên tử đến chuyển động thiên hà — đều bắt nguồn từ 4 lực cơ bản.\n\nChúng khác nhau về cường độ, tầm xa và hạt truyền lực. Trong vũ trụ sơ khai, cả 4 lực là một — chúng tách ra khi vũ trụ nguội đi.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 1, prefix: "10³⁹ ×", label: "Lực mạnh (mạnh nhất)", color: "#06b6d4" },
                { value: 1, suffix: " (chuẩn)", label: "Lực điện từ", color: "#06b6d4" },
                { value: 1, prefix: "10⁻⁵ ×", label: "Lực yếu", color: "#06b6d4" },
                { value: 1, prefix: "10⁻³⁹ ×", label: "Hấp dẫn (yếu nhất)", color: "#06b6d4" },
            ],
        },
        {
            title: "Lực Mạnh — Kiến Trúc Sư Hạt Nhân",
            content: "Lực mạnh giữ quark trong proton và neutron, đồng thời giữ proton-neutron trong hạt nhân nguyên tử. Nếu không có nó, mọi hạt nhân sẽ nổ tung ngay lập tức.\n\nLực mạnh mạnh gấp 100 lần lực điện từ ở khoảng cách hạt nhân (10⁻¹⁵ m), nhưng giảm về 0 ở khoảng cách lớn hơn — nên không ảnh hưởng đến thế giới vĩ mô.\n\nHạt truyền: gluon (8 loại).",
            bullets: [
                "Tầm xa: ~10⁻¹⁵ m (kích thước proton)",
                "Hạt truyền: gluon",
                "Năng lượng liên kết hạt nhân: ~1 MeV/nucleon",
                "Giải phóng trong phản ứng nhiệt hạch của Mặt Trời",
            ],
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            title: "Lực Điện Từ — Nghệ Sĩ Của Mọi Ngày",
            content: "Lực điện từ chi phối mọi tương tác giữa các hạt mang điện. Nó giữ electron quay quanh hạt nhân, giữ nguyên tử liên kết thành phân tử, và giữ bạn ngồi trên ghế mà không xuyên qua.\n\nTầm xa vô hạn nhưng giảm theo bình phương khoảng cách. Hạt truyền: photon.\n\nMaxwell thống nhất lực điện và lực từ năm 1865 — mở đường cho sóng điện từ, ánh sáng, radio, wifi.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Lực Yếu — Kiến Trúc Sư Phân Rã",
            content: "Lực yếu gây phân rã phóng xạ beta — biến neutron thành proton + electron + phản neutrino. Đây là cơ chế quan trọng cho phản ứng nhiệt hạch trong Mặt Trời.\n\nTầm xa cực ngắn (~10⁻¹⁸ m), yếu hơn lực mạnh 100.000 lần. Hạt truyền: W⁺, W⁻, Z⁰ boson — nặng gấp 100 lần proton.\n\nEnrico Fermi phát triển lý thuyết đầu tiên năm 1933, nhưng lý thuyết hoàn chỉnh (điện-yếu) mãi đến 1967 nhờ Weinberg, Salam, Glashow.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Vật lý sẽ đơn giản hơn nhiều nếu chỉ có một lực. Nhưng tự nhiên chọn 4 — và từ đó sinh ra mọi phức tạp của vũ trụ.",
            author: "Steven Weinberg",
            role: "Nobel Vật lý 1979",
        },
        {
            title: "Hấp Dẫn — Kiến Trúc Sư Vũ Trụ",
            content: "Hấp dẫn là lực yếu nhất trong 4 lực — yếu hơn lực mạnh 10³⁹ lần. Nhưng nó có 2 đặc điểm khiến nó thống trị vũ trụ vĩ mô:\n\n1. Tầm xa vô hạn — không giảm về 0.\n\n2. Luôn hút, không bao giờ đẩy — không bị triệt tiêu giữa các vật thể lớn.\n\nVì thế, ở thang thiên hà, hấp dẫn là lực duy nhất quan trọng. Nó giữ Mặt Trăng quay quanh Trái Đất, giữ Hệ Mặt Trời trong Ngân Hà, và điều khiển sự giãn nở của vũ trụ.\n\nHạt truyền (lý thuyết): graviton — chưa phát hiện.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            title: "Thống Nhất Các Lực — Giấc Mơ Của Einstein",
            content: "Einstein dành 30 năm cuối đời tìm lý thuyết thống nhất điện từ và hấp dẫn — thất bại.\n\nNhưng vật lý hiện đại đã thống nhất được 3 trong 4 lực:\n\n• Điện-yếu: Maxwell (điện từ) + Fermi (yếu) → Weinberg-Salam-Glashow 1967.\n\n• Đại thống nhất (GUT): điện-yếu + mạnh → dự đoán ở năng lượng 10¹⁶ GeV — chưa kiểm chứng.\n\n• Thuyết vạn vật (TOE): cả 4 lực, bao gồm hấp dẫn → cần hấp dẫn lượng tử. Ứng viên: lý thuyết dây, vòng lượng tử.",
            bullets: [
                "10¹⁶ GeV — điện-yếu và mạnh hợp nhất",
                "10¹⁹ GeV — cả 4 lực hợp nhất (năng lượng Planck)",
                "LHC đạt 13 TeV — còn cách GUT 10¹² lần",
            ],
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Mô Hình Chuẩn", desc: "Lý thuyết mô tả 3 trong 4 lực.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-ly/mo-hinh-chuan", color: "#06b6d4", badge: "Vật lý" },
        { title: "Hạt Cơ Bản", desc: "Những viên gạch cấu thành vũ trụ.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-chat/hat-co-ban", color: "#10b981", badge: "Vật chất" },
        { title: "Thuyết Tương Đối", desc: "Hấp dẫn — sự uốn cong không-thời gian.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Bốn Lực Cơ Bản"
            subtitle="Kiến trúc của mọi tương tác trong vũ trụ"
            heroImg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
            chapter="Vật lý · Chương 04"
            accentColor="#06b6d4"
            readingTime="8 phút"
            tags={["Lực mạnh", "Điện từ", "Lực yếu", "Hấp dẫn"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}