import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function ThoiGian() {
    const sections = [
        {
            title: "Thời Gian — Thực Thể Hay Ảo Ảnh?",
            content: "Trong vật lý cổ điển, Newton coi thời gian là tuyệt đối — một dòng chảy đều đặn, không phụ thuộc vào bất cứ thứ gì. Một giây ở Trái Đất cũng là một giây ở sao Hỏa, ở thiên hà xa xôi.\n\nNhưng năm 1905, Einstein lật đổ quan niệm này: thời gian là tương đối, phụ thuộc vào chuyển động và trường hấp dẫn. Không có 'đồng hồ vũ trụ' chung cho mọi người quan sát.\n\nNgày nay, vật lý coi thời gian là một chiều của không-thời gian 4 chiều, có thể uốn cong, giãn nở, và có thể có điểm khởi đầu (Big Bang).",
            img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200",
            imgAlt: "Đồng hồ cát — biểu tượng của dòng chảy thời gian",
        },
        {
            type: "stats",
            items: [
                { value: 1, suffix: " giây", label: "Định nghĩa: 9.192.631.770 chu kỳ Cs-133", color: "#ec4899" },
                { value: 4.3, suffix: " tỷ năm", label: "Thời gian Trái Đất tồn tại", color: "#ec4899", decimals: 1 },
                { value: 13.8, suffix: " tỷ năm", label: "Tuổi vũ trụ", color: "#ec4899", decimals: 1 },
            ],
        },
        {
            title: "Mũi Tên Thời Gian — Tại Sao Không Đối Xứng?",
            content: "Mọi định luật vật lý cơ bản đều đối xứng theo thời gian — chúng hoạt động giống nhau nếu thời gian chạy ngược. Nhưng thực tế, chúng ta chỉ thấy thời gian chạy một chiều: trứng vỡ không tự lành, kem tan không tự đông.\n\nBa mũi tên thời gian:\n\n• Nhiệt động (Thermodynamic): entropy luôn tăng theo định luật 2 nhiệt động lực học.\n\n• Tâm lý (Psychological): chúng ta nhớ quá khứ, không nhớ tương lai.\n\n• Vũ trụ (Cosmological): vũ trụ đang giãn nở, không co lại.",
            bullets: [
                "Entropy vũ trụ luôn tăng — từ Big Bang đến nay",
                "Định luật 2 nhiệt động: không thể giảm entropy hệ kín",
                "Ý thức chỉ nhớ quá khứ, không thể 'nhớ' tương lai",
                "Nghịch lý: nếu định luật cơ bản đối xứng, tại sao thực tế bất đối xứng?",
            ],
            img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200",
            imgAlt: "Bánh răng đồng hồ cơ — minh họa tính đều đặn của thời gian",
        },
        {
            type: "formula",
            formula: "Δt' = γ · Δt",
            meaning: "Sự giãn nở thời gian theo thuyết tương đối hẹp. Đồng hồ chuyển động chạy chậm hơn đồng hồ đứng yên bởi hệ số Lorentz γ.",
            variables: [
                { symbol: "γ", desc: "Hệ số Lorentz = 1/√(1−v²/c²)" },
                { symbol: "v", desc: "Vận tốc tương đối" },
                { symbol: "c", desc: "Vận tốc ánh sáng" },
                { symbol: "Δt'", desc: "Thời gian đo bởi người quan sát đứng yên" },
            ],
            example: "Muon là hạt không bền, sống chỉ 2.2 μs. Nhưng muon sinh ra ở tầng cao khí quyển (10 km) vẫn đến được mặt đất, dù theo tính toán cổ điển chúng chỉ đi được 660 m trước khi phân rã. Nhờ chuyển động gần vận tốc ánh sáng, 'đồng hồ' của muon chạy chậm lại, giúp nó sống lâu hơn trong hệ quy chiếu của chúng ta.",
        },
        {
            type: "quote",
            content: "Thời gian là cách vũ trụ ngăn mọi thứ xảy ra cùng lúc.",
            author: "John Archibald Wheeler",
            role: "Nhà vật lý lý thuyết, đồng tác giả lý thuyết hấp dẫn lượng tử",
        },
        {
            title: "Nghịch Lý Song Sinh — Ví Dụ Kinh Điển",
            content: "Hai anh em sinh đôi. Người anh ở lại Trái Đất, người em du hành vào không gian với vận tốc 99.5% c. Sau 10 năm (theo đồng hồ Trái Đất), người em trở về.\n\nKhi gặp lại, người em trẻ hơn người anh 8 năm. Nghịch lý: nếu xét trong hệ quy chiếu của người em, thì người anh đang chuyển động — vậy người anh phải trẻ hơn mới đúng?\n\nNghịch lý được giải quyết khi nhận ra người em không ở trong hệ quán tính — cậu ta phải tăng tốc để quay đầu, phá vỡ tính đối xứng. Hiệu ứng này được kiểm chứng chính xác bởi đồng hồ nguyên tử trên máy bay và vệ tinh GPS.",
            img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200",
            imgAlt: "Đồng hồ cát với cát đang chảy",
        },
        {
            title: "Thời Gian Có Thực Sự Tồn Tại?",
            content: "Một số nhà vật lý theo thuyết khối vũ trụ (block universe) cho rằng thời gian không 'chảy' — quá khứ, hiện tại, tương lai đều tồn tại song song như các lát cắt của một khối không-thời gian.\n\nTrong bức tranh này, 'hiện tại' chỉ là ảo ảnh của ý thức. Cái chết của bạn, ngày bạn sinh ra, và khoảnh khắc này đều tồn tại vĩnh viễn trong cấu trúc không-thời gian.\n\nÝ tưởng này phù hợp với thuyết tương đối rộng, nhưng mâu thuẫn với cơ học lượng tử (nơi 'hiện tại' có vai trò đặc biệt trong sự sụp đổ hàm sóng).",
            img: "https://images.unsplash.com/photo-1435527173128-983b87201f4d?q=80&w=1200",
            imgAlt: "Vệt sao dài — dấu vết thời gian phơi sáng",
        },
    ];

    const relatedArticles = [
        { title: "Không Gian", desc: "Chiều thứ ba và các chiều ẩn.", img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=600", link: "/khong-thoi-gian/khong-gian", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Du Hành Thời Gian", desc: "Giấc mơ của nhân loại.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/khong-thoi-gian/du-hanh", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Thuyết Tương Đối", desc: "Nền tảng của vật lý thời gian.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Bản Chất Thời Gian"
            subtitle="Mũi tên bất đối xứng của vũ trụ"
            heroImg="https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2000"
            chapter="Không-thời gian · Chương 01"
            accentColor="#ec4899"
            readingTime="9 phút"
            tags={["Entropy", "Time Dilation", "Mũi tên thời gian", "Nghịch lý song sinh"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}