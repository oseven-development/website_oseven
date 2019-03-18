/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import {ConsultingHeadline, BackgroundImage, OpacityTransition} from '../../components'
import {AnimatedArrow, InBackgroundSubNavigation} from '../../components'

export default ({children, ...props}) => (
  <BackgroundImage
    img={props.img}
    bgColor={'linear-gradient(90deg, rgb(0,0,0,1) 8%, rgb(255,255,255,0.2) 140%)'}
    bgOpacity={1}
    bgPosition={'center right'}>
    <ConsultingHeadline h1color="white" h3color="whitesmoke" h4color="whitesmoke" style={{height: '100%'}}>
      <Flex alignItems="center" justifyContent="flex-start" style={{height: '100%'}}>
        <Box px={['10px', '30px']} width={[1, 1, 1 / 2]}>
          <OpacityTransition>
            <h1>{props.Headline}</h1>
            <h4>{props.Subtitle}</h4>
          </OpacityTransition>
        </Box>
        <InBackgroundSubNavigation SubNavigation={props.SubNavigation} />
      </Flex>
      <a href={props.ArrowNavigationTarget}>
        <AnimatedArrow />
      </a>
    </ConsultingHeadline>
  </BackgroundImage>
)
