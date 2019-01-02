/** @format */

import React from 'react'

import {StyledFullscreenBackground} from './styled'

export const FullscreenBackground = ({children, ...props}) => {
  return <StyledFullscreenBackground {...props}>{children}</StyledFullscreenBackground>
}
