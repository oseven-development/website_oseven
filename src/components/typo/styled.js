/** @format */

import styled from 'styled-components'
import {invert} from 'polished'
// import {COLOR} from '../../constants'

export const StyledHeadline = styled.div`
  h1,h2 {
      text-transform: uppercase;
  }
h1, h2, h3, h4, h5, h6 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
  margin: ${props => (props.margin ? props.margin : '0')};
  padding: ${props => (props.padding ? props.padding : '0.5em 0 0.3em 0')}; 
}
.headline{
    font-family: 'Roboto Slab', sans-serif;
    text-transform: uppercase;
    text-align: center;
}
.flower{
    font-family: 'Indie Flower', cursive;
    font-weight 400;
    text-transform uppercase;
}
h1{
    color: ${props => props.h1color};
}
h2{
    color: ${props => props.h2color};
}
h3{
    color: ${props => props.h3color};
}
h4{
    color: ${props => props.h4color};
}
h5{
    color: ${props => props.h5color};
}
h6{
    color: ${props => props.h6color};
}


`
