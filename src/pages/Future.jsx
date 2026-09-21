import React from 'react';
import ArticleLayout from '../components/ArticleLayout';

export default function Future() {
    const sections = [
        {
            title: "Vụ Đóng Băng Lớn (Big Freeze)",
            content: "Do Năng lượng tối tiếp tục đẩy vũ trụ giãn nở, các thiên hà sẽ dần lùi xa nhau đến mức ánh sáng không thể đuổi kịp.\n\nCác ngôi sao tắt lụi, vật chất phân rã. Vũ trụ sẽ chìm vào một cõi vô tận lạnh lẽo, tĩnh lặng tuyệt đối và tối tăm ở mức 0 độ tuyệt đối (-273.15°C). Đây là giả thuyết có khả năng xảy ra cao nhất.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000"
        },
        {
            title: "Sự Bốc Hơi Của Lỗ Đen",
            content: "Stephen Hawking đã chứng minh rằng lỗ đen không đen hoàn toàn, chúng phát ra một dạng bức xạ (Bức xạ Hawking).\n\nTrong kỷ nguyên tối của vũ trụ (hàng ngàn tỷ năm nữa), khi không còn ngôi sao nào, lỗ đen sẽ là vật thể cuối cùng tồn tại. Và rồi qua thời gian vô tận, chúng cũng sẽ dần 'bốc hơi' và biến mất hoàn toàn vào hư vô.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000"
        }
    ];
    return <ArticleLayout title="Điểm Kết Thúc" subtitle="Số phận cuối cùng của vạn vật" heroImg="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000" sections={sections} />;
}