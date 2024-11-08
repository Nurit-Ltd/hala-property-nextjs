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
        darkBlue:"#04074E",
        grey500:"#A0AEC0"
      },
      fontFamily: {
        Merriweather: "'Merriweather', 'serif'",
      },
    },
  },
  plugins: [],
};
