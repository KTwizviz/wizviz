"use client";
import { usePathname } from "next/navigation";
import submenuBg from "@/assets/images/submenu_bg.png";
import Image from "next/image";
import { SubMenuInfo } from "@/constants/header-menu";
import Link from "next/link";

type CategoryMenu = {
  title: string;
  description: string;
};

const CategoryMenu = () => {
  // const router = useRouter();
  const pathname = usePathname();
  console.log(pathname, "나 패스네임");

  const findBannerInfoByPath = () => {
    for (const menuKey in SubMenuInfo) {
      const menuItems = SubMenuInfo[menuKey];
      const matchedItem = menuItems.find((item) => item.path === pathname);

      if (matchedItem) {
        return {
          title: matchedItem.title,
          description: matchedItem.description,
        };
      }
    }
    return { title: "", description: "" };
  };

  const bannerInfo = findBannerInfoByPath();

  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative w-full h-[253px] flex items-center justify-center bg-cover bg-center bg-blend-overlay">
          <Image
            src={submenuBg}
            alt="Submenu background"
            fill
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
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-2xl mx-auto bg-SYSTEM-white rounded-lg shadow-lg">
            <div className="flex justify-around p-4 items-center">
              <Link
                href="#"
                className="flex  space-y-1 px-4 py-2 rounded-lg transition-all duration-300 bg-yellow-400"
              >
                서브메뉴리스트
              </Link>
              <Link href="#">서브메뉴2</Link>
              {/* {subMenuList.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => router.push(tab.id)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 
                    ${
                      currentPath === tab.id
                        ? "bg-SYSTEM-white text-ELSE-CC6"
                        : "text-ELSE-49 hover:bg-ELSE-DE"
                    }`}
                >
                  <span className="text-sm font-medium">{tab.title}</span>
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
