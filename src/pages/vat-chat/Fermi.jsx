import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function Fermi() {
    const sections = [
        {
            title: "Câu Hỏi Bất Hủ — 'Họ Đâu Rồi?'",
            content: "Năm 1950, trong bữa trưa tại phòng thí nghiệm Los Alamos, nhà vật lý Enrico Fermi hỏi: 'Nếu vũ trụ có vô số nền văn minh tiên tiến, thì họ đâu rồi?'\n\nĐây là nghịch lý Fermi — mâu thuẫn giữa ước tính xác suất cao về sự sống ngoài Trái Đất và việc chúng ta chưa có bằng chứng nào.\n\nNgân Hà có 100-400 tỷ ngôi sao, hàng chục tỷ hành tinh đá trong vùng sinh sống. Nếu chỉ 1% có sự sống, và 1% trong số đó có trí tuệ, thì phải có hàng trăm nền văn minh. Vậy tại sao chúng ta chưa thấy tín hiệu nào?",
            img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
            imgAlt: "Ăng-ten vô tuyến — tìm kiếm tín hiệu ngoài Trái Đất",
        },
        {
            type: "stats",
            items: [
                { value: 400, prefix: "~", suffix: " tỷ", label: "Sao trong Ngân Hà", color: "#10b981" },
                { value: 1000, prefix: ">", label: "Nền văn minh tiềm năng (ước tính)", color: "#10b981" },
                { value: 0, label: "Tín hiệu xác nhận", color: "#10b981" },
            ],
        },
        {
            title: "Phương Trình Drake — Thước Đo Xác Suất",
            content: "Năm 1961, Frank Drake đề xuất phương trình ước tính số nền văn minh có thể liên lạc trong Ngân Hà:\n\nN = R* × f_p × n_e × f_l × f_i × f_c × L\n\nMỗi hệ số đại diện cho một xác suất:\n• R*: tốc độ hình thành sao\n• f_p: tỷ lệ sao có hành tinh\n• n_e: số hành tinh trong vùng sinh sống\n• f_l: xác suất có sự sống\n• f_i: xác suất có trí tuệ\n• f_c: xác suất có công nghệ liên lạc\n• L: thời gian nền văn minh tồn tại\n\nVấn đề: 4 hệ số cuối (f_l, f_i, f_c, L) đều chưa biết — có thể từ 0.0001 đến 1. Kết quả N có thể từ 1 đến hàng triệu, tùy giả định.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
            imgAlt: "Bầu trời đêm — nơi chứa hàng tỷ ngôi sao",
        },
        {
            type: "quote",
            content: "Hai khả năng tồn tại: hoặc chúng ta đơn độc trong vũ trụ, hoặc chúng ta không. Cả hai đều đáng sợ như nhau.",
            author: "Arthur C. Clarke",
            role: "Nhà văn khoa học viễn tưởng",
        },
        {
            title: "Mười Giải Pháp Cho Nghịch Lý",
            content: "Các nhà khoa học đề xuất nhiều giải pháp cho nghịch lý Fermi:\n\n1. Sự sống cực hiếm (Rare Earth): điều kiện cho sự sống phức tạp cực kỳ khắt khe.\n\n2. Bộ lọc lớn (Great Filter): có một rào cản mà hầu hết sự sống không vượt qua được — có thể ở quá khứ (hình thành tế bào) hoặc tương lai (tự hủy diệt).\n\n3. Thời gian vũ trụ: chúng ta có thể là nền văn minh đầu tiên.\n\n4. Khoảng cách quá lớn: vũ trụ quá rộng để liên lạc hiệu quả.\n\n5. Không muốn liên lạc (Zoo Hypothesis): họ quan sát chúng ta nhưng không can thiệp.\n\n6. Chúng ta không nhận ra tín hiệu: công nghệ của họ quá tiên tiến.\n\n7. Đã từng đến (Ancient Aliens): nhưng không để lại bằng chứng rõ ràng.\n\n8. Tự hủy diệt: mọi nền văn minh đều diệt vong trước khi trở thành liên sao.\n\n9. Sự sống nhân tạo: họ đã chuyển thành AI và không còn dạng sinh học.\n\n10. Chúng ta đang ở trong mô phỏng: thực tế không như chúng ta tưởng.",
            bullets: [
                "Great Filter: rào cản ngăn cản sự sống tiến hóa",
                "Nếu chúng ta vượt qua — chúng ta có thể là duy nhất",
                "Nếu chưa vượt qua — tương lai nhân loại bị đe dọa",
                "Sự im lặng của vũ trụ có thể là dấu hiệu cảnh báo",
            ],
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
            imgAlt: "Vũ trụ im lặng — minh họa nghịch lý Fermi",
        },
        {
            title: "SETI — Nỗ Lực Tìm Kiếm",
            content: "SETI (Search for Extraterrestrial Intelligence) là chương trình tìm kiếm tín hiệu vô tuyến từ nền văn minh ngoài Trái Đất, bắt đầu từ năm 1960 (Dự án Ozma).\n\nCác nỗ lực chính:\n\n• Arecibo Message (1974): thông điệp vô tuyến gửi đến cụm sao M13, cách 25.000 ly.\n\n• Wow! Signal (1977): tín hiệu vô tuyến mạnh kéo dài 72 giây, chưa giải thích được. Đây là ứng viên sáng giá nhất nhưng không lặp lại.\n\n• Breakthrough Listen (2015): dự án 100 triệu USD, nghe 1 triệu sao gần nhất.\n\n• FAST (Trung Quốc): kính vô tuyến lớn nhất thế giới, đường kính 500 m.\n\nĐến nay, chưa có tín hiệu nào được xác nhận. Nhưng vũ trụ rộng lớn — chúng ta chỉ mới tìm kiếm một phần cực nhỏ.",
            img: "https://images.unsplash.com/photo-1583952235597-e5c9d0c8f222?q=80&w=1200",
            imgAlt: "Kính thiên văn vô tuyến — công cụ tìm kiếm sự sống ngoài hành tinh",
        },
    ];

    const relatedArticles = [
        { title: "Nguồn Gốc Sự Sống", desc: "Sự sống hình thành từ đâu?", img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=600", link: "/vat-chat/su-song", color: "#10b981", badge: "Vật chất" },
        { title: "Ngoại Hành Tinh", desc: "Nơi có thể có sự sống khác.", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600", link: "/thien-van/ngoai-hanh-tinh", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Thiên Hà", desc: "Hàng tỷ thiên hà, mỗi thiên hà hàng tỷ sao.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/thien-ha", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Nghịch Lý Fermi"
            subtitle="Nếu vũ trụ đầy sự sống, tại sao chúng ta không nghe thấy ai?"
            heroImg="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000"
            chapter="Vật chất · Chương 05"
            accentColor="#10b981"
            readingTime="8 phút"
            tags={["Fermi Paradox", "SETI", "Drake", "Great Filter"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}