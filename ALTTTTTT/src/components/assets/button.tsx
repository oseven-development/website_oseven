/** @format */

import React from 'react'
import styled from 'styled-components'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'

const Button = ({children, ...props}) => (
  <ButtonWrapper type="button" {...props}>
    <a href={props.linkto} target="blank">
      {props.icon}
      <span>{children}</span>
    </a>
  </ButtonWrapper>
)
export default Button

const ButtonWrapper = styled.button`
  border: ${props => (props.border === false ? 'none' : `2px solid ${PickColor(props.color)}`)};
  background: ${props => (props.background ? PickColor(props.color) : 'none')};
  border-radius: ${props => (props.roundedCorners ? '4px' : '0px')};
  width: 100%;
  padding: 10px;
  margin: 1.3em 0;
  cursor: pointer;
  font-size: 1.2em;
  font-family: 'OpenSans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background: ${props => (props.background ? PickContrastColor(props.color) : PickColor(props.color))};
    border: ${props => (props.border === false ? 'none' : `2px solid ${PickColor(props.color)}`)};
    span,
    a {
      color: ${props => PickContrastColorFont(props.color)};
    }
  }
  a {
    color: ${props => PickColorFont(props.color)};
  }
  span {
    color: ${props => PickColorFont(props.color)};
    margin-left: 10px;
  }
`
