/** @format */

import React, {FunctionComponent} from 'react'
import {Box} from 'rebass'
import styled from 'styled-components'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'

interface IProps {
  items: {name: string; to: string}[]
  color: string
}

const SubNavigation: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledInBackgroundSubNavigation {...props}>
    <Box pl={[1, 3, 3, 5]}>
      <ul>
        {props.items.map(params => {
          return (
            <li key={Math.random()}>
              <a href={`#${params.to}`}>{params.name}</a>
            </li>
          )
        })}
      </ul>
    </Box>
  </StyledInBackgroundSubNavigation>
)

export default SubNavigation

const StyledInBackgroundSubNavigation = styled.nav`
  margin-top: 50px;
  text-align: center;
  @media only screen and (max-width: ${({theme}) => theme.breakpoints[1]}) {
    display: none;
  }
  li {
    display: inline;
    padding: 0px 7px;
  }

  a {
    color: ${({color}) => PickColorFont(color)};
    font-size: 1.2em;
    transition: all 0.4s ease-in-out;
    text-decoration: underline;
  }
  a:hover {
    color: ${({color}) => PickContrastColorFont(color)};
  }
`
