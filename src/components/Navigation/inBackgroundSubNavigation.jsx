/** @format */

import React from 'react'
import {Box} from 'rebass'
import styled from 'styled-components'
import theme from '../theme'

export default props => {
  return (
    <StyledInBackgroundSubNavigation>
      <Box pl={[1, 3, 3, 5]}>
        <ul>
          {props.SubNavigation.map(params => {
            return (
              <li>
                <a href={`#${params.to}`}>{params.name}</a>
              </li>
            )
          })}
        </ul>
      </Box>
    </StyledInBackgroundSubNavigation>
  )
}

const StyledInBackgroundSubNavigation = styled.nav`
  position: absolute;

  left: 0%;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    bottom: 0%;
    li {
      display: block;
      padding: 3px 7px;
    }
  }
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    bottom: 4%;
    li {
      display: inline;
      padding: 0px 7px;
    }
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
