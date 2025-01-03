'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image';

const ScheduleCalendar = ({ date, schedules, monthHandler }: ScheduleCalendarProps) => {
  const daysInMonth = new Date(date.year, date.month, 0).getDate()        // 현재 선택된 月의 마지막 날짜   
  const firstDayOfMonth = new Date(date.year, date.month - 1, 1).getDay() // 현재 선택된 月의 시작 요일

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="w-full mx-auto mt-6">
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
          const keyDate = `${date.year}${String(date.month).padStart(2, '0')}` + String(day).padStart(2, '0');
          const todaySchedule = schedules.find((schedule) => schedule.displayDate === keyDate);

          return (
            <div
              key={keyDate}
              className={`p-2 min-h-[140px] border text-sm
              ${day === date.today && date.year === date.year && date.month === date.month
                  ? 'border-SYSTEM-main'
                  : 'border-gray-100'}
                ${todaySchedule && 'bg-ELSE-FF5'}` // 스케줄이 있는 날 배경 색상 적용
              }
            >
              <div className="flex justify-between items-center font-medium mb-1">
                <span className="flex-1">
                  {day}
                </span>
                {todaySchedule?.outcome === '승' ?
                  <div className='flex items-center text-white bg-SYSTEM-main rounded-xl px-1.5'>승</div>
                  : todaySchedule?.outcome === '패' &&
                  <div className='flex items-center text-white bg-ELSE-D9 rounded-xl px-1.5'>패</div>
                }
                <div className="flex-1"></div>
              </div>

              {
                todaySchedule && (
                  <div className="w-full flex flex-col justify-center items-center text-m">
                    <div className="flex items-center gap-1 mb-1">
                      <Image
                        src={todaySchedule.visitLogo}
                        alt={todaySchedule.visit}
                        width={48}
                        height={48}
                      />
                      <span className='text-l'>vs</span>
                      <Image
                        src={todaySchedule.homeLogo}
                        alt={todaySchedule.home}
                        width={48}
                        height={48}
                      />
                    </div>
                    <p>{todaySchedule.gtime}</p>
                    {todaySchedule.stadium === '수원' ?
                      <p className='text-SYSTEM-main font-bold'>
                        {todaySchedule.stadium}
                      </p>
                      : <p> {todaySchedule.stadium}</p>
                    }
                  </div>
                )
              }
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default ScheduleCalendar;