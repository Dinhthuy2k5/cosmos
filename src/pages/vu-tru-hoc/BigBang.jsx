import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function BigBang() {
    const sections = [
        {
            title: "Điểm Kỳ Dị Ban Đầu",
            content: "Cách đây 13.8 tỷ năm, toàn bộ vũ trụ bao la ngày nay bị nén trong một điểm nhỏ hơn cả nguyên tử. Điểm này có mật độ và nhiệt độ vô hạn — được gọi là Điểm kỳ dị (Singularity).\n\nTại trạng thái này, mọi định luật vật lý chúng ta biết đều sụp đổ. Không gian và thời gian thậm chí chưa tồn tại.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
            imgAlt: "Tinh vân — biểu tượng cho khởi nguyên vũ trụ",
        },
        {
            type: "stats",
            items: [
                { value: 13.8, suffix: " tỷ", label: "Năm tuổi vũ trụ", color: "#f59e0b", decimals: 1 },
                { value: 2.725, suffix: "K", label: "Nhiệt độ CMB", color: "#f59e0b", decimals: 3 },
                { value: 380000, label: "Năm — thời điểm tái kết hợp", color: "#f59e0b" },
            ],
        },
        {
            title: "Kỷ Nguyên Planck",
            content: "Trong 10⁻⁴³ giây đầu tiên, vũ trụ có kích thước bằng một hạt Planck. Bốn lực cơ bản — hấp dẫn, điện từ, mạnh, yếu — hòa làm một. Vật lý hiện đại chưa thể mô tả thời điểm này vì thuyết tương đối rộng và cơ học lượng tử xung đột.",
            bullets: [
                "10⁻⁴³ giây — Thời gian Planck, giới hạn vật lý",
                "Nhiệt độ: 10³² Kelvin — nóng gấp 10²⁵ lần lõi Mặt Trời",
                "Mật độ: 10⁹⁶ kg/m³ — gấp 10⁸⁰ lần nước",
            ],
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Lạm Phát Vũ Trụ",
            content: "Chỉ trong một phần triệu tỷ tỷ tỷ giây, vũ trụ giãn nở nhanh hơn ánh sáng theo cấp số nhân. Kích thước vũ trụ tăng lên 10²⁶ lần chỉ trong tích tắc.\n\nLạm phát giải thích tại sao vũ trụ phẳng, đồng nhất và không có từ đơn cực — ba vấn đề mà mô hình Big Bang cổ điển không giải thích được.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Vũ trụ không có nghĩa vụ phải có ý nghĩa với bạn.",
            author: "Neil deGrasse Tyson",
            role: "Nhà vật lý thiên văn",
        },
        {
            title: "Tái Kết Hợp — 380.000 Năm",
            content: "Trong 380.000 năm đầu, vũ trụ là biển plasma nóng bỏng đặc đến mức ánh sáng không thể xuyên qua. Electron và proton va chạm liên tục với photon.\n\nKhi vũ trụ nguội xuống 3.000K, electron bị bắt giữ bởi hạt nhân để tạo thành nguyên tử trung hòa đầu tiên. Vũ trụ trở nên trong suốt — ánh sáng đầu tiên có thể du hành tự do.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1200",
        },
        {
            title: "Bức Xạ Nền Vi Sóng — CMB",
            content: "Năm 1964, Penzias và Wilson vô tình phát hiện tiếng ồn vô tuyến không thể loại bỏ. Đó là di tích của Vụ Nổ Lớn — ánh sáng cổ xưa nhất có thể quan sát.\n\nCMB là bức ảnh em bé của vũ trụ, cho chúng ta thấy vũ trụ khi chỉ mới 380.000 năm tuổi.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Hình Thành Cấu Trúc Lớn",
            content: "Sau tái kết hợp, các gợn sóng mật độ nhỏ trong CMB trở thành hạt giống cho mọi cấu trúc vũ trụ. Dưới tác dụng của hấp dẫn, vật chất tối kéo khí hydro lại với nhau.\n\n200 triệu năm sau: ngôi sao đầu tiên cháy sáng. 1 tỷ năm sau: những thiên hà đầu tiên ra đời. Ngày nay: 2 nghìn tỷ thiên hà tồn tại trong vũ trụ quan sát được.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Lạm Phát Vũ Trụ", desc: "Khoảnh khắc giãn nở nhanh hơn ánh sáng.", img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=600", link: "/vu-tru-hoc/lam-phat", color: "#f97316", badge: "Chương 02" },
        { title: "Bức Xạ Nền CMB", desc: "Bức ảnh em bé của vũ trụ.", img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600", link: "/vu-tru-hoc/buc-xa-nen", color: "#eab308", badge: "Chương 03" },
        { title: "Số Phận Vũ Trụ", desc: "Ba kịch bản tận thế có thể xảy ra.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=600", link: "/vu-tru-hoc/tuong-lai", color: "#64748b", badge: "Chương 06" },
    ];

    return (
        <ArticleLayout
            title="Vụ Nổ Lớn"
            subtitle="Nguồn gốc của Không gian, Thời gian và Vật chất"
            heroImg="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000"
            chapter="Vũ trụ học · Chương 01"
            accentColor="#f59e0b"
            readingTime="9 phút"
            tags={["Big Bang", "CMB", "Lạm phát", "Vũ trụ sơ khai"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}