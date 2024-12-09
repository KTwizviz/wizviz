import type { Config } from "tailwindcss";
import { COLORS } from "./css/color";

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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
