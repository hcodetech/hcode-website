const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
    extend: {
      fontFamily:{
        poppins:['Poppins',...defaultTheme.fontFamily.sans]
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
