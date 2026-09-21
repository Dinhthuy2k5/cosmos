// src/pages/BlackHole.jsx
import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

export default function BlackHole() {
    const sections = [
        {
            title: "Chân Trời Sự Kiện",
            content: "Khi một ngôi sao khổng lồ cạn kiệt nhiên liệu và sụp đổ dưới chính lực hấp dẫn của nó, nó tạo ra Lỗ đen. Ranh giới vô hình bao quanh lỗ đen gọi là Chân trời sự kiện (Event Horizon).\n\nMột khi bạn bước qua vạch kẻ vô hình này, vận tốc cần thiết để thoát ra lớn hơn cả vận tốc ánh sáng. Tức là không một thứ gì có thể trốn thoát - kể cả ánh sáng.",
            img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000"
        },
        {
            type: "stats",
            items: [
                { value: "Sgr A*", label: "Hố đen trung tâm Ngân Hà" },
                { value: "4 Triệu", label: "Khối lượng Mặt Trời" },
                { value: "2019", label: "Năm chụp ảnh hố đen đầu tiên" }
            ]
        },
        {
            title: "Hiệu Ứng Mì Ống",
            content: "Nếu bạn rơi vào lỗ đen chân trước, lực hấp dẫn tác động lên chân bạn sẽ mạnh hơn hàng triệu lần so với lực tác động lên đầu bạn.\n\nCơ thể bạn sẽ bị kéo dài ra và ép mỏng lại thành một sợi nguyên tử dài. Các nhà vật lý học gọi hiện tượng đáng sợ nhưng thú vị này bằng một cái tên chính thức: Spaghettification (Hiệu ứng mì ống).",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1000"
        },
        {
            title: "Phân Loại Hố Đen",
            content: "Hố đen không chỉ có một loại. Chúng được phân loại theo khối lượng:\n\n• Hố đen Sao (Stellar): 5-100 lần Mặt Trời, hình thành từ sao sụp đổ.\n• Hố đen Trung gian (Intermediate): 100-100.000 lần Mặt Trời.\n• Hố đen Siêu Khối Lượng (Supermassive): hàng triệu đến hàng tỷ lần Mặt Trời, nằm ở trung tâm hầu hết các thiên hà.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000"
        },
        {
            type: "quote",
            content: "Lỗ đen dạy chúng ta rằng không gian có thể bị xé toạc và thời gian có thể đứng yên.",
            author: "Stephen Hawking"
        },
        {
            title: "Bức Xạ Hawking",
            content: "Năm 1974, Stephen Hawking gây chấn động giới vật lý khi chứng minh rằng lỗ đen không hoàn toàn 'đen'. Chúng dần mất khối lượng bằng cách phát ra bức xạ nhiệt - gọi là Bức xạ Hawking.\n\nQuá trình này cực kỳ chậm. Một lỗ đen có khối lượng Mặt Trời sẽ mất khoảng 10⁶⁷ năm để bốc hơi hoàn toàn. Nhưng trong thời gian vô tận đó, khi mọi ngôi sao đã tắt lịm, lỗ đen sẽ là vật thể cuối cùng tồn tại trong vũ trụ.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000"
        }
    ];

    const relatedArticles = [
        { title: "Thuyết Tương Đối", desc: "Khi trọng lực bẻ cong vạn vật.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500", link: "/tri-thuc/tuong-doi" },
        { title: "Cơ Học Lượng Tử", desc: "Vũ trụ của những hạt vi mô.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=500", link: "/tri-thuc/luong-tu" },
        { title: "Điểm Kết Thúc", desc: "Số phận cuối cùng của vạn vật.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=500", link: "/tri-thuc/tuong-lai" }
    ];

    return (
        <ArticleLayout
            title="Lỗ Đen Vũ Trụ"
            subtitle="Nơi ánh sáng bị giam cầm vĩnh viễn"
            heroImg="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000"
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}