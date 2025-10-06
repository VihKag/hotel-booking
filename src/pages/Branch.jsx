/* eslint-disable no-unused-vars */
import { useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";
import { MapPin, Users, Star } from "lucide-react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
// Hàm helper để tạo slug
const createSlug = (text) =>
  text
    .normalize("NFD") // tách dấu
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .toLowerCase()
    .replace(/đ/g, "d") // thay "đ" -> "d"
    .replace(/[^a-z0-9\s-]/g, "") // bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-"); // thay khoảng trắng -> "-"
export default function BranchesPage() {
   const { branchId } = useParams();

  // Branch data (should be moved to a shared file in production)
const branches = [
  {
    id: 1,
    name: "Nexus House Hà Nội",
    location: "Hoàn Kiếm, Hà Nội",
    address: "123 Phố Huế, Hoàn Kiếm, Hà Nội",
    image: "/bra1.jpg",
    rooms: 45,
    rating: 4.8,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Tọa lạc tại trung tâm phố cổ Hà Nội, Nexus House Hà Nội mang đến trải nghiệm lưu trú hiện đại giữa lòng di sản văn hóa.",
    amenities: ["Free WiFi", "Bữa sáng miễn phí", "Hồ bơi", "Gym", "Spa"],
  },
  {
    id: 2,
    name: "Nexus House Đà Nẵng",
    location: "Sơn Trà, Đà Nẵng",
    address: "456 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
    image: "/beachfront-hotel-danang.jpg",
    rooms: 60,
    rating: 4.9,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "View biển tuyệt đẹp, gần bãi biển Mỹ Khê. Nexus House Đà Nẵng là điểm dừng chân lý tưởng cho kỳ nghỉ của bạn.",
    amenities: [
      "Free WiFi",
      "Bữa sáng miễn phí",
      "Hồ bơi vô cực",
      "Beach Club",
      "Spa",
    ],
  },
  {
    id: 3,
    name: "Nexus House Sài Gòn",
    location: "Quận 1, TP. Hồ Chí Minh",
    address: "789 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
    image: "/luxury-hotel-saigon.jpg",
    rooms: 80,
    rating: 4.7,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Nằm ngay trung tâm Sài Gòn, gần phố đi bộ Nguyễn Huệ. Kết nối hoàn hảo với mọi điểm đến trong thành phố.",
    amenities: [
      "Free WiFi",
      "Bữa sáng miễn phí",
      "Rooftop Bar",
      "Gym",
      "Business Center",
    ],
  },
  {
    id: 4,
    name: "Nexus House Phú Quốc",
    location: "Dương Đông, Phú Quốc",
    address: "321 Trần Hưng Đạo, Dương Đông, Phú Quốc",
    image: "/tropical-resort-phu-quoc.jpg",
    rooms: 50,
    rating: 4.9,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Resort nghỉ dưỡng bên bờ biển đảo ngọc Phú Quốc. Thiên đường nhiệt đới với dịch vụ 5 sao.",
    amenities: [
      "Free WiFi",
      "All-inclusive",
      "Private Beach",
      "Water Sports",
      "Kids Club",
    ],
  },
  {
    id: 5,
    name: "Nexus House An Sơn Đà Lạt",
    location: "An Sơn, Đà Lạt",
    address: "88 An Sơn, Phường 4, Đà Lạt",
    image: "/cozy-hotel-dalat.jpg",
    rooms: 40,
    rating: 4.9,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Ẩn mình giữa rừng thông yên bình, Nexus House An Sơn Đà Lạt là nơi lý tưởng để nghỉ dưỡng và tận hưởng không khí trong lành.",
    amenities: [
      "Free WiFi",
      "Bữa sáng miễn phí",
      "Fireplace",
      "Garden",
      "Coffee Shop",
    ],
  },
  {
    id: 6,
    name: "Nexus House Retreat Làng Báo Chí",
    location: "Làng Báo Chí, Quận 3, TP. Hồ Chí Minh",
    address: "12 Làng Báo Chí, Quận 3, TP. Hồ Chí Minh",
    image: "/bra1.jpg",
    rooms: 25,
    rating: 4.8,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Một ốc đảo yên bình giữa lòng Sài Gòn, Nexus House Retreat Làng Báo Chí mang đến không gian tĩnh lặng, gần gũi thiên nhiên.",
    amenities: [
      "Free WiFi",
      "Bữa sáng miễn phí",
      "Yoga Studio",
      "Spa & Sauna",
      "Coffee Lounge",
    ],
  },
  {
    id: 7,
    name: "Nexus House Nguyễn Bỉnh Khiêm",
    location: "Quận 1, TP. Hồ Chí Minh",
    address: "22 Nguyễn Bỉnh Khiêm, Quận 1, TP. Hồ Chí Minh",
    image: "/bra2.jpg",
    rooms: 55,
    rating: 4.8,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Khách sạn mang phong cách đô thị hiện đại, tọa lạc tại trung tâm Sài Gòn, thuận tiện di chuyển đến các khu vực lân cận.",
    amenities: [
      "Free WiFi",
      "Gym",
      "Bữa sáng miễn phí",
      "Rooftop Café",
      "Meeting Room",
    ],
  },
  {
    id: 8,
    name: "Nexus House Garden Thảo Điền",
    location: "Thảo Điền, TP. Thủ Đức",
    address: "15 Đường Thảo Điền, TP. Thủ Đức",
    image: "/bra3.jpg",
    rooms: 40,
    rating: 4.9,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Nằm giữa khu Thảo Điền sang trọng, Nexus House Garden mang phong cách vườn xanh mát, thích hợp cho kỳ nghỉ thư giãn.",
    amenities: [
      "Free WiFi",
      "Bữa sáng miễn phí",
      "Garden View",
      "Outdoor Pool",
      "Spa",
    ],
  },
  {
    id: 9,
    name: "Nexus House Cây Điệp",
    location: "Phường 9, Đà Lạt",
    address: "99 Cây Điệp, Phường 9, Đà Lạt",
    image: "/bra5.jpg",
    rooms: 28,
    rating: 4.9,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Ẩn mình giữa những hàng cây điệp nở hoa, Nexus House Cây Điệp là lựa chọn hoàn hảo cho kỳ nghỉ yên bình tại Đà Lạt.",
    amenities: [
      "Free WiFi",
      "Fireplace",
      "Garden View",
      "Bữa sáng miễn phí",
      "Tea Room",
    ],
  },
  {
    id: 10,
    name: "Nexus House Hillside Phú Quốc",
    location: "Đồi Dương Đông, Phú Quốc",
    address: "27 Đồi Dương Đông, Phú Quốc",
    image: "/bra2.jpg",
    rooms: 50,
    rating: 4.9,
    img1: "/bra1.jpg",
    img2: "/bra2.jpg",
    img3: "/bra3.jpg",
    img4: "/bra4.jpg",
    img5: "/bra5.jpg",
    description:
      "Tọa lạc trên đồi cao hướng biển, Nexus House Hillside Phú Quốc mang đến tầm nhìn toàn cảnh tuyệt đẹp và dịch vụ cao cấp.",
    amenities: [
      "Free WiFi",
      "Private Pool",
      "All-inclusive",
      "Sky Lounge",
      "Spa",
    ],
  },
];

 const branchesWithSlug = branches.map((b) => ({
    ...b,
    slug: createSlug(b.name),
  }));
   // Tìm branch theo slug
  const selectedBranch = branchesWithSlug.find((b) => b.slug === branchId);

  useEffect(() => {
    
    console.log("Branch ID from URL:", branchId);
    console.log(branchesWithSlug[6].slug);
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  if (!selectedBranch) {
    return <div>Sai đường dẫn</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black">
        <Header />
      </div>
      <div className="container mx-auto pt-22">
        <SocialIcons />

{/* Dynamic Hero Section */}
        <section className="container mx-auto">
          {/* Main Image */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="flex-1">
              <img
                src={selectedBranch.image}
                alt={selectedBranch.name}
                className="w-full h-[400px] object-cover rounded-lg shadow"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              <img
                src={selectedBranch.img1}
                alt="Phòng khách"
                className="w-full h-44 object-cover rounded-lg"
              />
              <img
                src={selectedBranch.img2}
                alt="Phòng ngủ"
                className="w-full h-44 object-cover rounded-lg"
              />
              <img
                src={selectedBranch.img3}
                alt="Quầy bar"
                className="w-full h-44 object-cover rounded-lg"
              />
              <img
                src={selectedBranch.img4}
                alt="Không gian chung"
                className="w-full h-44 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b flex gap-10 text-lg font-semibold mb-6">
            <button className="pb-2 border-b-2 border-red-600 text-red-600">
              Giới thiệu
            </button>
            <button className="pb-2 border-b-2 border-transparent hover:border-black transition">
              Chọn phòng
            </button>
            <button className="pb-2 border-b-2 border-transparent hover:border-black transition">
              Vị trí
            </button>

            <button className="ml-auto bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700 transition">
              Chọn phòng ngay
            </button>
          </div>

          {/* Description and Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-3">{selectedBranch.name}</h2>
              <p className="text-gray-700 mb-6">{selectedBranch.description}</p>

              <div className="grid grid-cols-2 gap-y-3 text-gray-800">
                <div className="flex items-center gap-2">
                  🛍️ <span>Khu mua sắm</span>
                </div>
                <div className="flex items-center gap-2">
                  🚗 <span>Đậu xe hơi</span>
                </div>
                <div className="flex items-center gap-2">
                  ☕ <span>Share Coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  🧹 <span>Dịch vụ phòng</span>
                </div>
                <div className="flex items-center gap-2">
                  🕛 <span>An ninh 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  🗺️ <span>Gần trung tâm</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <iframe
                title="Nexus House Map"
                src="https://www.google.com/maps/embed?..."
                className="w-full h-64 rounded-lg shadow"
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <p className="mt-2 text-gray-700 text-sm">{selectedBranch.address}</p>

              <div className="mt-4 text-gray-800 text-sm">
                <h3 className="font-semibold mb-2">Khám phá khu vực</h3>
                <ul className="space-y-1">
                  <li>Katinat Coffee – 0.01 km</li>
                  <li>Blacksheep Bistro Restaurant – 0.03 km</li>
                  <li>Pizza 4P’s – 0.02 km</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Grid */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div
                key={branch.id}
                className="group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Replace onClick with Link */}
                <Link href={`/branches/${branch.id}`}>
                  <div className="relative h-80 overflow-hidden rounded-lg mb-4">
                    <img
                      src={branch.image || "/placeholder.svg"}
                      alt={branch.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">
                        {branch.rating}
                      </span>
                    </div>
                  </div>
                </Link>

                <h3 className="font-serif text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {branch.name}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{branch.location}</span>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {branch.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{branch.rooms} phòng</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {branch.amenities.slice(0, 3).map((amenity, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-lg transition-colors font-medium">
                  Xem chi tiết & Đặt phòng
                </button>
              </div>
            ))}
          </div>
        </section>

        
      </div>
      <Footer />
    </div>
  );
}
