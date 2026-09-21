// src/pages/BigBang.jsx
import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

export default function BigBang() {
    const sections = [
        {
            title: "Điểm Kỳ Dị Ban Đầu",
            content: "Cách đây khoảng 13.8 tỷ năm, toàn bộ vũ trụ bao la mà chúng ta thấy ngày nay bị nén lại trong một điểm nhỏ hơn cả một nguyên tử. Điểm này có mật độ và nhiệt độ cao vô hạn - được gọi là Điểm kỳ dị (Singularity).\n\nTại trạng thái này, mọi định luật vật lý chúng ta biết đều sụp đổ. Không gian và thời gian thậm chí còn chưa tồn tại.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1000"
        },
        {
            type: "stats",
            items: [
                { value: "13.8", label: "Tỷ năm tuổi" },
                { value: "10⁻³²", label: "Giây - thời điểm lạm phát" },
                { value: "2.7K", label: "Nhiệt độ CMB hôm nay" }
            ]
        },
        {
            title: "Lạm Phát Vũ Trụ",
            content: "Chỉ trong một phần triệu tỷ tỷ tỷ của một giây sau vụ nổ, vũ trụ giãn nở với tốc độ nhanh hơn ánh sáng theo cấp số nhân. Quá trình này gọi là 'Lạm phát'.\n\nNó biến vũ trụ từ kích thước hạ nguyên tử thành một khối lượng khổng lồ. Quá trình này tạo ra các gợn sóng trong cấu trúc không thời gian, định hình sự phân bố của các thiên hà sau này.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000"
        },
        {
            type: "quote",
            content: "Vũ trụ không có nghĩa vụ phải có ý nghĩa với bạn.",
            author: "Neil deGrasse Tyson"
        },
        {
            title: "Bức Xạ Nền Vi Sóng (CMB)",
            content: "Năm 1964, hai nhà khoa học Arno Penzias và Robert Wilson vô tình phát hiện ra một tiếng 'ồn' vô tuyến không thể loại bỏ khỏi thiết bị của họ. Đó chính là di tích còn sót lại của Vụ Nổ Lớn.\n\nBức xạ nền vi sóng vũ trụ (Cosmic Microwave Background) là 'bức ảnh em bé' của vũ trụ - ánh sáng cổ xưa nhất mà chúng ta có thể quan sát, phát ra khi vũ trụ chỉ mới 380.000 năm tuổi.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000"
        },
        {
            title: "Sự Hình Thành Nguyên Tử Đầu Tiên",
            content: "Trong khoảng 380.000 năm đầu tiên, vũ trụ là một biển plasma nóng bỏng, đặc quánh đến mức ánh sáng không thể xuyên qua. Electron và proton lang thang tự do, va chạm liên tục.\n\nKhi vũ trụ nguội đi đến khoảng 3.000°K, các electron cuối cùng cũng bị 'bắt giữ' bởi hạt nhân để tạo thành nguyên tử trung hòa đầu tiên - chủ yếu là Hydro và Heli. Vũ trụ trở nên trong suốt, và ánh sáng có thể du hành tự do lần đầu tiên.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000"
        }
    ];

    const relatedArticles = [
        { title: "Thuyết Tương Đối", desc: "Khi trọng lực bẻ cong không-thời gian.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500", link: "/tri-thuc/tuong-doi" },
        { title: "Lỗ Đen Vũ Trụ", desc: "Nơi ánh sáng bị giam cầm vĩnh viễn.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=500", link: "/tri-thuc/lo-den" },
        { title: "Vật Chất Tối", desc: "Thế lực vô hình chi phối vạn vật.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=500", link: "/tri-thuc/vat-chat-toi" }
    ];

    return (
        <ArticleLayout
            title="Vụ Nổ Lớn"
            subtitle="Nguồn gốc của Không gian & Thời gian"
            heroImg="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000"
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}