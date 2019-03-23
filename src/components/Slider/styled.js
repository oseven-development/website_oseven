/** @format */

// /** @format */

import styled from 'styled-components'
import theme from '../theme'

export const StyledSlider = styled.div`
  .slider,
  .slick-list,
  .slick-track {
    text-align: center;
    @media (max-width: ${props => theme.breakpoints[1]}) {
      height: ${props => props.height[0]};
    }
    /* Mobile */
    @media (min-width: ${props => theme.breakpoints[1]}) {
      height: ${props => props.height[1]};
    }
  }
`
export const StyledTextSlider = styled.div`
  .slider,
  .slick-list,
  .slick-track {
    text-align: center;
  }
  .slick-prev::before,
  .slick-next::before {
    color: white;
    font-family: 'arial';
  }
  .slick-slide img {
    display: inline-block;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${props => props.headingColor};
  }
  p {
    color: ${props => props.textColor};
    padding: ${props => (props.padding ? props.padding : '0px')};
  }
`
