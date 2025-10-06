import React from "react"
const locations = [
  "Nexus House An Sơn Đà Lạt",
  "Khách sạn Mường Thanh Đà Lạt",
  "Ana Mandara Villas Đà Lạt",
  "Terracotta Hotel & Resort Đà Lạt",
  "Swiss-Belresort Tuyen Lam Đà Lạt",
]

export default function LocationSelector({ currentLocation, onSelect}) {

  return (
    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-[100] max-h-64 overflow-y-auto">
      {locations.map((location) => (
        <button
          key={location}
          onClick={() => onSelect(location)}
          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
            location === currentLocation ? "bg-red-50 text-red-600" : "text-gray-900"
          }`}
        >
          {location}
        </button>
      ))}
    </div>
  )
}