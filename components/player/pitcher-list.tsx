import { getPitcherList } from "@/api/player/apis";
import PlayerCard from "./player-card";

export async function PitcherList() {
  const pitcherList = await getPitcherList();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pitcherList.map((pitcher) => (
        <PlayerCard
          key={pitcher.backnum}
          image={pitcher.mobilePlayerImg2}
          name={pitcher.playerName}
          backnum={parseInt(pitcher.backnum)}
        />
      ))}
    </div>
  );
}

export default PitcherList;
