import React from "react";

const Sidebar = ({ latestNews }) => {
  return (
    <aside className="bg-white rounded-xl shadow p-5">
      <h2 className="font-bold text-lg mb-3">TIN TỨC MỚI NHẤT</h2>
      <ul className="space-y-2 mb-6">
        {latestNews.map((item, index) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-2 text-sm hover:text-blue-600 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-lg mb-3">CHUYÊN MỤC</h3>
      <select className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-200">
        <option>Chọn chuyên mục</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Khám phá</option>
      </select>
    </aside>
  );
};

export default Sidebar;
