"use client";
import { useState } from "react";
import Image from "next/image";
import MainSchedule from "@/assets/images/main_title_schedule.png";
import ScheduleVideo from "@/assets/images/schedule_video.png";
import KtwizLogo from "@/assets/images/logo_ktwiz.png";
import LgtwinsLogo from "@/assets/images/logo_lgtwins.png";
import TeamRanking from "@/assets/images/team_ranking.png";
import ParkingReservaion from "@/assets/images/parking_reservation.png";
import IconButton from "@/components/ui/icon-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SCHEDULE_LIST } from "@/constants/schedules";

type DayKey = keyof typeof SCHEDULE_LIST;

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState<
    (typeof SCHEDULE_LIST)[DayKey]
  >(SCHEDULE_LIST.DAY1);

  return (
    <div className="w-[1200px] justify-self-center relative mb-[100px]">
      <div className="relative h-[300px]">
        <Image
          src={MainSchedule}
          alt="main schdule"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[826px] mx-auto absolute left-1/2 -translate-x-1/2 -z-10"
          priority
        />
        <div className="w-[1100px] mx-auto pt-[110px]">
          <div className="bg-SYSTEM-white rounded-[20px] shadow-[0_20px_30px_rgba(255,0,0,0.3)]">
            <div className="flex justify-between gap-5 px-10 py-[50px]">
              <div className="w-[605px] h-[222px] bg-SYSTEM-white text-SYSTEM-black items-center content-center">
                {/* 상단 경기 일시 */}
                <div className="mb-6 mx-5 pb-2 flex gap-11 border-b border-b-ELSE-DE items-center justify-center">
                  <IconButton
                    icon={ChevronLeft}
                    circle
                    className="text-ELSE-7374"
                    onClick={() => setScheduleData(SCHEDULE_LIST.DAY2)}
                  />
                  <div className="w-96 justify-items-center">
                    <div className="text-xl font-bold">{scheduleData.date}</div>
                    <div className="text-ELSE-7374">
                      {scheduleData.placeTime}
                    </div>
                  </div>
                  <IconButton
                    icon={ChevronRight}
                    circle
                    className="text-ELSE-7374"
                    onClick={() => setScheduleData(SCHEDULE_LIST.DAY1)}
                  />
                </div>
                {/* 하단 해당 일시 스코어 */}
                <div className="flex justify-center">
                  <div className="justify-items-center font-bold">
                    <Image
                      src={KtwizLogo}
                      alt="ktwiz team logo"
                      width={102}
                      height={95}
                    />
                    <p>KT</p>
                  </div>
                  <div className="w-64 place-self-center justify-items-center space-y-3">
                    <div className="flex mt-3 gap-7 font-extrabold text-6xl">
                      {scheduleData.score}
                      <p className="text-ELSE-B7">:</p>
                      {scheduleData.targetScore}
                    </div>
                    <button
                      className="flex p-1 pl-2 bg-ELSE-90 text-SYSTEM-white rounded-md text-sm items-center"
                      onClick={() => {
                        console.log("경기정보 페이지 이동");
                      }}
                    >
                      경기정보
                      <ChevronRight size={18} />
                    </button>
                  </div>
                  <div className="justify-items-center font-bold">
                    <Image
                      src={LgtwinsLogo}
                      alt="opponent team logo"
                      width={110}
                      height={95}
                    />
                    <p>{scheduleData.target}</p>
                  </div>
                </div>
              </div>
              <div className="w-[394px] h-[222px] mr-5 bg-SYSTEM-white text-SYSTEM-black flex items-center justify-center">
                <Image
                  src={ScheduleVideo}
                  alt="schdule video"
                  width={394}
                  height={222}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1100px] mt-[250px] flex gap-5 justify-self-center">
        <Image
          src={TeamRanking}
          alt="ktwiz team ranking"
          width={540}
          height={190}
        />
        <Image
          src={ParkingReservaion}
          alt="parking reservaion"
          width={540}
          height={190}
        />
      </div>
    </div>
  );
};

export default Schedule;
