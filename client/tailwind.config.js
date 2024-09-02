/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }, boxShadow:{
        card: '0 0 1px 0 rgba(189,192,207,0.06), 0 10px 16px -1px #f6f7f9, 0 9px 1px -3px rgba(189,192,207,0.2), 0 16px 0 -6px #f6f7f9, 0 17px 2px -6px rgba(189,192,207,0.2)',
        cardhover:'0 0 1px 0 rgba(189,192,207,0.06), 0 16px 0 -6px #f6f7f9, 0 17px 2px -6px rgba(189,192,207,0.2), 0 22px 0 -12px #f6f7f9, 0 23px 2px -12px rgba(189,192,207,0.2)'
      }, 
      colors: {
        '021526': '#021526',
        '021530': '#021530',
        '021535': '#021535',
        '03346E': '#03346E',
        '6EACDA': '#6EACDA',
        'E2E2B6': '#E2E2B6',

        '17153B': '#17153B',
        '2E236C': '#2E236C',
        '433D8B': '#433D8B',
        'C8ACD6': '#C8ACD6',

        '27374D': '#27374D',
        '526D82': '#526D82',
        '9DB2BF': '#9DB2BF',
        'DDE6ED': '#DDE6ED'








      }
    },
  },
  plugins: [],
}

