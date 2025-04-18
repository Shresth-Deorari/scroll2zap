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
        "text-heading-light": "#1F2937",
        "text-heading-dark": "#E5E7EB",
        "text-sub-heading-light": "#E5E7EB",
        "text-sub-heading-dark": "#808080",
        "text-light": "#1F2937",
        "text-dark": "#E5E7EB",
        slate: {
          200: "#E2E8F0",
          400: "#94A3B8",
          600: "#475569",
          800: "#1E293B",
        },
        secondary: "#5AFE73", // LVNG green
        tertiary: "#95A1F9", // SEIZON purple
        "secondary-dark": "#3AB54B", // Darker green
        "tertiary-dark": "#7A8AF2", // Deeper purple
        accent_dark: "#4B9BB5", // Softer blue for dark mode
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
        "big-chungus": "4rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
