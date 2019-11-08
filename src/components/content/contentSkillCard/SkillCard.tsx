/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import {ContainerWrapper, TypographyRenderHelper, TypographyRenderP} from '../..'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
interface ISkillCard {
  image?: any
  title: string
  text: string[]
  link: {
    label: string
    to: string
  }
}

interface IProps {
  content?: {
    image: any
    title: string
    text: string[]
    link: {
      label: string
      to: string
    }
  }[]
}

const SkillCardBox = (props: IProps) => (
  <ContainerWrapper>
    <Flex flexWrap="wrap">
      {props.content.map(({title, text, link, image}) => (
        <Box key={title} width={[1, 1 / props.content.length]} px={[0, '1em']} py={['1em', 0]}>
          <SkillCard {...{title, text, image, link}}></SkillCard>
        </Box>
      ))}
    </Flex>
  </ContainerWrapper>
)

const SkillCard = (props: ISkillCard) => {
  const {image, title, text, link} = props

  return (
    <React.Fragment>
      <ShadowBox>
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pb={['20px', '40px']}>
          <Box width={1}>
            <Img fluid={image} alt={title} style={{height: 250}} />
          </Box>
          <Box>
            <TypographyRenderHelper variant={'h3'} content={title} />
          </Box>
          <Box>
            <TypographyRenderP content={text} />
          </Box>
          <Box>
            <Link to={link.to}>... {link.label}</Link>
          </Box>
        </Flex>
      </ShadowBox>
    </React.Fragment>
  )
}
export default SkillCardBox

const ShadowBox = ({children}) => <StyledBox>{children}</StyledBox>

export const StyledBox = styled.div`
  overflow: hidden;
  border-radius: ${({theme}) => theme.border.radius.medium};
  box-shadow: ${({theme}) => theme.shadows.large};
`
