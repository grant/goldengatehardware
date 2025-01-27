import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          goldLight: "#FFD700", // Adjust this hex code to match your brand gold light
          gold: "#D4AF37", // Adjust this hex code to match your brand gold
          goldDark: "#B59431",
          dark: "#1A1A1A", // Dark theme background
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
