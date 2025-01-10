"use client";

import { useState } from "react";
import BoxscoreInfo from "./boxscore-info";
import BatterRecord from "./batter-record";
import MainRecord from "./main-record";
import PitcherRecord from "./pitcher-record";
import { useBoxscore } from "@/hooks/useBoxscore";

const BoxscoreContainer = () => {
  const [apiKey, setApiKey] = useState<{
    gameDate?: number;
    gmkey?: string;
  }>({
    gameDate: undefined,
    gmkey: "",
  });

  const { data, isLoading } = useBoxscore(apiKey.gameDate, apiKey.gmkey);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || !data.scoreboard) {
    return <div>No data available</div>;
  }

  return (
    <>
      {/* 박스스코어 */}
      <BoxscoreInfo boxscoreData={data} setApiKey={setApiKey} />
      {/* 주요 기록 */}
      <MainRecord etcgames={data.etcgames} />
      {/* 타자 기록 */}
      <BatterRecord
        team={data.scoreboard[0].bhomeName as TeamKey}
        batters={data.vbatters}
      />
      <BatterRecord
        team={data.scoreboard[1].bhomeName as TeamKey}
        batters={data.hbatters}
      />
      {/* 투수 기록 */}
      <PitcherRecord
        team={data.scoreboard[0].bhomeName as TeamKey}
        pitchers={data.vpitchers}
      />
      <PitcherRecord
        team={data.scoreboard[1].bhomeName as TeamKey}
        pitchers={data.hpitchers}
      />
    </>
  );
};
export default BoxscoreContainer;
