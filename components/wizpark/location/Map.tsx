'use client'

import { LAT, LNG } from "@/constants/wizpark-location";
import Script from "next/script";
import React, { useEffect, useRef } from "react";

type MapSize = {
  size: {
    width: number | string
    height: number | string
  }
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ size }: MapSize) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // 카카오맵 생성
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
  }, []);

  return (
    <div>
      <div
        ref={mapRef}
        className={`w-${size.width} h-${size.height}`}
      ></div>
    </div>
  );
};

export default KakaoMap;