'use client'

import { LAT, LNG } from "@/constants/wizpark-location";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      window.kakao.maps.load(() => {
        const mapOption = {
          center: new window.kakao.maps.LatLng(LAT, LNG),
          level: 3,
          draggable: true,
          scrollwheel: true,
          keyboardShortcuts: true
        };

        const map = new window.kakao.maps.Map(mapRef.current, mapOption);

        //지도 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: mapOption.center
        });
        marker.setMap(map);
      });
    }
  }, [])

  return (
    <div>
      <div
        ref={mapRef}
        className={`w-full h-[450px] rounded-2xl mb-6`}
      />
    </div>
  );
};

export default KakaoMap;