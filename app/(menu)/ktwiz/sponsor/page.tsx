import { SponsorItem } from "@/components/ktwiz/sponsor/sponsor-item";
import Link from "next/link";

export default function page() {
  return (
    <div className="pt-4">
      <div className="flex justify-end mb-8">
        <Link
          className={"bg-ELSE-EC0 py-2 px-4 text-SYSTEM-white rounded-md"}
          href={"https://b2b.ktwiz.co.kr/about/intro"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          kt wiz 스폰서 신청 및 문의
        </Link>
      </div>
      <SponsorItem />
    </div>
  );
}
