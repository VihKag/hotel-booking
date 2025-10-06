import React from "react";
import NewsCard from "../components/NewsCard";
import Sidebar from "../components/SlideBar";

import news1 from "../assets/images/di-phu-quoc-nen-o-khach-san-hay-resort-1.webp";
import news2 from "../assets/images/tim-khach-san-phu-quoc-1.webp";
// Using a placeholder image instead of the missing image
import news3 from "../assets/images/about-bg.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NewsPage = () => {
  const news = [
    {
      image: news1,
      title: "#(Demo) Các Bước Tìm Khách Sạn Phú Quốc Giá Rẻ, Nhanh Chóng Nhất",
      description:
        "Tìm khách sạn phù hợp để trải nghiệm du lịch tại hòn đảo này trở nên hoàn hảo. Tìm hiểu quy trình và lợi ích của đặt phòng trước giúp chuyến đi thêm dễ dàng...",
    },
    {
      image: news2,
      title: "#Cẩm Nang Du Lịch – Đi Phú Quốc Nên Ở Khách Sạn Hay Resort",
      description:
        "Khám phá những điểm nổi bật khi lựa chọn giữa khách sạn và resort ở Phú Quốc. Hiểu rõ nhu cầu để đưa ra quyết định thông minh cho kỳ nghỉ của bạn.",
    },
    {
      image: news3,
      title: "Động Phong Nha",
      description:
        "Động Phong Nha là hang động thuộc vùng núi đá vôi, là điểm đến nổi tiếng của Quảng Bình – nơi hội tụ vẻ đẹp tự nhiên kỳ ảo.",
    },
  ];

  const latest = news.map((n) => n.title);

  return (
    <div className="flex-1 bg-white min-h-screen">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-black`}
      >
        <Header />
      </div>
      <div className="container mx-auto px-4 py-22 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Danh sách bài viết */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1" data-aos="fade-up">
          <Sidebar latestNews={latest} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
