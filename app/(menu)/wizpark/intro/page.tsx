import Image from "next/image";
import wiz_park from "@/assets/images/wiz_park.jpg";

const textStyles = {
  sectionTitle: "text-ELSE-EC0 text-3xl font-bold leading-relaxed text-left", //제목 textStyles
  subTitle: "text-ELSE-11 text-xl font-bold text-left", //부제목 textStyles
  paragraph:
    "text-ELSE-B5B text-base font-normal leading-6 text-justify pt-4 pb-7", //본문 textStyles
  divider: "bg-ELSE-EC0 h-[3px] mt-6 mb-7 w-10", //구분선
};

export default function page() {
  return (
    <div className="pt-[74px] pb-[100px] w-[1100px] mx-auto">
      <div className="pt-10">
        <Image src={wiz_park} alt="wiz_park" width={1130} height={636} />
        <div className="pt-10 text-center">
          <p className={textStyles.sectionTitle}>
            복합 문화공간의 첨단 야구장! 수원구장
          </p>
          <div className={textStyles.divider}> </div>
        </div>

        <p className={textStyles.subTitle}>최적의 경기 환경 조성</p>
        <p className={textStyles.paragraph}>
          야구장의 온도와 습도, 조명을 자동 조절할 수 있는 유비쿼터스 센서
          네트워크 시스템(USN)을 도입하여 선수단과 팬들에게 경기에 더욱 집중할
          수 있는 최적의 경기 환경을 제공합니다.
        </p>

        <p className={textStyles.subTitle}>스마트한 구장 시설</p>
        <p className={textStyles.paragraph}>
          구장 내무선 인터넷(WIFI) 설치 등 ICT 인프라 확충을 통해 다양한 모바일
          기기를 활용하여 입장 등록, 실시간 주차 정보, 지정석 찾기, 음식 주문 등
          다른 경기장에서 경험하지 못했던 스마트한 콘텐츠를 이용하실 수
          있습니다.
        </p>

        <p className={textStyles.subTitle}>
          다양한 관람층을 위한 복합 문화공간
        </p>
        <p className={textStyles.paragraph}>
          익사이팅석, 프랜들리서, 커플석, 패밀리석, 장애인석 등 다양한 관람층을
          고려하여 완벽한 관람시설을 제공하고, 각종 센서와 모바일 기기가 설치된
          체험존 등을 제공하여 경기 관람 뿐 아니라 오락, 레저, 교육의 복합
          문화공간을 선보입니다.
        </p>
      </div>
    </div>
  );
}
