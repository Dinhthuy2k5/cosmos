import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

export default function DarkMatter() {
    const sections = [
        {
            title: "Vật Chất Tối (Dark Matter)",
            content: "Mọi ngôi sao, hành tinh, thiên hà và con người chỉ chiếm đúng 5% tổng khối lượng của vũ trụ. 27% tiếp theo là Vật chất tối.\n\nNó không phát sáng, không phản xạ và không thể tương tác trực tiếp. Chúng ta chỉ biết nó tồn tại vì lực hấp dẫn vô hình của nó đang giữ các thiên hà xoay quanh nhau mà không bị văng tung tóe vào không gian.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1000"
        },
        {
            title: "Năng Lượng Tối (Dark Energy)",
            content: "Chiếm 68% phần còn lại, Năng lượng tối là bí ẩn lớn nhất trong vật lý hiện đại. Nó hoạt động ngược lại với trọng lực.\n\nThay vì kéo vật chất lại gần nhau, năng lượng tối đang đẩy cấu trúc của không gian giãn nở ra, và nó đẩy với một gia tốc ngày càng nhanh. Nó chính là thế lực vô hình đang xé toạc vũ trụ.",
            img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000"
        }
    ];
    return <ArticleLayout title="Vật Chất Bóng Tối" subtitle="Thế lực vô hình chi phối vạn vật" heroImg="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=2000" sections={sections} />;
}