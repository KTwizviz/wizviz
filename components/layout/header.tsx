"use client";
import { useState } from "react";
import Link from "next/link";
import wizLogo from "@/assets/images/logo_ktwiz_en.svg";
import Image from "next/image";
import { MainMenuItems } from "@/constants/header-menu";
import HeaderRightMenu from "./headerRightMenu";
import { usePathname, useRouter } from "next/navigation";
import HeaderDropMenu from "./headerDropMenu";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  // const onHeaderMenuClick = () => {
  //   console.log(pathName, "나 패스네임");
  // };

  // 현재 경로와  url 경로가 같은지 보는 함수 t/f
  const isCurrentPath = (menuPath: string) => {
    const formattedPath = `/${menuPath.replace(" ", "-")}`;
    return pathName === formattedPath;
  };

  return (
    <div className="relative">
      <header className="w-full">
        <nav
          className={
            "transition-colors duration-200 text-SYSTEM-white bg-SYSTEM-black"
          }
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* 로고 */}
              <Image
                src={wizLogo}
                alt="wiz_logo"
                width={90}
                height={90}
                className="cursor-pointer"
                onClick={() => router.push("/")}
              />

              {/* 중앙 메뉴 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                {MainMenuItems.map((item) => (
                  <Link
                    key={item}
                    href={""}
                    // href={`/${item.replace(" ", "-")}`}
                    className={`hover:text-SYSTEM-main w-[110px] text-center  text-xl font-bold${
                      isCurrentPath(item)
                        ? "text-SYSTEM-main"
                        : "text-SYSTEM-white"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              {/* 드롭다운 */}
              <div>{isHovering && <HeaderDropMenu />}</div>
              {/* 우측 메뉴 */}
              <HeaderRightMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
