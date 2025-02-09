/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)", 
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        "background-dark": "var(--color-background-dark)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        navbar: "var(--color-navbar)",
        "button-hover": "var(--color-button-hover)",
        border: "var(--color-border)",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        pink: "0px 5px 15px rgba(255, 64, 129, 0.3)", // Glow Effect for Buttons
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
