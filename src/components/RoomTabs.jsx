import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Bed, Users, Maximize } from "lucide-react"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const roomCategories = [
	{ id: "deluxe", name: "Deluxe Rooms", count: 12 },
	{ id: "suite", name: "Luxury Suites", count: 8 },
	{ id: "penthouse", name: "Penthouses", count: 4 },
	{ id: "villa", name: "Private Villas", count: 6 },
]

const rooms = {
	deluxe: [
		{
			id: 1,
			name: "Superior Double Room",
			price: 1150000,
			image: "/luxury-hotel-deluxe-room-with-king-bed.jpg",
			size: "35 m²",
			guests: 2,
			beds: "1 King Bed",
			amenities: ["Free WiFi", "Smart TV", "Mini Bar", "City View"],
		},
		{
			id: 2,
			name: "Deluxe Double Room",
			price: 1250000,
			image: "/luxury-hotel-deluxe-room-with-twin-beds.jpg",
			size: "32 m²",
			guests: 2,
			beds: "2 Twin Beds",
			amenities: ["Free WiFi", "Smart TV", "Coffee Maker", "Garden View"],
		},
		{
			id: 3,
			name: "Skyline Valley Retreat",
			price: 1800000,
			image: "/luxury-hotel-executive-suite-living-room.jpg",
			size: "65 m²",
			guests: 4,
			beds: "1 King Bed",
			amenities: ["Free WiFi", "Living Room", "Kitchenette", "Ocean View"],
		},
		{
			id: 4,
			name: "Deluxe Pool View",
			price: 1350000,
			image: "/luxury-hotel-infinity-pool-ocean-view.jpg",
			size: "38 m²",
			guests: 2,
			beds: "1 Queen Bed",
			amenities: ["Free WiFi", "Balcony", "Pool View", "Smart TV"],
		},
				{
			id: 5,
			name: "Junior Suite",
			price: 2200000,
			image: "/luxury-hotel-rooftop-bar-sunset.jpg",
			size: "55 m²",
			guests: 3,
			beds: "1 King Bed",
			amenities: ["Free WiFi", "Living Area", "Mini Bar", "City View"],
		}
	],
	suite: [

		{
			id: 6,
			name: "Executive Suite",
			price: 2500000,
			image: "/luxury-hotel-penthouse-suite-rooftop-terrace.jpg",
			size: "70 m²",
			guests: 4,
			beds: "2 Queen Beds",
			amenities: ["Free WiFi", "Kitchenette", "Balcony", "Ocean View"],
		},
		{
			id: 7,
			name: "Presidential Suite",
			price: 3500000,
			image: "/luxury-hotel-lobby-with-elegant-interior.jpg",
			size: "100 m²",
			guests: 5,
			beds: "2 King Beds",
			amenities: ["Free WiFi", "Private Terrace", "Jacuzzi", "Panoramic View"],
		},
		{
			id: 8,
			name: "Luxury Suite",
			price: 2800000,
			image: "/luxury-hotel-executive-suite-living-room.jpg",
			size: "80 m²",
			guests: 4,
			beds: "1 King Bed, 1 Sofa Bed",
			amenities: ["Free WiFi", "Bathtub", "Mini Bar", "Smart TV"],
		},
	],
	penthouse: [
		{
			id: 9,
			name: "Penthouse Suite",
			price: 12990000,
			image: "/luxury-hotel-penthouse-suite-rooftop-terrace.jpg",
			size: "150 m²",
			guests: 6,
			beds: "2 King Beds",
			amenities: ["Free WiFi", "Private Terrace", "Full Kitchen", "360° View"],
		},
		{
			id: 10,
			name: "Sky Penthouse",
			price: 14500000,
			image: "/luxury-hotel-executive-suite-living-room.jpg",
			size: "180 m²",
			guests: 8,
			beds: "3 King Beds",
			amenities: ["Free WiFi", "Private Pool", "Rooftop Bar", "City View"],
		},
		{
			id: 11,
			name: "Royal Penthouse",
			price: 16000000,
			image: "/luxury-hotel-deluxe-room-with-twin-beds.jpg",
			size: "200 m²",
			guests: 10,
			beds: "4 King Beds",
			amenities: ["Free WiFi", "Jacuzzi", "Private Chef", "Panoramic View"],
		},
		{
			id: 12,
			name: "Presidential Penthouse",
			price: 18000000,
			image: "/luxury-hotel-fine-dining-restaurant.jpg",
			size: "220 m²",
			guests: 12,
			beds: "5 King Beds",
			amenities: ["Free WiFi", "Private Elevator", "Cinema Room", "Skyline View"],
		},
	],
	villa: [
		{
			id: 13,
			name: "Beach Villa",
			price: 15990000,
			image: "/luxury-beach-villa-with-private-pool.jpg",
			size: "200 m²",
			guests: 8,
			beds: "3 King Beds",
			amenities: ["Free WiFi", "Private Pool", "Beach Access", "Butler Service"],
		},
		{
			id: 14,
			name: "Garden Villa",
			price: 13500000,
			image: "/tropical-resort-phu-quoc.jpg",
			size: "180 m²",
			guests: 6,
			beds: "2 King Beds",
			amenities: ["Free WiFi", "Private Garden", "BBQ Area", "Smart TV"],
		},
		{
			id: 15,
			name: "Family Villa",
			price: 14500000,
			image: "/tropical-resort-phu-quoc-island.jpg",
			size: "220 m²",
			guests: 10,
			beds: "4 Queen Beds",
			amenities: ["Free WiFi", "Kids Room", "Private Pool", "City View"],
		},
		{
			id: 16,
			name: "Sunset Villa",
			price: 17000000,
			image: "/luxury-hotel-infinity-pool-ocean-view.jpg",
			size: "250 m²",
			guests: 12,
			beds: "5 King Beds",
			amenities: ["Free WiFi", "Sunset View", "Infinity Pool", "Jacuzzi"],
		},
	],
}

