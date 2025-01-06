import Image from "next/image"

const AllLeagueCell = ({ schedule }: { schedule: GameSchedule }) => {
  return (
    <>
      <div className='flex justify-center text-s'>
        <Image
          src={schedule.visitLogo}
          alt={schedule.visit}
          width={24}
          height={24}
        />
        {schedule.home} {schedule.homeScore} : {schedule.visitScore} {schedule.visit}
        <Image
          src={schedule.homeLogo}
          alt={schedule.home}
          width={24}
          height={24}
        />
      </div>
    </>
  )
}

export default AllLeagueCell
