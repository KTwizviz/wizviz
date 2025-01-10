"use client";
import IconButton from "@/components/ui/icon-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamScore from "./team-score";
import { twMerge } from "tailwind-merge";
import ScoreBoard from "./score-board";
import { formatGameDate } from "@/utils/date";

const BoxscoreInfo = ({
  boxscoreData,
  setApiKey,
}: {
  boxscoreData: GetBoxscore;
  setApiKey: React.Dispatch<
    React.SetStateAction<{ gameDate?: number; gmkey?: string }>
  >;
}) => {
  const currentSchedule = boxscoreData.schedule.current;
  const scoreboard = boxscoreData.scoreboard;

  const disabled = (key: "current" | "next" | "prev") => {
    if (boxscoreData) return key in boxscoreData.schedule ? false : true;
  };

  const handleClick = (key: "prev" | "next") => {
    const targetSchedule = boxscoreData.schedule[key];
    if (!targetSchedule) return;
    setApiKey({
      gameDate: targetSchedule.gameDate,
      gmkey: targetSchedule.gmkey,
    });
  };

  if (!boxscoreData) return null;

  return (
    <div className="w-full py-8 bg-ELSE-F8">
      <div className="flex gap-5 justify-center items-center">
        <IconButton
          icon={ChevronLeft}
          border
          circle
          disabled={disabled("prev")}
          className={twMerge(
            "text-ELSE-DE bg-ELSE-7374",
            disabled("prev") && "cursor-not-allowed opacity-50"
          )}
          onClick={() => handleClick("prev")}
        />
        <span className="text-[26px] font-semibold">
          {formatGameDate(currentSchedule?.gameDate)}
        </span>
        <IconButton
          icon={ChevronRight}
          border
          circle
          disabled={disabled("next")}
          className={twMerge(
            "text-ELSE-DE bg-ELSE-7374",
            disabled("next") && "cursor-not-allowed opacity-50"
          )}
          onClick={() => handleClick("next")}
        />
      </div>
      <div className="flex w-full justify-center">
        <TeamScore
          team={currentSchedule.visit as Team}
          score={currentSchedule.vscore}
        />
        <div className="justify-items-center">
          <p className="text-l font-light mb-5">
            {currentSchedule.gtime} {currentSchedule.stadium} | 관중 :{" "}
            {currentSchedule.crowdCn
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            명
          </p>
          <ScoreBoard scoreboard={scoreboard} />
        </div>
        <TeamScore
          team={currentSchedule.home as Team}
          score={currentSchedule.hscore}
          homeGround
        />
      </div>
    </div>
  );
};
export default BoxscoreInfo;
