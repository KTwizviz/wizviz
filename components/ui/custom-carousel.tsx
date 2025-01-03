import { useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IconButton from "./icon-button";

const Carousel = ({ contents }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleContents = useCallback(() => {
    const totalContents = contents.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      let index = currentIndex + offset;
      if (index < 0) index = totalContents + index;
      if (index >= totalContents) index = index - totalContents;
      return contents[index];
    });
  }, [currentIndex, contents]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % contents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + contents.length) % contents.length);
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <IconButton
        icon={ArrowLeft}
        iconSize={45}
        className="absolute text-ELSE-7374 left-0 z-20 hover:text-SYSTEM-black"
        onClick={handlePrev}
      />
      <IconButton
        icon={ArrowRight}
        iconSize={45}
        className="absolute text-ELSE-7374 right-0 z-20 hover:text-SYSTEM-black"
        onClick={handleNext}
      />
      <div>
        <div className="relative w-full flex justify-center items-center">
          {getVisibleContents().map((content, index) => (
            <div
              key={content.key}
              className={`absolute transition-all duration-700 ease-in-out ${index === 0
                ? "-translate-x-[130%] z-10 opacity-30"
                : index === 1
                  ? "-translate-x-[90%] z-20 opacity-70"
                  : index === 2
                    ? "translate-x-0 z-30 transform scale-100"
                    : index === 3
                      ? "translate-x-[90%] z-20 opacity-70"
                      : "translate-x-[130%] z-10 opacity-30"
                }`}
            >
              {"img" in content ?
                // Case1: 이미지 Props
                <div
                  className={`${index === 2
                    ? "shadow-2xl w-[400px] h-[400px] cursor-pointer"
                    : "w-[300px] h-[300px]"
                    } rounded-xl overflow-hidden transition-shadow duration-800 relative`}
                  onClick={
                    index === 2
                      ? () => {
                        console.log("사진 페이지로 이동");
                      }
                      : undefined
                  }
                >
                  <Image
                    src={content.img}
                    alt={`Carousel Image ${content.key}`}
                    fill
                    className="rounded-xl object-cover"
                    priority={index === 2}
                  />
                </div>
                : // Case2: 경기 일정 Props
                <div
                  className={`${index === 2
                    ? "shadow-2xl w-[400px] h-[400px] cursor-pointer"
                    : "w-[300px] h-[300px]"
                    } rounded-xl overflow-hidden transition-shadow duration-800 relative`}
                >
                  <div className="w-full flex flex-col justify-center items-center text-m">
                    <span className='text-xl'>vs</span>
                    <Image
                      src={content.logo}
                      alt={"대전 상대"}
                      width={48}
                      height={48}
                    />
                    <p>{content.gtime}</p>
                    <p> {content.broadcast}</p>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
