/** @format */

// /** @format */

import styled from 'styled-components'

export const StyledSlider = styled.div`
  .slider,
  .slick-list,
  .slick-track {
    height: ${props => props.height};
    text-align: center;
  }
`
export const StyledTextSlider = styled.div`
  .slider,
  .slick-list,
  .slick-track {
    height: ${props => props.height};
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
  }
`
