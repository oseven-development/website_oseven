/** @format */

import React from 'react'
import styled, {css} from 'styled-components'
import {Flex, Box} from 'rebass'
import {ContainerWrapper, TypographyRenderHelper, SvgImage} from '../'
interface IProps {
  title: string | string[]
  text?: string | string[]
  image: any[]
}

export const ContentImgGallery = (props: IProps) => {
  const {title, text, image} = props
  return (
    <StyledContentDivider>
      <ContainerWrapper>
        <TypographyRenderHelper variant={'h2'} content={title} />
        {text ? <TypographyRenderHelper variant={'p'} content={text} /> : null}
        <Flex alignItems="center" flexWrap="wrap" justifyContent={'space-between'} py={['1em', '2em']}>
          {image.map(({SVG, dWidth, mWidth}) => (
            <Box px={['1em']}>
              <SvgImage key={Math.random()} dWidth={dWidth} mWidth={mWidth} src={SVG} p={'15px 0px'} />
            </Box>
          ))}
        </Flex>
      </ContainerWrapper>
    </StyledContentDivider>
  )
}

interface IStyledProps {
  theme?: any
}

const StyledContentDivider = styled.div`
    border-top: 1px solid #7F83885F;
    border-bottom: 1px solid #7F83885F;
  background: ${({theme}: IStyledProps) => theme.colors.third};
  h1 {
    color: ${({theme}: IStyledProps) => theme.colors.primary};
    @media screen and (${props => props.theme.device.laptop}) {
      text-align: center;
    }
  }
  p  {
    /* color: ${({theme}: IStyledProps) => (color === 'secondary' ? 'white' : '#333')}; */
  }
`

const Positioning = styled.div`
  justify-content: ${(props: {pos: string}) => props.pos};
  display: flex;
  @media screen and (${props => props.theme.device.laptop}) {
    justify-content: flex-start;
  }
  li.contact {
    padding-bottom: 1em;
  }
`
