/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm1: '700px',
      md: '768px',
      lg: '976px',
      lg1: '1200px',
      xl: '1440px',
    },
    colors: {
      'gray': '#292929',
      'gray2': '#333333',
      white: '#FFFFFF',
      black: '#000000',
      blue: '#006CA2',
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
      },
      animation: {
        'spinn': 'spinn 1s ease-in-out infinite'
      },
      keyFrames: {
        spinn: {
          '0% 100%' : {
            transform: 'rotate(360deg)'
          }
        }
      }
    }
  },
  plugins: [],
}
