/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bright-orange':"hsl(31, 77%, 52%)",
        'Dark-cyan' : "hsl(184, 100%, 22%)",
        'Very-dark-cyan': "hsl(179, 100%, 13%)"
      }
    },
  },
  plugins: [],
}

