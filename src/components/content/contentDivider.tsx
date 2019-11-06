/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import {ContainerBox, TypographyRenderHelper, SvgImage} from '../'
interface IProps {
  title: string
  text?: string | string[]
  children?: any
  color?: 'primary' | 'secondary'
  image: any
}

export const ContentDivider = (props: IProps) => {
  const {title, text, image} = props
  return (
    <StyledContentDivider {...props}>
      <ContainerBox>
        <Flex alignItems="center" flexWrap="wrap">
          <Box width={[1, 3 / 6]} pr={[0, '2em']}>
            <h1>{title}</h1>
            <TypographyRenderHelper variant={'p'} content={text} />
          </Box>

          <Box width={[1, 3 / 6]} pl={[0, '2em']}>
            <Positioning pos={'flex-end'}>
              <SvgImage dWidth={250} mWidth={80} src={image} />
            </Positioning>
          </Box>
        </Flex>
      </ContainerBox>
    </StyledContentDivider>
  )
}

interface IStyledProps extends IProps {
  theme?: any
}

const StyledContentDivider = styled.div`
  background: ${({color, theme}: IStyledProps) => theme.colors[color]};
  h1 {
    color: ${({theme}: IStyledProps) => theme.colors.primary};
  }
  p  {
    color: ${({color, theme}: IStyledProps) => (color === 'secondary' ? 'white' : '#333')};
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
