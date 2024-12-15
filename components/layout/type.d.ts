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
