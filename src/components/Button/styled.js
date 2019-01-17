/** @format */

import styled from 'styled-components'
import {invert} from 'polished'
// import {COLOR} from '../../constants'

export const ButtonWrapper = styled.button`
  color: ${props => props.color};
  border: ${props => (props.border === false ? 'none' : '2px solid ' + props.color)} ;
  background: ${props => (props.bgColor ? props.bgColor : 'none')};
  width: 100%;
  padding: 10px;
  margin: 1.3em 0;
  cursor: pointer;
  font-size: 1.2em;
  font-family: 'OpenSans', sans-serif;
  border-radius: ${props => (props.bgRadius ? props.bgRadius : '4px')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition:0.3s;
  &:hover {
    opacity:0.5;
    border: ${props => (props.border === false ? 'none' : '2px solid ' + props.color)} ;
    // background: ${props => invert(props.color)};
  }
`
