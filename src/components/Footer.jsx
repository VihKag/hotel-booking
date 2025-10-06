import React from "react"
import logoNes from "../assets/images/ga5feuimiigjo5epiwk7sbxd2pej_A3_PNG.png"
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-center text-center md:text-center col-span-1">
            {/* Logo: dùng ảnh hoặc SVG */}
            <div className="mb-2">
              {/* Thay bằng SVG hoặc ảnh logo thực tế */}
              <img
                src={logoNes}
                alt="Nexus House"
                className="h-32 mx-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-white uppercase tracking-widest text-lg font-semibold mb-1">NEXUS HOUSE</div>
            <div className="text-white text-xs mb-4">BOUTIQUE STAY</div>
            <div className="flex gap-4 justify-center mb-4">
              <a href="#" aria-label="Facebook" className="bg-white text-black rounded-lg w-10 h-10 flex items-center justify-center text-2xl hover:bg-red-600 hover:text-white transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="bg-white text-black rounded-lg w-10 h-10 flex items-center justify-center text-2xl hover:bg-red-600 hover:text-white transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="Zalo" className="bg-white text-black rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-red-600 hover:text-white transition">
                Zalo
              </a>
            </div>
            <div className="text-white mt-2 text-sm font-semibold">© 2024 Nexus House.</div>
          </div>
          {/* Giới thiệu */}
          <div>
            <div className="font-semibold text-red-600 mb-2">CÔNG TY TNHH NEXUSHOUSE</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">Giới thiệu về Nexus</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">Tin tức</a>
              </li>
            </ul>
          </div>
          {/* Chính sách */}
          <div>
            <div className="font-semibold text-red-600 mb-2">Chính sách</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">Chính sách và quyền lợi</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">Phương thức thanh toán</a>
              </li>
            </ul>
          </div>
          {/* Thông tin công ty */}
          <div>
            <div className="font-semibold text-red-600 mb-2">CÔNG TY TNHH NEXUSHOUSE</div>
            <div className="text-sm leading-relaxed space-y-1">
              <div><a href="">MST 0317816372, ngày cấp 04/05/2023, nơi cấp SỞ KẾ HOẠCH VÀ ĐẦU TƯ THÀNH PHỐ HỒ CHÍ MINH</a></div>
              <div><a href="">Địa chỉ - 8/9 Võ Trường Toản, Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh.</a></div>
              <div><a href="">Ngành nghề KD - Dịch vụ Lưu Trú Ngắn Ngày</a></div>
              <div className="text">Email: <a href="mailto:booking@nexushouse.vn" className="hover:text-red-600 transition">booking@nexushouse.vn</a></div>
              <div  className="text">Điện thoại</div>
              <div><a>Tên người thụ hưởng - CÔNG TY TNHH NEXUS HOUSE</a></div>
              <div><a>Ngân hàng Kỹ Thương Việt Nam Techcombank</a></div>
              <div><a>Số tài khoản - 19039898265018</a></div>
              
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
