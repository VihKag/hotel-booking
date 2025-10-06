import React from "react";
import { MapPin } from "lucide-react";

export default function Careers() {
  const jobs = [
    { id: 1, title: "Tuyển dụng vị trí Lễ tân", location: "Hồ Chí Minh" },
    { id: 2, title: "Sale OTA", location: "HCM" },
  ];

  const features = [
    {
      title: "Văn hóa con người",
      description:
        "Tại Nexus House, con người là yếu tố quan trọng nhất. Chúng tôi luôn tạo điều kiện để mỗi cá nhân trở thành một phần quan trọng trong đội ngũ phát triển bền vững.",
      icon: "👥",
    },
    {
      title: "Chính sách nhân sự",
      description:
        "Chính sách nhân sự tại Nexus House luôn đặt lợi ích của nhân viên lên hàng đầu. Chúng tôi cam kết mang đến một môi trường làm việc công bằng và cơ hội phát triển toàn diện.",
      icon: "📋",
    },
    {
      title: "Tác phong chuyên nghiệp",
      description:
        "Chuyên nghiệp là yếu tố không thể thiếu tại Nexus House. Mỗi thành viên luôn giữ tác phong làm việc nghiêm túc, tận tâm và hướng đến sự hài lòng của khách hàng.",
      icon: "👔",
    },
    {
      title: "Thời gian làm việc linh hoạt",
      description:
        "Chúng tôi hiểu rằng sự linh hoạt giúp nhân viên cân bằng giữa công việc và cuộc sống, tạo động lực và hiệu suất cao nhất.",
      icon: "⏰",
    },
  ];

  return (
    <section className="font-[Inter] bg-white text-gray-800">
      {/* Section 1: Môi trường làm việc */}
      <div className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h3 className="text-sm text-red-600 mb-2 uppercase tracking-wide">
          Môi trường làm việc tại
        </h3>
        <h2 className="text-2xl font-semibold mb-10">NEXUS HOUSE</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {features.map((f, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h4 className="text-base font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Banner */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <img
          src="/recruitment-bg.jpg"
          alt="Recruitment Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-white text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            CÁC VỊ TRÍ ĐANG TUYỂN DỤNG
          </h2>
          <p className="text-sm max-w-2xl mx-auto">
            Bạn đam mê lĩnh vực khách sạn? Hãy gia nhập Nexus House để cùng
            chúng tôi tạo nên những trải nghiệm tuyệt vời cho khách hàng.
          </p>
        </div>
      </div>

      {/* Section 3: Danh sách vị trí */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200 pb-4"
            >
              <div className="flex items-center space-x-3 mb-2 md:mb-0">
                <span className="text-lg font-bold text-gray-700">
                  {index + 1}.
                </span>
                <h4 className="text-base font-semibold text-blue-800">
                  {job.title}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                  {job.location}
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1.5 rounded">
                  ỨNG TUYỂN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
