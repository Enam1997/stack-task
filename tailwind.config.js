/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "color-2": "var(--color-2)",
        "font-color-1": "var(--font-color-1)",
        "font-color-2": "var(--font-color-2)",
        "font-color-3": "var(--font-color-3)",
      },
    },
  },
  plugins: [],
};
