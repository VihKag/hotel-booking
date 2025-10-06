import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import Meta from "../seo/Meta";
import HotelCard from "../components/HotelCard";
import { fetchHotels } from "../services/api";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const city = searchParams.get("city") || "";
  const minPrice = searchParams.get("minPrice") || "";

  useEffect(() => {
    setLoading(true);
    fetchHotels({ city, minPrice })
      .then((data) => {
        setHotels(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [city, minPrice]);

  const onFilter = (newParams) => {
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      Object.entries(newParams).forEach(([k, v]) =>
        v ? p.set(k, v) : p.delete(k)
      );
      return p;
    });
  };

  return (
    <div>
      {/* <Meta
        title={`Hotels ${city ? `- ${city}` : ""}`}
        description="List of hotels"
      /> */}
      <div className="mb-4">
        {/* filter UI - simple */}
        <input
          placeholder="city"
          defaultValue={city}
          onBlur={(e) => onFilter({ city: e.target.value })}
        />
        <input
          placeholder="min price"
          defaultValue={minPrice}
          onBlur={(e) => onFilter({ minPrice: e.target.value })}
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotels.map((h) => (
            <HotelCard key={h.id} hotel={h} />
          ))}
        </div>
      )}
    </div>
  );
}
