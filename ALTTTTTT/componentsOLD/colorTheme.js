/** @format */
import theme from './theme'

export default (colorTheme, contrast = true) => {
  if (contrast) {
    switch (colorTheme) {
      case 'main':
        return theme.colors.main
      case 'second':
        return theme.colors.second
      case 'contrast':
        return theme.colors.contrast
      case 'bi':
        return theme.colors.bi
      default:
        return colorTheme
    }
  } else {
    switch (colorTheme) {
      case 'main':
        return theme.colors.main
      case 'second':
        return '#800080'
      case 'contrast':
        return theme.colors.contrast
      case 'bi':
        return '#800080'
      default:
        return colorTheme
    }
  }
}

export const colorFont = (colorFont, contrast = true) => {
  if (contrast) {
    switch (colorFont) {
      case 'main':
        return theme.colors.main
      case 'second':
        return theme.colors.second
      case 'contrast':
        return theme.colors.contrast
      case 'bi':
        return 'black'
      default:
        return colorFont
    }
  } else {
    switch (colorFont) {
      case 'main':
        return theme.colors.main
      case 'second':
        return 'white'
      case 'contrast':
        return theme.colors.contrast
      case 'bi':
        return 'white'
      default:
        return colorFont
    }
  }
}
