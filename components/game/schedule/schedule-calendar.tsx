'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"

interface CalendarDate {
  year: number
  month: number
}

export function ScheduleCalendar() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const [currentDate, setCurrentDate] = useState<CalendarDate>({ year, month }) // 현재 날짜 (년,월)

  const daysInMonth = new Date(currentDate.year, currentDate.month, 0).getDate() // 현재 달의 마지막 날짜   
  const firstDayOfMonth = new Date(currentDate.year, currentDate.month - 1, 1).getDay() // 현재 달의 시작 요일일

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  console.log(date)

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      if (prev.month === 1) {
        return { year: prev.year - 1, month: 12 }
      }
      return { ...prev, month: prev.month - 1 }
    })
  }

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      if (prev.month === 12) {
        return { year: prev.year + 1, month: 1 }
      }
      return { ...prev, month: prev.month + 1 }
    })
  }

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-between mb-4 px-4">
        <button onClick={handlePrevMonth} className="p-2">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <div className="flex text-xl items-center gap-2">
          <span>{currentDate.year}년</span>
          <span>{currentDate.month}월</span>
        </div>
        <button onClick={handleNextMonth} className="p-2">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      <div className="grid grid-cols-7">
        {weekdays.map((day) => (
          <div key={day} className="p-4 text-center text-m font-medium">
            {day}
          </div>
        ))}

        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="p-2" />
        ))}

        {days.map((day) => (
          <div
            key={day}
            className={`p-2 min-h-[140px] border border-gray-100 text-sm ${day === date && currentDate.year === year && currentDate.month === month
              ? 'bg-blue-50'
              : ''
              }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}