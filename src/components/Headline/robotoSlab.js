/** @format */
import React from 'react'
import {Headline} from '..'
import theme from '../theme'
import colorPick from '../colorTheme'
import styled from 'styled-components'

const StyledRobotoSlab = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
    font-family: 'Roboto Slab', sans-serif;
    text-transform: uppercase;
    color: black;
  }
  span {
    background-color: ${props => colorPick(props.colorShema[1])};
    color: white;
    padding: 0 10px;
  }
`

export const RobotoSlab = ({children, ...props}) => <StyledRobotoSlab {...props}>{children}</StyledRobotoSlab>
