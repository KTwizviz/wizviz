// 코치의 기본 정보
type BasePlayerInfo = {
  backnum: string;
  birth: string;
  career: string;
  gyear: string;
  height: string;
  hittype: string;
  mobilePlayerImg1: string;
  mobilePlayerImg2: string;
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

// 코치 카드
type CoachCardProps = {
  image: string;
  name: string;
  backnum: number;
  pcode: string;
  pathname: string;
};

// 코치 목록정보
type CoachInfo = BasePlayerInfo & {
  heightWeight: string;
  orderSeq: string;
};

// 코치 상세 정보
type CoachDetailInfo = {
  coachstep: BasePlayerInfo & {
    career2: string;
    engName: string;
    heightWeight: string;
  };
};

type CoachListProps = {
  data: CoachInfo[]; // 코치 목록 데이터
};

type CoachDetailProps = {
  data: CoachDetailInfo; // 코치 상세 정보 데이터
};

// 투수 목록에 표시되는 기본 정보
type PitcherInfo = Pick<
  PitcherPersonalInfo,
  | "backnum"
  | "energybar"
  | "energybarName"
  | "gyear"
  | "hasFanpage"
  | "hittype"
  | "mobilePlayerImg"
  | "mobilePlayerImg1"
  | "mobilePlayerImg2"
  | "pcode"
  | "playerName"
  | "playerPrvwImg"
  | "position"
  | "rank"
  | "rankName"
  | "teamName"
>;

// 투수 개인 상세 정보
type PitcherPersonalInfo = BasePlayerInfo & {
  bloodGroups: string; // 혈액형
  bornPlace: string; // 출생지
  career2: string; // 추가 경력
  debutYear: string; // 데뷔 연도
  energybar: number; // 에너지바 값
  energybarName: string; // 에너지바 점수 표기
  engName: string; // 선수 영문 이름
  hasFanpage: "Y" | "N"; // 팬페이지 여부
  mobilePlayerImg: string; // 메인 이미지 URL
  money: string; // 연봉
  playerPrvwImg1: string; // 추가 미리보기 이미지
  position2: string; // 포지션 약어
  promise: string; // 계약금
  rank: number; // 랭킹
  rankName: string; // 랭킹 이름
};

// 투수 경기 기록의 기본 정보
type BaseGameRecord = {
  bb: number; // 볼넷
  displayDate: string; // 경기 날짜
  er: number; // 자책점
  hit: number; // 피안타
  hp: number; // 몸에 맞는 공
  hr: number; // 피홈런
  inn2: number; // 투구 이닝 (2의 배수 값)
  innDisplay: string; // 이닝 표시
  kk: number; // 삼진
  matchTeamCode: string; // 상대팀 코드
  matchTeamName: string; // 상대팀 이름
  pa: number; // 타석 수
  r: number; // 실점
  sv: number; // 세이브
  wl: string; // 승패 기록
  wls: "W" | "L" | "D"; // 승패 구분
};

// 투수 경기 기록
type PitcherGameRecord = BaseGameRecord & {
  oavg?: string; // 피안타율 (선택적)
};

// 투수 시즌 기록의 기본 정보
type BaseSeasonRecord = {
  babip: string; // 인플레이 타구 타율
  bb: number; // 볼넷
  bf: number; // 상대 타자 수
  bk: number; // 보크
  bs: number; // 블론 세이브
  er: number; // 자책점
  era: string; // 평균자책점
  err: number; // 실책
  fip: string; // 독립투수지표
  fo: number; // 플라이 아웃
  gamenum: number; // 경기 수
  go: number; // 땅볼 아웃
  gyear: string; // 시즌 연도
  havg: string; // 피타율
  hit: number; // 피안타
  hold: number; // 홀드
  hp: number; // 몸에 맞는 공
  hr: number; // 피홈런
  inn2: number; // 투구 이닝
  innDisplay: string; // 이닝 표시
  kk: number; // 삼진
  l: number; // 패
  r: number; // 실점
  sho: number; // 완봉
  sv: number; // 세이브
  w: number; // 승
  wCg: number; // 완투
  wra: string; // 승리 비율
};

// 투수 시즌 요약
type PitcherSeasonSummary = BaseSeasonRecord & {
  ib: number; // 고의사구
  kbb: string; // 삼진/볼넷 비율
  oavg: string; // 피안타율
  pcode: string; // 선수 코드
  playerName: string; // 선수 이름
  qs: number; // 퀄리티 스타트
  qsPlus: number; // 퀄리티 스타트 +
  ravg: string; // 평균 실점
  sf: number; // 희생 플라이
  sh: number; // 희생 번트
  start: number; // 선발 경기 수
  svo: number; // 세이브 기회
  tugucount: number; // 투구 수
  turfSave: number; // 인조잔디 세이브
  war: string; // 대체선수 대비 승리 기여도
  whip: string; // 이닝당 출루율
  winShares: string; // 승리 기여 점수
  wl: string; // 승패 기록
  wp: number; // 폭투
};

// 투수 연도별 기록
type PitcherYearRecord = BaseSeasonRecord & {
  teamCode: string; // 팀 코드
  teamName: string; // 팀 이름
};

// 투수 상세 정보 데이터 구조
type PitcherDetailInfo = {
  gameplayer: PitcherPersonalInfo;
  recentgamerecordlist: PitcherGameRecord[];
  recentgamerecordlistfutures: PitcherGameRecord[];
  seasonsummary: PitcherSeasonSummary;
  seasonsummaryfutures: PitcherSeasonSummary;
  yearrecordlist: PitcherYearRecord[];
};

type PitchListProps = {
  data: PitcherInfo[];
};

type PitcherDetailProps = {
  data: PitcherDetailInfo;
};
