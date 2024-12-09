import type { Config } from "tailwindcss";
import { COLORS } from "./css/color";
import { FONT_SIZE } from "./css/font"; // 폰트 사이즈 정보 가져오기

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      fontSize: FONT_SIZE,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
