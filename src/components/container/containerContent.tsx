/** @format */

import React from 'react'
import styled, {css} from 'styled-components'
import {Flex, Box} from 'rebass'
import {ContainerWrapper, TypographyRenderHelper, SvgImage} from '..'
interface IProps {
  right: JSX.Element | JSX.Element[] | string | null
  left: JSX.Element | JSX.Element[] | string | null
}

export const DoubleContentBox = (props: IProps) => {
  const {right, left} = props
  return (
    <StyledContentDivider>
      <ContainerWrapper>
        <Flex alignItems="center" flexWrap="wrap">
          <Box width={[1, 1 / 2]} pr={[0, '2em']}>
            {right}
          </Box>

          <Box width={[1, 1 / 2]} pl={[0, '2em']}>
            {left}
          </Box>
        </Flex>
      </ContainerWrapper>
    </StyledContentDivider>
  )
}

interface IStyledProps {
  theme?: any
}

const StyledContentDivider = styled.div`
  /* background: ${({theme}: IStyledProps) => 'white'}; */
  h1 {
    color: ${({theme}: IStyledProps) => theme.colors.primary};
    @media screen and (${props => props.theme.device.laptop}) {
      text-align: center;
    }
  }
`
