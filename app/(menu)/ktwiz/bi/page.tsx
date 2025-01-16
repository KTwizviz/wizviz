import { Bi_Symbol_items } from "@/components/ktwiz/bi/bi-items";

export default function page() {
  return (
    <div className="pt-5">
      <div className="flex items-center">
        <div className=" w-1 h-7 bg-ELSE-EC0 mr-2"></div>
        <p className="text-3xl">심볼마크</p>
      </div>
      <p className="py-6">
        kt wiz는 구단명의 이니셜을 상징화한 &apos;이니셜 심볼&apos;과
        <br />
        그림을 정상화한 &apos;이미지 심볼&apos; 두 개의 심볼마크를 동시에
        사용합니다.
      </p>

      <div className="pb-10">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/LR0BPPUXzsc"
          title="kt wiz 심볼 탄생 스토리"
          allow="fullscreen"
        ></iframe>
      </div>
      <Bi_Symbol_items />
    </div>
  );
}
