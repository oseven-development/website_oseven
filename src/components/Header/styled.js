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
export const StyledSmallNav = styled.div`
  position: absolute;
  bottom: 2%;
  left: 0%;
  li {
    display: inline;
    padding: 0px 7px;
  }
  a {
    color: whitesmoke;
    font-size: 1.2em;
    transition: all 0.4s ease-in-out;
  }
  a:hover {
    color: ${theme.colors.main};
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
