import AllLeagueCell from "./all-league-cell";
import KtwizCell from "./ktwiz-cell";

const CalendarCell = ({ day, date, mode, ktSchedules, allSchedules }: CalendarCellProps) => {

  const keyDate = `${date.year}${String(date.month).padStart(2, '0')}` + String(day).padStart(2, '0');
  const ktSchedule = ktSchedules.find((schedule) => schedule.displayDate === keyDate);
  const allSchedule = allSchedules.filter((schedule) => schedule.displayDate === keyDate);

  return (
    // 개별 셀의 테두리와 배경
    <div
      className={`p-2 min-h-[140px] border text-sm
              ${day === date.today && date.year === date.year && date.month === date.month
          ? 'border-SYSTEM-main'  // 오늘 날짜는 빨간색 테두리 적용
          : 'border-gray-100'}
                ${ktSchedule && 'bg-ELSE-FF5'}` // KT 경기가 있는 날 배경 색상 적용 (FF5: 연한 빨강)
      }
    >
      {/* 셀의 날짜와 경기결과 표시 */}
      <div className="flex justify-between items-center font-medium mb-1">
        <span className="flex-1">{day}</span>
        {!mode && ktSchedule?.outcome && (
          <div
            className={`flex items-center text-white rounded-xl px-1.5 ${ktSchedule.outcome === '승' ? 'bg-SYSTEM-main' : 'bg-ELSE-D9'
              }`}
          >
            {ktSchedule.outcome}
          </div>
        )}
        <div className="flex-1"></div>
      </div>
      {/* 셀의 콘텐츠 */}
      {
        mode ? // 캘린더 모드 구별 (KTwiz 또는 전체리그)
          allSchedule?.map((schedule) => (
            <AllLeagueCell key={schedule.key} schedule={schedule} />
          ))
          : ktSchedule &&
          <KtwizCell key={ktSchedule.key} schedule={ktSchedule} />
      }
    </div>
  )
}

export default CalendarCell
