import React from 'react';
import { motion } from 'framer-motion';
import { Orbit, Star, Disc, Aperture, Wind } from 'lucide-react';

export default function Universe() {
    const sections = [
        {
            id: "hanh-tinh",
            title: "Hành Tinh & Ngoại Hành Tinh",
            subtitle: "Những thế giới đá và khí khổng lồ",
            desc: "Trong dải Ngân Hà của chúng ta có hàng tỷ hành tinh. Ngoài các hành tinh trong Hệ Mặt Trời như Sao Hỏa hay Sao Mộc, kính viễn vọng Kepler và James Webb đã phát hiện hàng ngàn 'Ngoại hành tinh' (Exoplanets) nằm trong Vùng Sinh H sống (Habitable Zone), nơi nước lỏng có thể tồn tại.",
            icon: Orbit,
            color: "text-blue-400",
            img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000"
        },
        {
            id: "ngoi-sao",
            title: "Vòng Đời Của Ngôi Sao",
            subtitle: "Lò phản ứng hạt nhân của vũ trụ",
            desc: "Các ngôi sao được sinh ra từ những đám mây khí bụi khổng lồ gọi là Tinh vân (Nebula). Chúng tồn tại bằng cách dung hợp hydrogen thành helium. Khi cạn kiệt nhiên liệu, một ngôi sao có thể phình to thành Sao Khổng Lồ Đỏ, sau đó sụp đổ thành Sao Lùn Trắng, Sao Pulsar, hoặc bùng nổ dữ dội thành Siêu Tân Tinh (Supernova).",
            icon: Star,
            color: "text-yellow-400",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000"
        },
        {
            id: "thien-ha",
            title: "Thiên Hà (Galaxies)",
            subtitle: "Những hòn đảo ánh sáng",
            desc: "Thiên hà là một hệ thống khổng lồ chứa hàng tỷ ngôi sao, khí, bụi và vật chất tối, được liên kết với nhau bởi lực hấp dẫn. Dải Ngân Hà (Milky Way) của chúng ta là một thiên hà xoắn ốc. Người láng giềng gần nhất, thiên hà Andromeda, đang lao về phía chúng ta và sẽ va chạm với Ngân Hà trong khoảng 4.5 tỷ năm nữa.",
            icon: Disc,
            color: "text-purple-400",
            img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1000"
        },
        {
            id: "cum-thien-ha",
            title: "Cụm & Siêu Cụm Thiên Hà",
            subtitle: "Mạng lưới cấu trúc vĩ mô",
            desc: "Các thiên hà không đứng đơn độc mà tập hợp thành các Cụm (Clusters). Lớn hơn nữa là Siêu cụm thiên hà (Superclusters). Trái đất và Dải Ngân Hà của chúng ta nằm trong một cấu trúc siêu khổng lồ được gọi là Laniakea (có nghĩa là 'Thiên đường bao la' trong tiếng Hawaii), chứa tới 100,000 thiên hà.",
            icon: Wind,
            color: "text-cyan-400",
            img: "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1000"
        },
        {
            id: "ho-den",
            title: "Hố Đen Siêu Khối Lượng",
            subtitle: "Nơi thời gian và không gian biến mất",
            desc: "Hố đen là vùng không gian có lực hấp dẫn mạnh đến mức không gì, kể cả ánh sáng, có thể thoát ra. Xung quanh hố đen là Chân trời Sự kiện (Event Horizon). Ở trung tâm hầu hết các thiên hà (kể cả Ngân Hà của chúng ta) đều có một Hố Đen Siêu Khối Lượng (Sagittarius A*), nặng gấp hàng triệu lần Mặt Trời.",
            icon: Aperture,
            color: "text-red-400",
            img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000" // Ảnh mô phỏng hố đen/không gian sâu
        }
    ];

    return (
        <main className="pt-48 pb-32 bg-[#0c1128] min-h-screen">
            <div className="max-w-4xl mx-auto px-6 text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">Từ Nguyên Tử <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Đến Vô Tận</span></h1>
                <p className="text-xl text-gray-400 font-light">Kiến thức tổng hợp về cấu trúc, hiện tượng và các thực thể vĩ đại nhất trong vũ trụ quan sát được.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {sections.map((section, idx) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                        className={`flex flex-col gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                    >
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md ${section.color}`}>
                                    <section.icon size={32} />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">{section.title}</h2>
                            </div>
                            <h3 className={`text-xl font-medium tracking-wide uppercase ${section.color}`}>{section.subtitle}</h3>
                            <p className="text-lg text-gray-400 leading-relaxed font-light">{section.desc}</p>
                        </div>

                        <div className="flex-1 w-full">
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128]/80 to-transparent z-10" />
                                <img src={section.img} alt={section.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}