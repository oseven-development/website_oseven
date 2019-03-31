/** @format */

import {ITheme} from './types.d'

const CONTRAST = '#44b3be'
// const CONTRAST = '#FFB600'

const theme: ITheme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  paddings: [3, 2, 3],
  colors: {
    main: {color: '#212121', contrast: CONTRAST, text: '#eee', contrastText: CONTRAST},
    second: {color: '#eee', contrast: CONTRAST, text: '#212121', contrastText: CONTRAST},
    contrast: {color: CONTRAST, contrast: '#306efe', text: CONTRAST, contrastText: '#fff'},
    // main: {color: '#306efe', contrast: '#306efe', text: '#306efe', contrastText: '#fff'},
    // second: {color: '#2A326C', contrast: '#306efe', text: '#306efe', contrastText: '#fff'},
    // contrast: {color: '#FFB600', contrast: '#306efe', text: '#333', contrastText: '#fff'},
    bi: {color: '#f2c811', contrast: '#306efe', text: '#333', contrastText: '#333'},
    textColor: '#333',
    textDark: '#121212',
    black: '#232323',
    lightwhite: '#f5f5f5',
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

export default theme
