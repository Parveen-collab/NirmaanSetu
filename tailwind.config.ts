import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // or "class" if you want manual toggle

  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-hover":
          "rgb(var(--color-primary-hover) / <alpha-value>)",
        "primary-ring":
          "rgb(var(--color-primary-ring) / <alpha-value>)",

        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};

export default config;
