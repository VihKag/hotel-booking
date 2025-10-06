import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import img1 from "../assets/images/motorcycle-rental-service.jpg"
import img2 from "../assets/images/airport-pickup-service-with-people-and-luggage.jpg"
import img3 from "../assets/images/mekong-delta-scenic-tour-landscape.jpg"
import img4 from "../assets/images/vietnam-tourism-travel-tour.jpg"

const services = [
  {
    id: 1,
    title: "THUÊ XE MÁY",
    label: "DỊCH VỤ",
    image: img1,
    buttonText: "ĐẶT NGAY",
  },
  {
    id: 2,
    title: "ĐƯA ĐÓN SÂN BAY",
    label: "DỊCH VỤ",
    image: img2,
    buttonText: "ĐẶT NGAY",
  },
  {
    id: 3,
    title: "SAIGON - MEKONG",
    label: "DELTA TOUR",
    image: img3,
    buttonText: "ĐẶT NGAY",
  },
  {
    id: 4,
    title: "TOUR DU LỊCH",
    label: "DỊCH VỤ",
    image: img4,
    buttonText: "ĐẶT NGAY",
  },
]

export default function ServicesSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 3
  const maxIndex = services.length - itemsPerView

const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? maxIndex : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === maxIndex ? 0 : prev + 1
    )
  }
  const handleBookNow = (service) => {
    console.log("[v0] Booking service:", service.title)
    alert(`Đặt dịch vụ: ${service.title}`)
  }

  return (
    <div className="container relative mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        //disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        //disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Swiper Container */}
      <div className="overflow-hidden mx-12">
        <div
          className="flex gap-8 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.33)}%)`,
          }}
        >
          {services.map((service) => (
            <div key={service.id} className="flex-shrink-0 w-[calc(33.333%-0.67rem)] relative group">
              {/* Service Card */}
              <div className="relative h-[240px] rounded-lg overflow-hidden">
                {/* Background Image */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-125"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"/>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Logo */}
                  <div className="flex items-start justify-between">
                    <div className="text-white">
                      <div className="text-xs font-semibold tracking-wider">NEXUS HOUSE</div>
                      <div className="text-[10px] tracking-widest opacity-80">AN SƠN ĐÀ LẠT</div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div>
                    <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-3">
                      {service.label}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4 tracking-wide">{service.title}</h3>
                    <button
                      onClick={() => handleBookNow(service)}
                      className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all"
                    >
                      {service.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
