"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PlayerCard = ({ image, name, backnum, pcode }: CoachCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/player/coach/${pcode}`); // 코치 상세 페이지로 이동
  };
  return (
    <div
      className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleClick}
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${name}_image`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-l font-bold">{name}</h3>
        <p className="text-SYSTEM-main">No. {backnum}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
