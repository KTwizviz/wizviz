import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import KakaoMap from "@/components/common/Map";
import { Bus, ExternalLink, Map, MapPin, MoveRight, Train } from "lucide-react";
import Link from "next/link";
import { SUWON_LOCATION } from "@/constants/stadium";

export default function page() {


  return (
    <div>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Map className="mr-2" />
          지도
        </CardTitle>
      </CardHeader>
      <KakaoMap location={SUWON_LOCATION} />
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" />
              주소
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">경기도 수원시 장안구</p>
            <p className="mb-2">경수대로 893(조원동), 수원KT위즈파크</p>
            <Link
              href="https://place.map.kakao.com/m/17577962"
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
              <Train className="mr-2" />
              <h3 className="font-semibold mb-2">지하철 </h3>
            </div>
            <ul className="list-none list-inside mb-4 space-y-2">
              <p className="mb-4">화서역 하차 후 아래의 버스로 찾아오실 수 있습니다.</p>
              <li className="flex items-start">
                <span className="w-28 text-center shrink-0 bg-ELSE-DE text-ELSE-49 rounded-md px-2 mr-2">37,39번 버스</span>
                수성중 사거리 하차
                <MoveRight className="inline-block mx-2" />
                도보 3분
              </li>
              <li className="flex items-start">
                <span className="w-28 text-center shrink-0 bg-ELSE-DE text-ELSE-49 rounded-md px-2 mr-2">55번 버스</span>
                종합운동장 하차
                <MoveRight className="inline-block mx-2" />
                수원역 하차
                <MoveRight className="inline-block mx-2" />
                택시 이동(20분)
              </li>
              <li className="flex items-start">
                <span className="w-28 text-center shrink-0 bg-ELSE-DE text-ELSE-49 rounded-md px-2 mr-2">1,5,8번 버스</span>
                수정중 사거리
                <MoveRight className="inline-block mx-2" />
                도보 3분
              </li>
            </ul>
            <div className="flex mt-8">
              <Bus className="mr-2" />
              <h3 className="font-semibold mb-2">버스</h3>
            </div>
            <ul className="list-none list-inside mb-4 space-y-2">
              <p className="mb-4">일반, 직행, 좌석 버스로 찾아오실 수 있습니다.</p>
              <li>
                <span className="bg-ELSE-DE text-ELSE-49 rounded-md px-2 py-0.5 mr-2">일반</span>
                25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1, 310, 777
              </li>
              <li>
                <span className=" bg-ELSE-DE text-ELSE-49 rounded-md px-2 py-0.5 mr-2">직행</span>
                2007, 3000, 7770
              </li>
              <li>
                <span className="bg-ELSE-DE text-ELSE-49 rounded-md px-2 py-0.5 mr-2">좌석</span>
                300, 900
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
