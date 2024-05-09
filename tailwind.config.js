/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#c7b09d",
        secondary: "#eae6df",
      },
      fontFamily: {
        gaegu: "Gaegu",
        niconne: "Niconne",
        garamond: "EB Garamond",
      },
    },
  },
  plugins: [],
};
