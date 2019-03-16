/** @format */

import React from 'react'
import {Flex, Image, Box} from 'rebass'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import theme from '../theme'

export default props => (
  <Flex flexDirection={props.direction || 'row'} alignItems="center" justifyContent="center">
    {props.icons.map(icon => {
      if (icon.fade) {
        return (
          <Fade
            delay={icon.fade.delay}
            duration={icon.fade.duration || 0}
            left={icon.fade.left || false}
            right={icon.fade.right || false}
            key={Math.random()}>
            <Box style={{textAlign: 'center', maxWidth: '200px'}} my={props.spacebetween || 15} mx={15}>
              <Image width={icon.width || [70, 100, 120]} src={icon.icon} />
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
