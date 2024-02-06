/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "ui-serif"],
    },
    extend: {
      fontSize: {
        // 23: "23px",
      },
      colors: {
        bg_dark_color: "#E5EBF0 ",
        bg_light_blue: "#F2F5F8",
        navbar_color: "#0A1E3299"
      },
      // boxShadow: {
      //   product_shadow: "7px 35px 51px 0px rgba(0, 0, 0, 0.14)",
      //   category: "1.6756px 8.378px 25.13399px 0px rgba(0, 0, 0, 0.10)",
      //   main_product: "2.10727px 9.48271px 44.25264px 0px rgba(0, 0, 0, 0.08)",
      //   cart: "1.56782px 7.0552px 32.92429px 0px rgba(0, 0, 0, 0.08)",
      //   form: "2.105px 9.4725px 44.205px 0px rgba(0, 0, 0, 0.08)",
      //   about: "8.29399px 10.36749px 25.91873px 0px rgba(0, 0, 0, 0.25)",
      // },
      backgroundImage: {
        "gradient-linear": "linear-gradient(to right, #1D3448, #878B90)",
      },
    },
  },
  plugins: [],
}

