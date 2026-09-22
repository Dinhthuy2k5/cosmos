import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function VatChatToi() {
    const sections = [
        {
            title: "Vật Chất Tối Là Gì?",
            content: "Mọi vật chất chúng ta biết — ngôi sao, hành tinh, con người, bụi vũ trụ — chỉ chiếm 5% tổng nội dung của vũ trụ.\n\n27% còn lại là vật chất tối (dark matter): một dạng vật chất bí ẩn không phát sáng, không hấp thụ ánh sáng, không tương tác điện từ. Chúng ta chỉ biết nó tồn tại nhờ lực hấp dẫn.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 5, suffix: "%", label: "Vật chất thường", color: "#8b5cf6" },
                { value: 27, suffix: "%", label: "Vật chất tối", color: "#8b5cf6" },
                { value: 68, suffix: "%", label: "Năng lượng tối", color: "#8b5cf6" },
            ],
        },
        {
            title: "Vera Rubin và Đường Cong Xoay",
            content: "Những năm 1970, Vera Rubin đo vận tốc xoay của các ngôi sao ở rìa thiên hà xoắn ốc. Theo vật lý Newton, càng xa tâm thiên hà, ngôi sao phải quay càng chậm.\n\nNhưng bà phát hiện: các ngôi sao ở rìa quay nhanh y hệt ở giữa. Chỉ có một lời giải thích: thiên hà được bao quanh bởi quầng vật chất tối khổng lồ nặng gấp 5 lần vật chất thường.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Trong thiên hà của chúng ta có nhiều vật chất tối hơn tất cả các ngôi sao, hành tinh và khí cộng lại. Vũ trụ không phải là những gì chúng ta thấy.",
            author: "Vera Rubin",
            role: "Nhà thiên văn học tiên phong",
        },
        {
            title: "Thấu Kính Hấp Dẫn",
            content: "Theo thuyết tương đối rộng, khối lượng bẻ cong không-thời gian. Khi ánh sáng từ một thiên hà xa xôi đi ngang qua một cụm thiên hà nặng ở giữa, nó bị bẻ cong như qua thấu kính.\n\nBằng cách đo mức độ bẻ cong, chúng ta đo được tổng khối lượng của cụm thiên hà — và luôn luôn, kết quả nhiều hơn vật chất quan sát được gấp 5-6 lần. Không còn nghi ngờ gì về vật chất tối.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Bullet Cluster — Bằng Chứng Quyết Định",
            content: "Năm 2006, cụm thiên hà Bullet Cluster được quan sát sau vụ va chạm giữa hai cụm. Đây là bằng chứng mạnh mẽ nhất cho vật chất tối.\n\nKhi hai cụm va chạm, khí nóng (chiếm 90% vật chất thường) va vào nhau và chậm lại. Nhưng thấu kính hấp dẫn cho thấy khối lượng vẫn tiếp tục di chuyển. Vật chất tối đã xuyên qua nhau không tương tác — trong khi vật chất thường va chạm.",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1200",
        },
        {
            title: "Ứng Viên Cho Vật Chất Tối",
            content: "Các nhà vật lý đang săn lùng hạt cấu thành vật chất tối:\n\nWIMP (Weakly Interacting Massive Particle) — hạt nặng tương tác yếu, ứng viên chính được tìm kiếm ở các máy gia tốc.\n\nAxion — hạt siêu nhẹ, được dự đoán bởi lý thuyết lượng tử sắc ký.\n\nSterile Neutrino — neutrino không tương tác yếu, có thể tồn tại với khối lượng keV.",
            bullets: [
                "LUX, XENON, PandaX — thí nghiệm dò WIMP dưới lòng đất",
                "ADMX — dò axion bằng từ trường cực mạnh",
                "Fermi-LAT — tìm tín hiệu gamma từ hủy vật chất tối",
            ],
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
        },
        {
            title: "Tương Lai Của Cuộc Săn Lùng",
            content: "Sau 50 năm tìm kiếm, vật chất tối vẫn chưa lộ diện trực tiếp. Một số nhà vật lý cho rằng chúng ta cần xem lại thuyết hấp dẫn — có thể định luật Newton không đúng ở thang thiên hà (lý thuyết MOND).\n\nNhưng đa số vẫn tin vào vật chất tối, vì thuyết MOND không giải thích được CMB và Bullet Cluster. Cuộc săn lùng vẫn tiếp tục với các thế hệ detector ngày càng nhạy hơn.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Năng Lượng Tối", desc: "Thế lực đang đẩy vũ trụ giãn nở.", img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=600", link: "/vu-tru-hoc/nang-luong-toi", color: "#ec4899", badge: "Chương 05" },
        { title: "Thiên Hà", desc: "Những hòn đảo ánh sáng giữa vũ trụ.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/thien-ha", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Bức Xạ Nền CMB", desc: "Bản đồ vũ trụ sơ khai.", img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600", link: "/vu-tru-hoc/buc-xa-nen", color: "#eab308", badge: "Chương 03" },
    ];

    return (
        <ArticleLayout
            title="Vật Chất Tối"
            subtitle="Khối lượng vô hình chi phối mọi cấu trúc vũ trụ"
            heroImg="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000"
            chapter="Vũ trụ học · Chương 04"
            accentColor="#8b5cf6"
            readingTime="8 phút"
            tags={["Dark Matter", "Vera Rubin", "WIMP", "Bullet Cluster"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}