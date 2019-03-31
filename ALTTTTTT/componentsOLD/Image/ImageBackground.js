/** @format */

import React from 'react'

import {StyledImageBackground} from './styled'

export const ImageBackground = ({children, ...props}) => (
  <StyledImageBackground {...props}>{children}</StyledImageBackground>
)
