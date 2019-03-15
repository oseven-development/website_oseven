/** @format */

import styled from 'styled-components'

export const StyledBackgroundImage = styled.div`
  width: 100%;
  height: ${props => (props.bgHeight ? props.bgHeight : '100vh')};
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
    background-position: ${props => (props.bgPosition ? props.bgPosition : '50% center')};
    background-attachment: fixed;
    background-repeat: no-repeat;
    z-index: -1;
  }
`
export const StyledSkewedBackground = styled.div`
  height: calc(100vw * 0.4);
  max-height: 600px;
  position: absolute;
  overflow: hidden;
  margin-top: 6vw;
  z-index: -3;
  background-image: url(${props => props.img});
  transform: ${props => props.rotation};
  position: absolute;
  left: -25%;
  top: 4vh;
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
  min-height: ${props => (props.minHeight ? props.minHeight : '400px')};
  max-height: ${props => (props.height ? props.height : '')};
  background-attachment: fixed;
  background-position: ${props => (props.bgPosition ? props.bgPosition : 'center')};
  background-repeat: no-repeat;
  background-size: cover;
`
// background-attachment: fixed if window with kleiner als dann fixed
export const StyledFullscreenBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
`

export const StyledParallaxClaimed = styled.div`
  .watcher {
    position: fixed;
    top: 50%;
    width: 100%;
    padding: 0em;
    color: white;
    transform: translateY(-50%);
    opacity: ${props => props.opacity}
  }
  .contentBox {
    background: rgba(0,0,0,0.7);
    padding: 1em;
  }
  h1,h2{
    font-family:"Roboto Slab", sans-serif;
  }
  h1 {
    font-size: 1.5em;
    font-style: italic
  }
  h2 {
    font-size: .8em;
    font-weight: 600}
  }`
  
