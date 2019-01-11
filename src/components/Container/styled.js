/** @format */

import styled from 'styled-components'
import {darken} from 'polished'

// import {COLOR} from '../../constants'

export const StyledServiceContainer = styled.div`
  background-color: ${props => props.bgcolor};
  * {
    text-align: center;
  }
  h3,
  h2 {
    font-family: 'Indie Flower', cursive;
    font-weight: 400;
    text-transform: uppercase;
    color: ${props => props.color};
  }
  p {
    text-align: justify;
    margin: 0;
  }
  img {
    margin: 10px 25px;
  }
`

export const StyledListContainer = styled.div`
  ul {
    width: 100%;
  }
  li {
    background-color: ${props => props.bgcolor || 'white'};
    text-align: left;
    padding: 0.2em 1em 0.5em 2em;
    margin: 5px 0;
    border-radius: 2px;
    box-shadow: 1px 1px 1px #ccc;
  }
  li::before {
    display: block;
    content: '';
    left: -20px;
    top: 17px;
    height: 10px;
    width: 10px;
    border-radius: 2px;
    background: ${props => props.dotColor || '#ccc'};
    position: relative;
    display: flex;
  }
`
