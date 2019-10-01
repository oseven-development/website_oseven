/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import SliderBox from './sliderBox'
import styled from 'styled-components'

import twitter from '../../../assets/images/socialMedia/twitter.svg'
import homepage from '../../../assets/images/socialMedia/homepage.svg'
import instagram from '../../../assets/images/socialMedia/instagram.svg'

interface IProps {
  title: String
  subtitle?: String
  description: String[]
  contactStack: IimageStack[]
  techStack: String[]
  imageStack: IImageBox[]
}
interface IimageStack {
  title: String
  provider: 'web' | 'twitter' | 'instagram'
  linkTo: String
}
interface IImageBox {
  img: any
  figureTag: String
}

export default (props: IProps) => {
  const {title, subtitle, description, contactStack, techStack, imageStack} = props
  return (
    <StyledConsumerBox>
      <Flex flexWrap="wrap" p={['0 20px', '0']}>
        <Box width={[1, 0.5]} pr={[0, 3]}>
          <SliderBox />
        </Box>
        <Box width={[1, 0.5]} pl={[0, 3]}>
          <h2>{title}</h2>
          {subtitle ? <h3>{subtitle}</h3> : null}
          {description.map(content => (
            <p>{content}</p>
          ))}
          {/* Render ContactStack */}
          <h3>Zur Homepage</h3>
          <div>
            {contactStack.map(content => (
              <StyledContactItem>
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
              <StyledTechItem>{content}</StyledTechItem>
            ))}
          </div>
        </Box>
      </Flex>
    </StyledConsumerBox>
  )
}

// Render korrektes SVG für den Kontakt
interface ISocialMediaItemProps {
  provider: 'web' | 'twitter' | 'instagram'
}
const SocialMediaItem = (props: ISocialMediaItemProps) => {
  let icon
  switch (props.provider) {
    case 'web':
      icon = homepage
      break
    case 'twitter':
      icon = twitter
      break
    case 'instagram':
      icon = instagram
      break
    default:
      icon = twitter
      break
  }
  return <Image width={30} src={icon} />
}

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
  color: white;
  background: ${props => props.theme.colors.secondary};
  display: inline-block;
  margin-bottom: 10px;
`
