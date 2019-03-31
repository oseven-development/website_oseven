/** @format */

import React from 'react'
import Slider from 'react-slick'
import {StyledTextSlider} from './styled'
// import {Image} from 'rebass'
// import {StaticQuery, graphql} from 'gatsby'

export const TextSlider = ({children, ...props}) => {
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
