import Script from "next/script";
import React, { useEffect, useRef } from "react";

type MapSize = {
  width: number | string
  height: number | string
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ width, height }: MapSize) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      window.kakao.maps.load(() => {
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, mapOption);
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={mapRef}
        className={`w-${width} h-${height}`}
      ></div>
      <Script
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`}
      />
    </div>
  );
};

export default KakaoMap;