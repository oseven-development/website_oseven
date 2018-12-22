/** @format */

import styled from 'styled-components'
import {darken} from 'polished'

import theme from '../theme'

import React from 'react'

// export const HeaderWrapper = styled.div`
//   background-color: ${theme.color.lightwhite};
// `

// export const HeaderInner = styled.div`
//   display: flex;
//   flex-flow: nowrap row;
// `
export const styledMenu = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

// export const SiteTitle = styled.h1`
//   margin: 0;
//   color: ${COLOR.WHITE};
// `

// export const Navigation = styled.div`
//   margin-left: auto;
//   display: flex;
//   flex-flow: nowrap row;
//   align-items: flex-end;

//   & > * {
//     margin-left: 1rem;
//     color: ${COLOR.WHITE};
//     cursor: pointer;

//     &:focus,
//     &:hover {
//       color: ${darken(0.2, COLOR.WHITE)};
//     }
//   }

//   & > *:first-child {
//     margin-left: 0;
//   }
// `
