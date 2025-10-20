import React from "react"
import logoNes from "../assets/images/ga5feuimiigjo5epiwk7sbxd2pej_A3_PNG.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
              <a href="#" aria-label="Facebook" className="bg-white rounded-lg w-10 h-10 flex items-center justify-center text-2xl hover:bg-red-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z"/></svg>            </a>
              <a href="#" aria-label="Instagram" className="bg-white rounded-lg w-10 h-10 flex items-center justify-center text-2xl hover:bg-red-600 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
              </a>
              <a href="#" aria-label="Zalo" className="bg-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-red-600 hover:text-white transition">
                <svg id="svg_zalo_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 614.501 613.667" xml:space="preserve">
            <path fill="#000000" d="M464.721,301.399c-13.984-0.014-23.707,11.478-23.944,28.312c-0.251,17.771,9.168,29.208,24.037,29.202   c14.287-0.007,23.799-11.095,24.01-27.995C489.028,313.536,479.127,301.399,464.721,301.399z" />
            <path fill="#000000" d="M291.83,301.392c-14.473-0.316-24.578,11.603-24.604,29.024c-0.02,16.959,9.294,28.259,23.496,28.502   c15.072,0.251,24.592-10.87,24.539-28.707C315.214,313.318,305.769,301.696,291.83,301.392z" />
            <path fill="#000000" d="M310.518,3.158C143.102,3.158,7.375,138.884,7.375,306.3s135.727,303.142,303.143,303.142   c167.415,0,303.143-135.727,303.143-303.142S477.933,3.158,310.518,3.158z M217.858,391.083   c-33.364,0.818-66.828,1.353-100.133-0.343c-21.326-1.095-27.652-18.647-14.248-36.583c21.55-28.826,43.886-57.065,65.792-85.621   c2.546-3.305,6.214-5.996,7.15-12.705c-16.609,0-32.784,0.04-48.958-0.013c-19.195-0.066-28.278-5.805-28.14-17.652   c0.132-11.768,9.175-17.329,28.397-17.348c25.159-0.026,50.324-0.06,75.476,0.026c9.637,0.033,19.604,0.105,25.304,9.789   c6.22,10.561,0.284,19.512-5.646,27.454c-21.26,28.497-43.015,56.624-64.559,84.902c-2.599,3.41-5.119,6.88-9.453,12.725   c23.424,0,44.123-0.053,64.816,0.026c8.674,0.026,16.662,1.873,19.941,11.267C237.892,379.329,231.368,390.752,217.858,391.083z    M350.854,330.211c0,13.417-0.093,26.841,0.039,40.265c0.073,7.599-2.599,13.647-9.512,17.084   c-7.296,3.642-14.71,3.028-20.304-2.968c-3.997-4.281-6.214-3.213-10.488-0.422c-17.955,11.728-39.908,9.96-56.597-3.866   c-29.928-24.789-30.026-74.803-0.211-99.776c16.194-13.562,39.592-15.462,56.709-4.143c3.951,2.619,6.201,4.815,10.396-0.053   c5.39-6.267,13.055-6.761,20.271-3.357c7.454,3.509,9.935,10.165,9.776,18.265C350.67,304.222,350.86,317.217,350.854,330.211z    M395.617,369.579c-0.118,12.837-6.398,19.783-17.196,19.908c-10.779,0.132-17.593-6.966-17.646-19.512   c-0.179-43.352-0.185-86.696,0.007-130.041c0.059-12.256,7.302-19.921,17.896-19.222c11.425,0.752,16.992,7.448,16.992,18.833   c0,22.104,0,44.216,0,66.327C395.677,327.105,395.828,348.345,395.617,369.579z M463.981,391.868   c-34.399-0.336-59.037-26.444-58.786-62.289c0.251-35.66,25.304-60.713,60.383-60.396c34.631,0.304,59.374,26.306,58.998,61.986   C524.207,366.492,498.534,392.205,463.981,391.868z" />
          </svg>
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
