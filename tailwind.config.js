/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        ggSans: ["ggSans"],
        Whitney: ["Whitney"],
        Ginto: ["Ginto"],
        GintoNord: ["GintoNord"]
      },
      colors:{
        blueColor: "#404eed",
        notQuiteBlack: "#23272a",
        notQuiteWhite: "#f6f6f6",
        notQuiteBlue: "#5865f2"
      },
      fontWeight:{
        sixKBold: "600"
      }
    },
  },
  plugins: [],
}

