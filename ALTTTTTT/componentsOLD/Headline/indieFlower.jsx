/** @format */

import React from 'react'
import styled from 'styled-components'

import colorPick from '../colorTheme'

const StyledIndieFlower = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    font-family: 'Indie Flower', cursive;
    font-weight: 400;
    text-transform: uppercase;
    color: ${props => colorPick(props.colorShema)};
  }
`
export default ({children, ...props}) => <StyledIndieFlower {...props}>{children}</StyledIndieFlower>
