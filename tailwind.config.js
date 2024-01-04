const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
    colors: {
      primary: '#276EF1',
      secondary: '#FFC043',
      cyan: '#61DAFB',
      transparent: 'transparent',
      ...defaultTheme.colors,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        work_with_us_hero: "url('/assets/img/work_with_us_hero.png')",
        showcase_mobile: "url('/assets/img/showcase_mobile.png')",
        tech_stack: "url('/assets/img/tech_stack.png')",
        homepage_hero: "url('/assets/img/hcode_hero.jpg')",
        cta_circle: "url('/assets/img/cta-circle.png')",
        linkedin: "url('/assets/icons/linkedin.svg')",
        linkedin: "url('/assets/icons/linkedin.svg')",
        enterprise_image: "url('/assets/img/consumer.png')",
        consumer_image: "url('/assets/img/enterprise.png')",
        fintech: "url('/assets/img/fintech.png')",
        serviceIllustration: "url('/assets/img/service_illustration.svg')",
        blendCircle: "url('/assets/img/blend_circle.svg')",
        groupedCircle: "url('/assets/img/grouped_circle.svg')",
        ReactIconBackground: "url('/assets/img/React-icon-background.png')",
        BlockchainBackground: "url('/assets/img/blockchain_background.jpg')",
        taas: "url('/assets/img/team_as_service.jpg')",
        daas: "url('/assets/img/developer_as_service.jpg')",
        mvp: "url('/assets/img/mvp_service.jpg')",
        blockchain: "url('/assets/img/blockchain_service.jpg')",
        blockchain_small: "url('/assets/img/blockchain_service_small.jpg')",        
        mvp_bg_img:"url('/assets/img/mvp_bg.png')",
        mvp_transform_idea:"url('/assets/img/transform_idea_section.png')",
        ai_bg_img:"url('/assets/img/ai_bg_2.png')",
        AI_Integration_Process_bg:"url('/assets/img/AI_Integration_Process_bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
