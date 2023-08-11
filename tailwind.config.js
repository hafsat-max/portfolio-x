/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        header: "1px solid rgba(0, 0, 0, 0.16)",
      },
      colors: {
        "metallic-silver": "#A6ACB8",
        black: "#000000",
        "cetacean-blue": "#18014A",
        primary: "#ffffff",
        tomato: "f54d33",
        "yellow-green": "#91C039",
        "pastel-blue": "#B3C0D3",
        violet: "rgba(0, 0, 0, 1)",
        "rich-black": "#040815",
      },
      fontFamily: {
        jarkata: "Plus Jakarta Sans",
      },
      fontSize: {
        18: "clamp(1.063rem, 1vw,1.125rem)",
        24: "clamp(1.25rem, 2vw,1.5rem)",
      },
      padding: {
        24: "clamp(1.25rem, 2vw,1.5rem)",
      },
    },
  },
  plugins: [],
};
