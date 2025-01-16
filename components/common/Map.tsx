'use client'

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const KakaoMap = ({ location }: { location: number[] }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      window.kakao.maps.load(() => {
        const mapOption = {
          center: new window.kakao.maps.LatLng(location[0], location[1]),
          level: 3,
          draggable: true,
          scrollwheel: true,
          keyboardShortcuts: true
        };

        const map = new window.kakao.maps.Map(mapRef.current, mapOption);

        // 마커 커스텀 이미지 설정
        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
        const imageSize = new window.kakao.maps.Size(64, 69)
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        //지도 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: mapOption.center,
          image: markerImage,
        });
        marker.setMap(map);

        // 지도 타입 컨트롤 표시 *스카이뷰
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
      });
    }
  }, [location])

  return (
    <div className="flex justify-center">
      <div
        ref={mapRef}
        className={`w-[98%] h-[550px] rounded-2xl mb-6`}
      />
    </div>
  );
};

export default KakaoMap;