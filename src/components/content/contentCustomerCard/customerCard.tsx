/** @format */
import React from 'react'
import SliderBox from './sliderBox'
import styled from 'styled-components'
import {DoubleContentBox} from '../../'

import {IContant as IProps} from '../../../assets/content/references'

import HeadlineStack from './submodule/headlineStack'
import ContactStack from './submodule/contactStack'
import TechStack from './submodule/techStack'

import {StyledButton, StyledShadowBoxInner, StyledShadowBoxWrapper} from './style'

export default (props: IProps) => {
  const {title, subtitle, description, contactStack, techStack, imageFolder} = props
  return (
    <StyledConsumerBox>
      <DoubleContentBox
        left={<SliderBox {...{imageFolder}} />}
        right={
          <>
            {/* Render Headline */}
            <HeadlineStack {...{title, subtitle, imageFolder, description}} />

            {/* Render ContactStack */}
            <ContactStack {...{contactStack}} />

            {/* Render TechStack */}
            <TechStack {...{techStack}} />
          </>
        }></DoubleContentBox>
    </StyledConsumerBox>
  )
}

// Render korrektes SVG für den Kontakt

// Stylings für die Consumer Box
const StyledConsumerBox = styled.div`
  h2 {
    color: ${props => props.theme.colors.primary};
  }

  box-shadow: ${({theme}) => theme.shadows.large};
    :not(:last-child){
    margin-bottom: 3em;
    @media screen and (${props => props.theme.device.laptop}) {
      margin-bottom: 1em;
    }
  }
  /* :not(:last-child):after {
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
  } */
`
