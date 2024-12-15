type MenuItem =
  | "kt wiz"
  | "wiz park"
  | "game"
  | "player"
  | "media"
  | "shop"
  | "sponser";

type HeaderMenu = {
  [K in MenuItem]: K extends "shop" | "sponser" ? [] : string[];
};
