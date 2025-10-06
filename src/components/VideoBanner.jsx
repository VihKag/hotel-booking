import { ChevronDown } from "lucide-react";
import React from "react";
import coverVideo from "../assets/COVER-WEB.mp4";
import RoomFiletrs from "./RoomFilter";
export default function VideoBanner() {
  return (
    <section className="relative h-[90vh] w-full block">
      {/* Video Background */}
      <div className="relative h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover"
        >
          <source src={coverVideo} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay pointer-events-none z-10" />
            {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown color="white" className="h-8 w-8" />
      </div>
      {/* Content */}
      <div className="absolute left-1/2 filter-container">
        <div
          className="container mx-auto px-4 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <RoomFiletrs />
        </div>
      </div>


    </section>
  );
}
