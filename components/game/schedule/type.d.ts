type GameSchedule = {
  key: number
  broadcast: string
  displayDate: string
  gameDate: number
  gmkey: string
  gtime: string
  home: string
  homeKey: string
  homeLogo: string
  homeScore: number
  matchTeamCode: string
  matchTeamName: string
  outcome: string
  stadium: string
  stadiumKey: string
  status: string
  visit: string
  visitKey: string
  visitLogo: string
  visitScore: number
}

type CalendarDate = {
  year: number
  month: number
  today?: number
}

type ScheduleCalendarProps = {
  date: CalendarDate
  schedules: GameSchedule[]
  monthHandler: (increment: string) => void
}

type CarouselProps = {
  contents: GameSchedule[];
}