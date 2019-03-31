/** @format */

import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
// import {Image} from 'rebass'
// import {StaticQuery, graphql} from 'gatsby'

const TextSlider = ({children, ...props}) => {
  const settings = {
    adaptiveHeight: true,
    className: 'slider',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    speed: 600,
    arrows: false,
    dots: true,
    fade: true,
    // nextArrow: <div>Hallo</div>,
    // prevArrow: <div>tschüss</div>,
  }
  return (
    <StyledTextSlider {...props}>
      <Slider {...settings}>{props.items}</Slider>
    </StyledTextSlider>
  )
}

export default TextSlider

const StyledTextSlider = styled.div`
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
