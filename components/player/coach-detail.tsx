import Image from "next/image";
import { player } from "@/assets/images/@index";

export const CoachDetail = () => {
  return (
    <>
      <div className="bg-SYSTEM-white border w-full h-[500px]">
        <div className="grid grid-cols-2">
          <div className="border">
            <Image src={player} alt="player_image" width={450} height={500} />
          </div>
          <div className="bg-blue-400 w-full">
            <div className="text-SYSTEM-main text-xll font-bold">
              NO.1 코칭스텝
            </div>
            <div className="font-bold text-SYSTEM-black text-xxl">김주일</div>
            <div className="text-xll">KIM JOO IL</div>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};
