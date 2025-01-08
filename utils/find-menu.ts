import { SubMenuInfo } from "@/constants/header-menu";
import { BannerInfo, CategoryItem } from "./types";

//카테고리 메뉴 불러오는 함수
export const findCategoryMenus = (
  mainMenu: string,
  subMenu: string
): CategoryItem[] => {
  // player/hitter/* 경로의 경우
  if (mainMenu === "player" && subMenu === "hitter") {
    return [
      { path: "/player/hitter/catcher", title: "포수" },
      { path: "/player/hitter/infielder", title: "내야수" },
      { path: "/player/hitter/outfielder", title: "외야수" },
    ];
  }

  // player/cheer/* 경로의 경우
  if (mainMenu === "player" && subMenu === "cheer") {
    return [
      { path: "/player/cheer/cheering", title: "응원단" },
      { path: "/player/cheer/copyright", title: "저작권" },
      { path: "/player/cheer/song", title: "응원가" },
    ];
  }

  // game/league/* 경로의 경우
  if (mainMenu === "game" && subMenu === "league") {
    return [
      { path: "/game/league/schedule", title: "경기일정" },
      { path: "/game/league/boxscore", title: "박스스코어" },
    ];
  }

  return [];
};

//서브배너info 불러오는 함수
export const findBannerInfo = (pathname: string): BannerInfo => {
  const currentPath = pathname.split("/").filter(Boolean);
  const combinedPath = `/${currentPath[0]}/${currentPath[1]}`;

  for (const menuKey in SubMenuInfo) {
    const menuItems = SubMenuInfo[menuKey];
    const matchedItem = menuItems.find(
      (item) =>
        item.path.startsWith(combinedPath) || combinedPath.startsWith(item.path)
    );

    if (matchedItem) {
      return {
        title: matchedItem.title,
        description: matchedItem.description,
      };
    }
  }

  return { title: "", description: "" };
};
