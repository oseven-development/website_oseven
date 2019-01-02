/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import {ConsultingHeadline, BackgroundImage} from '../index'
import {StyledBackgroundImage} from './styled'

export const HeaderTitleBackground = ({children, ...props}) => {
  return (
    <BackgroundImage
      img={props.img}
      bgColor={'linear-gradient(90deg, rgb(0,0,0,1) 8%, rgb(255,255,255,0.2) 140%)'}
      bgOpacity={1}
      bgPosition={props.bgPosition}>
      <ConsultingHeadline h1color="white" h3color="whitesmoke" style={{height: '100%'}}>
        <Flex alignItems="center" justifyContent="flex-start" style={{height: '100%'}}>
          <Box pl={[1, 3, 3, 5]} width={[1, 1, 1 / 2]}>
            <h1>{props.h1Text}</h1>
            <h3>{props.h3Text}</h3>
          </Box>
        </Flex>
        {children}
      </ConsultingHeadline>
    </BackgroundImage>
  )
}
