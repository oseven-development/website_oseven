/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import SliderBox from './sliderBox'
import styled from 'styled-components'

import {IContant as IProps} from '../../assets/content/references'

import HeadlineStack from './submodule/headlineStack'
import ContactStack from './submodule/contactStack'
import TechStack from './submodule/techStack'

export default (props: IProps) => {
  const {title, subtitle, description, contactStack, techStack, imageFolder} = props
  return (
    <StyledConsumerBox>
      <Flex flexWrap="wrap" p={['0 20px', '0']}>
        <Box width={[1, 0.5]} pr={[0, 3]}>
          <SliderBox {...{imageFolder}} />
        </Box>

        <Box width={[1, 0.5]} pl={[0, 3]}>
          {/* Render Headline */}
          <HeadlineStack {...{title, subtitle, imageFolder, description}} />

          {/* Render ContactStack */}
          <ContactStack {...{contactStack}} />

          {/* Render TechStack */}
          <TechStack {...{techStack}} />
        </Box>
      </Flex>
    </StyledConsumerBox>
  )
}

// Render korrektes SVG für den Kontakt

// Stylings für die Consumer Box
const StyledConsumerBox = styled.div`
  h2 {
    color: ${props => props.theme.colors.primary};
  }
  :not(:last-child):after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    box-shadow: 0 3px 6px #999;
    background-color: #999;
    margin-top: 25px;
    margin-bottom: 30px;
    @media screen and (${props => props.theme.device.laptop}) {
      margin-top: 75px;
      margin-bottom: 75px;
    }
  }
`
