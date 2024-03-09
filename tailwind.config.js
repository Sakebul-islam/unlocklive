/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        valueSansPro: ['var(--font-valueSansPro)'],
        bakildaHistori: ['var(--font-bakildaHistori)'],
        abrilDisplay: ['var(--font-abrilDisplay)'],
        lemonada: ['var(--font-lemonada)'],
      },
      colors: {
        primary: '#86371C',
        secondary: '#270A05',
        purple: '#FFFAF2',
        'icon-border': '#4f4a49',
        'dark-gray': '#4b5a55',
        paragraph: '#53565c',
      },
      letterSpacing: {
        1: '0.8px',
        2: '0.16px',
        3: '0.14px',
        4: '0.24px',
      },
      fontSize: {
        44: '44px',
      },
      margin: {
        15: '60px',
      },
      backgroundImage: {
        'banner-bg': "url('/images/banner-bg.png')",
        'coffee-cup': "url('/images/cup.svg')",
        'menu-bg': "url('/images/menu-icon.png')",
        footer: "url('/footer.png')",
      },
      backgroundPosition: {
        'bottom-10-right-20': 'bottom 70.08px right -64px',
        'top-10-right-113': 'top 80px right -113px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
