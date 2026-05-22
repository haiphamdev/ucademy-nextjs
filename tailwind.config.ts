import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6FCF97",
      },
      fontFamily: {
        primary: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};

export default config;
