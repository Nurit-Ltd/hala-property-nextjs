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
        primary50:"#E6EEFC",
        darkBlue:"#04074E",
        grey900:"#04074E",
        grey600:"#687588",
        grey500:"#A0AEC0",
        grey300:"#E9EAEC",
        baseRed:"#ED5763",
      },
      fontFamily: {
        Merriweather: "'Merriweather', 'serif'",
        Lexend: "'Lexend', 'sans-serif'",
      },
      padding: {
        '25': '100px',
      },
      margin: {
        '25': '100px',
      },
    },
  },
  plugins: [],
};
