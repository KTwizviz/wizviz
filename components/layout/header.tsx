"use client";
import { useState } from "react";
import Link from "next/link";
import wizLogo from "@/assets/images/logo_ktwiz_en.svg";
import ktSportsLogo from "@/assets/images/logo_ktsports.png";
import Image from "next/image";
import { MainMenuItems, MenuData } from "@/constants/header-menu";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative">
      <header className="w-full">
        <nav
          className={`transition-colors duration-200 text-SYSTEM-white ${
            isHovering
              ? "bg-SYSTEM-black text-SYSTEM-white border-b"
              : "bg-SYSTEM-black"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* 로고 */}
              <Link href="/">
                <Image src={wizLogo} alt="wiz_logo" width={90} height={90} />
              </Link>

              {/* 중앙 메뉴 */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {MainMenuItems.map((item) => (
                  <Link key={item} href={`/${item.replace(" ", "-")}`}>
                    {item}
                  </Link>
                ))}

                {/* 드롭다운 패널 */}
                {isHovering && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-SYSTEM-black border-t shadow-lg">
                    <div className="max-w-7xl mx-auto py-6">
                      <div className="grid grid-cols-8 gap-4">
                        {MainMenuItems.map((category) => (
                          <div key={category} className="space-y-2">
                            {MenuData[category]?.map((item) => (
                              <Link
                                key={item}
                                href="#"
                                className="block text-l hover:text-SYSTEM-main"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 우측 메뉴 */}
              <div className="flex items-center space-x-4 text-l">
                <Link href="/login" className="hover:text-SYSTEM-main">
                  로그인
                </Link>
                <span>|</span>
                <Link href="/signup" className="hover:text-SYSTEM-main">
                  회원가입
                </Link>
                <Link href="/sports" className="border border-ELSE-D9 p-1">
                  <Image
                    src={ktSportsLogo}
                    alt="kt_sports_logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
