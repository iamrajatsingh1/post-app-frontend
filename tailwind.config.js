/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        borderGrey: {
          500: '#35373B',
        },
        primaryTextColor: '#C5C7CA',
        secondaryTextColor: '#7F8084',
      },
    },
  },
  plugins: [],
}

