export const UNIFIED_MENU = {
  "kt wiz": {
    key: "ktwiz",
    subMenus: ["kt wiz는?", "구단 BI", "회원 정책", "스폰서", "월페이퍼"],
    items: [
      {
        id: 1,
        path: "ktwiz/about",
        title: "kt wiz는?",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "ktwiz/bi",
        title: "구단 BI",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "ktwiz/policy",
        title: "회원 정책",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "ktwiz/sponsor",
        title: "스폰서",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "ktwiz/wallpaper",
        title: "월페이퍼",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
    ],
  },
  "wiz park": {
    key: "wizpark",
    subMenus: ["수원 kt wiz park", "주차 예약", "찾아오기", "익산야구장"],
    items: [
      {
        id: "wiz-news",
        path: "wizpark/intro",
        title: "수원 kt wiz park",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "wizpark/parking",
        title: "주차 예약",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "wizpark/location",
        title: "찾아오기",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "wizpark/iksan",
        title: "익산야구장",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
    ],
  },
  game: {
    key: "game",
    subMenus: ["정규리그", "퓨처스리그"],
    items: [
      {
        id: "wiz-news",
        path: "game/league/boxscore", // 기본 url 경로로 셋팅
        title: "정규리그",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
    ],
  },
  player: {
    key: "player",
    subMenus: ["코칭스텝", "투수", "타자", "응원"],
    items: [
      {
        id: "wiz-news",
        path: "player/coach",
        title: "코칭스텝",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "player/pitcher",
        title: "투수",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "player/hitter/catcher",
        title: "타자/포수",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-news",
        path: "player/cheer/cheering",
        title: "응원/응원단",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
    ],
  },
  media: {
    key: "media",
    subMenus: ["wiz 뉴스", "wiz 스토리", "시구자 정보", "하이라이트"],
    items: [
      {
        id: "wiz-news",
        path: "media/news",
        title: "wiz 뉴스",
        descript: "kt wiz의 새소식을 발빠르게 전해 드립니다.",
      },
      {
        id: "wiz-story",
        path: "media/story",
        title: "wiz 스토리",
        descript: "kt wiz 팬이 전하는 생생한 스토리를 만나보세요.",
      },
      {
        id: "pitchman-info",
        path: "media/guest",
        title: "시구자 정보",
        descript: "경기의 또다른 하이라이트 시구자 정보를 안내해 드립니다.",
      },
      {
        id: "highlights",
        path: "media/highlight",
        title: "하이라이트",
        descript: "생생한 경기 하이라이트를 담았습니다.",
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
