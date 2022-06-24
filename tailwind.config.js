const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GeneralSans-Regular'],
        'sans-medium': ['GeneralSans-Medium'],
        'sans-semibold': ['GeneralSans-Semibold'],
        'sans-bold': ['GeneralSans-Bold'],
        'code': ['AnonymousPro'],
        'code-bold': ['AnonymousPro-Bold']
      },
      colors: {
        primary: {
          100: '#F9F8FF',
          200: '#ECE8FF',
          300: '#DCD4FF',
          400: '#A673EF',
          500: '#8247E5',
          600: '#6433C4',
          700: '#4A23A4',
          800: '#331684',
          900: '#220D6D',
        },
      }
    },
  },
  plugins: [],
}
