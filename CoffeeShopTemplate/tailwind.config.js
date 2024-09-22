/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors : {
        "brown" : {
          "100" :  "#ECE0D1",
          "300" :  "#DBC1AC",
          "600" :  "#967259",
          "900" :  "#634832",
        }
      },
      boxShadow : {
        "normal" : "0px 1px 10px 0px #0000000D",
      },
      borderRadius : {
        "4xl" : "2rem",
      },
      fontFamily : {
        "DanaBld" : "Dana Bold",
        "DanaMd" : "Dana Medium",
        "DanaRegu" : "Dana Regular",
        "squarBld" : "squar Bold",
        "squarMd" : "squar Medium",
        "squarRegu" : "squar Light",
      },
      letterSpacing : {
        "tightest" : "-0.065em",
      }
    },
  },
  plugins: [
    function({addVariant}) {
      addVariant('child' , '&>*');
      addVariant('child-hover' , '&>*:hover');

    }
  ],
}

