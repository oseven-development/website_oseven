/** @format */

import React from 'react'
import {Flex, Image, Box} from 'rebass'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import theme from '../theme'

export default props => (
  <Flex flexDirection={['row', 'column']} alignItems="center" justifyContent="center" flexWrap="wrap">
    {props.icons.map(icon => {
      return (
        <Fade
          left={icon.fade.left || false}
          right={icon.fade.right || false}
          duration={icon.fade.duration || 0}
          key={Math.random()}>
          <Box>
            <Image
              width={icon.width || [70, 100, 120]}
              src={icon.icon}
              style={{margin: props.spacebetween || 15}}
              my={props.my || [15, 20, 30]}
            />
            <StyledH4 {...props}>{icon.subtitle}</StyledH4>
          </Box>
        </Fade>
      )
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
