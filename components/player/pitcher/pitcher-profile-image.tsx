import Image from "next/image";

export const PitcherProfileImage = ({ data }: PitcherDetailProps) => {
  return (
    <>
      <div className="flex items-center justify-center bg-SYSTEM-white">
        <div
          className="relative w-full 
            h-[300px] 
            md:h-[450px] 
            lg:h-[480px] 
            xl:h-[540px] 
            min-w-[280px]
            max-w-[540px] 
            transition-all duration-300"
        >
          {data.gameplayer.playerPrvwImg ? (
            <Image
              src={data.gameplayer.playerPrvwImg}
              alt={`${data.gameplayer.playerName} profile`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 450px, (max-width: 1280px) 480px, 540px"
              className="object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-ELSE-DE">
              <p className="text-ELSE-7374">이미지 없음</p>
            </div>
          )}
          <div className="absolute top-0 left-2 bg-SYSTEM-white/90 rounded-full px-6 py-1 shadow-md z-10">
            <span className="text-3xl font-bold text-SYSTEM-main">
              # {data.gameplayer.backnum || "-"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
