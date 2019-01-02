/** @format */

import React from 'react'
import {StyledHeadingWithSublime} from './styled'

export const HeadingWithSublime = ({children, ...props}) => (
  <StyledHeadingWithSublime {...props}>
    <h2>{props.headline}</h2>
    <div style={{width: '4em', height: '1px', background: 'black', marginBottom: '10px'}} />
    <h3>{props.sublime}</h3>
  </StyledHeadingWithSublime>
)
