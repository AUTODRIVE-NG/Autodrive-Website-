import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [{ pattern: /gold/ }],
  theme: {
    extend: {
      colors: {
        navy: "#12316B",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
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
