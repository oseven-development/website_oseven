/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import SliderBox from './sliderBox'
import styled from 'styled-components'

import TitleLogoHeadline from './titleLogoHeadline'
import SocialMediaItem from './socialMediaIcons'

interface IProps {
  title: String
  subtitle?: String
  description: String[]
  contactStack: IimageStack[]
  techStack: String[]
  imageFolder: string
}
interface IimageStack {
  title: String
  provider: 'facebook' | 'homepage' | 'instagram' | 'twitter' | 'whatsapp' | 'www' | 'youtube'
  linkTo: String
}

export default (props: IProps) => {
  const {title, subtitle, description, contactStack, techStack, imageFolder} = props
  return (
    <StyledConsumerBox>
      <Flex flexWrap="wrap" p={['0 20px', '0']}>
        <Box width={[1, 0.5]} pr={[0, 3]}>
          <SliderBox folder={imageFolder} />
        </Box>
        <Box width={[1, 0.5]} pl={[0, 3]}>
          <TitleLogoHeadline {...{title, subtitle, imageFolder}} />
          {description.map(content => (
            <p key={Math.random()}>{content}</p>
          ))}
          {/* Render ContactStack */}
          <h3>Zur Homepage</h3>
          <div>
            {contactStack.map(content => (
              <StyledContactItem key={Math.random()}>
                <a href={String(content.linkTo)}>
                  <SocialMediaItem provider={content.provider} />
                  <span>{content.title}</span>
                </a>
              </StyledContactItem>
            ))}
          </div>
          {/* Render TechStack */}
          <h3>Technolgoien</h3>
          <div>
            {techStack.map(content => (
              <StyledTechItem key={Math.random()}>{content}</StyledTechItem>
            ))}
          </div>
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

// Styling für ein Contact-Item
const StyledContactItem = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  :not(:first-child) {
    margin-left: 40px;
  }
  :not(:first-child):before {
    content: '';
    background: #777;
    width: 1px;
    height: 24px;
    left: -20px;
    display: inline-block;
    position: relative;
  }
  span {
    margin-left: 8px;
    position: relative;
    top: -8px;
  }
`

// Styling Techbubbels
const StyledTechItem = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  margin-right: 10px;
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.third};
  box-shadow: 0 0 5px -2px black;
  display: inline-block;
  margin-bottom: 10px;
`
