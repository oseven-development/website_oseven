/** @format */

export type TColor = 'main' | 'second' | 'contrast' | 'bi' | string
export type TTextColor = 'main' | 'second' | 'contrast' | 'bi' | 'textColor' | 'textDark' | string

export enum Ecolor {
  main = 'main',
  second = 'second',
  contrast = 'contrast',
  bi = 'bi',
}

interface IColorSet {
  color: string
  contrast: string
  text: string
  contrastText: string
}

interface IHexColors {
  main: IColorSet
  second: IColorSet
  contrast: IColorSet
  bi: IColorSet
  textColor: string
  textDark: string
  black: string
  lightwhite: string
}

export interface ITheme {
  fontSizes: Array<Number>
  paddings: Array<Number>
  colors: IHexColors
  space: Array<Number>
  fonts: any
  shadows: any
  breakpoints: string[]
  device: any
}
