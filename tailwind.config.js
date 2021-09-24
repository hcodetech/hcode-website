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
      transparent: "transparent",
      ...defaultTheme.colors,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        work_with_us_hero: "url('/assets/img/work_with_us_hero.png')",
        showcase_mobile: "url('/assets/img/showcase_mobile.png')",
        number_01: "url('/assets/img/number_01.png')",
        number_02: "url('/assets/img/number_02.png')",
        number_03: "url('/assets/img/number_03.png')",
        number_04: "url('/assets/img/number_04.png')",
        tech_stack: "url('/assets/img/tech_stack.png')",
        homepage_hero: "url('/assets/img/hcode_hero.jpg')",
        cta_circle: "url('/assets/img/cta-circle.png')",
        linkedin: "url('/assets/icons/linkedin.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
   ],
};
