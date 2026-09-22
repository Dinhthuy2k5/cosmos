import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function LoDen() {
    const sections = [
        {
            title: "Nơi Ánh Sáng Bị Giam Cầm Vĩnh Viễn",
            content: "Lỗ đen là vùng không-thời gian có mật độ vật chất cực lớn, lực hấp dẫn mạnh đến mức không gì — kể cả ánh sáng — có thể thoát ra.\n\nNếu bạn rơi vào chân trời sự kiện, vận tốc cần thiết để thoát ra lớn hơn vận tốc ánh sáng. Từ thời điểm đó, mọi con đường đều dẫn vào tâm điểm kỳ dị — không có đường quay lại.",
            img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "r_s = 2GM / c²",
            meaning: "Bán kính Schwarzschild — bán kính của chân trời sự kiện. Đây là khoảng cách mà tại đó vận tốc thoát bằng vận tốc ánh sáng.",
            variables: [
                { symbol: "r_s", desc: "Bán kính chân trời sự kiện (m)" },
                { symbol: "G", desc: "Hằng số hấp dẫn ≈ 6.674×10⁻¹¹" },
                { symbol: "M", desc: "Khối lượng lỗ đen (kg)" },
                { symbol: "c", desc: "Vận tốc ánh sáng ≈ 3×10⁸ m/s" },
            ],
            example: "Nếu nén Trái Đất (M = 5.97×10²⁴ kg) thành lỗ đen, bán kính Schwarzschild chỉ là 9 mm — nhỏ hơn quả bóng bàn. Lỗ đen Mặt Trời (1 M☉) có bán kính 2.95 km. Sagittarius A* (4.3 triệu M☉) có r_s ≈ 12.7 triệu km, lớn hơn đường kính Mặt Trời 9 lần.",
        },
        {
            type: "stats",
            items: [
                { value: 3, suffix: " M☉", label: "Lỗ đen sao nhỏ nhất", color: "#a78bfa" },
                { value: 4.3, prefix: "~", suffix: " triệu M☉", label: "Sgr A* — tâm Ngân Hà", color: "#a78bfa", decimals: 1 },
                { value: 66, suffix: " tỷ M☉", label: "Ton 618 — lớn nhất", color: "#a78bfa" },
            ],
        },
        {
            title: "Ba Loại Lỗ Đen",
            content: "Khối lượng chia lỗ đen thành ba loại rõ rệt:\n\n⭐ Lỗ đen Sao (Stellar): 3-100 M☉, hình thành từ sụp đổ sao khổng lồ. Ví dụ: Cygnus X-1 (21 M☉).\n\n⚫ Lỗ đen Trung gian (IMBH): 100-100.000 M☉, hiếm, vẫn tranh cãi. Ví dụ: HLX-1 trong thiên hà ESO 243-49.\n\n🌌 Lỗ đen Siêu Khối Lượng (SMBH): 10⁵-10¹⁰ M☉, nằm ở tâm hầu hết thiên hà lớn. Ví dụ: Sgr A* (4.3 triệu M☉), M87* (6.5 tỷ M☉), Ton 618 (66 tỷ M☉).\n\nNguồn gốc SMBH vẫn là bí ẩn — chúng hình thành quá nhanh so với mô hình hiện tại.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Lỗ đen dạy chúng ta rằng không gian có thể bị xé toạc và thời gian có thể đứng yên.",
            author: "Stephen Hawking",
            role: "A Brief History of Time (1988)",
        },
        {
            title: "Spaghettification — Cái Chết Kỳ Dị",
            content: "Nếu bạn rơi chân trước vào lỗ đen sao, lực thủy triều sẽ kéo giãn bạn:\n\nChân bạn gần tâm hơn đầu bạn → lực hấp dẫn tác động lên chân mạnh hơn đầu. Sự chênh lệch này kéo giãn cơ thể bạn thành một sợi mì ống dài hàng ngàn km.\n\nCác nhà vật lý gọi hiện tượng này là 'spaghettification' (hiệu ứng mì ống).\n\nNhưng với lỗ đen siêu khối lượng, lực thủy triều ở chân trời sự kiện yếu hơn nhiều (vì r_s lớn) — bạn có thể vượt qua chân trời sự kiện mà không nhận ra. Nhưng không bao giờ quay lại được.",
            bullets: [
                "Lỗ đen sao: lực thủy triều cực mạnh ở r_s",
                "Lỗ đen siêu khối lượng: lực thủy triều yếu ở r_s",
                "Vật chất rơi vào tạo đĩa bồi tụ — phát tia X cực mạnh",
                "Nhiệt độ đĩa bồi tụ có thể đạt 10⁷ K",
            ],
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Bức Xạ Hawking — Lỗ Đen Không Thực Sự Đen",
            content: "Năm 1974, Stephen Hawking gây chấn động giới vật lý: lỗ đen không hoàn toàn đen — chúng dần bốc hơi qua bức xạ Hawking.\n\nTheo cơ học lượng tử, các cặp hạt-phản hạt liên tục sinh ra gần chân trời sự kiện. Bình thường chúng hủy nhau ngay. Nhưng nếu một hạt rơi vào lỗ đen, hạt kia thoát ra như bức xạ — mang theo năng lượng từ lỗ đen.\n\nQuá trình cực chậm: lỗ đen 1 M☉ cần 10⁶⁷ năm để bốc hơi. Nhưng nghịch lý thông tin Hawking — thông tin rơi vào lỗ đen có mất mãi không? — vẫn là bí ẩn vật lý lớn nhất.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Hình Ảnh Lỗ Đen Đầu Tiên",
            content: "Ngày 10/04/2019, EHT (Event Horizon Telescope) công bố hình ảnh đầu tiên của lỗ đen — M87* trong thiên hà Virgo A, cách 55 triệu ly.\n\nEHT là mạng lưới 8 kính thiên văn radio trải dài từ Hawaii đến Nam Cực, tạo thành một 'kính thiên văn ảo' đường kính bằng Trái Đất. Độ phân giải đủ để đọc một tờ báo ở New York từ Paris.\n\nHình ảnh cho thấy vành sáng bất đối xứng xung quanh vùng tối — 'bóng' của lỗ đen. Năm 2022, EHT công bố hình ảnh Sgr A* — lỗ đen trung tâm Ngân Hà.\n\nGiải thưởng Breakthrough Prize 2020 cho nhóm EHT.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Sóng Hấp Dẫn", desc: "Tiếng vọng từ lỗ đen va chạm.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/vat-ly/song-hap-dan", color: "#06b6d4", badge: "Vật lý" },
        { title: "Siêu Tân Tinh", desc: "Quá trình sinh ra lỗ đen.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/sieu-tan-tinh", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Thiên Hà", desc: "Lỗ đen ở trung tâm hầu hết thiên hà.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/thien-ha", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Lỗ Đen"
            subtitle="Nơi không-thời gian sụp đổ và ánh sáng bị giam cầm"
            heroImg="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000"
            chapter="Thiên văn · Chương 03"
            accentColor="#a78bfa"
            readingTime="10 phút"
            tags={["Schwarzschild", "Sgr A*", "Hawking", "EHT"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}