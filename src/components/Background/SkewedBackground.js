/** @format */

import React from 'react'

import {StyledSkewedBackground} from './styled'

export const SkewedBackground = ({children, ...props}) => {
  console.log(props)
  return <StyledSkewedBackground {...props}>{children}</StyledSkewedBackground>
}
