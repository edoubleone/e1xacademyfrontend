/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        "blue-500": "var(--gradient-color-1)",
        "indigo-700": "var(--gradient-color-2)",
        "green-500": "var(--gradient-color-3)",
      },
    },
  },
  plugins: [],
};
