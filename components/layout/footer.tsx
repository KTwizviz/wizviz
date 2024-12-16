"use client";

import { useState } from "react";
import Image from "next/image";
import KtwizLogoKr from "@/assets/images/logo_ktwiz_kr.svg";
import instagram from "@/assets/icons/icon_instagram.png";
import facebook from "@/assets/icons/icon_facebook.png";
import youtube from "@/assets/icons/icon_youtube.png";
import naver from "@/assets/icons/icon_naver.png";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectGroup,
  SelectItem,
} from "@/components/ui/index";
import FooterDialog from "../ui/footer-dialog";
import { FOOTER_SITE_URLS, FOOTER_DIALOG } from "@/constants/footer";
import IconButton from "../ui/icon-button";

type DialogKey = keyof typeof FOOTER_DIALOG;

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDialog, setSelectedDialog] = useState<
    (typeof FOOTER_DIALOG)[DialogKey]
  >(FOOTER_DIALOG.CPIC);
  const openDialog = (key: DialogKey) => {
    setIsOpen(true);
    setSelectedDialog(FOOTER_DIALOG[key]);
  };

  const handleUrlOpen = (site: keyof typeof FOOTER_SITE_URLS) => {
    if (FOOTER_SITE_URLS[site]) {
      window.open(FOOTER_SITE_URLS[site], "_blank");
    }
  };

  return (
    <>
      <div className="py-[30px] justify-center border-t border-ELSE-DE">
        <div className="px-[50px] w-[1200px] flex justify-self-center gap-20">
          {/* 좌측 로고 영역 */}
          <div>
            <Image src={KtwizLogoKr} alt="ktwiz-logo" />
          </div>
          {/* 중앙 텍스트들 */}
          <div className="justify-start space-y-3">
            <div className="flex justify-start gap-6 font-bold">
              <a
                href="#"
                className="text-black hover:text-gray-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  openDialog("CPIC");
                }}
              >
                개인정보 처리방침
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  openDialog("TOU");
                }}
              >
                이용약관
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  openDialog("PAEC");
                }}
              >
                이메일무단수집거부
              </a>
            </div>
            <div>
              <dl className="grid gap-1">
                <div className="flex">
                  <dt className="text-FOOTER-main w-[70px]">대표번호</dt>
                  <dd className="font-medium">1899-5916</dd>
                </div>
                <dd className="text-FOOTER-gray ml-[70px]">
                  (운영시간 : 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작 전까지,
                  월요일 및 주말 미경기 시 미운영)
                </dd>
                <div className="flex mt-3">
                  <dt className="text-FOOTER-main w-[70px]">주소</dt>
                  <dd className="font-medium">
                    경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크
                  </dd>
                </div>
              </dl>
            </div>
            <div className="text-s text-ELSE-D9">
              Copyright 2022 kt sports. All rights reserved.
            </div>
          </div>
          {/* 우측 관련 사이트 */}
          <div className="space-y-10">
            <div>
              <Select onValueChange={handleUrlOpen}>
                <SelectTrigger className="w-[210px] bg-SYSTEM-white">
                  <SelectValue placeholder="KT 그룹사 및 관련사이트" />
                </SelectTrigger>
                <SelectContent className="bg-SYSTEM-white">
                  <SelectGroup>
                    <SelectItem value="KT estate" className="cursor-pointer">
                      KT estate
                    </SelectItem>
                    <SelectItem value="KT telecop" className="cursor-pointer">
                      KT telecop
                    </SelectItem>
                    <SelectItem value="KT sat" className="cursor-pointer">
                      KT sat
                    </SelectItem>
                    <SelectItem
                      value="KT engineering"
                      className="cursor-pointer"
                    >
                      KT engineering
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <IconButton
                icon={instagram}
                iconSize={18}
                border
                onClick={() => handleUrlOpen("instagram")}
              />
              <IconButton
                icon={facebook}
                iconSize={18}
                border
                onClick={() => handleUrlOpen("facebook")}
              />
              <IconButton
                icon={youtube}
                iconSize={18}
                border
                onClick={() => handleUrlOpen("youtube")}
              />
              <IconButton
                icon={naver}
                iconSize={18}
                border
                onClick={() => handleUrlOpen("naver")}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterDialog
        title={selectedDialog.title}
        description={selectedDialog.description}
        content={selectedDialog.content}
        open={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
};

export default Footer;
