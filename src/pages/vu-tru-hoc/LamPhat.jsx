import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function LamPhat() {
    const sections = [
        {
            title: "Ba Vấn Đề Của Big Bang Cổ Điển",
            content: "Mô hình Big Bang tiêu chuẩn để lại ba câu hỏi lớn chưa có lời giải:\n\n1. Vấn đề chân trời: Tại sao hai vùng vũ trụ cách nhau 28 tỷ năm ánh sáng lại có cùng nhiệt độ, khi chưa kịp trao đổi thông tin với nhau?\n\n2. Vấn đề độ phẳng: Tại sao vũ trụ phẳng đến mức độ cong chỉ nhỏ hơn 10⁻⁶²?\n\n3. Vấn đề đơn cực từ: Lý thuyết dự đoán từ đơn cực (monopole) phải tồn tại, nhưng chưa ai tìm thấy.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 1e-36, prefix: "10⁻³⁶ ", suffix: "s", label: "Lạm phát bắt đầu", color: "#f97316" },
                { value: 1e26, prefix: "10²⁶ ", suffix: "×", label: "Hệ số giãn nở", color: "#f97316" },
                { value: 60, label: "E-folds giãn nở", color: "#f97316" },
            ],
        },
        {
            title: "Alan Guth và Ý Tưởng Điên Rồ",
            content: "Năm 1979, khi còn là postdoc tại Cornell, Alan Guth đề xuất ý tưởng táo bạo: vũ trụ sơ khai đã trải qua giai đoạn giãn nở nhanh hơn ánh sáng theo cấp số nhân.\n\nKhông phải vật chất di chuyển nhanh hơn ánh sáng — mà chính không-thời gian tự giãn nở. Tốc độ giới hạn của ánh sáng chỉ áp dụng cho vật thể di chuyển trong không gian, không áp dụng cho bản thân không gian.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Trường Inflaton",
            content: "Lạm phát được điều khiển bởi trường vô hướng gọi là inflaton. Trường này có mật độ năng lượng khổng lồ, hoạt động như một hằng số vũ trụ tạm thời.\n\nKhi trường inflaton tìm về trạng thái năng lượng thấp nhất, năng lượng dư thừa chuyển thành vật chất và bức xạ trong một quá trình gọi là reheating (hâm nóng lại).",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Vũ trụ là một món quà miễn phí. Chúng ta đang sống trong một vũ trụ được tạo ra từ hư vô.",
            author: "Alan Guth",
            role: "Cha đẻ lý thuyết lạm phát",
        },
        {
            title: "Bằng Chứng Quan Sát",
            content: "Lạm phát không chỉ là toán học đẹp — nó để lại dấu vết quan sát được:\n\nNhiệt độ CMB đồng nhất đến 1/100.000 độ — chính xác như lạm phát dự đoán. Vũ trụ phẳng chính xác như toán học của lạm phát. Và quan trọng nhất: các sóng hấp dẫn nguyên thủy (nếu phát hiện được) sẽ là khói súng của lạm phát.",
            bullets: [
                "COBE (1992) — phát hiện dị hướng CMB đầu tiên",
                "WMAP (2003) — đo độ cong vũ trụ chính xác 1%",
                "Planck (2013) — xác nhận phổ gần như scale-invariant",
            ],
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Di Chứng Của Lạm Phát",
            content: "Lạm phát có thể đã tạo ra không chỉ một vũ trụ, mà là một đa vũ trụ (multiverse) vô hạn. Các vùng không gian khác nhau có thể có hằng số vật lý khác nhau.\n\nTheo lý thuyết eternal inflation, lạm phát không bao giờ kết thúc toàn cục — chỉ kết thúc ở các túi bong bóng nhỏ, trong đó có vũ trụ của chúng ta.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Vụ Nổ Lớn", desc: "Khởi nguyên của không gian và thời gian.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/vu-tru-hoc/big-bang", color: "#f59e0b", badge: "Chương 01" },
        { title: "Bức Xạ Nền CMB", desc: "Bức ảnh em bé của vũ trụ.", img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600", link: "/vu-tru-hoc/buc-xa-nen", color: "#eab308", badge: "Chương 03" },
        { title: "Năng Lượng Tối", desc: "Thế lực đang xé toạc vũ trụ.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=600", link: "/vu-tru-hoc/nang-luong-toi", color: "#ec4899", badge: "Chương 05" },
    ];

    return (
        <ArticleLayout
            title="Lạm Phát Vũ Trụ"
            subtitle="Khoảnh khắc vũ trụ giãn nở nhanh hơn ánh sáng"
            heroImg="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2000"
            chapter="Vũ trụ học · Chương 02"
            accentColor="#f97316"
            readingTime="8 phút"
            tags={["Lạm phát", "Inflaton", "Alan Guth", "Đa vũ trụ"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}