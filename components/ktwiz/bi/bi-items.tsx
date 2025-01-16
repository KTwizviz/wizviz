import Image from "next/image";
import {
  bi_Image_symbol_black,
  bi_Image_symbol_white,
  bi_Initial_symbol_white,
  bi_Initial_symbol_black,
} from "@/assets/images/@index";

export const Bi_Symbol_items = () => {
  const symbolData = [
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

  return (
    <div className="pt-5">
      {symbolData.map((symbol) => (
        <div key={symbol.id}>
          <div>
            <div className="flex items-center">
              <div className="w-1 h-7 bg-ELSE-EC0 mr-2"></div>
              <p className="text-3xl">{symbol.title}</p>
            </div>
            <p className="py-6">{symbol.description}</p>
          </div>

          <div className="flex justify-center gap-5 border-ELSE-11">
            {symbol.images.map((image) => (
              <div key={image.id} className="flex flex-col items-center">
                <Image
                  src={image.src}
                  width="500"
                  height="250"
                  alt={image.alt}
                />
                <a
                  className="bg-ELSE-EC0 py-5 text-SYSTEM-white w-48 h-10 rounded-md flex items-center justify-center z-10 mt-4"
                  href={image.downloadUrl}
                  download
                >
                  <button>이미지 다운로드</button>
                </a>
              </div>
            ))}
          </div>

          {symbol.id === 1 && <div className="pt-5" />}
        </div>
      ))}
    </div>
  );
};
