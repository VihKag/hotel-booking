import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"

const galleryImages = [
  {
    id: 1,
    url: "/luxury-hotel-fitness-center-modern-equipment.jpg",
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind",
  },
  {
    id: 2,
    url: "/luxury-hotel-fine-dining-restaurant.jpg",
    title: "Fine Dining",
    description: "Exquisite culinary experiences",
  },
  {
    id: 3,
    url: "/luxury-hotel-infinity-pool-ocean-view.jpg",
    title: "Infinity Pool",
    description: "Breathtaking ocean views",
  },
  {
    id: 4,
    url: "/luxury-hotel-fitness-center-modern-equipment.jpg",
    title: "Fitness Center",
    description: "State-of-the-art equipment",
  },
  {
    id: 5,
    url: "/luxury-hotel-rooftop-bar-sunset.jpg",
    title: "Rooftop Bar",
    description: "Sunset cocktails and views",
  },
  {
    id: 6,
    url: "/luxury-hotel-conference-room-business.jpg",
    title: "Event Spaces",
    description: "Perfect for any occasion",
  },
]

export default function RoomCarousel() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-2 bg-muted/30" id="amenities">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Hotel Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class facilities designed for your comfort and pleasure
          </p>
        </div>
        <div className="relative">
          {/* Custom Navigation Buttons */}
<button
  ref={prevRef}
  className="custom-swiper-nav rounded-full absolute left-0 top-1/2 -translate-y-1/2 z-10"
  aria-label="Previous"
>
  <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
</button>
<button
  ref={nextRef}
  className="custom-swiper-nav rounded-full absolute right-0 top-1/2 -translate-y-1/2 z-10"
  aria-label="Next"
>
  <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
</button>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            slidesPerView={1}
            centeredSlides
            loop
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
            }}
            className="!pb-8"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden group transition-all duration-500">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-xl md:text-3xl font-serif font-bold mb-1 md:mb-2 text-white">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-md md:text-lg">{image.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}