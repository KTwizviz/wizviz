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
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          // 사라질 때의 애니메이션 추가
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-10px)", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDown 0.2s ease-out",
        slideUp: "slideUp 0.15s ease-out",
      },
      colors: {
        ...COLORS,
      },
      fontSize: FONT_SIZE,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
