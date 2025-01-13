import PlayerCard from "./player-card";

export function PitcherList({ data }: PitchListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((pitcher) => (
        <PlayerCard
          key={pitcher.backnum}
          pcode={pitcher.pcode}
          image={pitcher.mobilePlayerImg2}
          name={pitcher.playerName}
          backnum={parseInt(pitcher.backnum)}
          pathname="pitcher"
        />
      ))}
    </div>
  );
}

export default PitcherList;
