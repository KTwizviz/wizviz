import Image from "next/image";
import Link from "next/link";
import { logo_ktwports } from "@/assets/images/@index";

const HeaderRightMenu = () => {
  return (
    <div className="flex items-center space-x-4 text-m">
      <Link href="/login" className="hover:text-SYSTEM-main">
        로그인
      </Link>
      <span>|</span>
      <Link href="/signup" className="hover:text-SYSTEM-main">
        회원가입
      </Link>
      <Link href="/sports" className="border border-ELSE-D9 p-1">
        <Image
          src={logo_ktwports}
          alt="kt_sports_logo"
          width={64}
          height={17}
        />
      </Link>
    </div>
  );
};
export default HeaderRightMenu;
