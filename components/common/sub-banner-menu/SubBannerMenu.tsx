'use client';

import { useRouter } from "next/router";
import React, { useState } from "react";
import { MENU_INFO } from "./menu";

interface SubMenu {
  id: string,
  title: string,
  descript: string,
}

const SubBannerMenu = () => {
  const router = useRouter();
  const currentPath: string = router.pathname.split('/').pop() || ''; // 현재 페이지의 라우트 주소

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className="w-full h-[253px] bg-gradient-to-r flex items-center justify-center bg-cover bg-center bg-blend-overlay"
          style={{
            // backgroundImage: "url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809)",
            // backgroundImage: "url(https://images.unsplash.com/photo-1579547621244-c07e55dcb856?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundImage: "url(https://images.unsplash.com/photo-1614851099511-773084f6911d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="text-center text-white p-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">

            </h1>
            <p className="text-lg md:text-xl opacity-90">
              해당 서브배너메뉴 설명
              {/* {descript} */}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex justify-around p-4">
              {/* {mockMenu.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => router.push(tab.id)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === tab.id
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                  aria-title={tab.title}
                >
                  <span className="text-sm font-medium">
                    {mockMenu.map()}
                    {mockMenu.filter((tab: SubMenu) => board.isCompleted).length;
            setCount(completedCount);}
                  </span>
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBannerMenu;