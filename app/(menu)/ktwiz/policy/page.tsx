import Image from "next/image";
import { policy_img } from "@/assets/images/@index";

export default function page() {
  return (
    <Image
      className="pt-5"
      src={policy_img}
      alt="policy_img"
      width={1100}
      height={900}
    />
  );
}
