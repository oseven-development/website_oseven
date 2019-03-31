/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'
import {IProps} from './types.d'
import {StyledHeadline} from './styledHeadline'

const StyledDefaultHeadline = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    text-align: center;
    ${({textColor}: IProps) => textColor && `color: ${textColor} ;`}
    ${({textAlignLeft}: IProps) => textAlignLeft && ` text-align: left ;`}
  }
`

const DefaultHeadline: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledHeadline {...props}>
    <StyledDefaultHeadline {...props}>{children}</StyledDefaultHeadline>
  </StyledHeadline>
)

export default DefaultHeadline
