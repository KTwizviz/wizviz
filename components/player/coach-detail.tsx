import Image from "next/image";

export const CoachDetail = ({ data }: CoachDetailProps) => {
  return (
    <>
      <div className="bg-SYSTEM-white border w-full h-[500px]">
        <div className="grid grid-cols-2">
          <div className="border">
            <Image
              src={data.coachstep.playerPrvwImg}
              alt="coach_image"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full p-4 flex flex-col justify-center">
            <div className="text-SYSTEM-main text-xll font-bold">
              NO. {data.coachstep.backnum}
            </div>
            <div className="font-bold text-SYSTEM-black text-xxl pt-2">
              {data.coachstep.playerName}
            </div>
            <div className="text-xll pt-1 text-ELSE-49 font-light">
              {data.coachstep.engName}
            </div>
            <div className="grid grid-cols-2 gap-1 text-xl pt-10">
              <p className="font-bold">커리어</p>
              <p>{data.coachstep.career}</p>
              <p className="font-bold">키</p>
              <p>{data.coachstep.height}</p>
              <p className="font-bold">몸무게</p>
              <p>{data.coachstep.weight}</p>
              <p className="font-bold">포지션</p>
              <p>{data.coachstep.position}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
