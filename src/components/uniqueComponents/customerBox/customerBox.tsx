/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import ContentBox from './contentBox'
import styled from 'styled-components'

interface IProps{
    title: String
    description: String[]
    contactStack:  IimageStack[]
    techStack: String[]
    imageStack: IImageBox[]
}
interface IimageStack{
    provider: 'web' | 'xing' | 'facebook' | 'instagram'
    linkTo: String
}

interface IImageBox{
    img: any
    figureTag: String
}

export default (props:IProps) => {
const {title, description,contactStack, techStack, imageStack} = props
  return (
      <StyledConsumerBox>
        <Flex flexWrap='wrap' p={['0 20px', '0']}>
        <Box width={[1, 0.5]}  pr={[0, 3]}>
            <ContentBox />
        </Box>
        <Box width={[1, 0.5]} pl={[0, 3]}>
            <h2>{title}</h2>
            {description.map(content=><p>{content}</p>)}
            {/* Render ContactStack */}
            <h3>Zur Homepage</h3>
            {contactStack.map(content=><a href={String(content.linkTo)}><p>{content.provider}</p></a>)}
            {/* Render TechStack */}
            <h3>Technolgoien</h3>
            {techStack.map(content=><p>{content}</p>)}
        </Box>
        </Flex>
      </StyledConsumerBox>
  )
}

// @media { 768}
const StyledConsumerBox = styled.div`
  :after{
    content: '';
    display: block;
    width: 100%;
    margin-top: 75px;
    height: 2px;
    box-shadow: 0 3px 6px #999;
    background-color: #999;
  }
  margin-bottom: 75px;
:last-child:after
{ 
    display:none

}
`