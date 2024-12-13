"use client";

import { useState } from "react";
import Image from "next/image";
import KtwizLogoKr from "@/assets/images/logo_ktwiz_kr.svg";
import instagram from "@/assets/icons/icon_instagram.png";
import facebook from "@/assets/icons/icon_facebook.png";
import youtube from "@/assets/icons/icon_youtube.png";
import naver from "@/assets/icons/icon_naver.png";
import leftArrow from "@/assets/icons/icon_left_arrow.png";
import rightArrow from "@/assets/icons/icon_right_arrow.png";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  Button,
} from "@/components/ui/index";
import IconButton from "../ui/icon-button";
import FooterDialog from "../ui/footer-dialog";
import { FOOTER_DIALOG } from "@/constants/dialog";

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
              <Button variant="ghost" onClick={() => openDialog("CPIC")}>
                <strong>개인정보 처리방침</strong>
              </Button>
              <Button variant="ghost" onClick={() => openDialog("TOU")}>
                <strong>이용약관</strong>
              </Button>
              <Button variant="ghost" onClick={() => openDialog("PAEC")}>
                <strong>이메일무단수집거부</strong>
              </Button>
              <p>Sitemap</p>
            </div>
            <div>
              <div className="grid grid-cols-[70px_auto] flex justify-start gap-1">
                <p className="text-FOOTER-main">대표번호</p>
                <strong>1899-5916</strong>
                <p></p>
                <p className="text-FOOTER-gray">
                  (운영시간 : 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작 전까지,
                  월요일 및 주말 미경기 시 미운영)
                </p>
                <p className="text-FOOTER-main mt-3">주소</p>
                <strong className="mt-3">
                  경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크
                </strong>
              </div>
            </div>
            <div className="text-s text-[#272222]">
              Copyright 2022 kt sports. All rights reserved.
            </div>
          </div>
          {/* 우측 관련 사이트 */}
          <div className="space-y-10">
            <div>
              <Select>
                <SelectTrigger className="w-[210px] bg-SYSTEM-white">
                  <SelectValue placeholder="KT 그룹사 및 관련사이트" />
                </SelectTrigger>
                <SelectContent className="bg-SYSTEM-white">
                  <SelectGroup>
                    <SelectItem value="KT estate">KT estate</SelectItem>
                    <SelectItem value="KT telecop">KT telecop</SelectItem>
                    <SelectItem value="KT sat">KT sat</SelectItem>
                    <SelectItem value="KT engineering">
                      KT engineering
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <IconButton icon={instagram} />
              <IconButton icon={facebook} />
              <IconButton icon={youtube} />
              <IconButton icon={naver} />
            </div>
            <div className="flex gap-2">
              <IconButton icon={instagram} text="insta" />
              <IconButton icon={leftArrow} circle />
              <IconButton icon={rightArrow} circle />
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
