import tailwindAnimated from "tailwindcss-animated";
import tailwindFluidType from "tailwindcss-fluid-type";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    fontSize: false,
    // ...
  },
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        holdingHand: "url('/assets/images/header-bg.jpg')",
      },
      height: {
        "screen-dynamic": "100dvh",
      },
      colors: {
        primary: "#c7b09d",
        secondary: "#eae6df",
      },
      fontFamily: {
        gaegu: "Gaegu",
        niconne: "Niconne",
        garamond: "EB Garamond",
      },
      animation: {
        fade: "fadeIn .5s ease-in-out forwards",
        "slide-up": "slide-up .5s ease-in-out forwards",
        "slide-down": "slide-down .5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-up": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "slide-down": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [
    tailwindFluidType({
      settings: {
        fontSizeMin: 1.1,
        fontSizeMax: 1.15,
        ratioMin: 1.1,
        ratioMax: 1.15,
        screenMin: 20,
        screenMax: 96,
        unit: "rem",
        prefix: "",
      },
      values: {
        // ...
        title: [
          12,
          {
            lineHeight: 1.6,
            letterSpacing: "-0.1rem",
          },
        ],
        base: [
          0,
          {
            lineHeight: 1.6,
            letterSpacing: "-0.1rem",
          },
        ],
        // ...
      },
    }),
    tailwindAnimated,
  ],
};
