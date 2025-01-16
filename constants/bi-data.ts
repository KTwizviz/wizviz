import {
  bi_Image_symbol_black,
  bi_Image_symbol_white,
  bi_Initial_symbol_white,
  bi_Initial_symbol_black,
} from "@/assets/images/@index";

export const symbolData = [
  {
    id: 1,
    title: "Initial symbol",
    description:
      "이니셜 심볼은 k와 w 두 글자를 이용하여 강력한 만법 문장이 연상 되도록 디자인 하였고, 전통과 현대적 감각의 조화를 고려하였습니다. 강인함과 파워를 표현합니다.",
    images: [
      {
        id: "initial-white",
        src: bi_Initial_symbol_white,
        alt: "Initial_symbol_white",
        downloadUrl: "/bi_Initial_symbol_white.png",
      },
      {
        id: "initial-black",
        src: bi_Initial_symbol_black,
        alt: "Initial_symbol_black",
        downloadUrl: "/bi_Initial_symbol_black.png",
      },
    ],
  },
  {
    id: 2,
    title: "Image symbol",
    description:
      "이미지 심볼은 전형적인 마법사 이미지에서 탈피하여 현대적인 마법사의 모습을 새롭게 창조했습니다. 신속한 기동력과 유연함을 표현합니다.",
    images: [
      {
        id: "image-white",
        src: bi_Image_symbol_white,
        alt: "Image_symbol_white",
        downloadUrl: "/bi_Image_symbol_white.png",
      },
      {
        id: "image-black",
        src: bi_Image_symbol_black,
        alt: "Image_symbol_black",
        downloadUrl: "/bi_Image_symbol_black.png",
      },
    ],
  },
];
