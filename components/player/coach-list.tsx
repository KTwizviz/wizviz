import PlayerCard from "./player-card";

type CoachListProps = {
  data: CoachInfo[];
};
export function CoachList({ data }: CoachListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((coach) => (
        <PlayerCard
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
