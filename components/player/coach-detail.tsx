import Image from "next/image";
import { player } from "@/assets/images/@index";

export const CoachDetail = () => {
  return (
    <>
      <div className="bg-SYSTEM-white border w-full h-[455px]">
        <div className="grid grid-cols-2">
          <div className="border">
            <Image src={player} alt="player_image" width={450} height={500} />
          </div>
          <div className="w-full p-4 flex flex-col justify-center">
            <div className="text-SYSTEM-main text-xll font-bold">
              NO.1 코칭스텝
            </div>
            <div className="font-bold text-SYSTEM-black text-xxl pt-2">
              김주일
            </div>
            <div className="text-xll pt-1 text-ELSE-49 font-light">
              KIM JOO IL
            </div>
            <div className="grid grid-cols-2 gap-1 text-xl pt-5">
              <p>별명</p>
              <p>쭈발이</p>
              <p>키/혈액형</p>
              <p>190cm/A형</p>
              <p>취미</p>
              <p>취미</p>
              <p>좋아하는선수</p>
              <p>좋아하는선수</p>
              <p>좌우명</p>
              <p>좌우명</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
