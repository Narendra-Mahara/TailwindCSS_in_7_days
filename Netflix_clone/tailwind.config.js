/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/Images/backgroundImage.jpg')",
      },
    },
  },
  plugins: [],
};
