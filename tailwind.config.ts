import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121214",
        elements: "#202024",
        text: "#c4c4cc",
        title: "#e1e1e6",
        primary: "#4E8CDF",
        "primary-light": "#63a4ff",
      },
      fontFamily: {
        sans: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
export default config;
