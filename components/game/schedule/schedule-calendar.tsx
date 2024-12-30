'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from "react"
import axios from 'axios';
import Image from 'next/image';

const ScheduleCalendar = () => {
  const date = new Date()
  const year = date.getFullYear()     //년 
  const month = date.getMonth() + 1   //월
  const today = date.getDate()        //일

  const [currentDate, setCurrentDate] = useState<CalendarDate>({ year, month })         // 현재 날짜 (년,월)
  const [schedules, setSchedules] = useState<GameSchedule[]>([])                        // 스케줄 API 데이터

  const stringDate = `${currentDate.year}${String(currentDate.month).padStart(2, '0')}` // 현재 선택된 날짜 스트링(API Params) e.g. '202409'
  const daysInMonth = new Date(currentDate.year, currentDate.month, 0).getDate()        // 현재 선택된 月의 마지막 날짜   
  const firstDayOfMonth = new Date(currentDate.year, currentDate.month - 1, 1).getDay() // 현재 선택된 시작 요일

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  useEffect(() => {
    getMonthSchedules(stringDate);
  }, [stringDate])

  const getMonthSchedules = async (params: string) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}/game/monthschedule?yearMonth=${params}`
      );
      setSchedules(res.data.data.list);

    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  }

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
          <div key={`empty - ${index}`} className="p-2" />
        ))}

        {days.map((day) => {
          const keyDate = stringDate + String(day).padStart(2, '0');
          const todaySchedule = schedules.find((schedule) => schedule.displayDate === keyDate);

          return (
            <div
              key={keyDate}
              className={`p-2 min-h-[140px] border text-sm 
              ${day === today && currentDate.year === year && currentDate.month === month
                  ? 'border-ELSE-AB2'
                  : 'border-gray-100'
                }`}
            >
              <div className="font-medium mb-1">{day}</div>

              {todaySchedule && (
                <div className="text-xs">
                  <div className="flex items-center gap-1 mb-1">
                    <Image
                      src={todaySchedule.visitLogo}
                      alt={todaySchedule.visit}
                      width={16}
                      height={16}
                    />
                    <span>vs</span>
                    <Image
                      src={todaySchedule.homeLogo}
                      alt={todaySchedule.home}
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>{todaySchedule.gtime}</div>
                  <div>{todaySchedule.stadium}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScheduleCalendar;