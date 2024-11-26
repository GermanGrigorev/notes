const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        mine: {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            foreground: "#0D001A",
            background: "#ffEEff",
            // default: {
            //   50: "#3B096C",
            //   100: "#520F83",
            //   200: "#7318A2",
            //   300: "#9823C2",
            //   400: "#c031e2",
            //   500: "#DD62ED",
            //   600: "#F182F6",
            //   700: "#FCADF9",
            //   800: "#FDD5F9",
            //   900: "#FEECFE",
            //   DEFAULT: "#DD62ED",
            //   foreground: "#ffffff",
            // },
            // focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
