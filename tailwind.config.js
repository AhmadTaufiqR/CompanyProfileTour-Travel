/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#414141",
          DEFAULT: "#414141",
          dark: "#FFD700",
        },
        secondary: {
          light: "#FFD700",
          DEFAULT: "#FFD700",
          dark: "#FFD700",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
