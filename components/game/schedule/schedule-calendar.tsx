'use client'

import { Switch } from '@/components/ui/switch';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react';
import CalendarCell from './calendar-cell';

const ScheduleCalendar = ({ date, schedules, allSchedules, monthHandler }: ScheduleCalendarProps) => {
  const daysInMonth = new Date(date.year, date.month, 0).getDate()        // 현재 선택된 月의 마지막 날짜   
  const firstDayOfMonth = new Date(date.year, date.month - 1, 1).getDay() // 현재 선택된 月의 시작 요일

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  const [isAllLeagueMode, setIsAllLeagueMode] = useState(false);

  return (
    <div className="w-full mx-auto my-10">
      <div className="flex items-center justify-between mb-4 px-4">
        <button onClick={() => monthHandler('prev')} className="p-2">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <div className="flex text-xl items-center gap-2">
          <span>{date.year}년</span>
          <span>{date.month}월</span>
        </div>
        <button onClick={() => monthHandler('next')} className="p-2">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
      <div className='flex justify-end gap-2 pr-4'>
        <Switch
          checked={isAllLeagueMode}
          onCheckedChange={(checked: boolean) => setIsAllLeagueMode(checked)}
        />
        <span className='font-medium text-sm text-ELSE-49'>
          전체 리그
        </span>
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

        {days.map((day) => (
          // 캘린더의 개별 셀
          <CalendarCell
            key={day}
            day={day}
            date={date}
            mode={isAllLeagueMode}
            ktSchedules={schedules}
            allSchedules={allSchedules}
          />)
        )}
      </div>
    </div >
  )
}

export default ScheduleCalendar;