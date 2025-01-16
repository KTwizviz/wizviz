"use client";
import Image from "next/image";
import { gallery, store_banner, player_banner } from "@/assets/images/@index";
import Carousel from "../ui/custom-carousel";
import { CAROUSE_ITEMS } from "@/constants/main";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const router = useRouter();
  return (
    <div className="w-[1200px] justify-self-center relative mb-[100px] justify-items-center">
      <div className="relative h-[620px]">
        <Image
          src={gallery}
          alt="main gallery"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[700px] mx-auto absolute left-1/2 -translate-x-1/2 -z-10"
          priority
        />
        <div className="w-[1250px] mx-auto pt-[60px] overflow-hidden">
          <Carousel images={CAROUSE_ITEMS} />
        </div>
      </div>
      <div className="w-[1100px] mt-[40px] flex gap-5 justify-self-center">
        <Image
          src={store_banner}
          alt="Store Banner"
          width={540}
          height={190}
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.ktwizstore.co.kr", "_blank");
          }}
        />
        <Image
          src={player_banner}
          alt="Player of the Month Banner"
          width={540}
          height={190}
          className="cursor-pointer"
          onClick={() => {
            router.push("/player/hitter/infielder/14");
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
