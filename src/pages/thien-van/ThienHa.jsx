import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function ThienHa() {
    const sections = [
        {
            title: "Những Hòn Đảo Ánh Sáng Giữa Vũ Trụ",
            content: "Thiên hà là hệ thống khổng lồ chứa hàng trăm tỷ ngôi sao, khí, bụi và vật chất tối, liên kết bởi hấp dẫn. Vũ trụ quan sát được có khoảng 2 nghìn tỷ thiên hà.\n\nNgân Hà của chúng ta là một thiên hà xoắn ốc có thanh (barred spiral), đường kính 100.000 năm ánh sáng, chứa 100-400 tỷ ngôi sao.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 2000000000000, prefix: "2×10¹² ", label: "Thiên hà trong vũ trụ", color: "#a78bfa" },
                { value: 100000, suffix: " ly", label: "Đường kính Ngân Hà", color: "#a78bfa" },
                { value: 225, suffix: " triệu năm", label: "Chu kỳ quay Mặt Trời", color: "#a78bfa" },
            ],
        },
        {
            title: "Phân Loại Hubble",
            content: "Năm 1926, Edwin Hubble phân loại thiên hà thành 4 loại chính (sơ đồ 'tuning fork'):\n\n🌀 Xoắn ốc (Spiral — S): có cánh tay xoắn ốc, nhiều khí và sao trẻ. Ví dụ: Ngân Hà, Andromeda, Whirlpool.\n\n🌀 Xoắn ốc có thanh (Barred Spiral — SB): có thanh trung tâm. Chiếm 2/3 thiên hà xoắn ốc.\n\n🔵 Elliptical (E): hình cầu hoặc ellipse, ít khí, sao già. Ví dụ: M87, IC 1101.\n\n🌫️ Irregular (Irr): không có hình dạng xác định, nhiều khí. Ví dụ: Magellanic Clouds.\n\nNgoài ra còn có thiên hà vô định hình (peculiar) — kết quả của va chạm.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Vũ trụ không chỉ kỳ lạ hơn chúng ta tưởng tượng — nó kỳ lạ hơn chúng ta có thể tưởng tượng.",
            author: "J.B.S. Haldane",
            role: "Nhà sinh vật học, 1927",
        },
        {
            title: "Cấu Trúc Ngân Hà",
            content: "Ngân Hà có 4 thành phần chính:\n\n1. Đĩa (Disk) — 100.000 ly, chứa hầu hết sao, khí, bụi. Dày ~1.000 ly. Mặt Trời ở rìa trong, cách tâm 26.000 ly.\n\n2. Bulge — trung tâm phình ra, chứa sao già và lỗ đen siêu khối lượng Sagittarius A* (4 triệu M☉).\n\n3. Halo — quầng cầu bao quanh đĩa, chứa sao già, cụm sao cầu, vật chất tối.\n\n4. Cánh tay xoắn ốc — 4 cánh tay chính: Perseus, Scutum-Centaurus, Sagittarius, Norma. Hệ Mặt Trời nằm trong nhánh Orion.",
            bullets: [
                "Sagittarius A*: lỗ đen trung tâm, 4.3 triệu khối lượng Mặt Trời",
                "Mặt Trời quay quanh tâm Ngân Hà 225 triệu năm/vòng",
                "Đã hoàn thành 20 vòng kể từ khi hình thành",
                "Ngân Hà va chạm Andromeda sau 4.5 tỷ năm",
            ],
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Va Chạm Thiên Hà — Sự Kiện Vĩ Đại",
            content: "Các thiên hà không đứng yên — chúng va chạm và sáp nhập liên tục trong lịch sử vũ trụ. Va chạm thiên hà kéo dài hàng trăm triệu năm, không phải sự kiện tức thời.\n\nTrong va chạm, các ngôi sao hiếm khi va vào nhau (khoảng cách sao quá xa). Nhưng khí và bụi va chạm dữ dội, tạo ra sóng xung kích và kích thích hình thành sao mới dữ dội — gọi là starburst.\n\nVí dụ nổi tiếng:\n• Antennae Galaxies — hai thiên hà xoắn ốc đang va chạm\n• Mice Galaxies — đang trong quá trình sáp nhập\n• Milky Way + Andromeda — sẽ va chạm sau 4.5 tỷ năm, tạo thiên hà 'Milkomeda'",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Mạng Lưới Vũ Trụ Quy Mô Lớn",
            content: "Ở quy mô hàng trăm triệu năm ánh sáng, vũ trụ có cấu trúc xốp giống mạng nơ-ron hoặc mạng nhện:\n\n• Sợi vũ trụ (Filaments): cấu trúc dài, mật độ cao, kết nối các cụm thiên hà.\n\n• Nút (Nodes): giao điểm của các sợi, chứa siêu cụm thiên hà.\n\n• Khoảng trống (Voids): vùng rỗng khổng lồ, đường kính 100-300 triệu ly.\n\nNgân Hà nằm trong siêu cụm Laniakea ('Thiên đường bao la' theo tiếng Hawaii), chứa 100.000 thiên hà, đường kính 520 triệu ly.\n\nToàn bộ cấu trúc này gọi là 'Cosmic Web' — bản đồ vĩ đại nhất của vũ trụ.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Ngôi Sao", desc: "Những viên gạch xây nên thiên hà.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/ngoi-sao", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Lỗ Đen", desc: "Trung tâm của hầu hết thiên hà.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Vật Chất Tối", desc: "Chất keo giữ thiên hà bên nhau.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/vu-tru-hoc/vat-chat-toi", color: "#8b5cf6", badge: "Vũ trụ học" },
    ];

    return (
        <ArticleLayout
            title="Thiên Hà"
            subtitle="Những hòn đảo ánh sáng trong đại dương vũ trụ"
            heroImg="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000"
            chapter="Thiên văn · Chương 02"
            accentColor="#a78bfa"
            readingTime="8 phút"
            tags={["Hubble", "Milky Way", "Andromeda", "Cosmic Web"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}