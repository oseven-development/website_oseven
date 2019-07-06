/** @format */

// /** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {IProps} from './types.d'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'
import {StyledHeadline} from './styledHeadline'
const StyledIndieFlower = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    font-family: 'Indie Flower', cursive;
    font-weight: 400;
    text-transform: uppercase;
  }
`

const IndieFlower: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledHeadline {...props}>
    <StyledIndieFlower {...props}>{children}</StyledIndieFlower>
  </StyledHeadline>
)

export default IndieFlower
