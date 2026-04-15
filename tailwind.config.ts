import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: {
          100: "#F5F5F5",
          200: "#EFEFEF",
          300: "#D9D9D9",
        },
        yellowCustom: {
          100: "#E9C60F",
          200: "#F2DA5E",
        },
        grayDark: "#292D32",
        blueCustom: {
          100: "#2DA5F3",
          200: "#0060AF",
        },
      },
      fontFamily: {
        Almarai: "var(--font-almarai)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
