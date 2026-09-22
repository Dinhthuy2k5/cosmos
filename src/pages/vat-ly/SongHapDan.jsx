import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function SongHapDan() {
    const sections = [
        {
            title: "Tiên Tri Của Einstein — 1916",
            content: "Chỉ một năm sau khi hoàn thiện thuyết tương đối rộng, Einstein tiên đoán: khi khối lượng tăng tốc, nó tạo ra gợn sóng trong không-thời gian lan truyền với vận tốc ánh sáng.\n\nÔng gọi chúng là 'sóng hấp dẫn' (gravitational waves) — nhưng cho rằng chúng quá yếu để có thể phát hiện. Ông đúng về tồn tại, nhưng sai về khả năng đo — phải mất 100 năm để chứng minh.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 1916, label: "Einstein tiên đoán", color: "#06b6d4" },
                { value: 2015, label: "LIGO phát hiện đầu tiên", color: "#06b6d4" },
                { value: 1.3, suffix: " tỷ năm", label: "Thời gian du hành", color: "#06b6d4", decimals: 1 },
            ],
        },
        {
            title: "Sự Kiện GW150914",
            content: "14/09/2015, 09:50:45 UTC — LIGO Livingston phát hiện tín hiệu kéo dài 0.2 giây. Bảy mili-giây sau, LIGO Hanford (cách 3.000 km) phát hiện tín hiệu tương tự.\n\nTín hiệu là 'tiếng chirp' (chim hót) — tần số tăng dần từ 35 Hz lên 250 Hz. Đây là dấu hiệu đặc trưng của hai lỗ đen xoáy vào nhau và hợp nhất.\n\n• Lỗ đen 1: 36 lần khối lượng Mặt Trời\n• Lỗ đen 2: 29 lần khối lượng Mặt Trời\n• Lỗ đen kết quả: 62 lần khối lượng Mặt Trời\n• Năng lượng phát ra: 3 lần khối lượng Mặt Trời → dưới dạng sóng hấp dẫn\n\nTrong tích tắc cuối, công suất phát ra gấp 50 lần toàn bộ ánh sáng của vũ trụ quan sát được.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "h ≈ (ΔL) / L",
            meaning: "Sóng hấp dẫn được đo bằng sự biến đổi độ dài tương đối giữa hai điểm. LIGO đo được h nhỏ đến 10⁻²¹ — nghĩa là khoảng cách 4 km thay đổi chỉ 4×10⁻¹⁸ m, bằng 1/10.000 kích thước proton.",
            variables: [
                { symbol: "h", desc: "Biên độ sóng hấp dẫn (strain)" },
                { symbol: "ΔL", desc: "Độ thay đổi chiều dài" },
                { symbol: "L", desc: "Chiều dài cơ bản (LIGO: 4 km)" },
            ],
            example: "Để dễ hình dung độ nhạy của LIGO: nó tương đương đo khoảng cách từ Trái Đất đến sao Alpha Centauri (4.37 năm ánh sáng) chính xác đến kích thước một sợi tóc người.",
        },
        {
            type: "quote",
            content: "Chúng ta đã phát hiện sóng hấp dẫn. Chúng ta đã làm được điều đó!",
            author: "David Reitze",
            role: "Giám đốc điều hành LIGO, công bố 11/02/2016",
        },
        {
            title: "Giao Thoa Kế LIGO — Kỳ Quan Kỹ Thuật",
            content: "LIGO (Laser Interferometer Gravitational-Wave Observatory) gồm 2 trạm tại Hanford (Washington) và Livingston (Louisiana), cách nhau 3.000 km.\n\nMỗi trạm là giao thoa kế Michelson với 2 nhánh dài 4 km. Tia laser chia đôi, đi qua 2 nhánh rồi hợp lại. Nếu 2 nhánh có cùng chiều dài, ánh sáng triệt tiêu — không tín hiệu. Khi sóng hấp dẫn đi qua, một nhánh dài ra, một nhánh ngắn lại → xuất hiện tín hiệu.\n\nĐể đạt độ nhạy 10⁻²¹, LIGO phải:\n• Hút chân không 10⁻⁹ atmosphere trong ống 4 km\n• Cách ly địa chấn cực mạnh (không rung dù động đất)\n• Treo gương bằng dây silica để giảm nhiễu nhiệt\n• Dùng laser công suất 200W, tinh chỉnh đến mức nhiễu lượng tử",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Các Sự Kiện Lịch Sử",
            content: "Sau GW150914, LIGO-Virgo-KAGRA đã phát hiện hơn 90 sự kiện sóng hấp dẫn:\n\n• GW170817 (2017) — lần đầu phát hiện sóng hấp dẫn từ sao neutron va chạm, kèm tín hiệu điện từ (kilonova). Khai sinh 'thiên văn đa kênh'.\n\n• GW190521 (2019) — lỗ đen khối lượng trung gian (142 M☉) — thách thức lý thuyết hình thành lỗ đen.\n\n• GW200105 & GW200115 (2021) — hỗn hợp lỗ đen + sao neutron.\n\n• O4 (2023-nay) — thế hệ quan sát mới, dự kiến phát hiện hàng trăm sự kiện mỗi năm.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Tương Lai — Nghe Vũ Trụ Sơ Khai",
            content: "Thế hệ tiếp theo của detector sóng hấp dẫn:\n\n• Einstein Telescope (châu Âu) — tam giác 10 km dưới lòng đất.\n\n• Cosmic Explorer (Mỹ) — nhánh 40 km.\n\n• LISA (ESA/NASA) — giao thoa kế không gian, cánh tay 2.5 triệu km, phóng 2035.\n\nMục tiêu: nghe sóng hấp dẫn từ lạm phát vũ trụ — tàn dư của Vụ Nổ Lớn. Nếu thành công, chúng ta sẽ có bằng chứng trực tiếp cho thuyết lạm phát và lý thuyết hấp dẫn lượng tử.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Thuyết Tương Đối", desc: "Nền tảng lý thuyết của sóng hấp dẫn.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
        { title: "Lỗ Đen", desc: "Nguồn phát sóng hấp dẫn mạnh nhất.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Siêu Tân Tinh", desc: "Sao neutron va chạm — kilonova.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/sieu-tan-tinh", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Sóng Hấp Dẫn"
            subtitle="Tiếng vọng của không-thời gian từ vũ trụ sâu thẳm"
            heroImg="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000"
            chapter="Vật lý · Chương 05"
            accentColor="#06b6d4"
            readingTime="9 phút"
            tags={["LIGO", "Einstein", "GW150914", "Sao neutron"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}