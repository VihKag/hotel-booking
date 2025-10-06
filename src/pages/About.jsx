import React from "react";
import image1 from "../assets/images/hinh-gioi-thieu-1.png";
import image2 from "../assets/images/02.jpg";
import image3 from "../assets/images/03.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactImg from "../assets/images/about-bg.jpg";
import SocialIcons from "../components/SocialIcons";
export default function About() {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-black`}
      >
        <Header />
      </div>

      <SocialIcons />
        <div className="pt-20">
{/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-white font-serif text-5xl md:text-6xl mb-6"
            data-aos="fade-up"
          >
            Liên Hệ Với Chúng Tôi
          </h1>
          <p
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn tại các chi nhánh
            trên toàn quốc
          </p>
        </div>
      </section>

      <section className="w-full bg-white text-black font-[Inter]">
        {/* Section 1 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-8 px-6 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-medium mb-4">
              <span className="text-red-600 font-semibold">Kết nối</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              <strong>Nexus House</strong> có nghĩa là kết nối và hướng tới
              những giá trị tinh túy nhất được chắt lọc từ nhà “nhà trong rừng”.
              Đây cũng chính là giá trị cốt lõi mà Nexus House muốn truyền tải.
              Kết nối mà Nexus House định hướng thể hiện qua nhiều tầng ý nghĩa,
              kết nối giữa người với người, giữa người với thiên nhiên, kết nối
              giữa khách hàng và Nexus House.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={image1}
              alt="Team"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-8 px-6 items-center">
          {/* Image */}
          <div>
            <img
              src={image2}
              alt="Relax"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-medium mb-4">
              <span className="text-red-600 font-semibold">T</span>
              <span>ái tạo đô thị trở thành 1 nơi đáng sống</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Thay vì bỏ phố về rừng, Nexus House vẫn chọn ươm cho mình một “khu
              rừng riêng” và thả vào đó những bình oxy mini giữa lòng đô thị.
              Nexus House mong muốn biến từng công đường ngõ hẻm nơi mà Nexus
              House đi qua đều trở thành những công viên nhỏ theo chiều đứng, từ
              đó sẽ có thêm nhiều khu vườn nhỏ hơn được tạo ra trong lòng đô thị
              vốn đã chịu nhiều tổn thương.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-8 px-6 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-medium mb-4">
              <span className="text-red-600 font-semibold">K</span>
              <span>hông gian riêng tư nhưng đầy sự kết nối</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Mọi không gian tại N exus House đều có ban công xanh, cửa sổ lớn
              hướng ánh sáng tự nhiên. Nội thất bày trí đơn giản nhưng không kém
              phần tinh tế, một nơi đủ riêng tư để bạn đắm chìm trong những suy
              tư riêng của bạn. Ghé Nexus House, bạn sẽ được đón tiếp như những
              vị chủ nhà. Hãy đến và nghỉ ngơi tại Nexus tuy xa mà thân thuộc
              như “ngôi nhà thứ 2 của bạn”.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={image3}
              alt="Team"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
        </div>
      
      <Footer />
    </div>
  );
}
