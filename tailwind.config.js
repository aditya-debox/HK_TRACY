/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:" #BA2777",
        primText: "#f4e7ca",
        ternary:"#220645",
        orange:"#f99c2c",
        secondary:"#ec1c24",
        green:"#58b091",
        beige:"#fff6ba",
        bgCircle: "#ba2776"

      }
    },
  },
  plugins: [],
}
