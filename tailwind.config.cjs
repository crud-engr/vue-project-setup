/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#000",
      white: "#fff",
      danger: "#FF0000",
      success: "#34A853",
    },
  },
  plugins: [require("daisyui")],
};
