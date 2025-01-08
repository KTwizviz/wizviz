type GetBoxscore = {
  etcgames: MainRecords[];
  gameFlag: string;
  hbatters: Batter[];
  hpitchers: Pitcher[];
  schedule: {
    current: Schedule;
    next?: Schedule;
    prev?: Schedule;
  };
  scoreboard: Scoreboard[];
  vbatters: Batter[];
  vpitchers: Pitcher[];
};

type TeamKey =
  | "KT"
  | "NC"
  | "OB"
  | "LG"
  | "SS"
  | "WO"
  | "HT"
  | "LT"
  | "SK"
  | "HH";
type WinLoseSave = "W" | "L" | "S" | "H" | "";
type BatterPosition =
  | "一"
  | "二"
  | "三"
  | "四"
  | "五"
  | "六"
  | "七"
  | "八"
  | "九"
  | "DH"
  | "投"
  | "捕"
  | "指"
  | "代";
type TeamSide = "T" | "B"; // T: visitor, B: home

type MainRecords = {
  gday: string;
  gmkey: `${number}${TeamKey}${TeamKey}${number}`; // e.g., "20240910NCKT0"
  how: string;
  result: string;
  seq: number;
};

type Batter = {
  ab: number;
  accmAb: number;
  accmHit: number;
  changeinn: string;
  gday: string;
  gmkey: string;
  hit: number;
  [key: `il${number}`]: string; // il1 ~ il25
  [key: `inn${number}`]: string; // inn1 ~ inn25
  name: string;
  oneturn: string;
  pcode: string;
  position: BatterPosition;
  rbi: number;
  run: number;
  tb: TeamSide;
  turn: string;
};

type Pitcher = {
  ab: number;
  accmEr: number;
  accmInn2: number;
  bbhp: number;
  bf: number;
  changeinn: string;
  er: number;
  game: number;
  gday: string;
  gmkey: string;
  hit: number;
  hr: number;
  inn: string;
  kk: number;
  l: number;
  name: string;
  pa: number;
  pcode: string;
  pos: string;
  r: number;
  s: number;
  tb: TeamSide;
  w: number;
  wls: WinLoseSave;
};

type Schedule = {
  broadcast: string;
  cancelFlag: "0" | "1";
  crowdCn: number;
  endFlag: "0" | "1";
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: TeamKey;
  homeKey: TeamKey;
  homeLogo: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: TeamKey;
  visitKey: TeamKey;
  vscore: number;
};

type Scoreboard = {
  ballfour: string;
  bhome: number;
  bhomeName: TeamKey;
  error: string;
  gameDate: number;
  hit: string;
  run: string;
} & Record<
  `score${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`,
  string
>;

type TeamScoreProps = {
  team: Team;
  score: number;
  homeGround?: boolean;
};

type Team =
  | "한화"
  | "KIA"
  | "KT"
  | "LG"
  | "롯데"
  | "NC"
  | "두산"
  | "SSG"
  | "삼성"
  | "키움";
