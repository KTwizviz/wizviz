export const ParkingNotice = () => {
  return (
    <>
      <div className={"flex items-center"}>
        <div className={"w-1 h-6 bg-ELSE-EC0 mr-2"}></div>
        <p className={"text-xl font-semibold"}>주차 예약 안내</p>
      </div>
      <div className="pt-5 pb-8 pl-4">
        <p className="font-light">
          - 수원종합운동장 (수원 kt wiz park 포함) 주차장은 프로야구
          <span className="pl-1 text-ELSE-EC0 font-medium inline">
            경기일에만 주차예약제
          </span>
          가 시행됩니다.
        </p>
        <p className="font-light">
          -
          <span className="pl-1 text-ELSE-EC0 font-medium inline">
            미예약 차량 주차 불가
          </span>
          : 사전 예약차량만 주차 가능
        </p>
        <p className="text-ELSE-49 font-medium">
          - 통제시간 : 경기시간 2시간 전부터
        </p>
      </div>
    </>
  );
};
