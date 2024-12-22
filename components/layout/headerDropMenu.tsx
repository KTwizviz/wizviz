import { SubMenuItems } from "@/constants/header-menu";
import Link from "next/link";

const HeaderDropMenu = () => {
  return (
    <div className="invisible group-hover:visible absolute mt-10 left-0 right-0 shadow-lg transition-all duration-150 ease-in-out overflow-hidden w-full group-hover:animate-slideDown animate-slideUp bg-SYSTEM-black items-center flex justify-center border-t border-t-ELSE-34">
      <div className="grid grid-cols-7 w-[770px] py-4">
        {Object.entries(SubMenuItems).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center">
            <div className="space-y-2">
              {items.map((item) => (
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
