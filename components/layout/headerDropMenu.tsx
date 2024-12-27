import { SubMenuItems, UNIFIED_MENU } from "@/constants/header-menu";
import Link from "next/link";

const HeaderDropMenu = () => {
  const findPathByTitle = (category: string, menuTitle: string) => {
    const menuCategory = UNIFIED_MENU[category as keyof typeof UNIFIED_MENU];
    if (!menuCategory) return "#";

    const menuItem = menuCategory.items.find(
      (item) => item.title.includes(menuTitle) || menuTitle.includes(item.title)
    );

    if (menuItem) {
      return `/${menuItem.path}`;
    }
    return "#";
  };

  const handleShopSponsorClick =
    (category: string, item: string) => (e: React.MouseEvent) => {
      if (category === "shop" && item === "바로가기") {
        e.preventDefault();
        window.open("https://www.ktwizstore.co.kr", "_blank");
      } else if (category === "sponsor" && item === "바로가기") {
        e.preventDefault();
        window.open("https://b2b.ktwiz.co.kr", "_blank");
      }
    };

  return (
    <div className="invisible group-hover:visible absolute mt-10 left-0 right-0 shadow-lg transition-all duration-150 ease-in-out overflow-hidden w-full group-hover:animate-slideDown animate-slideUp bg-SYSTEM-black items-center flex justify-center border-t border-t-ELSE-34">
      <div className="grid grid-cols-7 w-[770px] py-4">
        {Object.entries(SubMenuItems).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center">
            <div className="space-y-2">
              {items.map((item) => (
                <Link
                  key={item}
                  href={findPathByTitle(category, item)}
                  className="block text-sm text-SYSTEM-white hover:text-SYSTEM-main text-center"
                  onClick={handleShopSponsorClick(category, item)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeaderDropMenu;
