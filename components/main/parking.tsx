import { useRouter } from "next/navigation";
import Image from "next/image";
import { parking_banner } from "@/assets/images/@index";
import { ChevronRight } from "lucide-react";

const Parking = () => {
  const router = useRouter();

  return (
    <div className="relative h-[280px] rounded-[20px] overflow-hidden">
      <Image
        src={parking_banner}
        alt="parking reservaion"
        width={540}
        height={190}
        className="cursor-pointer block"
        onClick={() => {
          router.push("/wizpark/parking");
        }}
      />
      <div className="absolute w-[540px] h-[190px] inset-0 px-10 pt-4 flex flex-col justify-center mr-10">
        <p className="text-l text-red-500 font-medium mb-2">
          수원 케이터 워즈 파크
        </p>
        <h1 className="text-2xl font-medium mb-6">사전 주차 예약제 안내</h1>
        <button
          onClick={() => router.push("/parking/reserve")}
          className="flex items-center gap-2 text-l hover:gap-4 transition-all w-fit"
        >
          사전주차 예약하기
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Parking;
