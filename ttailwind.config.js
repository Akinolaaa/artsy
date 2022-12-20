/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm1: '700px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
    //   'blue': '#1fb6ff',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'gray-dark': '#273444',
      'gray': '#292929',
      'gray2': '#333333',

    //   'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      clash: ['Clash Display', 'serif'],
      satoshi: ['Satoshi', 'serif'],
      stix: ['STIX Two Text', 'serif'],
      bellefair: ['Bellefair', 'serif'],
      basker: ['Baskervville', 'serif'],
    },
    extend: {
      boxShadow: {
        'sh1': '7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
      //   spacing: {
      //     '128': '32rem',
      //     '144': '36rem',
      //   },
      //   borderRadius: {
      //     '4xl': '2rem',
      //   }
    }
  },
  plugins: [],
}