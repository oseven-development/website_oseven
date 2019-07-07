/** @format */

import {ITheme} from './types'

const CONTRAST = '#44b3be'
// const CONTRAST = '#FFB600'

const theme: ITheme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  paddings: [3, 2, 3],
  colors: {
    primary: '#FF662B',
    secondary: '#20242A',
    third: '#343D4B',
    default: '#121212',
    // textColor: '#FCFCFC',
    textColor: '#121212',
    inherit: '#fff',
    // background: '#121212',
    background: '#FCFCFC',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
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