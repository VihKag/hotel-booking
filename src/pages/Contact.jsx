import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AOS from "aos";
import contactImg from "../assets/images/about-bg.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const branches = [
    {
      name: "Nexus House Hà Nội",
      address: "123 Phố Huế, Hoàn Kiếm, Hà Nội",
      phone: "(024) 3826 1234",
      email: "hanoi@nexushouse.vn",
      hours: "24/7",
      mapUrl: "https://maps.google.com/?q=21.0285,105.8508",
    },
    {
      name: "Nexus House Đà Nẵng",
      address: "456 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
      phone: "(0236) 3847 5678",
      email: "danang@nexushouse.vn",
      hours: "24/7",
      mapUrl: "https://maps.google.com/?q=16.0544,108.2022",
    },
    {
      name: "Nexus House Sài Gòn",
      address: "789 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      phone: "(028) 3822 9012",
      email: "saigon@nexushouse.vn",
      hours: "24/7",
      mapUrl: "https://maps.google.com/?q=10.7756,106.7019",
    },
    {
      name: "Nexus House Phú Quốc",
      address: "321 Trần Hưng Đạo, Dương Đông, Phú Quốc",
      phone: "(0297) 3846 3456",
      email: "phuquoc@nexushouse.vn",
      hours: "24/7",
      mapUrl: "https://maps.google.com/?q=10.2179,103.9571",
    },
    {
      name: "Nexus House Đà Lạt",
      address: "555 Trần Phú, Phường 4, Đà Lạt",
      phone: "(0263) 3821 7890",
      email: "dalat@nexushouse.vn",
      hours: "24/7",
      mapUrl: "https://maps.google.com/?q=11.9404,108.4583",
    },
    {
      name: "Nexus House Hội An",
      address: "888 Trần Phú, Phố Cổ, Hội An",
      phone: "(0235) 3861 2345",
      email: "hoian@nexushouse.vn",
      hours: "24/7",
      mapUrl: "https://maps.google.com/?q=15.8801,108.3380",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-black`}
      >
        <Header />
      </div>
      <SocialIcons />

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

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <h2 className="font-serif text-4xl mb-6 text-black">
              <span className="text-primary border-b-2 border-primary pb-1">
                Gửi
              </span>{" "}
              Tin Nhắn
            </h2>
            <p className="text-gray-600 mb-8">
              Điền thông tin vào form bên dưới và chúng tôi sẽ phản hồi trong
              vòng 24 giờ.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-black"
                >
                  Họ và Tên <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-black"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-black"
                  >
                    Số Điện Thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0912 345 678"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-black"
                >
                  Chủ Đề <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="booking">Đặt Phòng</option>
                  <option value="inquiry">Thắc Mắc</option>
                  <option value="feedback">Góp Ý</option>
                  <option value="complaint">Khiếu Nại</option>
                  <option value="partnership">Hợp Tác</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-black"
                >
                  Nội Dung <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left">
            <h2 className="font-serif text-4xl mb-6 text-black">
              <span className="text-primary border-b-2 border-primary pb-1">
                Thông Tin
              </span>{" "}
              Liên Hệ
            </h2>
            <p className="text-gray-600 mb-8">
              Liên hệ trực tiếp với chúng tôi qua các kênh dưới đây hoặc đến
              trực tiếp chi nhánh gần nhất.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">
                    Hotline
                  </h3>
                  <p className="text-gray-600">1900 1234 (24/7)</p>
                  <p className="text-sm text-gray-500">
                    Miễn phí từ điện thoại cố định
                  </p>
                </div>
              </div>

              <div className="flex gap-6 hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">
                    Email
                  </h3>
                  <p className="text-gray-600">info@nexushouse.vn</p>
                  <p className="text-sm text-gray-500">
                    Phản hồi trong vòng 24 giờ
                  </p>
                </div>
              </div>

              <div className="flex gap-6 hover:translate-x-1 transition-transform duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-black">
                    Giờ Làm Việc
                  </h3>
                  <p className="text-gray-600">Lễ tân: 24/7</p>
                  <p className="text-sm text-gray-500">
                    Văn phòng: 8:00 - 18:00 (T2-T6)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden h-80 shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681013716!2d106.69130886426479!3d10.776997692319734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2sBen%20Thanh%20Market!5e0!3m2!1sen!2s!4v1652426642045!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Nexus House"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-black">
              <span className="text-primary border-b-2 border-primary pb-1">
                Chi Nhánh
              </span>{" "}
              Của Chúng Tôi
            </h2>
            <p className="text-gray-600 text-lg">
              6 địa điểm trên khắp Việt Nam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-serif text-xl mb-5 text-black border-l-4 border-primary pl-3">
                  {branch.name}
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{branch.address}</span>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{branch.phone}</span>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{branch.email}</span>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{branch.hours}</span>
                  </div>
                </div>

                <Link
                  to={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 bg-transparent hover:bg-primary border-2 border-primary text-primary hover:text-white py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Xem Trên Bản Đồ
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-black">
            <span className="text-primary border-b-2 border-primary pb-1">
              Câu Hỏi
            </span>{" "}
            Thường Gặp
          </h2>
          <p className="text-gray-600 text-lg">
            Những câu hỏi phổ biến từ khách hàng
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "Làm thế nào để đặt phòng tại Nexus House?",
              a: "Bạn có thể đặt phòng trực tiếp trên website, qua hotline 1900 1234, hoặc liên hệ trực tiếp với chi nhánh.",
            },
            {
              q: "Chính sách hủy phòng như thế nào?",
              a: "Miễn phí hủy phòng trước 24 giờ check-in. Hủy trong vòng 24 giờ sẽ tính phí 50% giá trị đặt phòng.",
            },
            {
              q: "Khách sạn có phục vụ bữa sáng không?",
              a: "Có, tất cả các chi nhánh đều phục vụ bữa sáng buffet từ 6:00 - 10:00 sáng.",
            },
            {
              q: "Có dịch vụ đưa đón sân bay không?",
              a: "Có, chúng tôi cung cấp dịch vụ đưa đón sân bay với phí phụ thu. Vui lòng liên hệ trước để đặt lịch.",
            },
            {
              q: "Khách sạn có chỗ đậu xe không?",
              a: "Có, tất cả chi nhánh đều có bãi đậu xe miễn phí cho khách lưu trú.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-primary/30 transition-colors"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="font-semibold text-lg mb-3 text-black">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
