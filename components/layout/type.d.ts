type MenuItem =
  | "kt wiz"
  | "wiz park"
  | "game"
  | "player"
  | "media"
  | "shop"
  | "sponsor";

type HeaderMenu = {
  [K in MenuItem]: string[];
};

type MainMenuItems = {
  "kt wiz": string[];
  "wiz park": string[];
  game: string[];
  player: string[];
  media: string[];
  shop: string[];
  sponsor: string[];
};
type MenuInfoItem = {
  id: number;
  path: string;
  title: string;
  description: string;
};

type UnifiedMenuCategory = {
  key: string;
  subMenus: string[];
  items: UnifiedMenuItem[];
};

// UNIFIED_MENU의 전체 타입 정의
type UnifiedMenuType = {
  [K in MenuItem]: UnifiedMenuCategory;
};

// MENU_INFO의 타입 정의
type MenuInfoType = {
  [key: string]: MenuInfoItem[];
};
