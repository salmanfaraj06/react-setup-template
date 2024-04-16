module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { 50: "#fdfff0" },
        black: { 900: "#0c0c0c", "900_01": "#000000" },
        white: { A700_01: "#ffffff" },
        gray: { "900_02": "#181818", "900_01": "#2a2a2a" },
        amber: { 300: "#ffdc58" },
        light_blue: { 100: "#b9e6fe" },
        deep_purple: { A100: "#c5a1ff" },
        blue_gray: { 700: "#535353" },
        red: { A200: "#ff6258" },
        blue: { 300: "#61bcff" },
      },
      boxShadow: {
        xs: "11.47px 11.47px 1px 0px #bfbfb4",
        sm: "21px 21px 1px 0px #00000066",
        md: "6px 6px 1px 0px #0000003f",
        lg: "4px 4px 1px 0px #8e8f87",
      },
      fontFamily: { spacegrotesk: "Space Grotesk", inter: "Inter" },
      textShadow: { ts: "0px 4px 1px #e7e7e751" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
