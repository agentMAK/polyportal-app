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
      },
      colors: {
        primary: '#8247E5',
        primary300: '#DCD4FF',
        primary400: '#A673EF',
        primary100: '#F9F6FD',
        primary500: '#5211FF',
        primary600: '#220D6D',
        primary700: '#2C3857',
        secondary:"E2E4E8",
        primary100:"ECE8FF",
      }
    },
  },
  plugins: [],
}
