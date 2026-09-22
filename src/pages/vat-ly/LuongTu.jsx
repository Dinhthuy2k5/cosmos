import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function LuongTu() {
    const sections = [
        {
            title: "Thế Giới Của Những Điều Không Thể",
            content: "Nếu thuyết tương đối mô tả vũ trụ vĩ mô — sao, thiên hà, vũ trụ — thì cơ học lượng tử mô tả thế giới vi mô: nguyên tử, electron, photon.\n\nỞ thang đo này, trực giác hàng ngày của chúng ta sụp đổ hoàn toàn. Hạt không có vị trí xác định cho đến khi được đo. Năng lượng bị lượng tử hóa thành từng gói rời rạc. Nguyên nhân có thể xảy ra sau kết quả.",
            img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "E = h · f",
            meaning: "Năng lượng của photon tỉ lệ thuận với tần số. Đây là phương trình của Max Planck (1900), đánh dấu sự ra đời của vật lý lượng tử.",
            variables: [
                { symbol: "E", desc: "Năng lượng photon (Joule)" },
                { symbol: "h", desc: "Hằng số Planck ≈ 6.626×10⁻³⁴ J·s" },
                { symbol: "f", desc: "Tần số bức xạ (Hz)" },
            ],
            example: "Photon tím có tần số 7.5×10¹⁴ Hz, năng lượng ≈ 5×10⁻¹⁹ J. Photon hồng ngoại cùng cường độ có tần số thấp hơn 1000 lần → năng lượng thấp hơn 1000 lần, không đủ để ion hóa nguyên tử.",
        },
        {
            type: "stats",
            items: [
                { value: 6.626, prefix: "h = ", suffix: "×10⁻³⁴", label: "J·s — Hằng số Planck", color: "#06b6d4", decimals: 3 },
                { value: 1900, label: "Năm khai sinh lượng tử", color: "#06b6d4" },
                { value: 1927, label: "Hội nghị Solvay", color: "#06b6d4" },
            ],
        },
        {
            title: "Nguyên Lý Bất Định Heisenberg",
            content: "Năm 1927, Werner Heisenberg phát hiện: bạn không thể đồng thời biết chính xác cả vị trí và động lượng của một hạt. Càng biết rõ vị trí, càng mơ hồ về động lượng — và ngược lại.\n\nĐây không phải hạn chế của thiết bị đo — mà là bản chất của vũ trụ. Hạt lượng tử không có vị trí và động lượng xác định đồng thời.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "Δx · Δp ≥ ℏ/2",
            meaning: "Nguyên lý bất định Heisenberg. Tích của độ bất định vị trí và độ bất định động lượng luôn lớn hơn hoặc bằng hằng số Planck chia 2.",
            variables: [
                { symbol: "Δx", desc: "Độ bất định vị trí" },
                { symbol: "Δp", desc: "Độ bất định động lượng" },
                { symbol: "ℏ", desc: "Hằng số Planck rút gọn = h/2π" },
            ],
            example: "Electron bị giam trong nguyên tử (Δx ≈ 10⁻¹⁰ m) có Δp ≥ 5×10⁻²⁵ kg·m/s. Vận tốc bất định ≈ 5×10⁵ m/s — nghĩa là electron 'dao động' liên tục trong nguyên tử, không đứng yên.",
        },
        {
            title: "Hàm Sóng Schrödinger",
            content: "Năm 1926, Erwin Schrödinger mô tả trạng thái lượng tử bằng hàm sóng ψ. Bình phương của hàm sóng cho xác suất tìm thấy hạt tại một vị trí.\n\nHàm sóng tiến hóa theo thời gian một cách xác định — nhưng khi đo, nó 'sụp đổ' về một trạng thái cụ thể. Đây là vấn đề đo lường nổi tiếng chưa có lời giải triết học hoàn chỉnh.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Tôi không thích nó, và tôi hối hận vì đã có liên quan đến nó.",
            author: "Erwin Schrödinger",
            role: "Về lý thuyết lượng tử, trong thư gửi Einstein",
        },
        {
            title: "Vướng Mắc Lượng Tử",
            content: "Khi hai hạt tương tác, chúng có thể trở nên vướng mắc (entangled). Đo trạng thái một hạt sẽ tức thời xác định trạng thái hạt kia, dù chúng cách xa hàng tỷ năm ánh sáng.\n\nEinstein gọi đây là 'hành động ma quái từ xa' và cho rằng lý thuyết lượng tử chưa hoàn chỉnh. Nhưng thí nghiệm của Alain Aspect (1982) và các thí nghiệm loophole-free (2015) đã xác nhận vướng mắc là thật — và có thể dùng cho máy tính lượng tử.",
            bullets: [
                "Định lý Bell (1964) — vướng mắc không thể giải thích bằng biến ẩn cục bộ",
                "Thí nghiệm Aspect (1982) — vi phạm bất đẳng thức Bell",
                "Giải Nobel Vật lý 2022 — Aspect, Clauser, Zeilinger",
                "Ứng dụng: mật mã lượng tử, viễn tải lượng tử, máy tính lượng tử",
            ],
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            title: "Con Mèo Của Schrödinger",
            content: "Thí nghiệm tưởng tượng nổi tiếng nhất của vật lý: một con mèo bị nhốt trong hộp kín cùng cơ chế phóng xạ. Nếu hạt nhân phân rã, chất độc giải phóng và mèo chết. Nếu không, mèo sống.\n\nTheo cơ học lượng tử, hạt nhân ở trạng thái chồng chập (vừa phân rã vừa chưa) cho đến khi quan sát. Vậy con mèo cũng vừa sống vừa chết — điều vô lý theo trực giác.\n\nSchrödinger đưa ra ví dụ này để chế giễu lý thuyết lượng tử, nhưng nó trở thành biểu tượng của nghịch lý đo lường.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f654e0?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Thuyết Tương Đối", desc: "Không-thời gian và trọng lực.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
        { title: "Mô Hình Chuẩn", desc: "Bản đồ của mọi hạt cơ bản.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-ly/mo-hinh-chuan", color: "#06b6d4", badge: "Vật lý" },
        { title: "Hạt Cơ Bản", desc: "Những viên gạch của vũ trụ.", img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=600", link: "/vat-chat/hat-co-ban", color: "#10b981", badge: "Vật chất" },
    ];

    return (
        <ArticleLayout
            title="Cơ Học Lượng Tử"
            subtitle="Vũ trụ của xác suất, bất định và vướng mắc"
            heroImg="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=2000"
            chapter="Vật lý · Chương 02"
            accentColor="#06b6d4"
            readingTime="10 phút"
            tags={["Heisenberg", "Schrödinger", "Vướng mắc", "Hàm sóng"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}