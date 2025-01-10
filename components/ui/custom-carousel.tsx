import { useState, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IconButton from "./icon-button";

const Carousel = ({ images }: CustomCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleImages = useCallback(() => {
    const totalImages = images.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      let index = currentIndex + offset;
      if (index < 0) index = totalImages + index;
      if (index >= totalImages) index = index - totalImages;
      return images[index];
    });
  }, [currentIndex, images]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
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
          {getVisibleImages().map((image, index) => (
            <div
              key={image.key}
              className={`absolute transition-all duration-700 ease-in-out ${
                index === 0
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
              <div
                className={`${
                  index === 2
                    ? "shadow-2xl w-[400px] h-[400px]"
                    : "w-[300px] h-[300px]"
                } rounded-xl overflow-hidden transition-shadow duration-800 relative`}
              >
                <Image
                  src={image.img}
                  alt={`Carousel Image ${image.key}`}
                  fill
                  className="rounded-xl object-cover"
                  priority={index === 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
