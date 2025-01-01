import Image from "next/image";
import { Parking_img } from "@/assets/images/@index";
import { Parking_icon } from "@/assets/icons/@index";

export default function page() {
  return (
    //주차예약 안내
    <div className="p-4">
      <div className="flex items-center">
        <div className="w-1 h-6 bg-ELSE-EC0 mr-2"></div>
        <p className="text-xl font-semibold">주차 예약 안내</p>
      </div>
      <div className="pt-5 pb-8 pl-4">
        <p className="font-light">
          - 수원종합운동장 (수원 kt wiz park 포함) 주차장은 프로야구&nbsp;
          <span className="text-ELSE-EC0 font-medium">
            경기일에만 주차예약제
          </span>
          가 시행됩니다.
        </p>
        <p className="font-light">
          -&nbsp;
          <span className="text-ELSE-EC0 font-medium">
            미예약 차량 주차 불가
          </span>
          : 사전 예약차량만 주차 가능
        </p>
        <p className="text-ELSE-49 font-medium">
          - 통제시간 : 경기시간 2시간 전부터
        </p>
      </div>
      {/* 예약방법 안내 */}
      <div className="border border-x-ELSE-DE pt-8 pl-12 overflow-hidden rounded-2xl">
        <div className="flex flex-row items-center gap-2 mb-6">
          <Image src={Parking_icon} alt="parking_icon" width={25} height={25} />
          <p className="text-ELSE-EC0 text-xl font-medium">예약방법</p>
        </div>
        <p className="font-semibold">① 홈페이지</p>
        <p className="font-light">
          kt wiz, 수원종합운동장 홈페이지를 통한 예약/ 수정 및 취소 가능
        </p>
        <p className="pt-5 font-semibold">② 예약 및 문의</p>
        <p className="font-light">수원종합운동장 031-240-2730~1</p>

        <p className="pt-5 font-semibold">③ 예약 기간</p>
        <p className="font-light">
          수원 홈경기 프로야구 입장권 예매기간(kt wiz 홈경기7일전 14시00분부터
          만차시)
        </p>
        <p className="pt-5 font-semibold">④ 예약 제외 차량</p>
        <p className="font-light">
          25인승 소형버스 이상 및 장애인 차량 <br />
          :입차 시 요금만 납부
        </p>
        <div className="relative w-full h-[200px] flex justify-end -mt-28">
          <Image
            src={Parking_img}
            alt="Parking_img"
            className="absolute right-0 bottom-0"
            width={800}
            height={200}
          />
          <button className="absolute inset-0 flex justify-center items-center mt-20">
            <a
              className="bg-ELSE-EC0 text-white px-16 py-2 rounded-md"
              href="https://suwonparkingbaseball.or.kr/suwonwps/EgovPageLink.do?link=main/menu/prs/ParkingReservationPrivacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              예약하기
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
