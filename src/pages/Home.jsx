import { useEffect, useState } from "react";
import Header from "../components/Header";
import VideoBanner from "../components/VideoBanner";
import RoomTabs from "../components/RoomTabs";
import RoomCarousel from "../components/RoomCarousel";
import Footer from "../components/Footer";
import ServicesSwiper from "../components/ServicesSwiper";
import HotelServices from "../components/HotelService";
export default function Home() {
    const [scrolled, setScrolled] = useState(false);
      // Theo dõi scroll để đổi nền
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    // Initialize AOS animations
    const initAOS = () => {
      const elements = document.querySelectorAll("[data-aos]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("aos-animate");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    };

    const cleanup = initAOS();
    return cleanup;
  }, []);

  return (
  <div className="flex-1 bg-white min-h-screen">
    <div       className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}>
      <Header />
      </div>

      <VideoBanner />
      <div className="mt-16 px-4 md:px-16" data-aos="fade-up">
        <ServicesSwiper />
      </div>
      <div className="my-6" data-aos="fade-up">
        <RoomCarousel />
      </div>
      <div className="my-6 px-4 md:px-16" data-aos="fade-up">
        <RoomTabs />
      </div>
      <div className="my-6 px-4 md:px-16" data-aos="fade-up">
        <HotelServices />
      </div>
      <Footer />
    </div>
  );
}
