"use client";
import { usePathname } from "next/navigation";
import submenuBg from "@/assets/images/submenu_bg.png";
import Image from "next/image";
import Link from "next/link";
import { findBannerInfo, findCategoryMenus } from "@/utils/find-menu";

const CategoryMenu = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/").filter(Boolean);
  const [mainMenu, subMenu] = currentPath;

  const bannerInfo = findBannerInfo(pathname);
  const categoryMenus = findCategoryMenus(mainMenu, subMenu);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative w-full h-[253px] flex items-center justify-center bg-cover bg-center bg-blend-overlay">
          <Image
            src={submenuBg}
            alt="Submenu background"
            fill
            quality={100}
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <div className="text-center text-white p-8 max-w-3xl relative z-10">
            <div className="text-4xl md:text-5xl font-bold mb-4">
              {bannerInfo.title}
            </div>
            <p className="text-lg md:text-xl opacity-90">
              {bannerInfo.description}
            </p>
          </div>
        </div>
        {categoryMenus.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
            <div className="max-w-2xl mx-auto bg-SYSTEM-white rounded-lg shadow-lg">
              <div className="flex justify-around p-4 items-center">
                {categoryMenus.map((menu) => (
                  <Link
                    key={menu.path}
                    href={menu.path}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300
                      ${
                        pathname === menu.path
                          ? "bg-SYSTEM-white text-ELSE-CC6"
                          : "text-ELSE-49 hover:bg-ELSE-DE"
                      }`}
                  >
                    <span className="text-sm font-medium">{menu.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
