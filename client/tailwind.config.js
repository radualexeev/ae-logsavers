/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rollFirst: {
          '0%': { opacity: 0, transform: 'translateY(-100px) rotate(-200deg)' },
          '100%': { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
        },
        rollSecond: {
          '0%': { opacity: 0, transform: 'translateY(-100px) rotate(-300deg)' },
          '100%': { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
        },
        vectorUp: {
          '0%, 15%, 38%, 70%': {
            animationTimingFunction: 'ease-out',
            transform: 'translateY(0)',
          },
          '5%, 25%, 52%': {
            animationTimingFunction: 'ease-in',
            transform: 'translateY(-30px)',
          },
          '85%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(-100px)',
          },
        }
      },
      animation: {
        "rollFirst": "rollFirst 2s ease-in-out 1s infinite normal none",
        "rollSecond": "rollSecond 2s ease-in-out 1s infinite normal none",
        "vectorUp" : "vectorUp 3s ease-in-out 1s infinite normal forwards"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'serif']
      }
    },
  },
  plugins: [],
}

