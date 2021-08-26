const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container:{
    //   margin:{
    //     DEFAULT: 'auto',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   }
    // },
    colors: {
      primary: "#276EF1",
      secondary: "#FFC043",
      transparent: 'transparent',
      black: defaultTheme.colors.black,
      gray: defaultTheme.colors.gray,
      white: defaultTheme.colors.white,
      yellow: defaultTheme.colors.yellow,
      blue: defaultTheme.colors.blue,
      green: defaultTheme.colors.green,
      red: defaultTheme.colors.red,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'work_with_us_hero':"url('/assets/img/work_with_us_blue_circle.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
