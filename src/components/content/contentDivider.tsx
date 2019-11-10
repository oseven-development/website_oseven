/** @format */

import React from 'react'
import styled, {css} from 'styled-components'
import {Flex, Box} from 'rebass'
import {ContainerWrapper, TypographyRenderHelper, SvgImage} from '../'
interface IProps {
  title: string | string[]
  text?: string | string[]
  children?: any
  color?: 'primary' | 'secondary'
  image?: any
  theme?: any
}

export const ContentDivider = (props: IProps) => {
  const {title, text, image, color} = props
  return (
    <StyledContentDivider {...{color}}>
      <ContainerWrapper noSpace>
        <Flex alignItems="center" flexWrap="wrap" py={['1em', '2em']}>
          <Box width={[1, 3 / 6]} pr={[0, '2em']}>
            <TypographyRenderHelper variant={'h1'} content={title} title />
            <TypographyRenderHelper variant={'p'} content={text} />
          </Box>

          {image ? (
            <Box width={[1, 3 / 6]} pl={[0, '2em']}>
              <Positioning>
                <SvgImage dWidth={250} mWidth={80} src={image} />
              </Positioning>
            </Box>
          ) : null}
        </Flex>
      </ContainerWrapper>
    </StyledContentDivider>
  )
}

interface IStyledProps {
  theme?: any
  color: string
}

const StyledContentDivider = styled.div`
  background: ${({color, theme}: IStyledProps) => (color ? theme.colors[color] : 'white')};
  h1 {
    color: ${({theme}: IStyledProps) => theme.colors.primary};
    @media screen and (${props => props.theme.device.laptop}) {
      text-align: center;
    }
  }
  p  {
    color: ${({color, theme}: IStyledProps) => (color === 'secondary' ? 'white' : '#333')};
  }
`

const Positioning = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`
