/** @format */

import React from 'react'
import {Flex, Image, Box} from 'rebass'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import theme from '../theme'

export default props => (
  <Flex flex-direction="column" alignItems="center" justifyContent="center">
    {props.icons.map(icon => {
      if (icon.fade) {
        return (
          <Fade delay={icon.fade.delay} duration={icon.fade.duration} key={Math.random()}>
            <Box>
              <Image width={icon.width} src={icon.icon} style={{margin: props.spacebetween || 15}} />
              <StyledH4 {...props}>{icon.subtitle}</StyledH4>
            </Box>
          </Fade>
        )
      } else {
        return (
          <Box>
            <Image width={icon.width} src={icon.icon} style={{margin: props.spacebetween || 15}} />
            <StyledH4 {...props}>{icon.subtitle}</StyledH4>
          </Box>
        )
      }
    })}
  </Flex>
)

// import {COLOR} from '../../constants'
export const StyledH4 = styled.h4`
  text-align: center;
  color: ${props => props.colorSubtitle};
  display: none;
  @media (min-width: ${theme.breakpoints[1]}) {
    display: block;
  }
`
