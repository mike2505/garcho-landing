import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      suwannaphum: ["Suwannaphum", "serif"],
      workSans: ["Work Sans", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          100: "rgb(var(--tw-clr-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-clr-primary-200) / <alpha-value>)",
          300: "rgb(var(--tw-clr-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-clr-primary-400) / <alpha-value>)",
          500: "rgb(var(--tw-clr-primary-500) / <alpha-value>)",
          600: "rgb(var(--tw-clr-primary-600) / <alpha-value>)",
          700: "rgb(var(--tw-clr-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-clr-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-clr-primary-900) / <alpha-value>)",
        },

        secondary: {
          100: "rgb(var(--tw-clr-secondary-100) / <alpha-value>)",
          200: "rgb(var(--tw-clr-secondary-200) / <alpha-value>)",
          300: "rgb(var(--tw-clr-secondary-300) / <alpha-value>)",
          400: "rgb(var(--tw-clr-secondary-400) / <alpha-value>)",
          500: "rgb(var(--tw-clr-secondary-500) / <alpha-value>)",
          600: "rgb(var(--tw-clr-secondary-600) / <alpha-value>)",
          700: "rgb(var(--tw-clr-secondary-700) / <alpha-value>)",
          800: "rgb(var(--tw-clr-secondary-800) / <alpha-value>)",
          900: "rgb(var(--tw-clr-secondary-900) / <alpha-value>)",
        },

        neutral: {
          100: "rgb(var(--tw-clr-neutral-100) / <alpha-value>)",
          200: "rgb(var(--tw-clr-neutral-200) / <alpha-value>)",
          300: "rgb(var(--tw-clr-neutral-300) / <alpha-value>)",
          400: "rgb(var(--tw-clr-neutral-400) / <alpha-value>)",
          500: "rgb(var(--tw-clr-neutral-500) / <alpha-value>)",
          600: "rgb(var(--tw-clr-neutral-600) / <alpha-value>)",
          700: "rgb(var(--tw-clr-neutral-700) / <alpha-value>)",
          800: "rgb(var(--tw-clr-neutral-800) / <alpha-value>)",
          900: "rgb(var(--tw-clr-neutral-900) / <alpha-value>)",
        },
      },

      backgroundImage: {
        "hero-background": "url('/images/hero-background.png')",
        "green-circle": "url('/images/green-circle.png')",
        "tertiary-background": "url('/images/tertiary-bg.jpg')",
        "sphere-background": "url('/images/sphere.png')",
        "chat-background": "url('/images/chat-demo-background.png')",
      },
    },
  },
  plugins: [],
};
export default config;
