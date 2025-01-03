type IconButtonProps = {
  icon: StaticImageData | LucideIcon;
  border?: boolean;
  circle?: boolean;
  iconSize?: number;
  text?: string;
  className?: string;
  onClick: () => void;
};

type CarouselImage = {
  img: StaticImageData;
  key: number;
};

type CarouselData = {
  key: number;
  broadcast: string // 방송사
  gameDate: number  // 날짜
  gtime: string     // 시작시간
  logo: string      // 상대팀 로고
  outcome: string   // 결과
  homeScore: string
  visitScroe: string
}

type CarouselProps = {
  contents: CarouselImage[] | GameSchedule[];
};