export default function RoomTabs() {
	const [activeTab, setActiveTab] = useState("deluxe")

	return (
		<section className="py-10" id="rooms">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-8">
					<h2
						className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
						style={{ fontFamily: "var(--font-playfair)" }}
					>
						Điểm đến tiếp theo
					</h2>
				</div>

				{/* Tabs */}
				<div className="flex flex-wrap justify-center gap-4 mb-6">
					{roomCategories.map((category) => (
						<button
						key={category.id}
						onClick={() => setActiveTab(category.id)}
						className={`group px-4 py-2 rounded-md border font-medium transition-all
							${
							activeTab === category.id
								? "bg-black text-white border-black"
								: "bg-white text-black border-black hover:bg-black hover:text-white"
							}
						`}
						style={{ minWidth: 220 }}
						>
						<span className={`text-xl font-bold text-red-600`}>N</span>
						<span className={`${
							activeTab === category.id
							? "text-white"
							: "text-black group-hover:text-white"
						}`}>exus {category.name}</span>
						</button>
					))}
				</div>

				{/* Hotline & Address */}
				<div className="text-center mb-8 font-medium text-muted-foreground">
					<div className="mb-1">
						Hotline:{" "}
						<a
							href="tel:+84799191898"
							className="underline text-red-600 font-semibold"
						>
							+84 79 919 1898
						</a>
					</div>
					<div>
						Địa chỉ: Tổ 20 Đ. An Sơn, Phường 4, Đà Lạt, Lâm Đồng 66115, Đà Lạt,
						Vietnam
					</div>
				</div>

				{/* Room Cards - dùng Swiper */}
				<div className="relative">
					<Swiper
						modules={[Navigation]}
						navigation
						slidesPerView={1}
						centeredSlides={true}
						loop
						spaceBetween={24}
						breakpoints={{
							640: { slidesPerView: 2, spaceBetween: 24 },
							768: { slidesPerView: 2, spaceBetween: 32 },
							1024: { slidesPerView: 3, spaceBetween: 32 },
						}}
						className="!pb-8"
					>
						{rooms[activeTab].map((room) => (
							<SwiperSlide key={room.id}>
								<div className="overflow-hidden relative group">
									<div className="relative h-60 md:h-64 lg:h-72 overflow-hidden">
										<img
											src={room.image || "/placeholder.svg"}
											alt={room.name}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										{/* Overlay bottom */}
										<div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-4 flex flex-col gap-2">
											<div className="flex items-center justify-between">
												<span className="text-white text-lg font-bold drop-shadow">
													{room.name}
												</span>
												<span className="bg-white text-black text-xs font-semibold rounded-full px-3 py-1">
													PHÒNG CUỐI
												</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-white text-base font-semibold">
													Giá: {room.price.toLocaleString()}VND
												</span>
												<Button className="bg-white text-black font-bold rounded-full px-5 py-1 text-base hover:bg-gray-200 transition-all">
													Xem phòng
												</Button>
											</div>
										</div>
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
