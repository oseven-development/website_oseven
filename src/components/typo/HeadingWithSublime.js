/** @format */

import React from 'react'
import {StyledHeadingWithSublime} from './styled'
import Fade from 'react-reveal/Fade'

export const HeadingWithSublime = ({children, ...props}) => (
  <StyledHeadingWithSublime {...props}>
    <Fade>
      <h2>{props.headline}</h2>
    </Fade>
    <Fade>
      <div style={{width: '4em', height: '1px', background: 'black', marginBottom: '10px'}} />
    </Fade>
    <Fade>
      <h3>{props.sublime}</h3>
    </Fade>
  </StyledHeadingWithSublime>
)
