/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#f12d8f",
        "rabbit-black": "#031a1c",
      }
    },
  },
  plugins: [],
}

