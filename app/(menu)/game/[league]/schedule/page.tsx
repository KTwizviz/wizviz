import ScheduleCalendar from "@/components/game/schedule/schedule-calendar";
import ScheduleCarousel from "@/components/game/schedule/schedule-carousel";

export default function page() {
  const date = new Date()
  const year = date.getFullYear()     //년 
  const month = date.getMonth() + 1   //월
  const today = date.getDate()        //일

  const currentDate: CalendarDate = { year: year, month: month, today: today }

  return (
    <div>
      <ScheduleCarousel date={currentDate} />
      <ScheduleCalendar date={currentDate} />
    </div>
  )
}
