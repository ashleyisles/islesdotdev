module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['"New York"']
      },
      colors: {
        brand: '#587792'
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      borderWidth: ['hover', 'focus'],
      fontWeight: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
