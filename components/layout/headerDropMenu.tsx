import { MainMenuItems, MenuData } from "@/constants/header-menu";
import Link from "next/link";

const HeaderDropMenu = () => {
  return (
    <div className="absolute mt-10 left-0 right-0  shadow-lg transition-all duration-300 ease-in-out overflow-hidden w-full animate-slideDown bg-SYSTEM-black items-center flex justify-center border-t border-t-ELSE-34">
      <div className="grid grid-cols-7 w-[770px] py-4">
        {MainMenuItems.map((category) => (
          <div key={category} className="flex flex-col items-center">
            {/* 메뉴 아이템들 */}
            <div className="space-y-2">
              {MenuData[category]?.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-sm text-SYSTEM-white hover:text-SYSTEM-main text-center"
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
