/** @format */

import React from 'react'
import styled from 'styled-components'

import colorPick from '../colorTheme'

const StyledDefaultHeadline = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: ${props => (props.textAlignLeft ? 'left' : 'center')};
    font-family: 'Quicksand', sans-serif;
    color: ${props => colorPick(props.colorShema)};
  }
`
export const DefaultHeadline = ({children, ...props}) => (
  <StyledDefaultHeadline {...props}>{children}</StyledDefaultHeadline>
)
