/** @format */

import styled from 'styled-components'
import {invert} from 'polished'
// import {COLOR} from '../../constants'

export const ButtonWrapper = styled.button`
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  background: none;
  width: 100%;
  padding: 10px;
  margin: 1.3em 0;
  cursor: pointer;
  font-size: 1.2em;
  font-family: 'OpenSans', sans-serif;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity:0.5;
    border: 2px solid ${props => props.color};
    // background: ${props => invert(props.color)};
  }
`
