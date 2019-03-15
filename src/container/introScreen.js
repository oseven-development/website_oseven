/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import {AnimatedLogo, BackgroundImage, AnimatedArrow} from '../components'
import background from '../assets/images/backgrounds/home.jpg'

export const IntroScreen = () => (
  <React.Fragment>
    <BackgroundImage img={background} bgColor={'linear-gradient(90deg, #111 0%, #555 100%)'}>
      <Flex justifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
        <Box width={[4 / 5, 4 / 5, 1]}>
          <AnimatedLogo />
          <a href="#ÜberUns">
            <AnimatedArrow />
          </a>
        </Box>
      </Flex>
    </BackgroundImage>
  </React.Fragment>
)
