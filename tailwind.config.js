/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "26px",
      "2xl": "36px",
      "3xl": "44px",
      "4xl": "64px",
      "5xl": "96px",
      "6xl": "128px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#b7ab98",
        secondary: "#0d0d0d",
        accent: "#eb5939",
        line: "rgba(77, 77, 77, 0.5)",
      },
      fontFamily: {
        heading: ["var(--satoshi)"],
        body: ["var(--general-sans)"],
      },
      screens: {
        "3xl": "1840px",
      },
    },
  },
  plugins: [],
};
