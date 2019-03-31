/** @format */

import React, {FunctionComponent} from 'react'
import {Flex, Image, Box} from 'rebass'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import {DefaultHeadline} from '../'

interface icons {
  fade?: {delay: number; duration: number; left?: boolean; right?: boolean}
  icon: any
  width?: number | number[]
  subtitle?: string
  linkto?: string
}

interface IProps {
  direction?: string | string[]
  icons: icons[]
  spacebetween?: number
}

const IconBox: FunctionComponent<IProps> = props => (
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
              <a href={icon.linkto}>
                <Image width={icon.width || [70, 100, 120]} src={icon.icon} />
                <DefaultHeadline {...props}>{<h4>{icon.subtitle}</h4>}</DefaultHeadline>
              </a>
            </Box>
          </Fade>
        )
      } else {
        return (
          <Box key={Math.random()}>
            <Image width={icon.width || [70, 100, 120]} src={icon.icon} style={{margin: props.spacebetween || 15}} />
            <DefaultHeadline {...props}>{<h4>{icon.subtitle}</h4>}</DefaultHeadline>
          </Box>
        )
      }
    })}
  </Flex>
)
export default IconBox
