import Image from "next/image";
import { Parking_img } from "@/assets/images/@index";
import Link from "next/link";
import { ParkingContent } from "./parking-content";
import { Parking_icon } from "@/assets/icons/@index";

export const ParkingInstructions = () => {
  return (
    <div className="border border-x-ELSE-DE pt-8 pl-12 overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 mb-6">
        <Image src={Parking_icon} alt="parking_icon" width={25} height={25} />
        <p className="text-ELSE-EC0 text-xl font-medium">예약방법</p>
      </div>
      <ParkingContent
        title={"홈페이지"}
        content={
          "kt wiz,수원종합운동장 홈페이지를 통한 예약 / 수정 및 취소 가능"
        }
      />
      <ParkingContent
        title={"예약 및 문의"}
        content={"수원종합운동장 031-240-2730~1"}
      />
      <ParkingContent
        title={"예약기간"}
        content={
          "수원 홈경기 프로야구 입장권 예매기간(kt wiz 홈경기 7일전 14시 00분부터 만차시)"
        }
      />
      <ParkingContent
        title={"예약 차량 제외"}
        content={`25인승 소형버스 이상 및 장애인 차량\n:입차 시 요금만 납부`}
      />
      <div className={"relative w-full h-[200px] -mt-28 z-0"}>
        <Image
          src={Parking_img}
          alt={"Parking_img"}
          className={"absolute right-0 bottom-0"}
          width={800}
          height={200}
        />
        <Link
          className={
            "absolute left-[40%] bottom-10 bg-ELSE-EC0 text-SYSTEM-white w-48 h-10 rounded-md flex items-center justify-center"
          }
          href={
            "https://suwonparkingbaseball.or.kr/suwonwps/EgovPageLink.do?link=main/menu/prs/ParkingReservationPrivacy"
          }
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          예약하기
        </Link>
      </div>
    </div>
  );
};
