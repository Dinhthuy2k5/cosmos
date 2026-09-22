import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function KhongGian() {
    const sections = [
        {
            title: "Không Gian Ba Chiều — Trực Giác Của Chúng Ta",
            content: "Chúng ta di chuyển trong không gian 3 chiều: dài, rộng, cao. Mọi vật thể đều có 3 kích thước. Nhưng tại sao lại là 3 chiều? Và có thể có nhiều hơn?\n\nTrong vật lý, không gian là môi trường để vật chất và trường tồn tại, có thể uốn cong bởi khối lượng (theo thuyết tương đối rộng). Không gian không phải 'cái hộp trống rỗng' — mà là một thực thể động, có thể giãn nở, cong, và lan truyền sóng.",
            img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200",
            imgAlt: "Lưới tọa độ 3D — biểu tượng không gian",
        },
        {
            type: "stats",
            items: [
                { value: 3, label: "Chiều không gian quan sát được", color: "#ec4899" },
                { value: 93, suffix: " tỷ ly", label: "Đường kính vũ trụ quan sát được", color: "#ec4899" },
                { value: 4.4, suffix: "×10²⁶ m", label: "Bán kính vũ trụ", color: "#ec4899", decimals: 1 },
            ],
        },
        {
            title: "Không Gian Cong — Thuyết Tương Đối Rộng",
            content: "Einstein mô tả không gian không phải là mặt phẳng mà có thể cong. Độ cong được đo bởi tensor Riemann.\n\nBa loại độ cong:\n\n• Phẳng (Flat, k=0): các đường song song gặp nhau ở vô cực. Vũ trụ hiện tại dường như phẳng.\n\n• Cầu dương (Positively curved, k>0): các đường song song hội tụ. Như mặt cầu — vũ trụ 'đóng'.\n\n• Yên ngựa âm (Negatively curved, k<0): các đường song song phân kỳ. Như mặt yên ngựa — vũ trụ 'mở'.\n\nĐo CMB bởi Planck cho thấy vũ trụ phẳng với độ cong |Ω-1| < 0.005.",
            bullets: [
                "Không gian phẳng: mật độ = mật độ tới hạn",
                "Không gian đóng: mật độ > tới hạn, vũ trụ sẽ co lại",
                "Không gian mở: mật độ < tới hạn, vũ trụ giãn nở mãi",
                "Đo hiện tại: phẳng đến 0.5%",
            ],
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
            imgAlt: "Kiến trúc hình học — minh họa độ cong không gian",
        },
        {
            type: "quote",
            content: "Không gian và thời gian không phải là điều kiện chúng ta sống trong đó, mà là những cách chúng ta sắp xếp suy nghĩ của mình.",
            author: "Albert Einstein",
            role: "Trong thư gửi Michele Besso, 1918",
        },
        {
            title: "Chiều Không Gian Ẩn — Lý Thuyết Dây",
            content: "Chúng ta thấy 3 chiều không gian + 1 chiều thời gian = 4 chiều. Nhưng lý thuyết dây đề xuất có thêm 6-7 chiều không gian 'cuộn' lại ở kích thước Planck (10⁻³⁵ m) — nhỏ đến mức không thể quan sát.\n\nVí von: một sợi dây cáp nhìn từ xa trông như đường 1 chiều, nhưng lại có chiều tròn nhỏ xíu ở mỗi điểm. Tương tự, mỗi điểm trong không gian 3D của chúng ta có thể có 6 chiều nhỏ cuộn lại.\n\nLý thuyết M (11 chiều) là ứng viên cho 'thuyết vạn vật' thống nhất cả 4 lực cơ bản. Nhưng chưa có thí nghiệm kiểm chứng.",
            img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200",
            imgAlt: "Cấu trúc hình học phức tạp — minh họa chiều ẩn",
        },
        {
            title: "Khoảng Cách Trong Vũ Trụ — Không Như Ta Tưởng",
            content: "Trong vũ trụ giãn nở, khoảng cách không cố định. Có ba định nghĩa khác nhau:\n\n1. Khoảng cách đồng chuyển động (Comoving): khoảng cách không đổi theo giãn nở — dùng cho bản đồ vũ trụ.\n\n2. Khoảng cách góc (Angular diameter): dựa trên kích thước góc biểu kiến.\n\n3. Khoảng cách sáng (Luminosity): dựa trên độ sáng biểu kiến.\n\nKết quả: một thiên hà có 'khoảng cách sáng' 30 tỷ ly có thể có 'khoảng cách đồng chuyển động' chỉ 14 tỷ ly — vì ánh sáng phát ra khi nó ở gần chúng ta hơn.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
            imgAlt: "Thiên hà xa xôi — minh họa khoảng cách vũ trụ",
        },
        {
            title: "Không Gian Có Thể Chứa Vô Hạn Vật Chất?",
            content: "Nếu vũ trụ phẳng và vô hạn, thì có vô hạn thiên hà, vô hạn ngôi sao, và vô hạn bản sao của bạn. Đây là hệ quả của lý thuyết vũ trụ vô hạn trong bức tranh phẳng.\n\nVới kích thước vũ trụ 93 tỷ ly hiện tại, số cấu hình hạt có thể có là hữu hạn (mặc dù cực lớn). Nếu vũ trụ thực sự vô hạn, theo nguyên lý xác suất, mọi cấu hình có thể đều phải xảy ra ở đâu đó.\n\nĐiều này dẫn đến khả năng: có vô số bản sao của bạn đang đọc câu này ở những vùng khác nhau của vũ trụ, cách xa hàng tỷ tỷ năm ánh sáng.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
            imgAlt: "Vũ trụ sâu thẳm — minh họa tính vô hạn",
        },
    ];

    const relatedArticles = [
        { title: "Thời Gian", desc: "Chiều thứ tư bí ẩn.", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600", link: "/khong-thoi-gian/thoi-gian", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Lỗ Sâu", desc: "Cầu nối giữa hai vùng không gian.", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600", link: "/khong-thoi-gian/lo-sau", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Vụ Nổ Lớn", desc: "Không gian bắt đầu từ đâu?", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/vu-tru-hoc/big-bang", color: "#f59e0b", badge: "Vũ trụ học" },
    ];

    return (
        <ArticleLayout
            title="Chiều Không Gian"
            subtitle="Từ 3 chiều quen thuộc đến những chiều ẩn của lý thuyết dây"
            heroImg="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000"
            chapter="Không-thời gian · Chương 02"
            accentColor="#ec4899"
            readingTime="8 phút"
            tags={["Chiều không gian", "Độ cong", "Lý thuyết dây", "Vô hạn"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}