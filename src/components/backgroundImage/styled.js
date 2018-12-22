/** @format */

import styled from 'styled-components'

export const StyledBackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  &:after {
    content: '';
    background-image: url(${props => props.img});
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    background-position: 50% center;
    background-repeat: no-repeat;
  }
`
