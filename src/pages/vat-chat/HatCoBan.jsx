import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function HatCoBan() {
    const sections = [
        {
            title: "Bên Trong Proton và Neutron",
            content: "Trước thập niên 1960, proton và neutron được coi là hạt cơ bản. Nhưng các thí nghiệm tán xạ tại Stanford (SLAC) cho thấy chúng có cấu trúc bên trong — được tạo từ các hạt nhỏ hơn gọi là quark.\n\nNgày nay, mô hình chuẩn phân loại hạt cơ bản thành 2 nhóm chính:\n\n• Fermion: hạt vật chất (quark, lepton).\n• Boson: hạt truyền lực (photon, gluon, W, Z, Higgs).\n\nMọi vật chất quen thuộc chỉ được tạo từ 3 hạt: up quark, down quark, và electron.",
            img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1200",
            imgAlt: "Mô phỏng hạt lượng tử — cấu trúc hạ nguyên tử",
        },
        {
            type: "stats",
            items: [
                { value: 6, label: "Loại quark", color: "#10b981" },
                { value: 6, label: "Loại lepton", color: "#10b981" },
                { value: 4, label: "Boson gauge", color: "#10b981" },
            ],
        },
        {
            title: "Quark — Những Viên Gạch Của Proton",
            content: "Quark có 6 hương vị (flavor), chia thành 3 thế hệ:\n\nThế hệ 1: up (u), down (d) — tạo proton và neutron.\nThế hệ 2: charm (c), strange (s) — nặng hơn, sinh ra trong máy gia tốc.\nThế hệ 3: top (t), bottom (b) — nặng nhất, top nặng gấp 180 lần proton.\n\nProton = 2 up + 1 down. Neutron = 1 up + 2 down.\n\nQuark không tồn tại độc lập — chúng luôn bị 'giam cầm' (confinement) trong hadron do lực mạnh. Nếu bạn cố tách quark ra, năng lượng cần thiết đủ để sinh ra cặp quark-antiquark mới.",
            bullets: [
                "Quark có điện tích phân số: +2/3 (u, c, t) hoặc -1/3 (d, s, b)",
                "Không quan sát được quark tự do (color confinement)",
                "Proton = uud, Neutron = udd",
                "Khối lượng quark chỉ chiếm 1% khối lượng proton — phần còn lại là năng lượng gluon",
            ],
            img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200",
            imgAlt: "Máy gia tốc hạt — nơi nghiên cứu quark",
        },
        {
            title: "Lepton — Họ Hàng Của Electron",
            content: "Lepton cũng có 6 hạt, 3 thế hệ:\n\nThế hệ 1: electron (e), electron neutrino (νe).\nThế hệ 2: muon (μ), muon neutrino (νμ).\nThế hệ 3: tau (τ), tau neutrino (ντ).\n\nElectron ổn định và tạo nên vỏ nguyên tử. Muon và tau không bền — phân rã trong phần triệu giây.\n\nNeutrino gần như không có khối lượng và hầu như không tương tác với vật chất. Mỗi giây, có 65 tỷ neutrino từ Mặt Trời xuyên qua mỗi cm² cơ thể bạn mà bạn không cảm nhận được.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
            imgAlt: "Không gian sâu — minh họa neutrino xuyên qua",
        },
        {
            type: "formula",
            formula: "uud → p⁺  |  udd → n⁰",
            meaning: "Proton được tạo từ 2 up quark + 1 down quark. Neutron được tạo từ 1 up quark + 2 down quark. Sự khác biệt về thành phần quark quyết định điện tích và khối lượng của hadron.",
            variables: [
                { symbol: "u", desc: "Up quark — điện tích +2/3e" },
                { symbol: "d", desc: "Down quark — điện tích −1/3e" },
                { symbol: "p⁺", desc: "Proton — điện tích +1e" },
                { symbol: "n⁰", desc: "Neutron — điện tích 0" },
            ],
            example: "Proton uud: (+2/3) + (+2/3) + (−1/3) = +1e. Neutron udd: (+2/3) + (−1/3) + (−1/3) = 0. Chỉ khác 1 quark — nhưng proton ổn định vĩnh viễn, còn neutron tự do phân rã sau 15 phút.",
        },
        {
            type: "quote",
            content: "Tất cả vật chất chỉ là năng lượng cô đọng lại, và tất cả năng lượng chỉ là vật chất được giải phóng. Chúng chỉ là hai mặt của cùng một đồng xu.",
            author: "Albert Einstein",
            role: "Diễn giải E=mc²",
        },
        {
            title: "Boson — Hạt Truyền Lực",
            content: "Boson là hạt có spin nguyên, truyền các lực cơ bản:\n\n• Photon (γ): lực điện từ, không khối lượng, tầm xa vô hạn.\n• Gluon (g): lực mạnh, giữ quark trong proton. Có 8 loại gluon.\n• W⁺, W⁻, Z⁰: lực yếu, gây phân rã beta. Khối lượng ~100 GeV.\n• Higgs (H⁰): trao khối lượng cho mọi hạt khác. Phát hiện 2012 tại LHC.\n\nTrong mô hình chuẩn, boson gauge truyền 3 lực (mạnh, điện từ, yếu). Hấp dẫn được truyền bởi graviton — chưa quan sát được.\n\nBoson khác fermion ở chỗ: nhiều boson có thể chiếm cùng một trạng thái lượng tử. Đây là cơ sở của laser (nhiều photon cùng trạng thái) và ngưng tụ Bose-Einstein.",
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
            imgAlt: "Vũ trụ hạt — minh họa boson và lực",
        },
        {
            title: "Phản Vật Chất — Đối Xứng Hoàn Hảo",
            content: "Mỗi hạt đều có phản hạt (antiparticle) với cùng khối lượng nhưng điện tích ngược dấu.\n\n• Electron (e⁻) ↔ Positron (e⁺)\n• Proton (uud) ↔ Phản proton (ūūd̄)\n• Neutron (udd) ↔ Phản neutron (ūd̄d̄)\n\nKhi hạt gặp phản hạt, chúng hủy (annihilation) — biến hoàn toàn thành năng lượng theo E=mc². 1 gram phản vật chất gặp 1 gram vật chất giải phóng 1.8×10¹⁴ J — gấp 3 lần năng lượng bom Hiroshima.\n\nNhưng phản vật chất cực hiếm trong vũ trụ. Bí ẩn lớn: tại sao vũ trụ có nhiều vật chất hơn phản vật chất? Big Bang lẽ ra phải tạo ra số lượng bằng nhau. Lý do vẫn chưa rõ — có thể là vi phạm đối xứng CP trong vũ trụ sơ khai.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
            imgAlt: "Phản ứng vật chất-phản vật chất — minh họa",
        },
    ];

    const relatedArticles = [
        { title: "Mô Hình Chuẩn", desc: "Lý thuyết phân loại mọi hạt cơ bản.", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-ly/mo-hinh-chuan", color: "#06b6d4", badge: "Vật lý" },
        { title: "Bốn Lực Cơ Bản", desc: "Boson truyền các lực này.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", link: "/vat-ly/luc-co-ban", color: "#06b6d4", badge: "Vật lý" },
        { title: "Nguyên Tử", desc: "Proton và neutron tạo nên hạt nhân.", img: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=600", link: "/vat-chat/nguyen-tu", color: "#10b981", badge: "Vật chất" },
    ];

    return (
        <ArticleLayout
            title="Hạt Cơ Bản"
            subtitle="Những viên gạch nhỏ nhất của vũ trụ"
            heroImg="https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=2000"
            chapter="Vật chất · Chương 02"
            accentColor="#10b981"
            readingTime="9 phút"
            tags={["Quark", "Lepton", "Boson", "Phản vật chất"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}