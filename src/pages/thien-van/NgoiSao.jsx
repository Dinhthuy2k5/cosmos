import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function NgoiSao() {
    const sections = [
        {
            title: "Lò Phản Ứng Hạt Nhân Vũ Trụ",
            content: "Ngôi sao là quả cầu plasma khổng lồ được giữ cân bằng bởi hai lực đối nghịch: hấp dẫn kéo vào, áp suất bức xạ đẩy ra.\n\nỞ lõi, nhiệt độ 15 triệu Kelvin và áp suất 250 tỷ atmosphere cho phép phản ứng nhiệt hạch biến hydrogen thành helium. Mỗi giây, Mặt Trời chuyển 600 triệu tấn hydrogen thành 596 triệu tấn helium — 4 triệu tấn còn lại thành năng lượng thuần.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "4 ¹H → ⁴He + 2e⁺ + 2ν + γ",
            meaning: "Phản ứng tổng hợp hạt nhân hydro thành helium — nguồn năng lượng của mọi ngôi sao. Proton-proton chain và CNO cycle là hai con đường chính.",
            variables: [
                { symbol: "¹H", desc: "Hạt nhân hydrogen (proton)" },
                { symbol: "⁴He", desc: "Hạt nhân helium (2 proton + 2 neutron)" },
                { symbol: "e⁺", desc: "Positron (phản electron)" },
                { symbol: "ν", desc: "Neutrino" },
                { symbol: "γ", desc: "Photon (tia gamma)" },
            ],
            example: "Khối lượng 4 proton = 6.690×10⁻²⁷ kg. Khối lượng 1 hạt ⁴He = 6.645×10⁻²⁷ kg. Chênh lệch 0.7% chuyển thành năng lượng theo E=mc² — đủ để Mặt Trời chiếu sáng 10 tỷ năm.",
        },
        {
            type: "stats",
            items: [
                { value: 15, prefix: "~", suffix: " triệu K", label: "Nhiệt độ lõi Mặt Trời", color: "#f59e0b" },
                { value: 600, suffix: " triệu tấn/s", label: "H fusion mỗi giây", color: "#f59e0b" },
                { value: 10, suffix: " tỷ năm", label: "Tuổi thọ Mặt Trời", color: "#f59e0b" },
            ],
        },
        {
            title: "Sơ Đồ Hertzsprung-Russell",
            content: "Năm 1910, Ejnar Hertzsprung và Henry Russell độc lập phát hiện: khi vẽ độ sáng của sao theo nhiệt độ bề mặt, các sao không phân bố ngẫu nhiên — mà tập trung thành các nhóm rõ rệt.\n\nĐây là 'bản đồ sao' quan trọng nhất của thiên văn học, cho phép phân loại sao và theo dõi vòng đời chúng.\n\n• Dải chính (Main Sequence): 90% sao, đang đốt hydrogen.\n• Sao khổng lồ đỏ (Red Giants): già, đốt helium.\n• Sao lùn trắng (White Dwarfs): tàn dư lạnh dần.\n• Sao siêu khổng lồ (Supergiants): cực sáng, đời sống ngắn.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Chúng ta được tạo ra từ tro bụi của những ngôi sao đã chết. Cơ thể bạn chứa các nguyên tử được tổng hợp trong lõi của một ngôi sao đỏ khổng lồ cách đây hàng tỷ năm.",
            author: "Carl Sagan",
            role: "Nhà thiên văn học, Cosmos (1980)",
        },
        {
            title: "Vòng Đời Của Sao — Phụ Thuộc Khối Lượng",
            content: "Khối lượng ban đầu quyết định toàn bộ vòng đời của sao:\n\n🌞 Sao nhỏ (< 0.5 M☉): Đốt hydrogen cực chậm, sống hàng trăm tỷ năm, kết thúc là sao lùn trắng helium.\n\n⭐ Sao trung bình (0.5-8 M☉): Như Mặt Trời — 10 tỷ năm trên dải chính → khổng lồ đỏ → sao lùn trắng + tinh vân hành tinh.\n\n🌟 Sao lớn (8-25 M☉): Đời sống ngắn (vài chục triệu năm) → siêu khổng lồ đỏ → siêu tân tinh → sao neutron.\n\n💥 Sao khổng lồ (> 25 M☉): Chết trong siêu tân tinh dữ dội → lỗ đen.",
            bullets: [
                "Mặt Trời: 1 M☉ → sao lùn trắng sau 10 tỷ năm",
                "Betelgeuse: 20 M☉ → siêu tân tinh trong ~100.000 năm tới",
                "Eta Carinae: 100 M☉ → siêu tân tinh dữ dội, có thể tạo hypernova",
                "Sirius B: sao lùn trắng nặng 1 M☉ trong thể tích Trái Đất",
            ],
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Tổng Hợp Các Nguyên Tố Nặng",
            content: "Big Bang chỉ tạo ra hydrogen, helium và một chút lithium. Mọi nguyên tố nặng hơn — carbon, oxy, sắt, vàng — đều được tạo ra trong lõi sao.\n\n• Carbon, nitrogen, oxygen: tổng hợp trong sao khổng lồ đỏ.\n• Silicon, sulfur: tổng hợp trong các lớp vỏ của sao lớn.\n• Sắt: điểm kết thúc — không thể fusion tiếp vì sắt là hạt nhân bền nhất.\n• Vàng, bạch kim, uranium: chỉ tạo ra trong siêu tân tinh hoặc va chạm sao neutron.\n\nNguyên tử sắt trong máu bạn, canxi trong xương bạn, vàng trong trang sức bạn — tất cả đều từ những ngôi sao đã chết trước khi Trái Đất sinh ra.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Siêu Tân Tinh", desc: "Cái chết dữ dội của sao khổng lồ.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/sieu-tan-tinh", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Lỗ Đen", desc: "Tàn dư của sao lớn nhất.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Tinh Vân", desc: "Nơi sinh ra những ngôi sao mới.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/tinh-van", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Vòng Đời Ngôi Sao"
            subtitle="Từ tinh vân đến sao lùn trắng, sao neutron hoặc lỗ đen"
            heroImg="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000"
            chapter="Thiên văn · Chương 01"
            accentColor="#f59e0b"
            readingTime="9 phút"
            tags={["H-R Diagram", "Fusion", "Main Sequence", "Sao"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}