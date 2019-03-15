/** @format */
import theme from './theme'

export default colorTheme => {
  switch (colorTheme) {
    case 'main':
      return theme.colors.main
    case 'second':
      return theme.colors.second
    case 'contrast':
      return theme.colors.contrast
    default:
      return colorTheme
  }
}
