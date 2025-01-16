"use client";
import Image from "next/image";
import { main_title_video } from "@/assets/images/@index";
import VideoCard from "./video-card";
import { HIGHLIGHT_VIDEO } from "@/constants/main";
import { useState } from "react";

const Video = () => {
  const [mainVideoId, setMainVideoId] = useState<string>(
    HIGHLIGHT_VIDEO[0].videoId
  );

  const handleVideoClick = (videoId: string) => {
    setMainVideoId(videoId);
  };

  return (
    <div className="w-[1200px] justify-self-center relative mb-[120px] justify-items-center">
      <div className="relative h-[300px]">
        <Image
          src={main_title_video}
          alt="main schdule"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[600px] mx-auto absolute left-1/2 -translate-x-1/2 -z-10"
          priority
        />
        <div className="w-[1100px] mx-auto pt-[120px]">
          <iframe
            src={`https://tv.naver.com/embed/${mainVideoId}`}
            width="1100"
            height="620"
            allowFullScreen
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="w-[1100px] mt-[510px] mb-14 flex gap-[33px] justify-self-center">
        {HIGHLIGHT_VIDEO.map((video) => (
          <VideoCard
            key={video.videoId}
            videoId={video.videoId}
            date={video.date}
            title={video.title}
            onClick={() => handleVideoClick(video.videoId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Video;
