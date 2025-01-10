import Image from "next/image";
import { teamLogos } from "@/constants/team-logos";

const TeamScore = (props: TeamScoreProps) => {
  return (
    <div className="px-12 align-middle justify-items-center space-y-3">
      <p className="text-sm">{props.homeGround ? "Home" : "Away"}</p>
      <Image
        src={teamLogos[props.team]}
        alt="team logo"
        width={100}
        height={85}
        className="w-full"
      />
      <div className="font-semibold text-2xl">{props.score}</div>
    </div>
  );
};
export default TeamScore;
