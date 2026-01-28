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
        background: "#fef9f3",
        "background-dark": "#f5ebe0",
        foreground: "#3d2c1e",
        primary: "#c9a87c",
        "primary-dark": "#b8956b",
        accent: "#d4a574",
        gold: "#c9a87c",
        cream: "#fef9f3",
        chocolate: "#3d2c1e",
        caramel: "#d4a574",
        rose: "#e8c4c4",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "sans-serif"],
        heading: ["var(--font-karantina)", "sans-serif"],
        "heading-he": ["var(--font-secular)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(201, 168, 124, 0.3)",
        "glow-lg": "0 0 60px rgba(201, 168, 124, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
