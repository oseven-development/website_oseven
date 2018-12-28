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
