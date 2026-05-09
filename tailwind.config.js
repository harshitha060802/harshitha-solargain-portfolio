/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        navy: "#073763",
        sky: "#0f8bdc",
        solar: "#f4b942",
        leaf: "#1f8a5b",
        paper: "#fbfcf8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 70px rgba(7, 55, 99, 0.14)",
      },
    },
  },
  plugins: [],
};
