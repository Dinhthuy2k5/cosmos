// src/pages/Relativity.jsx
import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

export default function Relativity() {
    const sections = [
        {
            title: "Vải Không - Thời Gian",
            content: "Trước Einstein, trọng lực được coi là một lực hút vô hình. Albert Einstein đã định nghĩa lại tất cả: Trọng lực không phải là lực, mà là sự uốn cong của cấu trúc Không-Thời gian.\n\nHãy tưởng tượng vũ trụ như một tấm nệm cao su căng phẳng. Nếu bạn đặt một quả banh bowling (Mặt Trời) lên, tấm nệm sẽ lún xuống. Những viên bi nhỏ hơn (Trái Đất) sẽ lăn quanh phần lún đó. Đó chính là trọng lực.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
        },
        {
            type: "stats",
            items: [
                { value: "1905", label: "Tương đối hẹp ra đời" },
                { value: "1915", label: "Tương đối rộng ra đời" },
                { value: "E=mc²", label: "Phương trình vĩ đại nhất" }
            ]
        },
        {
            title: "Sự Trôi Chậm Của Thời Gian",
            content: "Thời gian không trôi đi giống nhau ở mọi nơi. Khi bạn di chuyển càng nhanh (gần vận tốc ánh sáng), hoặc ở gần một vật thể có khối lượng càng lớn (như lỗ đen), thời gian của bạn sẽ trôi chậm lại so với người ở Trái Đất.\n\nHiện tượng này được gọi là Time Dilation (Sự giãn nở thời gian) - nền tảng của vô số bộ phim khoa học viễn tưởng như Interstellar.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1000"
        },
        {
            type: "quote",
            content: "Hãy tưởng tượng bạn đặt tay lên bếp lò nóng trong một phút - nó giống như một giờ. Nhưng ngồi bên cạnh một cô gái xinh đẹp trong một giờ - nó giống như một phút. Đó là tính tương đối.",
            author: "Albert Einstein"
        },
        {
            title: "E=mc² – Phương Trình Vĩ Đại",
            content: "Phương trình nổi tiếng nhất mọi thời đại nói rằng khối lượng và năng lượng là hai mặt của cùng một đồng xu.\n\nMột kilogam vật chất, nếu chuyển hóa hoàn toàn thành năng lượng, sẽ giải phóng 9×10¹⁶ Joule - tương đương 21 megaton TNT, đủ san phẳng cả một thành phố lớn. Đây chính là nguyên lý hoạt động của Mặt Trời và bom hạt nhân.",
            img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000"
        },
        {
            title: "Sóng Hấp Dẫn - Tiếng Vọng Vũ Trụ",
            content: "Năm 2015, 100 năm sau khi Einstein tiên đoán, LIGO đã lần đầu tiên phát hiện sóng hấp dẫn - những gợn sóng trong cấu trúc không-thời gian do hai lỗ đen va chạm tạo ra cách đây 1.3 tỷ năm.\n\nĐây là một trong những khám phá vĩ đại nhất của thế kỷ 21, mở ra kỷ nguyên 'thiên văn học sóng hấp dẫn' - cho phép chúng ta 'nghe' thấy vũ trụ bằng cách khác ngoài ánh sáng.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000"
        }
    ];

    const relatedArticles = [
        { title: "Cơ Học Lượng Tử", desc: "Thế giới của xác suất.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=500", link: "/tri-thuc/luong-tu" },
        { title: "Lỗ Đen Vũ Trụ", desc: "Nơi thời gian đứng yên.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=500", link: "/tri-thuc/lo-den" },
        { title: "Vụ Nổ Lớn", desc: "Khởi nguyên vũ trụ.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500", link: "/tri-thuc/big-bang" }
    ];

    return (
        <ArticleLayout
            title="Thuyết Tương Đối"
            subtitle="Khi trọng lực bẻ cong vạn vật"
            heroImg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}