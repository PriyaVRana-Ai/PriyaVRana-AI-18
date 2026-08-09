import type { Config } from "tailwindcss"
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblack: "#0A0A0F",
        royalred: "#D90429",
        royalgold: "#FFD700"
      }
    }
  },
  plugins: []
} satisfies Config