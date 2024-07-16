/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#0a1630",
        black: "#000",
        deepskyblue: "#38b6ff",
        lightgray: "#dbd6d6",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "roboto-slab": "'Roboto Slab'",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        "46xl": "65px",
        lg: "18px",
        "31xl": "50px",
        "40xl": "59px",
        "11xl": "30px",
        "81xl": "100px",
        "486xl": "505px",
        "98xl": "117px",
        "65xl": "84px",
      },
    },
    fontSize: {
      "31xl": "50px",
      "11xl": "30px",
      "71xl": "90px",
      "21xl": "40px",
      "51xl": "70px",
      "91xl": "110px",
      "6xl": "25px",
      "111xl": "130px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
