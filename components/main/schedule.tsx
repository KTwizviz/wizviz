"use client";

import { useState } from "react";
import Image from "next/image";
import { bg_schedule } from "@/assets/images/@index";
import IconButton from "@/components/ui/icon-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBoxscore } from "@/hooks/useBoxscore";
import { teamLogos } from "@/constants/team-logos";
import { formatGameDate } from "@/utils/date";
import { useRouter } from "next/navigation";
import TeamRank from "./team-rank";
import Parking from "./parking";
import ScheduleSkeleton from "../skeletons/schedule-skeleton";

const Schedule = () => {
  const router = useRouter();
  const [apiKey, setApiKey] = useState<{
    gameDate?: number;
    gmkey?: string;
  }>({
    gameDate: 20241011,
    gmkey: "33331011KTLG0",
  });

  const { data, isLoading } = useBoxscore(apiKey.gameDate, apiKey.gmkey);

  const disabled = (key: "current" | "next" | "prev") => {
    if (data) return key in data.schedule ? false : true;
  };

  const handleClick = (key: "prev" | "next") => {
    const targetSchedule = data && data.schedule[key];
    if (!targetSchedule) return;
    setApiKey({
      gameDate: targetSchedule?.gameDate,
      gmkey: targetSchedule?.gmkey,
    });
  };

  return (
    <div className="w-[1200px] justify-self-center relative mb-[100px]">
      <div className="relative h-[300px]">
        <Image
          src={bg_schedule}
          alt="main schdule"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[826px] mx-auto absolute left-1/2 -translate-x-1/2 -z-10"
          priority
        />
        <div className="w-[1100px] mx-auto pt-[110px]">
          <div className="bg-SYSTEM-white rounded-[20px] shadow-[0_20px_30px_rgba(255,0,0,0.3)]">
            <div className="flex mr-3 px-10 py-[50px]">
              {isLoading ? (
                <ScheduleSkeleton />
              ) : (
                <div className="w-[620px] h-[222px] bg-SYSTEM-white text-SYSTEM-black items-center content-center justify-center">
                  {/* 상단 경기 일시 */}
                  <div className="w-[560px] mb-4 mx-5 pb-2 flex gap-11 border-b border-b-ELSE-DE items-center justify-center">
                    <IconButton
                      icon={ChevronLeft}
                      circle
                      disabled={disabled("prev")}
                      className="text-ELSE-7374"
                      onClick={() => handleClick("prev")}
                    />
                    <div className="w-96 justify-items-center">
                      <div className="text-xl font-bold">
                        {data
                          ? formatGameDate(data?.schedule.current.gameDate)
                          : "2024년 10월 11일"}
                      </div>
                      <div className="text-ELSE-7374">
                        {data?.schedule.current.stadium}
                      </div>
                    </div>
                    <IconButton
                      icon={ChevronRight}
                      circle
                      disabled={disabled("next")}
                      className="text-ELSE-7374"
                      onClick={() => handleClick("next")}
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="justify-items-center font-bold">
                      <Image
                        src={
                          teamLogos[
                            (data?.schedule.current.visit as Team) ?? "KT"
                          ]
                        }
                        alt="away team logo"
                        width={110}
                        height={95}
                      />
                      <p>{data?.schedule.current.visit}</p>
                    </div>
                    <div className="w-64 justify-items-center space-y-6">
                      <div className="flex content-between mt-3 gap-7 font-extrabold text-6xl items-center">
                        <p className="w-20 text-center">
                          {data?.schedule.current.vscore}
                        </p>
                        <p className="text-ELSE-B7">:</p>
                        <p className="w-20 text-center">
                          {data?.schedule.current.hscore}
                        </p>
                      </div>
                      <button
                        className="flex p-1 pl-2 bg-ELSE-90 text-SYSTEM-white rounded-md text-sm items-center"
                        onClick={() => {
                          router.push("/game/league/boxscore");
                        }}
                      >
                        경기정보
                        <ChevronRight size={18} />
                      </button>
                    </div>
                    <div className="justify-items-center font-bold">
                      <Image
                        src={
                          teamLogos[
                            (data?.schedule.current.home as Team) ?? "LG"
                          ]
                        }
                        alt="home team logo"
                        width={110}
                        height={95}
                      />
                      <p>{data?.schedule.current.home}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-[394px] h-[222px] bg-SYSTEM-white text-SYSTEM-black flex items-center justify-center">
                <iframe
                  src="https://tv.naver.com/embed/42663688"
                  width="394"
                  height="222"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1100px] mt-[250px] flex gap-5 justify-self-center">
        <TeamRank />
        <Parking />
      </div>
    </div>
  );
};

export default Schedule;
