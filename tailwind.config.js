/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        clashdisplayVariable: ['ClashDisplay-Variable', 'Inter', 'sans-serif'],
        clashdisplay: ['ClashDisplay-Semibold', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        HeroBG: "url('./assets/herobg.png')",
        HeroMobileBG: "url('./assets/heromobilebg.png')",
        GreenBG: "url('./assets/green.png')",
        MobileGreenBG: "url('./assets/mgreen.png')",
        ConversionKit: "url('./assets/green_white.png')",
        ContactBG: "url('./assets/contact-bg.png')",
        MobileContactBG: "url('./assets/mcbg.png')",
      },
    },
  },
  plugins: [],
};
