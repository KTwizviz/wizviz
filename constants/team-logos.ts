import { StaticImageData } from "next/image";
import {
  logo_HH,
  logo_HT,
  logo_KT,
  logo_LG,
  logo_LT,
  logo_NC,
  logo_OB,
  logo_SSG,
  logo_SS,
  logo_WO,
} from "@/assets/images/@index";

export const teamLogos: Record<Team, StaticImageData> = {
  한화: logo_HH,
  KIA: logo_HT,
  KT: logo_KT,
  LG: logo_LG,
  롯데: logo_LT,
  NC: logo_NC,
  두산: logo_OB,
  SSG: logo_SSG,
  삼성: logo_SS,
  키움: logo_WO,
};
