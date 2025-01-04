'use client'

import ScheduleCalendar from "@/components/game/schedule/schedule-calendar";
import ScheduleCarousel from "./schedule-carousel";
import { useEffect, useState } from "react";

const LeagueSchedule = () => {
  const date = new Date()
  const year = date.getFullYear();     //년 
  const month = date.getMonth() + 1;   //월
  const today = date.getDate();        //일

  const [currentDate, setCurrentDate] = useState<CalendarDate>({ year: year, month: month, today: today }); // 현재 날짜 (년,월)
  const [schedules, setSchedules] = useState<GameSchedule[]>([]);                       // 스케줄 API 데이터

  const stringDate = `${currentDate.year}${String(currentDate.month).padStart(2, '0')}`; // 현재 선택된 날짜 스트링(API Params) e.g. '202409'

  useEffect(() => {
    getMonthSchedules(stringDate);
  }, [stringDate])

  const getMonthSchedules = async (params: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/game/monthschedule?yearMonth=${params}`,
      );

      if (!res.ok) {
        throw new Error('네트워크 문제 발생');
      };

      const data = await res.json();
      const gameSchedules = data.data.list.map((gameSchedule: GameSchedule, index: number) => ({
        ...gameSchedule,
        key: index
      }));

      setSchedules(gameSchedules);
    } catch (error) {
      console.error('API 요청 에러:', error);
    }
  }

  const handleCurrentMonth = (month: string) => {
    if (month === 'next') {
      setCurrentDate(prev => {
        if (prev.month === 12) {
          return { year: prev.year + 1, month: 1 }
        }
        return { ...prev, month: prev.month + 1 }
      })
    }

    if (month === 'prev') {
      setCurrentDate(prev => {
        if (prev.month === 1) {
          return { year: prev.year - 1, month: 12 }
        }
        return { ...prev, month: prev.month - 1 }
      })
    }
  }

  return (
    <>
      <span className="text-3xl border-b-4">KT wiz 경기 일정</span>
      <ScheduleCarousel contents={schedules} />
      <span className="text-3xl border-b-4">모든 경기 일정</span>
      <ScheduleCalendar
        date={currentDate}
        schedules={schedules}
        monthHandler={handleCurrentMonth}
      />
    </>
  )
}

export default LeagueSchedule