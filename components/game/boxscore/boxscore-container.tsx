"use client";

import { useEffect, useState } from "react";
import BoxscoreInfo from "./boxscore-info";
import BatterRecord from "./batter-record";
import MainRecord from "./main-record";
import PitcherRecord from "./pitcher-record";
import { fetchBoxscore } from "@/api/game/api";

const BoxscoreContainer = () => {
  const [data, setData] = useState<GetBoxscore>();
  const [isLoading, setIsLoading] = useState(true);
  const [apiKey, setApiKey] = useState<{
    gameDate?: number;
    gmkey?: string;
  }>({
    gameDate: undefined,
    gmkey: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchBoxscore(apiKey.gameDate, apiKey.gmkey);
        setData(res.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [apiKey]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || !data.schedule?.current) {
    return <div>No data available</div>;
  }

  return (
    <>
      {/* 박스스코어 */}
      <BoxscoreInfo boxscoreData={data} setApiKey={setApiKey} />
      {/* 주요 기록 */}
      <MainRecord etcgames={data.etcgames} />
      {/* 타자 기록 */}
      <BatterRecord team={data.scoreboard[0].bhomeName as TeamKey} batters={data.vbatters} />
      <BatterRecord team={data.scoreboard[1].bhomeName as TeamKey} batters={data.hbatters} />
      {/* 투수 기록 */}
      <PitcherRecord team={data.scoreboard[0].bhomeName as TeamKey} pitchers={data.vpitchers} />
      <PitcherRecord team={data.scoreboard[1].bhomeName as TeamKey} pitchers={data.hpitchers}/>
    </>
  );
};
export default BoxscoreContainer;
