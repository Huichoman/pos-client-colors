/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow9: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        shadow10: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        shadow14:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        shadow28:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        shadow32:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        shadow33:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        shadow33l:
          "rgba(107, 112, 115, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        shadow53: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
        shadow92:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        success:
          "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
        error:
          "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
        info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
        primary:
          "0px 1px 4px rgba(85, 105, 255, 0.25), 0px 3px 12px 2px rgba(85, 105, 255, 0.35)",
        warning:
          "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
        card: "0px 0px 1px 1px #d5d0d6",
        cardSm: "0px 0px 1px 1px #d5d0d6",
        cardLg:
          "0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)",
      },
      colors: {
        primary: "#5569ff",
        secondary: "#6E759F",
        success: "#57CA22",
        warning: "#FFA319",
        error: "#FF1943",
        info: "#33C2FF",
        black: "#223354",
        white: "#ffffff",
        primaryAlt: "#000C57",
        blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        primaryLighter: "rgb(229, 232, 255)",
        primaryLight: "rgb(136, 150, 255)",
        primaryDark: "rgb(68, 84, 204)",
        secondaryLighter: "rgb(233, 234, 240)",
        secondaryLight: "rgb(146, 151, 183)",
        secondaryDark: "rgb(88, 93, 127)",
        successLighter: "rgb(229, 247, 221)",
        successLight: "rgb(137, 217, 100)",
        successDark: "rgb(69, 161, 27)",
        warningLighter: "rgb(255, 241, 220)",
        warningLight: "rgb(255, 190, 94)",
        warningDark: "rgb(204, 130, 20)",
        errorLighter: "rgb(255, 220, 226)",
        errorLight: "rgb(255, 94, 123)",
        errorDark: "rgb(204, 20, 53)",
        infoLighter: "rgb(224, 245, 255)",
        infoLight: "rgb(112, 212, 255)",
        infoDark: "rgb(40, 155, 204)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
