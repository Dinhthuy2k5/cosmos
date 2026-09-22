import React from 'react';
import ArticleLayout from '../../components/design/ArticleLayout';

export default function TinhVan() {
    const sections = [
        {
            title: "Những Đám Mây Khí Bụi Vũ Trụ",
            content: "Tinh vân (nebula) là đám mây khí và bụi khổng lồ trong không gian giữa các vì sao. Chúng có thể là nơi sinh của sao mới (tinh vân phát xạ), tàn dư của sao chết (tinh vân hành tinh, tàn dư siêu tân tinh), hoặc vùng tối chặn ánh sáng (tinh vân hấp thụ).\n\nTừ 'nebula' trong tiếng Latin nghĩa là 'đám mây'. Trước khi có kính thiên văn mạnh, mọi vật thể mờ đều gọi là tinh vân — kể cả các thiên hà xa xôi.",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1200",
        },
        {
            type: "stats",
            items: [
                { value: 10, suffix: "-100 ly", label: "Đường kính tinh vân lớn", color: "#a78bfa" },
                { value: 10, suffix: " K", label: "Nhiệt độ khí lạnh", color: "#a78bfa" },
                { value: 10000, suffix: " K", label: "Nhiệt độ khí nóng", color: "#a78bfa" },
            ],
        },
        {
            title: "Bốn Loại Tinh Vân",
            content: "Tinh vân được phân loại theo cơ chế phát sáng:\n\n✨ Phát xạ (Emission): khí bị ion hóa bởi sao nóng gần đó, phát sáng đỏ/hồng. Ví dụ: Orion Nebula, Eagle Nebula (Pillars of Creation).\n\n🔵 Phản xạ (Reflection): bụi phản chiếu ánh sáng sao xanh xung quanh. Ví dụ: Witch Head Nebula.\n\n⚫ Hấp thụ/Tối (Dark): bụi dày đặc che khuất ánh sáng phía sau. Ví dụ: Horsehead Nebula, Coalsack.\n\n💀 Hành tinh (Planetary): vỏ khí do sao lùn trắng thổi ra — KHÔNG liên quan đến hành tinh, tên chỉ do hình dạng tròn. Ví dụ: Ring Nebula, Cat's Eye.",
            bullets: [
                "Orion Nebula: 1.344 ly, tinh vân phát xạ sáng nhất",
                "Pillars of Creation: cột khí dài 4 ly trong Eagle Nebula",
                "Horsehead Nebula: tinh vân tối nổi tiếng trong Orion",
                "Ring Nebula: tinh vân hành tinh điển hình trong Lyra",
            ],
            img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200",
        },
        {
            type: "quote",
            content: "Chúng ta được làm từ vật chất của các ngôi sao. Chúng ta là cách vũ trụ biết chính mình.",
            author: "Carl Sagan",
            role: "Cosmos: A Personal Voyage (1980)",
        },
        {
            title: "Vườn Ươm Sao",
            content: "Tinh vân lớn như Orion là 'vườn ươm sao' — nơi sinh ra hàng ngàn ngôi sao cùng lúc. Quá trình hình thành:\n\n1. Nhiễu loạn (sóng xung kích siêu tân tinh, va chạm thiên hà) khiến một vùng khí bụi co lại.\n\n2. Hấp dẫn tiếp tục co khối khí thành các 'hạt nhân' (protostar).\n\n3. Khi nhiệt độ lõi đạt 10 triệu K, phản ứng fusion bắt đầu — một ngôi sao ra đời.\n\n4. Bức xạ và gió sao thổi bay vật chất còn lại, hình thành đĩa tiền hành tinh (protoplanetary disk).\n\n5. Các hành tinh hình thành từ đĩa này trong vài triệu năm.\n\nTrong Orion Nebula, hơn 700 ngôi sao đang hình thành — một trong những 'nhà hộ sinh' sao gần nhất và dễ quan sát nhất.",
            img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200",
        },
        {
            title: "Tàn Dư Sao — Sự Kết Thúc Rực Rỡ",
            content: "Khi sao chết, nó để lại những tinh vân kỳ ảo nhất trong vũ trụ:\n\n🌍 Tinh vân Hành tinh (Planetary Nebula): sao lùn trắng thổi vỏ khí ngoài ra với tốc độ 30 km/s. Khí phát sáng xanh-lục do oxy ion hóa, đỏ do hydrogen. Ví dụ: Cat's Eye Nebula, Helix Nebula (Eye of God).\n\n💥 Tàn dư Siêu tân tinh (Supernova Remnant): sao khổng lồ nổ tung, vỏ khí mở rộng với tốc độ 10.000 km/s. Ví dụ: Crab Nebula (1054 AD), Cassiopeia A (1680 AD).\n\nSự tồn tại của tinh vân chỉ vài chục ngàn năm — rất ngắn theo chuẩn vũ trụ. Chúng ta may mắn thấy được nhiều tinh vân đẹp vì thiên hà chứa hàng triệu tinh vân ở các giai đoạn khác nhau.",
            img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
        },
        {
            title: "Pillars of Creation — Biểu Tượng Của Hubble",
            content: "Năm 1995, kính Hubble chụp ảnh 'Pillars of Creation' (Cột Sáng Tạo) trong Eagle Nebula — trở thành một trong những ảnh thiên văn nổi tiếng nhất mọi thời đại.\n\nBa cột khí bụi khổng lồ dài 4-5 năm ánh sáng, đầu cột đang sinh ra sao mới. Đây là những cột dày đặc còn sót lại sau khi bức xạ từ các sao trẻ xung quanh thổi bay vật chất loãng.\n\nNăm 2014, Hubble chụp lại với độ phân giải cao hơn. Năm 2022, kính James Webb (hồng ngoại) chụp thêm — cho thấy nhiều chi tiết hơn và nhiều sao mới sinh hơn.\n\nĐiều thú vị: sóng xung kích từ siêu tân tinh có thể đã phá hủy các cột này từ 6.000 năm trước — nhưng do ánh sáng mất 6.500 năm để đến Trái Đất, chúng ta vẫn thấy chúng 'còn sống'.",
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200",
        },
    ];

    const relatedArticles = [
        { title: "Ngôi Sao", desc: "Sinh ra từ tinh vân, chết đi thành tinh vân.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600", link: "/thien-van/ngoi-sao", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Siêu Tân Tinh", desc: "Vụ nổ tạo ra tinh vân đẹp nhất.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/sieu-tan-tinh", color: "#a78bfa", badge: "Thiên văn" },
        { title: "Thiên Hà", desc: "Chứa hàng nghìn tinh vân.", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600", link: "/thien-van/thien-ha", color: "#a78bfa", badge: "Thiên văn" },
    ];

    return (
        <ArticleLayout
            title="Tinh Vân"
            subtitle="Những đám mây khí bụi — nơi sinh và chết của các ngôi sao"
            heroImg="https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2000"
            chapter="Thiên văn · Chương 04"
            accentColor="#a78bfa"
            readingTime="8 phút"
            tags={["Orion", "Pillars of Creation", "Hubble", "Nebula"]}
            sections={sections}
            relatedArticles={relatedArticles}
        />
    );
}