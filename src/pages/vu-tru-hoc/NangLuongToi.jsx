import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function NangLuongToi() {
    const sections = [
        {
            title: "Thế Lực Kỳ Lạ Nhất Vũ Trụ",
            content: "Năm 1998, hai nhóm nghiên cứu độc lập — Supernova Cosmology Project và High-Z Supernova Search Team — cùng công bố một phát hiện chấn động: vũ trụ đang giãn nở NGÀY CÀNG NHANH.\n\nĐiều này đi ngược lại mọi dự đoán. Nếu vũ trụ chỉ chứa vật chất và hấp dẫn, sự giãn nở phải chậm dần. Có một thế lực bí ẩn đang đẩy vũ trụ ra xa — năng lượng tối.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 68, suffix: "%", label: "Năng lượng tối", color: "#ec4899" },
                { value: -1, label: "Phương trình trạng thái (w)", color: "#ec4899", decimals: 1 },
                { value: 1998, label: "Năm phát hiện", color: "#ec4899" },
            ],
        },
        {
            title: "Siêu Tân Tinh Loại Ia — Thước Đo Vũ Trụ",
            content: "Để đo sự giãn nở vũ trụ, các nhà thiên văn cần nến chuẩn (standard candles) — vật thể có độ sáng tuyệt đối xác định. Siêu tân tinh loại Ia là ứng viên hoàn hảo.\n\nKhi sao lùn trắng hút vật chất từ sao đồng hành và vượt giới hạn Chandrasekhar (1.4 khối lượng Mặt Trời), nó phát nổ với độ sáng cực kỳ đồng nhất. Độ sáng biểu kiến cho chúng ta biết khoảng cách đến nó.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Nếu bạn muốn tạo ra một vũ trụ từ hư vô, bạn phải trả giá. Năng lượng tối chính là cái giá đó.",
            author: "Lawrence Krauss",
            role: "Nhà vật lý lý thuyết",
        },
        {
            title: "Hằng Số Vũ Trụ Của Einstein",
            content: "Năm 1917, Einstein thêm hằng số vũ trụ Λ vào phương trình trường của mình để giữ vũ trụ tĩnh — điều ông tin là đúng vào thời điểm đó.\n\nKhi Hubble phát hiện vũ trụ giãn nở năm 1929, Einstein gọi hằng số này là 'sai lầm lớn nhất' của đời mình. Nhưng 70 năm sau, chính hằng số đó quay trở lại như ứng viên hàng đầu cho năng lượng tối.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
        },
        {
            title: "Bản Chất Của Năng Lượng Tối",
            content: "Chúng ta biết năng lượng tối chiếm 68% vũ trụ và có áp suất âm. Nhưng bản chất của nó vẫn là bí ẩn lớn nhất vật lý hiện đại.\n\nBa ứng viên chính:\n\n1. Hằng số vũ trụ (Λ) — năng lượng của chính không gian trống, không đổi theo thời gian.\n\n2. Quintessence — trường động, có thể thay đổi theo thời gian và không gian.\n\n3. Sửa đổi thuyết tương đối rộng — có thể chúng ta hiểu sai về hấp dẫn ở thang vũ trụ.",
            bullets: [
                "Vấn đề năng lượng chân không — dự đoán lý thuyết lớn hơn thực tế 10¹²⁰ lần",
                "Nếu w = -1 chính xác: hằng số vũ trụ thuần túy",
                "Nếu w ≠ -1: trường động, có thể thay đổi theo thời gian",
            ],
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
        },
        {
            title: "Tác Động Lên Số Phận Vũ Trụ",
            content: "Năng lượng tối không chỉ đẩy vũ trụ giãn nở — nó quyết định số phận cuối cùng của vạn vật. Nếu năng lượng tối không đổi, vũ trụ sẽ giãn nở mãi mãi và kết thúc trong Big Freeze — lạnh lẽo, tối tăm, cô đơn.\n\nNếu năng lượng tối tăng cường theo thời gian, vũ trụ có thể kết thúc trong Big Rip — xé toạc mọi vật thể cho đến các nguyên tử và hạ nguyên tử.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Vật Chất Tối", desc: "Khối lượng vô hình của vũ trụ.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/vu-tru-hoc/vat-chat-toi", color: "#8b5cf6", badge: "Chương 04" },
        { title: "Số Phận Vũ Trụ", desc: "Ba kịch bản tận thế có thể xảy ra.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=600", link: "/vu-tru-hoc/tuong-lai", color: "#64748b", badge: "Chương 06" },
        { title: "Thuyết Tương Đối", desc: "Không-thời gian và hấp dẫn.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Năng Lượng Tối"
            subtitle="Thế lực vô hình đang xé toạc vũ trụ"
            heroImg="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=2000"
            chapter="Vũ trụ học · Chương 05"
            accentColor="#ec4899"
            readingTime="7 phút"
            tags={["Dark Energy", "Einstein", "Siêu tân tinh Ia", "Cosmological Constant"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}