import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F2A45",
        "forest-green": "#1A6B3C",
        "soft-green": "#4ade80",
        amber: "#D97706",
        "off-white": "#FAFAF8",
      },
      fontFamily: {
        lora: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.7",
      },
    },
  },
  plugins: [],
};
export default config;
