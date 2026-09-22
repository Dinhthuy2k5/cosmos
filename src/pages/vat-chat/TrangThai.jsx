import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function TrangThai() {
    const sections = [
        {
            title: "Bốn Trạng Thái Cơ Bản Của Vật Chất",
            content: "Vật chất có thể tồn tại ở nhiều trạng thái khác nhau, phụ thuộc vào nhiệt độ và áp suất. Bốn trạng thái quen thuộc:\n\n• Rắn (Solid): phân tử liên kết chặt, hình dạng cố định.\n• Lỏng (Liquid): phân tử liên kết lỏng lẻo, chảy theo hình dạng bình chứa.\n• Khí (Gas): phân tử bay tự do, chiếm toàn bộ thể tích bình chứa.\n• Plasma: khí bị ion hóa, electron tách khỏi hạt nhân.\n\nPlasma là trạng thái phổ biến nhất trong vũ trụ — Mặt Trời, sao, sét, cực quang đều là plasma. Nhưng trên Trái Đất, chúng ta chủ yếu gặp rắn/lỏng/khí.",
            img: "https://images.unsplash.com/photo-1516431883561-f8c8f5a25a89?q=80&w=1200",
            imgAlt: "Tinh thể băng — trạng thái rắn của nước",
        },
        {
            type: "stats",
            items: [
                { value: 0, suffix: " K", label: "Không độ tuyệt đối", color: "#10b981" },
                { value: 100, suffix: "°C", label: "Nước sôi ở 1 atm", color: "#10b981" },
                { value: 99, suffix: "%", label: "Vật chất vũ trụ là plasma", color: "#10b981" },
            ],
        },
        {
            title: "Chuyển Pha — Khi Vật Chất Biến Đổi",
            content: "Vật chất chuyển giữa các trạng thái khi nhiệt độ hoặc áp suất thay đổi:\n\n• Nóng chảy (Melting): rắn → lỏng. Nước đá tan ở 0°C.\n• Đông đặc (Freezing): lỏng → rắn.\n• Bay hơi (Vaporization): lỏng → khí.\n• Ngưng tụ (Condensation): khí → lỏng.\n• Thăng hoa (Sublimation): rắn → khí (không qua lỏng). Ví dụ: đá khô CO₂.\n• Ion hóa (Ionization): khí → plasma. Xảy ra ở nhiệt độ > 10.000 K.\n\nĐiểm đặc biệt: nước là chất duy nhất tồn tại ở cả 3 trạng thái rắn/lỏng/khí trong điều kiện tự nhiên trên Trái Đất.",
            img: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1200",
            imgAlt: "Giọt nước — biểu tượng của trạng thái lỏng",
        },
        {
            type: "formula",
            formula: "PV = nRT",
            meaning: "Phương trình khí lý tưởng — mô tả mối quan hệ giữa áp suất, thể tích, nhiệt độ và số mol của khí lý tưởng.",
            variables: [
                { symbol: "P", desc: "Áp suất (Pa hoặc atm)" },
                { symbol: "V", desc: "Thể tích (L hoặc m³)" },
                { symbol: "n", desc: "Số mol khí" },
                { symbol: "R", desc: "Hằng số khí = 8.314 J/(mol·K)" },
                { symbol: "T", desc: "Nhiệt độ tuyệt đối (Kelvin)" },
            ],
            example: "Một bình chứa 1 mol khí ở 273 K (0°C), áp suất 1 atm sẽ có thể tích 22.4 L. Đây là 'thể tích mol' của khí lý tưởng ở điều kiện tiêu chuẩn — quan trọng trong hóa học.",
        },
        {
            type: "quote",
            content: "Không có gì bị mất đi, không có gì được tạo ra, mọi thứ chỉ biến đổi từ dạng này sang dạng khác.",
            author: "Antoine Lavoisier",
            role: "Định luật bảo toàn khối lượng, 1789",
        },
        {
            title: "Ngưng Tụ Bose-Einstein — Trạng Thái Thứ Năm",
            content: "Năm 1924, Satyendra Bose và Albert Einstein tiên đoán một trạng thái mới của vật chất: khi làm lạnh một số nguyên tử đến gần 0 K, chúng ngưng tụ về cùng một trạng thái lượng tử duy nhất.\n\nỞ trạng thái này, hàng triệu nguyên tử hoạt động như MỘT nguyên tử khổng lồ. Đây là hệ quả vĩ mô của cơ học lượng tử.\n\nNăm 1995, Eric Cornell và Carl Wieman tạo được ngưng tụ Bose-Einstein đầu tiên từ nguyên tử rubidium-87, ở nhiệt độ 170 nano-Kelvin. Họ nhận giải Nobel Vật lý 2001.\n\nỨng dụng tiềm năng: đồng hồ nguyên tử siêu chính xác, máy tính lượng tử, mô phỏng lỗ đen trong phòng thí nghiệm.",
            bullets: [
                "Nhiệt độ cần: dưới 1 μK (1 phần triệu Kelvin)",
                "Nguyên tử đầu tiên: rubidium-87 (1995)",
                "Nobel Vật lý 2001: Cornell, Ketterle, Wieman",
                "Ứng dụng: laser nguyên tử, interferometry chính xác",
            ],
            img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1200",
            imgAlt: "Phòng thí nghiệm vật lý lượng tử",
        },
        {
            title: "Plasma — Trạng Thái Phổ Biến Nhất Vũ Trụ",
            content: "Plasma là khí bị ion hóa — electron tách khỏi hạt nhân, tạo hỗn hợp hạt mang điện. Nó dẫn điện, phản ứng với từ trường, và phát sáng.\n\nPlasma chiếm 99% vật chất thường trong vũ trụ:\n• Mặt Trời: plasma nóng 15 triệu K ở lõi.\n• Sao: plasma nóng, phát sáng.\n• Sét: plasma nhiệt độ 30.000 K.\n• Cực quang: plasma tương tác với từ trường Trái Đất.\n\nTrên Trái Đất, plasma được ứng dụng trong:\n• Đèn huỳnh quang, đèn neon.\n• Máy cắt plasma công nghiệp.\n• Lò phản ứng nhiệt hạch tokamak.\n• Động cơ đẩy ion cho tàu vũ trụ.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
            imgAlt: "Mặt Trời — quả cầu plasma khổng lồ",
        },
    ];

    const relatedArticles = [
        { title: "Nguyên Tử", desc: "Cấu trúc tạo nên các trạng thái vật chất.", img: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=600", link: "/vat-chat/nguyen-tu", color: "#10b981", badge: "Vật chất" },
        { title: "Ngôi Sao", desc: "Vật thể plasma khổng lồ trong vũ trụ.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/ngoi-sao", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Cơ Học Lượng Tử", desc: "Nền tảng của ngưng tụ Bose-Einstein.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-ly/luong-tu", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Trạng Thái Vật Chất"
            subtitle="Rắn, lỏng, khí, plasma — và cả ngưng tụ Bose-Einstein"
            heroImg="https://images.unsplash.com/photo-1516431883561-f8c8f5a25a89?q=80&w=2000"
            chapter="Vật chất · Chương 03"
            accentColor="#10b981"
            readingTime="8 phút"
            tags={["Plasma", "Chuyển pha", "Bose-Einstein", "Khí lý tưởng"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}