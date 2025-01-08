import Image from "next/image"

const KtwizCell = ({ schedule }: { schedule: GameSchedule }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-m">
      <div className="flex items-center gap-1 mb-1">
        <Image
          src={schedule.visitLogo}
          alt={schedule.visit}
          width={48}
          height={48}
        />
        <span className='text-m'>{schedule.homeScore} : {schedule.visitScore}</span>
        <Image
          src={schedule.homeLogo}
          alt={schedule.home}
          width={48}
          height={48}
        />
      </div>
      <p>{schedule.gtime}</p>
      {schedule.stadium === '수원' ?
        <p className='text-SYSTEM-main font-bold'>
          {schedule.stadium}
        </p>
        : <p> {schedule.stadium}</p>
      }
    </div>
  )
}

export default KtwizCell
