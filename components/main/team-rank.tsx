import { useRouter } from "next/navigation";
import { ranking_score } from "@/assets/images/@index";
import { useEffect, useState } from "react";
import { getKtwizRank } from "@/api/main/apis";
import Image from "next/image";
import RankSkeleton from "../skeletons/rank-skeleton";

const TeamRank = () => {
  const router = useRouter();
  const [rank, setRank] = useState<GetKtwizRank>();

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const data = await getKtwizRank();
        setRank(data);
      } catch (error) {
        console.log("팀 순위를 불러오는데 실패했습니다 : ", error);
      }
    };
    fetchRank();
  }, []);

  return (
    <div
      className="px-12 py-10 flex w-[540px] h-[190px] cursor-pointer bg-gradient-to-r from-ELSE-F5 via-ELSE-CC6 to-ELSE-AB2 rounded-3xl content-center justify-end"
      onClick={() => {
        router.push("/game/league/ranking");
      }}
    >
      {rank ? (
        <div className="flex w-[307px] text-SYSTEM-white">
          <div>
            <p className="font-extralight text-m opacity-80 mb-2">팀 순위</p>
            <div className="flex items-end text-xl pr-5 border-r border-r-ELSE-">
              <p className="text-7xl font-medium text-SYSTEM-white mr-2">
                {rank?.rank}
              </p>
              위
            </div>
          </div>
          <div className="content-end pl-5 mb-2">
            <p className="font-light text-2xl mb-1">{rank?.wldName}</p>
            <p className="font-extralight text-m">{`총 ${rank?.game}경기, 승률 ${rank?.wra}`}</p>
          </div>
        </div>
      ) : (
        <RankSkeleton />
      )}
      <Image src={ranking_score} alt="ktwiz ranking" width={137} height={110} />
    </div>
  );
};

export default TeamRank;
