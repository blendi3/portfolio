export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        "square-top": "squareTop 0.5s ease-out 0s forwards",
        "square-right": "squareRight 0.5s ease-out 0.5s forwards",
        "square-bottom": "squareBottom 0.5s ease-out 1s forwards",
        "square-left": "squareLeft 0.5s ease-out 1.5s forwards",

        "b-fade": "fadeInB 0.5s ease-out 2s forwards",
        "i-fade": "fadeInI 0.5s ease-out 2.5s forwards",
      },
      keyframes: {
        fadeInB: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInI: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        squareTop: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        squareRight: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        squareBottom: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        squareLeft: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
