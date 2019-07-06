/** @format */
import theme from './theme'
import {Ecolor, TColor, TTextColor} from './types.d'
import {invert} from 'polished'

export const PickColor = (color: TColor): string => {
  return color in Ecolor && !undefined ? theme.colors[color].color : color
}
export const PickContrastColor = (color: TColor): string => {
  return color in Ecolor && !undefined ? theme.colors[color].contrast : invert(color)
}

export const PickColorFont = (color: TTextColor): string => {
  return color in Ecolor && !undefined ? theme.colors[color].text : color
}

export const PickContrastColorFont = (color: TTextColor): string => {
  return color in Ecolor && !undefined ? theme.colors[color].contrastText : invert(color)
}
