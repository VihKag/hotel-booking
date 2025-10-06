import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DateSelector({ currentDate, onSelect}) {
  const [viewDate, setViewDate] = useState(new Date(currentDate))

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(viewDate)

  const previousMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))
  }

  const selectDate = (day) => {
    const selected = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
    onSelect(selected)
  }

  const monthNames = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ]
  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]

  return (
    <div
      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 w-80"
    >
      <div className="flex items-center justify-between mb-4 z-50">
        <button onClick={previousMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="font-semibold">
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </div>
        <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2 z-50">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const isSelected =
            currentDate.getDate() === day &&
            currentDate.getMonth() === viewDate.getMonth() &&
            currentDate.getFullYear() === viewDate.getFullYear()

          return (
            <button
              key={day}
              onClick={() => selectDate(day)}
              className={`py-2 text-center rounded hover:bg-gray-100 transition-colors  z-50 ${
                isSelected ? "bg-red-600 text-white hover:bg-red-700" : "text-gray-900 "
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}