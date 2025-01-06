import { useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IconButton from "@/components/ui/icon-button";

const ScheduleCarousel = ({ contents }: CarouselProps) => {
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

  // contents가 없을 때 로딩 텍스트 표시
  if (!contents || contents.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center text-gray-400">
        경기 일정 없음
      </div>
    );
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
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
              className={`absolute transition-all duration-700 ease-in-out ${index === 2
                ? "z-30 transform scale-100"
                : index === 1 || index === 3
                  ? `${index === 1 ? "-translate-x-[90%] " : "translate-x-[90%]"} z-20`
                  : `${index === 0 ? "-translate-x-[130%]" : "translate-x-[130%]"} z-10 opacity-70 scale-90`
                }`}
            >
              <div
                className={`${index === 2
                  ? "shadow-2xl w-[500px] h-[250px] cursor-pointer"
                  : "shadow-xl w-[270px] h-[200px]"
                  } rounded-xl overflow-hidden transition-shadow duration-800 relative bg-SYSTEM-white`}
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <span className="shadow-sm bg-ELSE-DE border rounded-2xl text-m px-2">{content.displayDate.slice(4, 6)}월 {content.displayDate.slice(6, 8)}일</span>
                  <div className="w-full flex justify-around items-center">
                    <div className="flex flex-col items-center">
                      <span>Home</span>
                      <Image
                        src={content.homeLogo}
                        alt={`Carousel Data ${content.key}`}
                        width={index === 2 ? 112 : 64}
                        height={index === 2 ? 112 : 64}
                      />
                      <span className="text-xl">{content.home}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-6">
                      {content.outcome === '승' ?
                        <span className='text-white bg-SYSTEM-main rounded-xl px-2'>승</span>
                        : content.outcome === '패' &&
                        <span className='text-white bg-ELSE-D9 rounded-xl px-2'>패</span>
                      }
                      <p className="text-4xl">{content.homeScore} : {content.visitScore}</p>
                      <p className="text-xl text-ELSE-49">{content.gtime}</p>
                      <p className="text-l text-ELSE-90">{content.stadium}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>Away</span>
                      <Image
                        src={content.visitLogo}
                        alt={`Carousel Data ${content.key}`}
                        width={index === 2 ? 112 : 64}
                        height={index === 2 ? 112 : 64}
                      />
                      <span className="text-xl">{content.visit}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default ScheduleCarousel;
