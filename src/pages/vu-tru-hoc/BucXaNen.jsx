import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function BucXaNen() {
    const sections = [
        {
            title: "Ánh Sáng Cổ Xưa Nhất",
            content: "Bức xạ nền vi sóng vũ trụ (Cosmic Microwave Background — CMB) là ánh sáng cổ nhất mà con người có thể quan sát. Nó được phát ra chỉ 380.000 năm sau Vụ Nổ Lớn, khi vũ trụ lần đầu trở nên trong suốt.\n\nNgày nay, do vũ trụ giãn nở, ánh sáng này đã bị kéo giãn thành vi sóng với bước sóng milimet — không thể nhìn bằng mắt thường nhưng có thể đo bằng radio telescope.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 2.725, suffix: "K", label: "Nhiệt độ tuyệt đối", color: "#eab308", decimals: 3 },
                { value: 380000, label: "Năm tuổi khi phát ra", color: "#eab308" },
                { value: 13.8, suffix: " tỷ", label: "Năm ánh sáng du hành", color: "#eab308", decimals: 1 },
            ],
        },
        {
            title: "Khám Phá Tình Cờ — 1964",
            content: "Arno Penzias và Robert Wilson tại Bell Labs đang thử nghiệm ăng-ten vô tuyến mới thì phát hiện tiếng ồn nền không thể loại bỏ — dù họ đã lau sạch phân chim, kiểm tra mọi thiết bị.\n\nHọ không biết mình đã tình cờ phát hiện di tích của Vụ Nổ Lớn. Công trình này mang về giải Nobel Vật lý 1978.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Chúng tôi đã nhìn thấy khuôn mặt của Chúa.",
            author: "George Smoot",
            role: "Nobel Vật lý 2006, về phát hiện dị hướng CMB",
        },
        {
            title: "Ba Thế Hệ Vệ Tinh",
            content: "CMB được nghiên cứu qua ba thế hệ vệ tinh, mỗi thế hệ chính xác hơn lần trước:\n\nCOBE (1989-1993) — lần đầu đo được dị hướng nhiệt độ, chênh lệch 1/100.000 độ.\n\nWMAP (2001-2010) — đo tuổi vũ trụ chính xác đến 1%: 13.7 tỷ năm.\n\nPlanck (2009-2013) — bản đồ chi tiết nhất, xác nhận vũ trụ gồm 5% vật chất thường, 27% vật chất tối, 68% năng lượng tối.",
            bullets: [
                "COBE — Nobel 2006 (Mather & Smoot)",
                "WMAP — đo độ cong vũ trụ chính xác 1%",
                "Planck — bản đồ CMB chi tiết nhất trong lịch sử",
            ],
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            title: "Dị Hướng — Bản Đồ Của Vũ Trụ Sơ Khai",
            content: "CMB không hoàn toàn đồng nhất. Nó có những đốm nóng và lạnh nhỏ — chênh lệch chỉ 1/100.000 độ so với trung bình.\n\nChính những đốm này là hạt giống của mọi cấu trúc vũ trụ: nơi đậm đặc hơn trở thành thiên hà, nơi loãng hơn trở thành khoảng không vũ trụ. Bản đồ CMB chính là bản thiết kế của vũ trụ hiện tại.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Phân Cực Của CMB",
            content: "CMB không chỉ có nhiệt độ — nó còn có phân cực (polarization). Phân cực B-mode được xem là bằng chứng mạnh nhất cho lạm phát vũ trụ và sóng hấp dẫn nguyên thủy.\n\nNăm 2014, thí nghiệm BICEP2 tuyên bố phát hiện B-mode, gây chấn động. Nhưng sau đó hóa ra tín hiệu là do bụi vũ trụ — một bài học khoa học về việc kiểm chứng nghiêm ngặt.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Vụ Nổ Lớn", desc: "Khởi nguyên của vạn vật.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/vu-tru-hoc/big-bang", color: "#f59e0b", badge: "Chương 01" },
        { title: "Lạm Phát Vũ Trụ", desc: "Giãn nở nhanh hơn ánh sáng.", img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=600", link: "/vu-tru-hoc/lam-phat", color: "#f97316", badge: "Chương 02" },
        { title: "Vật Chất Tối", desc: "Khối lượng vô hình chi phối vũ trụ.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/vu-tru-hoc/vat-chat-toi", color: "#8b5cf6", badge: "Chương 04" },
    ];

    return (
        <ArticleLayout
            title="Bức Xạ Nền CMB"
            subtitle="Ánh sáng cổ xưa nhất — bức ảnh em bé của vũ trụ"
            heroImg="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2000"
            chapter="Vũ trụ học · Chương 03"
            accentColor="#eab308"
            readingTime="7 phút"
            tags={["CMB", "COBE", "WMAP", "Planck"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}