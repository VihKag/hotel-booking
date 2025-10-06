import React from "react"
import img1 from "../assets/images/combo-an-sang.png"
import img2 from "../assets/images/setup-trang-tri.png"
import img3 from "../assets/images/giat-ui.png"
import img4 from "../assets/images/dua-don-san-bay.png"
import img5 from "../assets/images/tour-tham-quan-du-lich.png"
import img6 from "../assets/images/thue-xe.png"
import img7 from "../assets/images/nha-hang-rock.png"
import logo from "../assets/images/3zlctncsrwljh6ar6rrigylgf6ps_A2_PNG.png" // Nexus House logo
const services = [
  {
    icon: (
      // Combo ăn sáng
      <img class="size-20" id="home-utility-service-image1" loading="lazy" src={img1}></img>
    ),
    title: "COMBO ĂN SÁNG:",
    desc: "Phần ăn sáng + 1 ly cà phê",
  },
  {
    icon: (
      // Setup trang trí
      <img class="size-20" id="home-utility-service-image2" loading="lazy" src={img2}></img>
    ),
    title: "SETUP TRANG TRÍ",
    desc: "Các gói trang trí phòng kỷ niệm, trang trí bàn ăn, bath bomb thả bồn",
  },
  {
    icon: (
      // Giặt ủi
      <img class="size-20" id="home-utility-service-image3" loading="lazy" src={img3}></img>
    ),
    title: "GIẶT ỦI",
    desc: "Không lo việc giặt giũ trong suốt kỳ nghỉ của bạn",
  },
  {
    icon: (
      // Đưa đón sân bay
      <img class="size-20" id="home-utility-service-image4" loading="lazy" src={img4}></img>
    ),
    title: "ĐƯA ĐÓN SÂN BAY",
    desc: "Đưa đón xe 7 chỗ và xe 16 chỗ",
  },
  {
    icon: (
      // Tour tham quan du lịch
            <img class="size-20" id="home-utility-service-image5" loading="lazy" src={img5}></img>
    ),
    title: "TOUR THAM QUAN DU LỊCH",
    desc: "Tour khám phá các địa điểm lịch sử tại Sài Gòn, Mekong Delta",
  },
  {
    icon: (
      // Thuê xe máy - ô tô
      <img class="size-20" id="home-utility-service-image6" loading="lazy" src={img6}></img>
    ),
    title: "THUÊ XE MÁY - Ô TÔ",
    desc: "Xe thuê mới, chất lượng tốt và có đầy đủ giấy tờ",
  },
  {
    icon: (
      // Nhà hàng Rock Kitchen&Bar
      <img class="size-20" id="home-utility-service-image7" loading="lazy" src={img7}></img>
    ),
    title: "NHÀ HÀNG ROCK KITCHEN&BAR",
    desc: "Ưu đãi 10% dành riêng cho khách hàng lưu trú tại Nexus House",
  },
]

export default function NexusServices() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiêu đề */}
        <div className="flex flex-col items-center mb-4">
          <div className="bg-black text-white rounded-full px-10 py-3 text-lg font-semibold mb-4">
            Dịch vụ tiện ích tại
          </div>
          {/* Logo SVG hoặc ảnh */}
          <img
            src={logo}
            alt="Nexus House"
            className="h-56 my-2"
            style={{ objectFit: "contain" }}
          />
          <div className="text-[#8B2C23] text-3xl md:text-4xl font-bold mb-1 tracking-wide">NEXUS HOUSE</div>
          <div className="text-[#8B2C23] text-base md:text-lg font-semibold mb-8 tracking-widest">BOUTIQUE STAY</div>
        </div>
        {/* Dịch vụ */}
        <div className="flex flex-wrap justify-center">
          {services.map((s, i) => (
            <div key={i} className="flex p-4 w-1/4 items-start gap-4">
              <div className="flex-shrink-0">{s.icon}</div>
              <div>
                <div className="font-bold md:text-lg text-black mb-1">{s.title}</div>
                <div className="italic md:text-sm text-black">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}