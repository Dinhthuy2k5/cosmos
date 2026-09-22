import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function DuHanhThoiGian() {
    const sections = [
        {
            title: "Giấc Mơ Của Nhân Loại",
            content: "Du hành thời gian — khả năng di chuyển giữa các thời điểm khác nhau — là một trong những giấc mơ lâu đời nhất của con người. Từ tiểu thuyết The Time Machine của H.G. Wells (1895) đến phim Back to the Future, ý tưởng này luôn hấp dẫn.\n\nNhưng vật lý hiện đại cho thấy du hành thời gian không đơn giản. Có nhiều con đường lý thuyết — nhưng tất cả đều cực kỳ khó khăn, hoặc có thể bất khả thi.",
            img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200",
            imgAlt: "Đồng hồ cát — biểu tượng của thời gian",
        },
        {
            type: "stats",
            items: [
                { value: 1895, label: "The Time Machine — H.G. Wells", color: "#ec4899" },
                { value: 1949, label: "Einstein tiên đoán du hành ngược thời gian", color: "#ec4899" },
                { value: 0, label: "Bằng chứng khách du hành từ tương lai", color: "#ec4899" },
            ],
        },
        {
            title: "Du Hành Về Tương Lai — Đã Làm Được",
            content: "Du hành về tương lai không chỉ khả thi — chúng ta đã làm. Đây là hệ quả của thuyết tương đối hẹp.\n\nNếu bạn du hành với vận tốc gần c (99.5%), thời gian của bạn trôi chậm hơn so với Trái Đất. Khi bạn trở về sau 1 năm chủ quan, Trái Đất đã trôi qua 10 năm — bạn đã du hành về tương lai.\n\nThí nghiệm Hafele-Keating (1971): hai đồng hồ nguyên tử cesium bay vòng quanh Trái Đất trên máy bay thương mại, so sánh với đồng hồ đứng yên. Kết quả: đồng hồ bay chậm hơn khoảng 59 nanosecond — chính xác như tiên đoán của thuyết tương đối.",
            bullets: [
                "Vệ tinh GPS: hiệu chỉnh 38 μs/ngày",
                "Phi hành gia trên ISS: trẻ hơn 0.01 giây sau 6 tháng",
                "Muon sinh ra trong khí quyển: sống lâu hơn nhờ giãn nở thời gian",
                "Du hành xa với tốc độ cao: phương tiện du hành tương lai hiệu quả nhất",
            ],
            img: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200",
            imgAlt: "Trạm không gian ISS — minh họa du hành tương lai",
        },
        {
            type: "formula",
            formula: "t = t₀ · √(1 − v²/c²)",
            meaning: "Thời gian riêng t của vật chuyển động với vận tốc v, so với thời gian t₀ của người quan sát đứng yên. Khi v → c, t → 0 — thời gian dừng lại với vật chuyển động.",
            variables: [
                { symbol: "t", desc: "Thời gian đo bởi vật chuyển động" },
                { symbol: "t₀", desc: "Thời gian của người quan sát đứng yên" },
                { symbol: "v", desc: "Vận tốc vật" },
                { symbol: "c", desc: "Vận tốc ánh sáng" },
            ],
            example: "Nếu bạn bay với vận tốc 0.999c đến sao Alpha Centauri (4.37 ly), thời gian bạn trải nghiệm chỉ là 0.2 năm — nhưng khi trở về Trái Đất, đã trôi qua 8.74 năm. Bạn đã du hành 8.5 năm về tương lai.",
        },
        {
            type: "quote",
            content: "Con người sẽ không bao giờ du hành ngược thời gian. Nhưng nếu họ làm được, điều đầu tiên họ sẽ làm là cố gắng thay đổi quá khứ — và điều đó có nghĩa là họ chưa bao giờ tồn tại.",
            author: "Stephen Hawking",
            role: "Nhà vật lý lý thuyết (lập luận 'Chronology Protection')",
        },
        {
            title: "Du Hành Về Quá Khứ — Bất Khả Thi?",
            content: "Du hành về quá khứ khó hơn nhiều. Có ba con đường lý thuyết:\n\n1. Lỗ sâu (Wormhole): cần vật chất âm — chưa tìm thấy.\n\n2. Vòng lặp thời gian (Closed Timelike Curve): nghiệm của phương trình Einstein. Năm 1949, Kurt Gödel tìm ra nghiệm cho phép du hành thời gian — nhưng vũ trụ đó đang quay, không giống vũ trụ thật.\n\n3. Vũ trụ dây (Cosmic String): hai sợi dây vũ trụ di chuyển ngược chiều có thể tạo đường tắt thời gian — nhưng dây vũ trụ chưa quan sát được.\n\nStephen Hawking đề xuất 'Nguyên lý bảo vệ niên đại' (Chronology Protection Conjecture): các định luật vật lý ngăn chặn du hành thời gian ở quy mô vĩ mô. Nhưng chưa có chứng minh.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
            imgAlt: "Tinh vân xoáy — minh họa vòng lặp thời gian",
        },
        {
            title: "Thí Nghiệm Thực Tế — Có Ai Đến Từ Tương Lai?",
            content: "Năm 2009, Stephen Hawking tổ chức một 'bữa tiệc cho khách du hành thời gian'. Ông gửi thiệp mời sau khi bữa tiệc kết thúc — nếu ai đó từ tương lai biết, họ sẽ đến dự.\n\nKhông ai đến. Hawking kết luận: du hành thời gian về quá khứ bất khả thi.\n\nCác nhà vật lý cũng tìm dấu vết khách du hành thời gian khác:\n\n• Tìm kiếm 'dấu vết kỹ thuật số': không có bằng chứng\n• Phân tích ảnh lịch sử: không có người lạ kỳ\n• Theo dõi tín hiệu SETI: không có thông điệp từ tương lai\n\nKết quả: không có bằng chứng nào về khách du hành thời gian, củng cố giả thuyết bất khả thi.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
            imgAlt: "Bầu trời sao — minh họa bí ẩn du hành thời gian",
        },
    ];

    const relatedArticles = [
        { title: "Lỗ Sâu", desc: "Con đường lý thuyết chính để du hành thời gian.", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600", link: "/khong-thoi-gian/lo-sau", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Thời Gian", desc: "Bản chất và mũi tên thời gian.", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600", link: "/khong-thoi-gian/thoi-gian", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Thuyết Tương Đối", desc: "Cơ sở lý thuyết du hành tương lai.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Du Hành Thời Gian"
            subtitle="Giấc mơ bất khả thi hay khả năng của tương lai?"
            heroImg="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2000"
            chapter="Không-thời gian · Chương 04"
            accentColor="#ec4899"
            readingTime="9 phút"
            tags={["Time Travel", "Hawking", "Gödel", "Chronology Protection"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}