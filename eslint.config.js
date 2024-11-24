import react from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default [
  {
    ...pluginQuery.configs["flat/recommended"],
    ...react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
    ...react.configs.flat["jsx-runtime"], // Add this if you are using React 17+
    // files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    // plugins: {
    //   react,
    // },
    // languageOptions: {
    //   parserOptions: {
    //     ecmaFeatures: {
    //       jsx: true,
    //     },
    //   },
    // },
    // rules: {
    //   // ... any rules you want
    //   "react/jsx-uses-react": "error",
    //   "react/jsx-uses-vars": "error",
    // },
    // // ... others are omitted for brevity
  },
];
