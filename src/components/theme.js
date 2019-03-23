/** @format */

const sizes = ['481px', '769px', '1601px', '2001px']

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  paddings: [3, 2, 3],
  colors: {
    main: '#306efe',
    second: '#2A326C',
    contrast: '#FFB600',
    text: '#333',
    textBlack: '#121212',
    black: '#232323',
    lightwhite: '#f5f5f5',
    bi: '#f2c811',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  breakpoints: ['481px', '769px', '1601px', '2001px'],
  device: {
    mobile: `(min-width: 481px)`,
    laptop: `(min-width: 769px)`,
    desktop: `(min-width: 1601px)`,
    desktopL: `(min-width: 2001px)`,
  },
}
