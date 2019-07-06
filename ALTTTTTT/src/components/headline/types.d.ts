/** @format */

import {TColor, TTextColor} from '../../library/theme/types.d'
export type textAlign = 'center' | 'left' | 'right'

export interface IProps {
  textAlign?: textAlign
  backgroundColor?: TColor
  textColor?: TTextColor
  textAlignCenter?: boolean
  textAlignLeft?: boolean
}

export interface IPropsRobotoSlab extends IProps {
  elementColor?: TColor
}
