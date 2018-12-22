/** @format */

import React from 'react'

import {StyledBackgroundImage} from './styled'

export const BackgroundImage = ({children, ...props}) => (
  <StyledBackgroundImage {...props}>{children}</StyledBackgroundImage>
)
