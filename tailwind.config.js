/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#DDA0DD",
        customBlue: "#296587",
        customYellow: "#d5b544",
        customOrange: "#FF9800",
        customRed: "#F44336", // Define the color with your HEX value
      },
    },
  },
  plugins: [],
};
