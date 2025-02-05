/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'century-gothic': ['Century Gothic', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'hk-grotesk': ['HK Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 40px 3.2px rgba(0, 0, 0, 0.12)', // Adjust the color as needed
      },
    },
  },
  plugins: [],
}

