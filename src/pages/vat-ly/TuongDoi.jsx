import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function TuongDoi() {
    const sections = [
        {
            title: "Hai Trụ Cột Của Vật Lý Hiện Đại",
            content: "Năm 1905, Albert Einstein — một nhân viên văn phòng bằng sáng chế 26 tuổi — công bố thuyết tương đối hẹp, thay đổi hoàn toàn hiểu biết của nhân loại về không gian và thời gian.\n\nMười năm sau, ông hoàn thiện thuyết tương đối rộng, mô tả trọng lực không phải là lực mà là sự uốn cong của không-thời gian bởi khối lượng và năng lượng.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "E = mc²",
            meaning: "Khối lượng và năng lượng là hai mặt của cùng một thực thể. Khối lượng có thể chuyển hóa thành năng lượng và ngược lại. Đây là công thức nổi tiếng nhất trong lịch sử khoa học.",
            variables: [
                { symbol: "E", desc: "Năng lượng (Joule)" },
                { symbol: "m", desc: "Khối lượng (kg)" },
                { symbol: "c", desc: "Vận tốc ánh sáng ≈ 3×10⁸ m/s" },
            ],
            example: "1 gram vật chất chuyển hóa hoàn toàn thành năng lượng sẽ giải phóng 9×10¹³ Joule — tương đương 21 kiloton TNT, gấp 1.5 lần quả bom Hiroshima.",
        },
        {
            title: "Nguyên Lý Tương Đối",
            content: "Hai tiên đề cơ bản của thuyết tương đối hẹp:\n\n1. Các định luật vật lý là như nhau trong mọi hệ quy chiếu quán tính.\n\n2. Vận tốc ánh sáng trong chân không là hằng số (c ≈ 299.792.458 m/s) với mọi người quan sát, bất kể nguồn sáng hay người quan sát chuyển động như thế nào.",
            bullets: [
                "Đồng hồ chuyển động chậm hơn đồng hồ đứng yên",
                "Vật chuyển động bị co ngắn theo chiều chuyển động",
                "Khối lượng tăng theo vận tốc — không thể đạt vận tốc ánh sáng",
                "Đồng thời chỉ có tính tương đối — phụ thuộc người quan sát",
            ],
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "t' = t / √(1 − v²/c²)",
            meaning: "Sự giãn nở thời gian (Time Dilation). Thời gian trôi chậm hơn cho vật chuyển động nhanh so với người quan sát đứng yên.",
            variables: [
                { symbol: "t'", desc: "Thời gian đo bởi người quan sát đứng yên" },
                { symbol: "t", desc: "Thời gian riêng của vật chuyển động" },
                { symbol: "v", desc: "Vận tốc tương đối" },
                { symbol: "c", desc: "Vận tốc ánh sáng" },
            ],
            example: "Phi hành gia bay với 99.5% vận tốc ánh sáng trong 1 năm (theo đồng hồ tàu) sẽ trở về Trái Đất sau 10 năm đã trôi qua. Đây là hiệu ứng được kiểm chứng bởi đồng hồ nguyên tử trên máy bay và vệ tinh GPS.",
        },
        {
            type: "stats",
            items: [
                { value: 1905, label: "Năm tương đối hẹp", color: "#06b6d4" },
                { value: 1915, label: "Năm tương đối rộng", color: "#06b6d4" },
                { value: 38, suffix: " μs/ngày", label: "GPS hiệu chỉnh", color: "#06b6d4" },
            ],
        },
        {
            type: "quote",
            content: "Thời gian là một ảo ảnh. Trên thực tế, nó không tồn tại.",
            author: "Albert Einstein",
            role: "Trong thư gửi gia đình Besso, 1955",
        },
        {
            title: "Trọng Lực — Sự Uốn Cong Không-Thời Gian",
            content: "Theo thuyết tương đối rộng, khối lượng uốn cong không-thời gian quanh nó, và chính sự uốn cong đó là trọng lực.\n\nTrái Đất không bị Mặt Trời 'hút' — Trái Đất di chuyển theo đường trắc địa (đường ngắn nhất) trong không-thời gian đã bị Mặt Trời uốn cong. Tương tự, ánh sáng từ ngôi sao xa bị bẻ cong khi đi qua gần Mặt Trời — hiện tượng được Arthur Eddington xác nhận trong nhật thực 1919.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            type: "formula",
            formula: "Gμν + Λgμν = (8πG/c⁴) · Tμν",
            meaning: "Phương trình trường Einstein — trái tim của thuyết tương đối rộng. Nó mô tả mối quan hệ giữa hình học không-thời gian (vế trái) và vật chất-năng lượng (vế phải).",
            variables: [
                { symbol: "Gμν", desc: "Tensor Einstein — độ cong không-thời gian" },
                { symbol: "Λ", desc: "Hằng số vũ trụ" },
                { symbol: "Tμν", desc: "Tensor năng lượng-xung lượng" },
                { symbol: "G", desc: "Hằng số hấp dẫn" },
            ],
            example: "Khi Einstein thêm hằng số Λ vào năm 1917 để giữ vũ trụ tĩnh, sau đó ông gọi đó là 'sai lầm lớn nhất'. Nhưng năm 1998, Λ quay lại như ứng viên cho năng lượng tối — chiếm 68% vũ trụ.",
        },
        {
            title: "Kiểm Chứng Thực Nghiệm",
            content: "Thuyết tương đối rộng không chỉ là toán học đẹp — nó được kiểm chứng bằng hàng loạt thí nghiệm:\n\n• Nhật thực 1919 — Eddington đo ánh sáng sao bị bẻ cong khi qua Mặt Trời.\n\n• Dịch chuyển đỏ hấp dẫn — đồng hồ ở thấp chạy chậm hơn đồng hồ ở cao.\n\n• Vệ tinh GPS — hiệu chỉnh 38 μs/ngày nếu không sẽ sai 10 km.\n\n• Sóng hấp dẫn — LIGO 2015 phát hiện gợn sóng không-thời gian từ hai lỗ đen va chạm.\n\n• Hình ảnh lỗ đen — EHT 2019 chụp được chân trời sự kiện M87*.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Cơ Học Lượng Tử", desc: "Thế giới của xác suất và bất định.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-ly/luong-tu", color: "#06b6d4", badge: "Vật lý" },
        { title: "Sóng Hấp Dẫn", desc: "Tiếng vọng từ vũ trụ sơ khai.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/vat-ly/song-hap-dan", color: "#06b6d4", badge: "Vật lý" },
        { title: "Lỗ Đen", desc: "Nơi không-thời gian bị xé toạc.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Thuyết Tương Đối"
            subtitle="Khi không gian, thời gian và trọng lực cùng uốn cong"
            heroImg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
            chapter="Vật lý · Chương 01"
            accentColor="#06b6d4"
            readingTime="9 phút"
            tags={["Einstein", "E=mc²", "Không-thời gian", "GPS"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}