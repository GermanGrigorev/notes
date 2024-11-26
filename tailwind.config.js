const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['"Unbounded"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        mine: {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            foreground: "#0D001A",
            background: "#EfEFEf",
            primary: {
              50: "#e2f9f4",
              100: "#c7e7dd",
              200: "#a8d4c8",
              300: "#88c2b2",
              400: "#68b09d",
              500: "#4f9783",
              600: "#3b7566",
              700: "#285549",
              800: "#13332c",
              900: "#00140e",
              DEFAULT: "#4f9783",
              foreground: "#ffffff",
            },
            danger: {
              50: "#fdf4f3",
              100: "#faebe9",
              200: "#f5d8d6",
              300: "#eeb5b3",
              400: "#e38c89",
              500: "#d45f5f",
              600: "#bf3f45",
              700: "#a03038",
              800: "#862b34",
              900: "#742732",
              950: "#58181f",
              DEFAULT: "#d45f5f",
              foreground: "#ffffff",
            },
            // focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
