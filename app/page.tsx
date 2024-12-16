import Image from "next/image";
import MainPoster from "@/assets/images/2024_post_bg_web.png";
import Schedule from "@/components/main/schedule";

export default function Main() {
  return (
    <>
      {/* main banner */}
      <div className="relative">
        <Image
          src={MainPoster}
          alt="main poster"
          width={0}
          height={0}
          className="w-full mb-24"
        />
      </div>
      {/* schedule */}
      <Schedule />
      {/* video */}
      {/* gallery */}
    </>
  );
}
