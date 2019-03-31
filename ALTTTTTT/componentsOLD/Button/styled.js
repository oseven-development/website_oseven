/** @format */

import styled from 'styled-components'
import {invert} from 'polished'
// import {COLOR} from '../../constants'
import colorTheme, {colorFont} from '../colorTheme'

export const ButtonWrapper = styled.button`
  border: ${props => (props.border === false ? 'none' : `2px solid ${colorTheme(props.color)}`)};
  background: ${props => (props.background ? colorTheme(props.color) : 'none')};
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
    background: ${props => (props.background ? colorTheme(props.color, false) : colorTheme(props.color))};
    border: ${props => (props.border === false ? 'none' : `2px solid ${colorTheme(props.color)}`)};
    span,
    a {
      color: ${props => colorFont(props.color, false)};
    }
  }
  a {
    color: ${props => colorFont(props.color)};
  }
  span {
    color: ${props => colorFont(props.color)};
    margin-left: 10px;
  }
`
