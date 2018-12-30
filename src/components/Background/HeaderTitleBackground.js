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
      bgOpacity={1}>
      <ConsultingHeadline h1color="white" h2color="whitesmoke" style={{height: '100%'}}>
        <Flex alignItems="center" justifyContent="flex-start" style={{height: '100%'}}>
          <Box width={[1, 1, 1 / 2]}>
            <h1>Business Intelligence & Reporting</h1>
            <h3>Mehr Informationen über ihre Kunden, Produkte und Standorte</h3>s
          </Box>
        </Flex>
      </ConsultingHeadline>
    </BackgroundImage>
  )
}
