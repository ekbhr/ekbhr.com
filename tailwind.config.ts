import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f172a",
          primary: "#0f172a",
          accent: "#90be6d",
          secondary: "#0ea5e9",
          surface: "#f0fdf4"
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)"
      }
    },
  },
  corePlugins: {
    preflight: true
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
} satisfies Config;
