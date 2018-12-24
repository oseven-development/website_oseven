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

// .background-Section
// height:100vh
// min-height: 600px
// width: 100%
// position: relative
// overflow:hidden

// background-image: linear-gradient(90deg, #111 0%, #555 100%)
// //     &#bg1

//     &#bg2
//         background-image: linear-gradient(90deg, #111 0%, #323 100%)
//     &#bg3
//         background-image: linear-gradient(161deg, #000 0%,  #555 100%)
//     &#bg4
//         background-image: linear-gradient(12deg, #323 0%, #455 100%)
