import React from "react";
import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <Link
        to={`/hotels/${hotel.city.toLowerCase()}/${hotel.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <img
          loading="lazy"
          src={hotel.image || "/assets/images/placeholder.jpg"}
          alt={hotel.name}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{hotel.name}</h3>
      </Link>
      <p className="text-sm">
        {hotel.city} • ${hotel.price} • ⭐ {hotel.rating}
      </p>
    </article>
  );
}
