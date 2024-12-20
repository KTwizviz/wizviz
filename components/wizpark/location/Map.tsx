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
        const markerPosit = new window.kakao.maps.LatLng(LAT, LNG);
        const marker = new window.kakao.maps.Marker({
          position: markerPosit
        });
      });
    }
  }, []);

  // 지도 마커 생성성
  useEffect(() => {
    const markerPosit = new window.kakao.maps.LatLng(33.450701, 126.570667);

    const marker = new window.kakao.maps.Marker({
      position: markerPosit
    });
  }, [])


  return (
    <div>
      <div
        ref={mapRef}
        className={`w-${size.width} h-${size.height}`}
      ></div>
      <Script
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`}
      />
    </div>
  );
};

export default KakaoMap;