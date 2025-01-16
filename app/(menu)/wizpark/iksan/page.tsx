'use client'

import KakaoMap from "@/components/common/Map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import Carousel from "@/components/ui/custom-carousel";
import { BusRouteInfo } from "@/components/wizpark/iksan/bus-route-info";
import { IKSAN_IMAGES, IKSAN_LOCATION } from "@/constants/stadium";
import { Bus, ExternalLink, Images, Map, MapPin } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Images className="mr-2" />
            사진
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel images={IKSAN_IMAGES} />
          <div className="flex justify-self-center">
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(규격) 좌우 98m, 중앙 121m</span>
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(관람석) 740석</span>
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(본부석) 덕아웃</span>
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(전광판) 전자식</span>
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(전자식) 고정식</span>
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(건립) 2011년 6월</span>
            <span className="bg-ELSE-DE text-ELSE-33 rounded-md px-2 py-0.5 m-1">(그라운드) 인조잔디</span>
          </div>
        </CardContent>
      </Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Map className="mr-2" />
          지도
        </CardTitle>
      </CardHeader>
      <KakaoMap location={IKSAN_LOCATION} />
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" />
              주소
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">전라북도 익산시</p>
            <p className="mb-2">무왕로 1397(부송동), 익산종합운동장 야구장</p>
            <Link
              href="https://place.map.kakao.com/m/27123892"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              찾아오기
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              찾아오기
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex">
              <Bus className="w-[28px] h-[28px] mr-2" />
              <h3 className="font-semibold text-xl mb-2">버스</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-4">
              <BusRouteInfo
                title="익산공설운동장 하차"
                regularRoutes="102-1, 102-2, 103, 103-1"
              />
              <BusRouteInfo
                title="이리팔봉초등학교 하차"
                regularRoutes="40, 55, 56, 58, 102-2, 103"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-4">
              <BusRouteInfo
                title="종합경기장.파출소옆 하차"
                regularRoutes="1, 40, 58, 59, 59-1, 60, 60-1, 60-2, 60-3, 61, 62, 63"
                expressRoutes="222, 222-1, 222-2, 222-3, 555"
              />
              <BusRouteInfo
                title="팔봉동사무소 하차"
                regularRoutes="55, 56, 58, 59, 60, 60-1, 60-2, 60-3, 61, 62, 63, 63-1, 64, 103"
                expressRoutes="222, 222-1, 222-2, 222-3, 555"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
