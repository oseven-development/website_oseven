/** @format */

/** @format */
import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {IPropsRobotoSlab} from './types.d'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'
import {StyledHeadline} from './styledHeadline'

const StyledRobotoSlab = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  span {
    background-color: ${({elementColor}: IPropsRobotoSlab) => PickColor(elementColor)};
    ${({elementColor}: IPropsRobotoSlab) => elementColor && `color: ${PickContrastColorFont(elementColor)}`};
    padding: 0 10px;
  }
`

const RobotoSlab: FunctionComponent<IPropsRobotoSlab> = ({children, ...props}) => (
  <StyledHeadline {...props}>
    <StyledRobotoSlab {...props}>{children}</StyledRobotoSlab>
  </StyledHeadline>
)

export default RobotoSlab
