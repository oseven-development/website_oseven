/** @format */

import styled from 'styled-components'

export const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  &:after {
    content: '';
    background-image: url(${props => props.img});
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-position: 50% center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    background-position: 50% center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    z-index: -1;
  }
`
export const StyledSkewedBackground = styled.div`
  height: calc(100vw * 0.3);
  max-height: 500px;
  position: absolute;
  overflow: hidden;
  z-index: -3;
  background-image: url(${props => props.img});
  transform: ${props => props.rotation};
  position: absolute;
  left: -25%;
  width: 150%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${props => props.bgPosition};
  &:after {
    content: '';
    background-image: ${props => props.color};
    opacity: 0.9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -4;
  }
`
export const StyledParallax = styled.div`
  background-image: url(${props => props.img});
  min-height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
// background-attachment: fixed if window with kleiner als dann fixed
export const StyledFullscreenBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.img});
`