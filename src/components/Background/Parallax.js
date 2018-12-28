
import React from 'react'

import {StyledParallax} from './styled'

export const Parallax = ({children, ...props}) => {
  console.log(props)
  return <StyledParallax {...props}>{children}</StyledParallax>
}
