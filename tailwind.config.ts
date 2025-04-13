import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        brand_yellow: "#FFDF6F",
        blue: "#6DF7E3",
        "bg-light": "#F9FAFB",
        "bg-dark": "#1A202C",
        "text-light": "#1F2937",
        "text-dark": "#E5E7EB",
      },
      fontFamily: {
        roboto: ["Roboto Mono"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "2rem",
        "big-chungus": "4rem", //for titles
      },
    },
  },
  plugins: [],
} satisfies Config;
