import {
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
  CarouselImage7,
  CarouselImage8,
  CarouselImage9,
  CarouselImage10,
} from "@/assets/images/@index";

export const SCHEDULE_LIST = {
  DAY1: {
    date: "2024.10.11",
    placeTime: "잠실 18:00",
    score: "1",
    target: "LG",
    targetScore: "4",
  },
  DAY2: {
    date: "2024.10.08",
    placeTime: "잠실 18:00",
    score: "3",
    target: "KIA",
    targetScore: "2",
  },
} as const;

export const HIGHLIGHT_VIDEO = [
  {
    videoId: "62245858",
    date: "2024년 10월 09일",
    title: "0% 기적을 향한 치타심 끝내기 안타! [위즈덕후]",
  },
  {
    videoId: "62033053",
    date: "2024년 10월 06일",
    title:
      "오늘부터 kt wiz와 지지관계에서 벗어나 kt wiz와 나는 한몸으로 일체가 된다 [위즈덕후]",
  },
  {
    videoId: "62031592",
    date: "2024년 10월 06일",
    title: "마냥 안 된다는 법은 없으니까 [비하인드 더 덕아웃]",
  },
  {
    videoId: "61924595",
    date: "2024년 10월 04일",
    title:
      "최초 업셋이 왜 안 나왔는지 알아요? 우리가 5등을 안 해봤기 때문이에요 [위즈덕후]",
  },
];

export const CAROUSE_ITEMS: CarouselImage[] = [
  { img: CarouselImage1, key: 1 },
  { img: CarouselImage2, key: 2 },
  { img: CarouselImage3, key: 3 },
  { img: CarouselImage4, key: 4 },
  { img: CarouselImage5, key: 5 },
  { img: CarouselImage6, key: 6 },
  { img: CarouselImage7, key: 7 },
  { img: CarouselImage8, key: 8 },
  { img: CarouselImage9, key: 9 },
  { img: CarouselImage10, key: 10 },
];
