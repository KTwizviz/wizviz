type CoachCardProps = {
  image: string;
  name: string;
  backnum: number;
};
type CoachInfo = {
  backnum: string;
  birth: string;
  career: string;
  gyear: string;
  height: string;
  heightWeight: string;
  hittype: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
  orderSeq: string;
  pcode: string;
  playerName: string;
  playerPrvwImg: string;
  playerPrvwImg2: string;
  playerPrvwImg3: string;
  position: string;
  teamCode: string;
  teamName: string;
  weight: string;
};

type PitcherInfo = {
  backnum: string; // 등번호
  energybar: number; // 에너지 바 수치
  energybarName: string; // 에너지 바 이름
  gyear: string; // 연도
  hasFanpage: "Y" | "N"; // 팬페이지 존재 여부
  hittype: string; // 타격 타입 (우투우타 등)
  mobilePlayerImg: string; // 선수 이미지 1 (URL)
  mobilePlayerImg1: string; // 선수 이미지 2 (URL)
  mobilePlayerImg2: string; // 선수 이미지 3 (URL)
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  playerPrvwImg: string; // 선수 미리보기 이미지 (URL)
  position: string;
  rank: number;
  rankName: string; // 순위 이름
  teamName: string; // 팀 이름
};

type CoachListProps = {
  data: CoachInfo[];
};

type PitchListProps = {
  data: PitcherInfo[];
};
