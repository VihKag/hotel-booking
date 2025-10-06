import { useState, useRef, useEffect } from "react"
import { Calendar, Users, MapPin } from "lucide-react"
import LocationSelector from "./LocationSelector"
import DateSelector from "./DateSelector"
import GuestSelector from "./GuestSelector"

export default function RoomFilter() {
  const [location, setLocation] = useState("Nexus House An Sơn Đà Lạt")
  const [checkIn, setCheckIn] = useState(new Date(2025, 9, 2))
  const [checkOut, setCheckOut] = useState(new Date(2025, 9, 3))
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  })

  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [showCheckInPicker, setShowCheckInPicker] = useState(false)
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false)
  const [showGuestSelector, setShowGuestSelector] = useState(false)

  const locationRef = useRef(null)
  const checkInRef = useRef(null)
  const checkOutRef = useRef(null)
  const guestRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false)
      }
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setShowCheckInPicker(false)
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setShowCheckOutPicker(false)
      }
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setShowGuestSelector(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day} Th${month} ${year}`
  }

  const handleSearch = () => {
    console.log("Booking data:", {
      location,
      checkIn,
      checkOut,
      guests,
    })
    alert(
      `Tìm kiếm phòng:\nĐịa điểm: ${location}\nNhận phòng: ${formatDate(checkIn)}\nTrả phòng: ${formatDate(checkOut)}\nKhách: ${guests.adults} người lớn, ${guests.children} trẻ em, ${guests.babies} em bé`,
    )
  }

  return (
    <section className="bg-white overflow-visible relative z-10">
      <div className="flex bg-white items-center gap-0">
        <div ref={locationRef} className="flex-1 relative overflow-visible">
          <div
            onClick={() => {
              setShowLocationDropdown(!showLocationDropdown)
              setShowCheckInPicker(false)
              setShowCheckOutPicker(false)
              setShowGuestSelector(false)
            }}
            className="w-full text-left px-4 py-1"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-600 mb-1">Chọn vị trí</div>
                <div className="font-medium text-gray-900">{location}</div>
              </div>
            </div>
          </div>
          {showLocationDropdown && (
            <LocationSelector
              currentLocation={location}
              onSelect={(loc) => {
                setLocation(loc)
                setShowLocationDropdown(false)
              }}
            />
          )}
        </div>

        <div className="w-px h-16" />

        <div ref={checkInRef} className="flex-1 relative overflow-visible">
          <div
            onClick={() => {
              setShowCheckInPicker(!showCheckInPicker)
              setShowLocationDropdown(false)
              setShowCheckOutPicker(false)
              setShowGuestSelector(false)
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-600 mb-1">Nhận phòng</div>
                <div className="font-medium text-gray-900">{formatDate(checkIn)}</div>
              </div>
            </div>
          </div>
          {showCheckInPicker && (
            <DateSelector
              currentDate={checkIn}
              onSelect={(date) => {
                setCheckIn(date)
                setShowCheckInPicker(false)
              }}
            />
          )}
        </div>

        <div className="w-px h-16" />

        <div ref={checkOutRef} className="flex-1 relative overflow-visible">
          <div
            onClick={() => {
              setShowCheckOutPicker(!showCheckOutPicker)
              setShowLocationDropdown(false)
              setShowCheckInPicker(false)
              setShowGuestSelector(false)
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-600 mb-1">Trả phòng</div>
                <div className="font-medium text-gray-900">{formatDate(checkOut)}</div>
              </div>
            </div>
          </div>
          {showCheckOutPicker && (
            <DateSelector
              currentDate={checkOut}
              onSelect={(date) => {
                setCheckOut(date)
                setShowCheckOutPicker(false)
              }}
            />
          )}
        </div>

        <div className="w-px h-16 bg-gray-200" />

        <div ref={guestRef} className="flex-1 relative overflow-visible">
          <div
            onClick={() => {
              setShowGuestSelector(!showGuestSelector)
              setShowLocationDropdown(false)
              setShowCheckInPicker(false)
              setShowCheckOutPicker(false)
            }}
            className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-600 mb-1">Số khách</div>
                <div className="font-medium text-gray-900">
                  {guests.adults} Người lớn · {guests.children} Trẻ em · {guests.babies} Em bé
                </div>
              </div>
            </div>
          </div>
          {showGuestSelector && <GuestSelector guests={guests} onUpdate={setGuests} />}
        </div>

        {/* Search Button */}
        <div className="pl-4">
          <button
            onClick={handleSearch}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-colors whitespace-nowrap"
          >
            Tìm phòng
          </button>
        </div>
      </div>
    </section>
  )
}
