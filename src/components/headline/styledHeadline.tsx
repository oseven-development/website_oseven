/** @format */

import styled from 'styled-components'
import {IProps} from './types.d'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'

export const StyledHeadline = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    text-align: ${({textAlign}: IProps) => (textAlign ? textAlign : 'center')};
    ${({backgroundColor, textColor}: IProps) =>
      backgroundColor && !textColor && `color: ${PickColorFont(backgroundColor)} ;`}
    ${({textColor}: IProps) => textColor && `color: ${PickColorFont(textColor)} ;`}
  }
`
