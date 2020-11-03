/** @format */

module.exports = {
  purge: {
    mode: 'all',
    content: ['src/**/*.{html,js,jsx,ts,tsx}'],
  },
  corePlugins: {
    container: false,
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      sans: [
        '"Montserrat"',
        // '"Brandon Text Web"',
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      colors: 'white',
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
      '6xl': '3rem', // 40px
    },
    colors: {
      primary: '#000',
      'light-primary': '#333',
      secondary: '#fff',
      'light-secondary': '#FFF2D1',
      white: '#fff',
      black: '#000',
      'light-gray': '#edf2f7',
      'dark-gray': '#D9D9D9',
      gray: '#555',
      mediumGray: '#B0B8BA',
      error: '#ff0000',
      success: '#248A3D',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    height: {
      'h-128': '32rem',
    },
    ripple: theme => ({
      colors: theme('colors'),
    }),
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [
    function({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          '@screen sm': {
            // background: 'blue',
            maxWidth: '640px',
          },
          '@screen md': {
            // background: 'green',
            maxWidth: '768px',
          },
          '@screen lg': {
            // background: 'yellow',
            maxWidth: '1024px',
          },
          '@screen xl': {
            // background: 'red',
            maxWidth: '1024px',
          },
        },
      })
    },
  ],
  extend: {
    variants: {
      animation: ['motion-safe'],
    },
    animation: {
      fadeIn: 'fadeIn 2s ease-in forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': {opacity: 0},
        '100%': {opacity: 1},
      },
    },
  },
}
