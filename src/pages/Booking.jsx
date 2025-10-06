import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { Calendar, Users, MapPin, Star, Check } from "lucide-react";
import AOS from "aos";
export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    roomType: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  const locations = [
    { id: "hanoi", name: "Hà Nội", available: true },
    { id: "danang", name: "Đà Nẵng", available: true },
    { id: "saigon", name: "Sài Gòn", available: true },
    { id: "phuquoc", name: "Phú Quốc", available: true },
    { id: "dalat", name: "Đà Lạt", available: true },
    { id: "hoian", name: "Hội An", available: true },
  ];

  const roomTypes = [
    {
      id: "deluxe",
      name: "Deluxe Room",
      nameVi: "Phòng Deluxe",
      price: 1200000,
      size: "28m²",
      capacity: 2,
      image: "/placeholder.svg?height=256&width=400",
      amenities: ["Free WiFi", "Smart TV", "Điều hòa", "Minibar", "Két sắt"],
      description: "Phòng tiêu chuẩn với đầy đủ tiện nghi hiện đại",
      rating: 4.7,
    },
    {
      id: "superior",
      name: "Superior Room",
      nameVi: "Phòng Superior",
      price: 1800000,
      size: "35m²",
      capacity: 2,
      image: "/placeholder.svg?height=256&width=400",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Điều hòa",
        "Minibar",
        "Két sắt",
        "Ban công",
      ],
      description: "Phòng rộng rãi với ban công riêng và view đẹp",
      rating: 4.8,
    },
    {
      id: "suite",
      name: "Suite Room",
      nameVi: "Phòng Suite",
      price: 2800000,
      size: "50m²",
      capacity: 3,
      image: "/placeholder.svg?height=256&width=400",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Điều hòa",
        "Minibar",
        "Két sắt",
        "Ban công",
        "Bồn tắm",
      ],
      description: "Suite sang trọng với phòng khách riêng và bồn tắm",
      rating: 4.9,
    },
    {
      id: "family",
      name: "Family Room",
      nameVi: "Phòng Gia Đình",
      price: 3200000,
      size: "60m²",
      capacity: 4,
      image: "/placeholder.svg?height=256&width=400",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Điều hòa",
        "Minibar",
        "Két sắt",
        "2 Phòng ngủ",
        "Bếp nhỏ",
      ],
      description: "Phòng rộng rãi dành cho gia đình với 2 phòng ngủ",
      rating: 4.8,
    },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-black`}
      >
        <Header />
      </div>
      <div className="pt-20" data-aos="fade-up">
        <SocialIcons />

        {/* Progress Bar */}
        <div className="bg-secondary border-b border-border sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { num: 1, label: "Chọn Địa Điểm & Ngày" },
                { num: 2, label: "Chọn Phòng" },
                { num: 3, label: "Xác Nhận" },
              ].map((item, index) => (
                <div key={item.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= item.num
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.num}
                    </div>
                    <span className="text-xs mt-2 hidden md:block">
                      {item.label}
                    </span>
                  </div>
                  {index < 2 && (
                    <div
                      className={`w-16 md:w-32 h-0.5 mx-2 transition-colors ${
                        step > item.num ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Step 1: Location & Dates */}
          {step === 1 && (
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h2 className="font-serif text-4xl mb-8 text-center">
                Chọn Địa Điểm & Ngày Lưu Trú
              </h2>

              <div className="bg-secondary rounded-lg p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ngày Nhận Phòng <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          checkIn: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ngày Trả Phòng <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          checkOut: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Số Khách <span className="text-accent">*</span>
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        guests: Number(e.target.value),
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "khách" : "khách"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <h3 className="font-serif text-2xl mb-6">Chọn Chi Nhánh</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() =>
                      setBookingData({ ...bookingData, location: location.id })
                    }
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      bookingData.location === location.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-serif text-xl mb-2">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Nexus House {location.name}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={
                    !bookingData.location ||
                    !bookingData.checkIn ||
                    !bookingData.checkOut
                  }
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tiếp Theo
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Room Selection */}
          {step === 2 && (
            <div className="max-w-6xl mx-auto" data-aos="fade-up">
              <h2 className="font-serif text-4xl mb-8 text-center">
                Chọn Loại Phòng
              </h2>

              <div className="bg-secondary rounded-lg p-6 mb-8">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>
                      {
                        locations.find((l) => l.id === bookingData.location)
                          ?.name
                      }
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>
                      {bookingData.checkIn} - {bookingData.checkOut}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{bookingData.guests} khách</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`bg-secondary rounded-lg overflow-hidden border-2 transition-all ${
                      bookingData.roomType === room.id
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <div className="relative h-64">
                      <img
                        src={`/ceholder-svg-key-pbz42.jpg?key=pbz42&height=256&width=400`}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">
                          {room.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-2xl mb-2">
                        {room.nameVi}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {room.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{room.size}</span>
                        <span>•</span>
                        <span>Tối đa {room.capacity} khách</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="text-xs bg-background px-2 py-1 rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Giá mỗi đêm
                          </div>
                          <div className="font-serif text-2xl text-primary">
                            {formatPrice(room.price)}
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setBookingData({
                              ...bookingData,
                              roomType: room.id,
                            })
                          }
                          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                            bookingData.roomType === room.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent hover:bg-accent/90 text-accent-foreground"
                          }`}
                        >
                          {bookingData.roomType === room.id
                            ? "Đã Chọn"
                            : "Chọn Phòng"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Quay Lại
                </button>
                <button
                  onClick={handleNext}
                  disabled={!bookingData.roomType}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tiếp Theo
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h2 className="font-serif text-4xl mb-8 text-center">
                Xác Nhận Đặt Phòng
              </h2>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Booking Summary */}
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-serif text-2xl mb-4">
                      Thông Tin Đặt Phòng
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Chi nhánh:
                        </span>
                        <span className="font-medium">
                          Nexus House{" "}
                          {
                            locations.find((l) => l.id === bookingData.location)
                              ?.name
                          }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Loại phòng:
                        </span>
                        <span className="font-medium">
                          {
                            roomTypes.find((r) => r.id === bookingData.roomType)
                              ?.nameVi
                          }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Nhận phòng:
                        </span>
                        <span className="font-medium">
                          {bookingData.checkIn}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Trả phòng:
                        </span>
                        <span className="font-medium">
                          {bookingData.checkOut}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Số khách:</span>
                        <span className="font-medium">
                          {bookingData.guests} khách
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Guest Information Form */}
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-serif text-2xl mb-4">
                      Thông Tin Khách Hàng
                    </h3>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Họ và Tên <span className="text-accent">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Nguyễn Văn A"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email <span className="text-accent">*</span>
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Số Điện Thoại <span className="text-accent">*</span>
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="0912 345 678"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Quốc Tịch
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Việt Nam"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Yêu Cầu Đặc Biệt
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Ví dụ: Tầng cao, view biển, giường đôi..."
                        />
                      </div>
                    </form>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-secondary rounded-lg p-6 sticky top-24">
                    <h3 className="font-serif text-2xl mb-4">Tổng Chi Phí</h3>

                    <div className="space-y-3 mb-4 pb-4 border-b border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Giá phòng x 1 đêm
                        </span>
                        <span>
                          {formatPrice(
                            roomTypes.find((r) => r.id === bookingData.roomType)
                              ?.price || 0
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Phí dịch vụ
                        </span>
                        <span>{formatPrice(200000)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Thuế VAT (10%)
                        </span>
                        <span>
                          {formatPrice(
                            ((roomTypes.find(
                              (r) => r.id === bookingData.roomType
                            )?.price || 0) +
                              200000) *
                              0.1
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <span className="font-semibold">Tổng Cộng</span>
                      <span className="font-serif text-3xl text-primary">
                        {formatPrice(
                          ((roomTypes.find((r) => r.id === bookingData.roomType)
                            ?.price || 0) +
                            200000) *
                            1.1
                        )}
                      </span>
                    </div>

                    <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-medium transition-colors mb-4">
                      Xác Nhận Đặt Phòng
                    </button>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Miễn phí hủy phòng trước 24h</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Xác nhận đặt phòng ngay lập tức</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Thanh toán an toàn & bảo mật</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Quay Lại
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
