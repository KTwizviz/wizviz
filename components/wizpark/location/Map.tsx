import Script from "next/script";
import React, { useEffect } from "react";

const Map = ({ width, height }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_KAKAO_MAP_API}`;
    script.async = true;

    script.addEventListener("load", () => {
      const kakao = window.kakao;

      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      // 지도 생성
      new kakao.maps.Map(mapContainer, mapOption);
    });

    document.head.appendChild(script);

    // Clean Up
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id="map"
        className={`w-${width} h-${height}`}
      ></div>
      <Script
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_KAKAO_API_KEY}&autoload=false`}
      />
    </div>
  );
};

export default Map;
