'use client';
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MENU_INFO } from "./menu-data";
import submenuBg from '@/assets/images/submenu_bg.png';
import Image from "next/image";

interface SubMenu {
  id: string,
  title: string,
  descript: string,
}

const SubBannerMenu = () => {
  const router = useRouter();
  const pathname: string = usePathname();
  const currentPath: string = pathname.split('/').pop() || ''; // 현재 메뉴 이름
  const [subMenuList, setSubMenuList] = useState<object[]>([{}]) // 해당 메뉴의 하위 메뉴 리스트
  const [title, setTitle] = useState<string>("");
  const [descript, setDescript] = useState<string>("");

  // 현재 진입한 메뉴와 하위메뉴 정보들을 상태로 관리
  useEffect(() => {
    const findMenuInfo = () => {
      for (const menu in MENU_INFO) {
        const subMenuAll = MENU_INFO[menu as keyof typeof MENU_INFO] as SubMenu[];
        const matchedMenu = subMenuAll.find(item => item.id === currentPath);

        if (matchedMenu) {
          setSubMenuList(subMenuAll);
          setTitle(matchedMenu.title);
          setDescript(matchedMenu.descript);
          break;
        }
      }
    };

    findMenuInfo();
  }, [currentPath]);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="w-full h-[253px] flex items-center justify-center bg-cover bg-center bg-blend-overlay">
          <Image
            src={submenuBg}
            alt="Submenu background"
            layout="fill"
            objectFit="cover"
            className="w-full absolute inset-0"
          />
          <div className="text-center text-white p-8 max-w-3xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl opacity-90">{descript}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex justify-around p-4">
              {subMenuList.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => router.push(tab.id)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 
                    ${currentPath === tab.id
                      ? "bg-SYSTEM-white text-ELSE-CC6" // 적절한 색상 클래스 사용
                      : "text-ELSE-49 hover:bg-ELSE-DE"
                    }`}
                >
                  <span className="text-sm font-medium">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBannerMenu;