// src/pages/Quantum.jsx
import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

export default function Quantum() {
    const sections = [
        {
            title: "Thế Giới Xác Suất",
            content: "Nếu Thuyết tương đối giải thích sự vĩ đại của các vì sao, thì Cơ học Lượng tử cai trị thế giới của những thứ nhỏ bé nhất: nguyên tử, electron và quark.\n\nỞ mức độ lượng tử, vật chất không nằm ở một vị trí cụ thể. Nó tồn tại dưới dạng 'đám mây xác suất'. Chỉ khi chúng ta thực hiện phép đo (quan sát), vật chất mới quyết định vị trí thực sự của nó.",
            img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1000"
        },
        {
            type: "stats",
            items: [
                { value: "10⁻³⁵ m", label: "Kích thước Planck" },
                { value: "1900", label: "Planck khai sinh lượng tử" },
                { value: "2", label: "Trạng thái chồng chập tối thiểu" }
            ]
        },
        {
            title: "Sự Vướng Mắc Lượng Tử",
            content: "Einstein từng gọi đây là 'Tác động ma quái từ xa'. Khi hai hạt lượng tử bị vướng mắc với nhau, việc thay đổi trạng thái của hạt này sẽ NGAY LẬP TỨC thay đổi trạng thái của hạt kia, cho dù chúng cách nhau ở 2 đầu của vũ trụ.\n\nĐiều này phá vỡ giới hạn tốc độ ánh sáng, mở ra tiềm năng cho máy tính lượng tử và viễn tải thông tin.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000"
        },
        {
            type: "quote",
            content: "Chúa không chơi xúc xắc với vũ trụ.",
            author: "Albert Einstein (nhưng ông đã sai)"
        },
        {
            title: "Con Mèo Của Schrödinger",
            content: "Thí nghiệm tưởng tượng nổi tiếng nhất của vật lý: Một con mèo bị nhốt trong hộp kín cùng một cơ chế phóng xạ. Theo cơ học lượng tử, cho đến khi mở hộp, con mèo ở trạng thái 'vừa sống vừa chết' cùng lúc.\n\nSchrödinger đưa ra ví dụ này để chế giễu sự phi lý của lượng tử, nhưng nó lại trở thành biểu tượng của ngành vật lý hiện đại, minh họa khái niệm chồng chập lượng tử (superposition).",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000"
        },
        {
            title: "Máy Tính Lượng Tử",
            content: "Thay vì bit cổ điển chỉ có thể là 0 hoặc 1, máy tính lượng tử dùng qubit có thể ở trạng thái 0, 1, hoặc cả hai cùng lúc. Điều này cho phép chúng giải quyết một số bài toán nhanh hơn máy tính thường hàng tỷ lần.\n\nGoogle, IBM, và các công ty công nghệ đang chạy đua chế tạo máy tính lượng tử ổn định. Khi thành công, chúng sẽ phá vỡ mọi hệ mã hóa hiện tại và mở ra kỷ nguyên mới của điện toán.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000"
        }
    ];

    const relatedArticles = [
        { title: "Thuyết Tương Đối", desc: "Trọng lực và không-thời gian.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500", link: "/tri-thuc/tuong-doi" },
        { title: "Vật Chất Tối", desc: "Thế lực vô hình.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=500", link: "/tri-thuc/vat-chat-toi" },
        { title: "Lỗ Đen Vũ Trụ", desc: "Nơi ánh sáng bị giam cầm.", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=500", link: "/tri-thuc/lo-den" }
    ];

    return (
        <ArticleLayout
            title="Cơ Học Lượng Tử"
            subtitle="Vũ trụ của những hạt vi mô"
            heroImg="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=2000"
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}