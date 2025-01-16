import Image from "next/image";

import { symbolData } from "@/constants/bi-data";

export const Bi_Symbol_items = () => {
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

          <div className="flex justify-between border-ELSE-11">
            {symbol.images.map((image) => (
              <div key={image.id} className="flex flex-col items-center">
                <Image
                  src={image.src}
                  width="540"
                  height="200"
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
