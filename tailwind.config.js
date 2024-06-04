/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        clashdisplay: ['ClashDisplay-Variable', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        HeroBG: "url('./assets/herobg.png')",
        HeroMobileBG: "url('./assets/heromobilebg.png')",
        GreenBG: "url('./assets/green.png')",
        MobileGreenBG: "url('./assets/mgreen.png')",
      },
    },
  },
  plugins: [],
};
