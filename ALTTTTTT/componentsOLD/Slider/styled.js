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
  .slick-dots {
    position: relative;
    bottom: 0;
    .slick-active {
      button::before {
        color: #fff;
      }
    }
    button::before {
      font-size: 16px;
      color: #fff;
    }
  }
`
