import { getCoachList } from "@/api/player/apis";
import CoachCard from "./coach-card";

export async function CoachList() {
  const coachList = await getCoachList();
  console.log(coachList, "coachlist");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {coachList.map((coach) => (
        <CoachCard
          key={coach.backnum}
          image={coach.mobilePlayerImg1}
          name={coach.playerName}
          backnum={parseInt(coach.backnum)}
        />
      ))}
    </div>
  );
}

export default CoachList;
