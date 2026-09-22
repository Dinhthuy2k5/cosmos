import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function TuongLai() {
    const sections = [
        {
            title: "Ba Kịch Bản Tận Thế",
            content: "Số phận cuối cùng của vũ trụ phụ thuộc vào một con số: mật độ trung bình của vũ trụ so với mật độ tới hạn.\n\nNếu mật độ nhỏ hơn mật độ tới hạn: vũ trụ giãn nở mãi mãi, kết thúc lạnh lẽo (Big Freeze).\n\nNếu mật độ lớn hơn: hấp dẫn sẽ đảo ngược giãn nở, vũ trụ co lại thành điểm kỳ dị (Big Crunch).\n\nNếu năng lượng tối tăng cường: vũ trụ bị xé toạc (Big Rip).\n\nDữ liệu hiện tại cho thấy Big Freeze là khả năng cao nhất.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 100, prefix: "10^", suffix: " năm", label: "Lỗ đen cuối cùng bốc hơi", color: "#64748b" },
                { value: 0, suffix: "K", label: "Nhiệt độ cuối cùng", color: "#64748b" },
                { value: 3, label: "Kịch bản tận thế", color: "#64748b" },
            ],
        },
        {
            title: "Big Freeze — Đóng Băng Lớn",
            content: "Trong kịch bản khả dĩ nhất, vũ trụ sẽ tiếp tục giãn nở mãi mãi. Sau hàng nghìn tỷ năm, các thiên hà lùi xa nhau đến mức ánh sáng không thể đuổi kịp.\n\nCác ngôi sao cạn kiệt nhiên liệu và tắt lụi. Sao lùn đỏ cuối cùng — những ngôi sao sống lâu nhất — cũng biến mất sau 10¹⁴ năm. Vũ trụ chìm vào đêm tối vĩnh cửu ở gần độ không tuyệt đối.",
            bullets: [
                "10¹⁴ năm: Ngôi sao cuối cùng tắt",
                "10¹⁵ năm: Hành tinh rời khỏi quỹ đạo",
                "10⁴⁰ năm: Proton phân rã (nếu tồn tại)",
                "10¹⁰⁰ năm: Lỗ đen cuối cùng bốc hơi",
            ],
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Cái chết của vũ trụ không phải là một sự kiện, mà là một quá trình kéo dài vô tận — chậm đến mức thời gian mất đi ý nghĩa.",
            author: "Brian Greene",
            role: "Nhà vật lý lý thuyết, Đại học Columbia",
        },
        {
            title: "Big Rip — Xé Toạc Lớn",
            content: "Nếu năng lượng tối tăng cường theo thời gian (phantom energy với w < -1), kết cục sẽ kịch tính hơn nhiều. Sau khoảng 22 tỷ năm nữa, mật độ năng lượng tối đạt mức cực đại.\n\nKhi đó: thiên hà bị xé rách, hệ Mặt Trời tan rã, Trái Đất rời khỏi quỹ đạo. Cuối cùng, ngay cả nguyên tử cũng bị xé thành hạ nguyên tử, rồi không-thời gian bị phá vỡ.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            title: "Big Crunch — Co Lại Lớn",
            content: "Nếu hấp dẫn đủ mạnh để đảo ngược giãn nở, vũ trụ sẽ co lại. Các thiên hà lao vào nhau với tốc độ ngày càng lớn. Vũ trụ nóng dần lên.\n\nCuối cùng, mọi thứ sụp đổ về một điểm kỳ dị giống như Big Bang — nhưng theo chiều ngược lại. Một số nhà vật lý đề xuất Big Bounce: vũ trụ có thể dao động, co-giãn vô hạn lần.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            title: "Kỷ Nguyên Thoái Hóa",
            content: "Dù kịch bản nào xảy ra, có một kỷ nguyên trung gian: Kỷ nguyên thoái hóa (Degenerate Era). Vũ trụ có các thiên hà, nhưng tất cả sao đã tắt. Còn lại: sao lùn trắng, sao neutron, lỗ đen.\n\nTrong kỷ nguyên này, sự sống không thể tồn tại. Không có nguồn năng lượng nào ngoài bức xạ Hawking cực yếu từ lỗ đen. Thời gian trôi qua vô nghĩa — 10³⁰ năm, 10⁴⁰ năm, 10¹⁰⁰ năm.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Năng Lượng Tối", desc: "Thế lực đang định hình số phận vũ trụ.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=600", link: "/vu-tru-hoc/nang-luong-toi", color: "#ec4899", badge: "Chương 05" },
        { title: "Lỗ Đen", desc: "Vật thể cuối cùng tồn tại trong vũ trụ.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Vụ Nổ Lớn", desc: "Khởi nguyên — và có thể là kết thúc.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/vu-tru-hoc/big-bang", color: "#f59e0b", badge: "Chương 01" },
    ];

    return (
        <ArticleLayout
            title="Số Phận Vũ Trụ"
            subtitle="Ba kịch bản tận thế và điều gì chờ đợi ở cuối thời gian"
            heroImg="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=2000"
            chapter="Vũ trụ học · Chương 06"
            accentColor="#64748b"
            readingTime="8 phút"
            tags={["Big Freeze", "Big Rip", "Big Crunch", "Heat Death"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}