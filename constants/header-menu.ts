export const UNIFIED_MENU = {
  "kt wiz": {
    key: "ktwiz",
    subMenus: ["kt wiz는?", "구단 BI", "회원 정책", "스폰서", "월페이퍼"],
    items: [
      {
        id: 1,
        path: "/ktwiz/about",
        title: "kt wiz는?",
        description: "한국 프로야구의 '10번째 심장' kt wi를 소개합니다.",
      },
      {
        id: 2,
        path: "/ktwiz/bi",
        title: "구단 BI",
        description: "kt wiz를 대표하는 상징들을 소개 합니다.",
      },
      {
        id: 3,
        path: "/ktwiz/policy",
        title: "회원 정책",
        description: "kt wiz 회원만의 특별한 할인 혜택을 만나 보세요.",
      },
      {
        id: 4,
        path: "/ktwiz/sponsor",
        title: "스폰서",
        description: "kt wiz와 함께하는 스폰서를 소개합니다.",
      },
      {
        id: 5,
        path: "/ktwiz/wallpaper",
        title: "월페이퍼",
        description: "kt wiz 팬들을 위한 월페이퍼 다운로드 서비스",
      },
    ],
  },
  "wiz park": {
    key: "wizpark",
    subMenus: ["수원 kt wiz park", "주차 예약", "찾아오기", "익산야구장"],
    items: [
      {
        id: 1,
        path: "/wizpark/intro",
        title: "수원 kt wiz park",
        description: "suwon kt wiz park를 소개합니다.",
      },
      {
        id: 2,
        path: "/wizpark/parking",
        title: "주차 예약",
        description: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: 3,
        path: "/wizpark/location",
        title: "찾아오기",
        description: "오시는 길을 상세하게 알려드립니다.",
      },
      {
        id: 4,
        path: "/wizpark/iksan",
        title: "익산야구장",
        description: "kt wiz의 둥지 '익산야구장'을 소개합니다.",
      },
    ],
  },
  game: {
    key: "game",
    subMenus: ["정규리그", "퓨처스리그"],
    items: [
      {
        id: 1,
        path: "/game/league/boxscore", // 기본 url 경로로 셋팅
        title: "정규리그",
        description: "kt wiz의 정규리그 경기 일정을 알려 드립니다.",
      },
    ],
  },
  player: {
    key: "player",
    subMenus: ["코칭스텝", "투수", "타자", "응원"],
    items: [
      {
        id: 1,
        path: "/player/coach",
        title: "코칭스텝",
        description: "최고의 kt wiz 코칭스탭을 소개합니다.",
      },
      {
        id: 2,
        path: "/player/pitcher",
        title: "투수",
        description: "kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다.",
      },
      {
        id: 3,
        path: "/player/hitter/catcher",
        title: "타자/포수",
        description: "kt wiz의 자랑스런 ‘첫 번째 선수단’을 소개합니다.",
      },
      {
        id: 4,
        path: "/player/cheer/cheering",
        title: "응원/응원단",
        description: "kt wiz꽃! kt wiz의 응원단",
      },
    ],
  },
  media: {
    key: "media",
    subMenus: ["wiz 뉴스", "wiz 스토리", "시구자 정보", "하이라이트"],
    items: [
      {
        id: 1,
        path: "/media/news",
        title: "wiz 뉴스",
        description: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: 2,
        path: "/media/story",
        title: "wiz 스토리",
        description: "kt wiz 팬이 전하는 생생한 스토리를 만나보세요.",
      },
      {
        id: 3,
        path: "/media/guest",
        title: "시구자 정보",
        description: "경기의 또다른 하이라이트 시구자 정보를 안내해 드립니다.",
      },
      {
        id: 4,
        path: "/media/highlight",
        title: "하이라이트",
        description: "생생한 경기 하이라이트를 담았습니다.",
      },
    ],
  },
  shop: {
    key: "shop",
    subMenus: ["바로가기"],
    items: [], // 외부 링크라서 items 없음
  },
  sponsor: {
    key: "sponsor",
    subMenus: ["바로가기"],
    items: [], // 외부 링크라서 items 없음
  },
};

// "kt wiz" | "wiz park" -> 메인 메뉴
export const MainMenuItems = Object.keys(UNIFIED_MENU) as MenuItem[];

// "shop":["kt wiz란?",""], -> 서브메뉴
export const SubMenuItems = Object.entries(UNIFIED_MENU).reduce(
  (acc, [key, value]) => {
    acc[key as MenuItem] = value.subMenus;
    return acc;
  },
  {} as HeaderMenu
);

//"shop":{id:-,path:-} -> path 경로용
export const SubMenuInfo: MenuInfoType = Object.entries(UNIFIED_MENU).reduce(
  (acc, [, value]) => {
    if (value.items.length > 0) {
      // items가 있는 경우만 추가
      acc[value.key] = value.items;
    }
    return acc;
  },
  {} as MenuInfoType
);
