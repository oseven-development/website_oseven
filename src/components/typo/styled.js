/** @format */

import styled from 'styled-components'
import {invert} from 'polished'
// import {COLOR} from '../../constants'

export const StyledHeadline = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${props => (props.margin ? props.margin : '0')};
    padding: ${props => (props.padding ? props.padding : '0.5em 0 0.3em 0')};
    background: ${props => (props.bgColor ? props.bgColor : '')};
  }
  h1 {
    color: ${props => props.h1color};
  }
  h2 {
    color: ${props => props.h2color};
  }
  h3 {
    color: ${props => props.h3color};
  }
  h4 {
    color: ${props => props.h4color};
  }
  h5 {
    color: ${props => props.h5color};
  }
  h6 {
    color: ${props => props.h6color};
  }
`
export const StyledConsultingHeadline = styled.div`
  h1 {
    font-family: 'OpenSans', sans-serif;
    font-weight: 600;
    color: ${props => props.h1color};
  }
  h2 {
    font-family: 'OpenSans', sans-serif;
    font-weight: 100;
    color: ${props => props.h2color};
  }
  h3 {
    font-family: 'OpenSans', sans-serif;
    font-weight: ${props => (props.weight ? props.weight : '100')};
    color: ${props => props.h3color};
  }
  h4 {
    font-family: 'OpenSans', sans-serif;
    font-weight: ${props => (props.weight ? props.weight : '100')};
    color: ${props => props.h4color};
  }
  p {
    color: ${props => props.pcolor};
  }
`
