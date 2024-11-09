/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#0954E5",
        primary75:"#9AB9F4",
        primary50:"#E6EEFC",
        darkBlue:"#04074E",
        grey900:"#04074E",
        grey700:"#323B49",
        grey600:"#687588",
        grey500:"#A0AEC0",
        grey300:"#E9EAEC",
        grey100:"#F8F8F8",
        grey50:"#E6E6E6",
        baseRed:"#ED5763",
        grayLine:"#E2E8F0",
        secBg:"#f7f5f2",
        grayBorder:"#F1F2F4",
        success:"#E7F7EF",
        errorDark:"#E03137"
      },
      fontFamily: {
        Merriweather: "'Merriweather', 'serif'",
        Lexend: "'Lexend', 'sans-serif'",
      },
      padding: {
        '25': '100px',
        '15': '60px',
        '18': '72px',
      },
      margin: {
        '25': '100px',
        '18': '72px',
      },
      backdropBlur: {
        'card-custom': '9px',
      },
    },
  },
  plugins: [],
};
