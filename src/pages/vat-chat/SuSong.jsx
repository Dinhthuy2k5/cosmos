import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function SuSong() {
    const sections = [
        {
            title: "Câu Hỏi Lớn Nhất Của Khoa Học",
            content: "Sự sống là gì? Không có định nghĩa hoàn hảo, nhưng các nhà sinh vật học đồng ý rằng sự sống có các đặc điểm:\n\n• Trao đổi chất (metabolism)\n• Sinh trưởng và phát triển\n• Phản ứng với môi trường\n• Sinh sản\n• Tiến hóa\n\nNhưng virus có vật liệu di truyền, sinh sản, tiến hóa — nhưng không có trao đổi chất. Nên virus không được coi là 'sống' theo một số định nghĩa.\n\nSự sống trên Trái Đất hình thành cách đây ít nhất 3.7 tỷ năm — chỉ 500 triệu năm sau khi Trái Đất ra đời. Điều này cho thấy sự sống có thể hình thành tương đối nhanh khi có điều kiện.",
            img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1200",
            imgAlt: "DNA — phân tử của sự sống",
        },
        {
            type: "stats",
            items: [
                { value: 3.7, suffix: " tỷ năm", label: "Sự sống lâu đời nhất", color: "#10b981", decimals: 1 },
                { value: 4, label: "Đại phân tử cơ bản", color: "#10b981" },
                { value: 20, label: "Axit amin chuẩn", color: "#10b981" },
            ],
        },
        {
            title: "Bốn Đại Phân Tử Của Sự Sống",
            content: "Mọi sinh vật đều được tạo từ 4 loại đại phân tử:\n\n• Carbohydrate (C, H, O): nguồn năng lượng, cấu trúc. Ví dụ: glucose, cellulose.\n\n• Lipid (C, H, O, ít P, N): màng tế bào, dự trữ năng lượng. Ví dụ: phospholipid, cholesterol.\n\n• Protein (C, H, O, N, S): enzyme, cấu trúc, vận chuyển. Ví dụ: hemoglobin, collagen.\n\n• Axit nucleic (C, H, O, N, P): lưu trữ và truyền thông tin di truyền. Ví dụ: DNA, RNA.\n\nTất cả 4 đại phân tử đều được tạo từ các đơn phân (monomer) liên kết thành polymer. Sự đa dạng sinh học khổng lồ bắt nguồn từ việc sắp xếp 20 axit amin theo các trình tự khác nhau.",
            img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200",
            imgAlt: "Kính hiển vi — quan sát tế bào và phân tử sinh học",
        },
        {
            title: "DNA — Ngôn Ngữ Của Sự Sống",
            content: "DNA (Deoxyribonucleic Acid) là phân tử lưu trữ thông tin di truyền. Cấu trúc xoắn kép được Watson và Crick mô tả năm 1953, dựa trên ảnh X-quang của Rosalind Franklin.\n\nDNA có 4 base: Adenine (A), Thymine (T), Guanine (G), Cytosine (C).\n\nQuy tắc bắt cặp: A-T, G-C. Trình tự base mã hóa thông tin — giống như ký tự trong sách.\n\nBộ gen người có 3 tỷ cặp base, mã hóa ~20.000 gen. Nếu in ra giấy, bộ gen người dài bằng 1 triệu trang sách.\n\nĐiều kỳ diệu: DNA của mọi sinh vật trên Trái Đất đều dùng cùng 4 base và ~20 axit amin. Đây là bằng chứng mạnh mẽ cho nguồn gốc chung của mọi sự sống.",
            img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1200",
            imgAlt: "Mô hình DNA xoắn kép",
        },
        {
            type: "quote",
            content: "Chúng ta là cách vũ trụ biết chính mình. Chúng ta được làm từ vật chất của các ngôi sao, và chúng ta đang suy nghĩ về các ngôi sao.",
            author: "Carl Sagan",
            role: "Cosmos (1980)",
        },
        {
            title: "Sự Sống Hình Thành Như Thế Nào?",
            content: "Có nhiều giả thuyết về nguồn gốc sự sống:\n\n1. Primordial Soup (Oparin-Haldane, 1920s): Các phân tử hữu cơ hình thành trong đại dương nguyên thủy từ khí quyển và tia sét. Thí nghiệm Miller-Urey (1953) xác nhận: tia lửa điện trong khí quyển mô phỏng tạo ra axit amin.\n\n2. RNA World: RNA vừa có thể lưu trữ thông tin vừa xúc tác phản ứng → RNA là phân tử đầu tiên của sự sống.\n\n3. Hydrothermal Vents: Sự sống hình thành ở miệng phun thủy nhiệt dưới đáy đại dương, nơi có gradient nhiệt và khoáng chất.\n\n4. Panspermia: Sự sống đến từ vũ trụ — mang theo bởi thiên thạch hoặc sao chổi.\n\nChưa có giả thuyết nào được xác nhận hoàn toàn. Đây vẫn là một trong những câu hỏi mở lớn nhất của khoa học.",
            bullets: [
                "Thí nghiệm Miller-Urey: tạo 20 axit amin từ khí đơn giản",
                "Meteorite Murchison (1969): chứa axit amin ngoài Trái Đất",
                "Hydrothermal vents: môi trường giàu năng lượng và khoáng chất",
                "Tuổi sự sống lâu đời nhất: 3.7 tỷ năm (stromatolite)",
            ],
            img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200",
            imgAlt: "Đại dương nguyên thủy — nơi sự sống có thể sinh ra",
        },
        {
            title: "Sự Sống Ngoài Trái Đất — Chúng Ta Có Đơn Độc?",
            content: "Với hơn 5.000 ngoại hành tinh đã biết và hàng trăm tỷ hành tinh trong Ngân Hà, xác suất có sự sống ngoài Trái Đất là rất cao.\n\nNhưng sự sống phức tạp cần nhiều điều kiện:\n• Nước lỏng\n• Nhiệt độ ổn định\n• Bảo vệ khỏi bức xạ (từ trường, khí quyển)\n• Nguyên tố nặng (C, N, O, P)\n• Thời gian tiến hóa (hàng tỷ năm)\n\nCác ứng viên tiềm năng: Europa (mặt trăng Sao Mộc — đại dương ngầm), Enceladus (mặt trăng Sao Thổ — phun nước), Titan (khí quyển dày), sao Hỏa (nước ngầm cổ), TRAPPIST-1 (3 hành tinh trong vùng sinh sống).\n\nKính James Webb đang phân tích khí quyển các ngoại hành tinh — tìm dấu hiệu sinh học như oxy, methane, CO₂. Nếu phát hiện, đây sẽ là khám phá vĩ đại nhất lịch sử.",
            img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200",
            imgAlt: "Trái Đất — ốc đảo sự sống trong vũ trụ",
        },
    ];

    const relatedArticles = [
        { title: "Ngoại Hành Tinh", desc: "Nơi có thể tồn tại sự sống khác.", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600", link: "/thien-van/ngoai-hanh-tinh", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Nghịch Lý Fermi", desc: "Nếu có sự sống, họ đâu rồi?", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f654e0?q=80&w=600", link: "/vat-chat/fermi", color: "#10b981", badge: "Vật chất" },
        { title: "Nguyên Tử", desc: "Cơ sở hóa học của sự sống.", img: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=600", link: "/vat-chat/nguyen-tu", color: "#10b981", badge: "Vật chất" },
    ];

    return (
        <ArticleLayout
            title="Nguồn Gốc Sự Sống"
            subtitle="Từ phân tử hữu cơ đến sinh vật đầu tiên"
            heroImg="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2000"
            chapter="Vật chất · Chương 04"
            accentColor="#10b981"
            readingTime="9 phút"
            tags={["DNA", "RNA World", "Miller-Urey", "Sự sống ngoài hành tinh"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}