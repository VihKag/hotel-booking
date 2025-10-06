import React from "react";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
