import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function LoSau() {
    const sections = [
        {
            title: "Cầu Nối Không-Thời Gian",
            content: "Lỗ sâu (wormhole) là một giả thuyết về cấu trúc không-thời gian kết nối hai vùng không gian xa cách — hoặc hai thời điểm khác nhau.\n\nÝ tưởng ban đầu xuất hiện trong phương trình của Einstein năm 1915, nhưng phải đến 1935, Einstein và Rosen mới công bố mô hình cụ thể: 'Cầu Einstein-Rosen'.\n\nNếu tồn tại, lỗ sâu cho phép du hành giữa hai thiên hà trong tích tắc — nhanh hơn nhiều so với đường thông thường qua không gian. Nhưng cho đến nay, chưa có bằng chứng quan sát nào về lỗ sâu.",
            img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200",
            imgAlt: "Đường hầm ánh sáng — minh họa cầu nối không-thời gian",
        },
        {
            type: "stats",
            items: [
                { value: 1935, label: "Năm công bố Einstein-Rosen", color: "#ec4899" },
                { value: 0, label: "Bằng chứng quan sát (tính đến 2026)", color: "#ec4899" },
                { value: 10, suffix: "⁻³⁵ m", label: "Kích thước lượng tử có thể", color: "#ec4899" },
            ],
        },
        {
            title: "Vấn Đề Vật Chất Âm",
            content: "Để lỗ sâu tồn tại ổn định, cần một dạng vật chất kỳ lạ: vật chất âm (exotic matter) — có khối lượng âm hoặc năng lượng âm.\n\nVật chất âm có áp suất âm, đẩy không gian giãn ra thay vì co lại. Nó là 'phản trọng lực' — cần thiết để giữ miệng lỗ sâu mở, nếu không hấp dẫn sẽ làm sập lỗ sâu ngay lập tức.\n\nVật chất âm chưa từng được quan sát. Một số hiệu ứng Casimir trong vật lý lượng tử tạo ra mật độ năng lượng âm cực nhỏ — nhưng không đủ để giữ lỗ sâu vĩ mô.",
            bullets: [
                "Vật chất thường: khối lượng dương, hấp dẫn hút",
                "Vật chất âm: khối lượng âm, hấp dẫn đẩy",
                "Hiệu ứng Casimir: năng lượng âm lượng tử, cực nhỏ",
                "Nếu không có vật chất âm: lỗ sâu sập trong 10⁻⁴³ giây",
            ],
            img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200",
            imgAlt: "Cấu trúc hình học uốn cong",
        },
        {
            type: "quote",
            content: "Có thể bạn không thể quay về nhà từ lỗ sâu. Nhưng bạn có thể đến một nơi mà bạn chưa từng mơ tới.",
            author: "Kip Thorne",
            role: "Nobel Vật lý 2017, cố vấn khoa học phim Interstellar",
        },
        {
            title: "Lỗ Sâu Xuyên Thời Gian",
            content: "Nếu một đầu của lỗ sâu di chuyển gần vận tốc ánh sáng trong một thời gian, hai đầu sẽ trải qua thời gian khác nhau (do giãn nở thời gian).\n\nKết quả: hai đầu lỗ sâu bị 'lệch thời gian' — một đầu ở năm 2024, một đầu ở năm 2000. Đi vào đầu này, ra đầu kia, bạn du hành 24 năm về quá khứ.\n\nĐây là ý tưởng cốt lõi của phim Interstellar (2014) — nơi Kip Thorne làm cố vấn khoa học. Ông đã dành nhiều năm chứng minh về mặt toán học rằng lỗ sâu du hành thời gian không vi phạm định luật vật lý — dù cực kỳ khó tồn tại trong thực tế.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
            imgAlt: "Trái Đất từ không gian — minh họa du hành xuyên không-thời gian",
        },
        {
            title: "Nghịch Lý Nhân Quả",
            content: "Nếu du hành thời gian qua lỗ sâu là khả thi, nó mở ra các nghịch lý nhân quả:\n\n• Nghịch lý ông nội: bạn quay về giết ông nội trước khi ông gặp bà — vậy bạn không thể sinh ra để quay về.\n\n• Nghịch lý thông tin: bạn gửi một tin nhắn về quá khứ để ngăn chính mình gửi nó.\n\nCác nhà vật lý đề xuất nhiều giải pháp:\n\n1. Nguyên lý bảo vệ niên đại (Hawking): vật lý lượng tử ngăn chặn du hành thời gian.\n\n2. Đa vũ trụ: bạn quay về một timeline khác, không phải timeline gốc.\n\n3. Định mệnh tự nhất quán: mọi hành động của bạn đã là một phần của lịch sử.\n\nCho đến nay, không có bằng chứng nào về du hành thời gian — nếu có, chúng ta đã thấy khách du lịch từ tương lai.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
            imgAlt: "Vũ trụ bí ẩn — minh họa nghịch lý nhân quả",
        },
    ];

    const relatedArticles = [
        { title: "Du Hành Thời Gian", desc: "Giấc mơ và nghịch lý.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/khong-thoi-gian/du-hanh", color: "#ec4899", badge: "Không-thời gian" },
        { title: "Lỗ Đen", desc: "Có thể chứa lỗ sâu bên trong?", img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=600", link: "/thien-van/lo-den", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Thuyết Tương Đối", desc: "Nền tảng toán học của lỗ sâu.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/tuong-doi", color: "#06b6d4", badge: "Vật lý" },
    ];

    return (
        <ArticleLayout
            title="Lỗ Sâu"
            subtitle="Cầu nối giữa những vùng không-thời gian xa cách"
            heroImg="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000"
            chapter="Không-thời gian · Chương 03"
            accentColor="#ec4899"
            readingTime="8 phút"
            tags={["Wormhole", "Einstein-Rosen", "Vật chất âm", "Interstellar"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}