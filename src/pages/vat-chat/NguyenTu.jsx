import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function NguyenTu() {
    const sections = [
        {
            title: "Viên Gạch Cơ Bản Của Vật Chất",
            content: "Nguyên tử là đơn vị nhỏ nhất của một nguyên tố hóa học, giữ nguyên tính chất hóa học của nguyên tố đó. Từ 'atom' trong tiếng Hy Lạp nghĩa là 'không thể chia cắt' — nhưng chúng ta đã biết nguyên tử còn chia được thành proton, neutron và electron.\n\nMỗi nguyên tử có kích thước khoảng 10⁻¹⁰ m (0.1 nanomet). Nếu phóng to nguyên tử bằng sân bóng đá, hạt nhân chỉ là một viên bi ở giữa sân — phần còn lại là không gian trống.",
            img: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=1200",
            imgAlt: "Mô hình nguyên tử — cấu trúc cơ bản của vật chất",
        },
        {
            type: "stats",
            items: [
                { value: 10, prefix: "~", suffix: "⁻¹⁰ m", label: "Kích thước nguyên tử", color: "#10b981" },
                { value: 99.9999, suffix: "%", label: "Thể tích là không gian trống", color: "#10b981", decimals: 4 },
                { value: 118, label: "Nguyên tố đã biết", color: "#10b981" },
            ],
        },
        {
            title: "Cấu Trúc Nguyên Tử — Hành Trình Khám Phá",
            content: "Hiểu biết về nguyên tử đã thay đổi qua 5 giai đoạn:\n\n1. Dalton (1803): nguyên tử là hạt cứng, không thể chia.\n\n2. Thomson (1897): phát hiện electron — 'mô hình bánh pudding' với electron rải trong khối dương.\n\n3. Rutherford (1911): thí nghiệm lá vàng — phát hiện hạt nhân tập trung ở giữa.\n\n4. Bohr (1913): electron quay trên các quỹ đạo cố định, có thể nhảy giữa các mức năng lượng.\n\n5. Schrödinger-Heisenberg (1926): electron tồn tại dưới dạng 'đám mây xác suất' — mô hình lượng tử ngày nay.",
            bullets: [
                "Rutherford: bắn hạt alpha vào lá vàng, thấy một số bật ngược lại",
                "Bohr: electron nhảy quỹ đạo → hấp thụ/phát xạ photon",
                "Mô hình lượng tử: electron không có quỹ đạo xác định",
                "Kích thước hạt nhân: 10⁻¹⁵ m — nhỏ hơn nguyên tử 100.000 lần",
            ],
            img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200",
            imgAlt: "Mô phỏng vật lý hạt — minh họa cấu trúc nguyên tử",
        },
        {
            type: "formula",
            formula: "E_n = −13.6 / n² (eV)",
            meaning: "Năng lượng của electron trên quỹ đạo Bohr thứ n trong nguyên tử hydrogen. Dấu âm biểu thị electron bị ràng buộc vào hạt nhân. Khi n → ∞, E → 0 (electron tự do).",
            variables: [
                { symbol: "E_n", desc: "Năng lượng quỹ đạo thứ n (eV)" },
                { symbol: "n", desc: "Số lượng tử chính (1, 2, 3...)" },
                { symbol: "13.6 eV", desc: "Năng lượng ion hóa hydrogen" },
            ],
            example: "Electron ở n=1 có năng lượng -13.6 eV. Electron ở n=2 có -3.4 eV. Khi electron nhảy từ n=2 về n=1, nó phát ra photon có năng lượng 10.2 eV — tương ứng bước sóng 121.6 nm (tử ngoại). Đây là vạch Lyman-alpha, được quan sát trong quang phổ của các đám mây hydrogen xa xôi.",
        },
        {
            type: "quote",
            content: "Nếu bạn nghĩ rằng nguyên tử là nhỏ, hãy thử tưởng tượng rằng hạt nhân còn nhỏ hơn gấp 100.000 lần — và phần còn lại chỉ là khoảng trống.",
            author: "Richard Feynman",
            role: "Nobel Vật lý 1965",
        },
        {
            title: "Đồng Vị — Cùng Nguyên Tố, Khác Neutron",
            content: "Cùng một nguyên tố có thể có nhiều đồng vị (isotope) — cùng số proton nhưng khác số neutron. Ví dụ, hydrogen có 3 đồng vị tự nhiên:\n\n• Protium (¹H): 1 proton, 0 neutron — 99.98% hydrogen tự nhiên.\n• Deuterium (²H): 1 proton, 1 neutron — nặng gấp đôi.\n• Tritium (³H): 1 proton, 2 neutron — phóng xạ beta.\n\nỨng dụng:\n• Deuterium + Tritium: nhiên liệu cho phản ứng nhiệt hạch — nguồn năng lượng của tương lai.\n• Carbon-14: xác định niên đại khảo cổ đến 50.000 năm.\n• Uranium-235: nhiên liệu hạt nhân cho nhà máy điện.\n• Iodine-131: chẩn đoán và điều trị tuyến giáp.",
            img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200",
            imgAlt: "Phòng thí nghiệm — nghiên cứu nguyên tử và đồng vị",
        },
        {
            title: "Bảng Tuần Hoàn — Bản Đồ Nguyên Tử",
            content: "Dmitri Mendeleev (1869) phát hiện: khi sắp xếp các nguyên tố theo khối lượng, tính chất hóa học lặp lại theo chu kỳ. Ông dự đoán chính xác tính chất của các nguyên tố chưa biết (gallium, germanium, scandium).\n\nNgày nay, bảng tuần hoàn có 118 nguyên tố, được sắp xếp theo số proton (số nguyên tử Z).\n\n• Hàng: chu kỳ (period) — 7 chu kỳ.\n• Cột: nhóm (group) — 18 nhóm.\n• Kim loại kiềm (nhóm 1): phản ứng dữ dội với nước.\n• Khí hiếm (nhóm 18): trơ, không phản ứng.\n• Kim loại chuyển tiếp: sắt, đồng, vàng — dùng phổ biến.\n\nMỗi nguyên tố được tạo ra qua quá trình khác nhau: Big Bang tạo H, He, Li. Sao tạo đến Fe. Siêu tân tinh tạo các nguyên tố nặng hơn.",
            img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1200",
            imgAlt: "Bảng tuần hoàn các nguyên tố hóa học",
        },
    ];

    const relatedArticles = [
        { title: "Hạt Cơ Bản", desc: "Proton, neutron, electron được tạo từ gì?", img: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=600", link: "/vat-chat/hat-co-ban", color: "#10b981", badge: "Vật chất" },
        { title: "Trạng Thái Vật Chất", desc: "Rắn, lỏng, khí, plasma.", img: "https://images.unsplash.com/photo-1516431883561-f8c8f5a25a89?q=80&w=600", link: "/vat-chat/trang-thai", color: "#10b981", badge: "Vật chất" },
        { title: "Vòng Đời Ngôi Sao", desc: "Nơi các nguyên tố nặng được sinh ra.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/ngoi-sao", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Nguyên Tử"
            subtitle="Viên gạch cơ bản cấu thành mọi vật chất"
            heroImg="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=2000"
            chapter="Vật chất · Chương 01"
            accentColor="#10b981"
            readingTime="8 phút"
            tags={["Bohr", "Rutherford", "Đồng vị", "Bảng tuần hoàn"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}