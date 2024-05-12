import tailwindAnimated from "tailwindcss-animated";
import tailwindFluidType from "tailwindcss-fluid-type";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        holdingHand: "url('/assets/images/header-bg.jpg')",
      },
      height: {
        "screen-dynamic": "100dvh",
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

      colors: {
        //  primary: "#c7b09d",
        // secondary: "#eae6df",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      //   animation: {
      //     "accordion-down": "accordion-down 0.2s ease-out",
      //     "accordion-up": "accordion-up 0.2s ease-out",
      //   },
    },
  },

  corePlugins: {
    fontSize: false,
    // ...
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
          11,
          {
            lineHeight: 1,
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
