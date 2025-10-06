import React from "react"
import { Minus, Plus } from "lucide-react"

export default function GuestSelector({ guests, onUpdate}) {

  const updateGuests = (type, delta) => {
    const newValue = Math.max(0, guests[type] + delta)
    onUpdate({ ...guests, [type]: newValue })
  }

  return (
    <div
      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-[100] p-4 w-80"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-gray-900">Người lớn</div>
            <div className="text-sm text-gray-500">Từ 13 tuổi trở lên</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateGuests("adults", -1)}
              disabled={guests.adults === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{guests.adults}</span>
            <button
              onClick={() => updateGuests("adults", 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-gray-900">Trẻ em</div>
            <div className="text-sm text-gray-500">Từ 2-12 tuổi</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateGuests("children", -1)}
              disabled={guests.children === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{guests.children}</span>
            <button
              onClick={() => updateGuests("children", 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-gray-900">Em bé</div>
            <div className="text-sm text-gray-500">Dưới 2 tuổi</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateGuests("babies", -1)}
              disabled={guests.babies === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{guests.babies}</span>
            <button
              onClick={() => updateGuests("babies", 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}