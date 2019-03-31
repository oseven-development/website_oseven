/** @format */

import {ITheme} from '../../library/theme/types.d'

export interface IPropsParallax {
  img?: any
  theme?: ITheme
  data?: any
}

export interface IPropsBackgroundImage {
  image: any
  bgHeight?: string[]
  overlay?: {color: string; opacity: number}
  theme?: ITheme
}
