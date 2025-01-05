'use client'

import ScheduleCalendar from "@/components/game/schedule/schedule-calendar";
import ScheduleCarousel from "./schedule-carousel";
import { useEffect, useState } from "react";
import { getMonthSchedules, getAllSchedules } from "@/api/game/api";

const LeagueSchedule = () => {
  const date = new Date()
  const year = date.getFullYear();     //년 
  const month = date.getMonth() + 1;   //월
  const today = date.getDate();        //일

  const [currentDate, setCurrentDate] = useState<CalendarDate>({ year: year, month: month, today: today }); // 현재 날짜 (년,월)
  const [schedules, setSchedules] = useState<GameSchedule[]>([]); // 스케줄 API 데이터
  const [allSchedules, setAllSchedules] = useState<GameSchedule[]>([]); // 스케줄 API 데이터

  const stringDate = `${currentDate.year}${String(currentDate.month).padStart(2, '0')}`; // 현재 선택된 날짜 스트링(API Params) e.g. '202409'

  useEffect(() => {
    const fetchMonthSchedules = async () => {
      try {
        const data = await getMonthSchedules(stringDate);
        if (!data) {
          console.log('KT wiz 일정을 불러오는데 실패했습니다');
          return;
        }
        setSchedules(data);
      } catch (error) {
        console.log('KT wiz 일정을 불러오는데 실패했습니다:', error);
      }
    };
    fetchMonthSchedules();
  }, [stringDate]);

  useEffect(() => {
    const fetchAllSchedules = async () => {
      try {
        const data = await getAllSchedules(stringDate);
        if (!data) {
          console.log('모든 일정을 불러오는데 실패했습니다');
          return;
        }
        setAllSchedules(data);
      } catch (error) {
        console.log('모든 일정을 불러오는데 실패했습니다:', error);
      }
    };
    fetchAllSchedules();
  }, [stringDate]);

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
      <span className="text-3xl border-b-4">{currentDate.month}월 경기 일정</span>
      <ScheduleCarousel contents={schedules} />
      <span className="text-3xl border-b-4">한눈에 보기</span>
      <ScheduleCalendar
        date={currentDate}
        schedules={schedules}
        allSchedules={allSchedules}
        monthHandler={handleCurrentMonth}
      />
    </>
  )
}

export default LeagueSchedule