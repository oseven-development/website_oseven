/** @format */
import React, {Children, FunctionComponent} from 'react'
import styled from 'styled-components'
import {colorFont} from '../../components/colorTheme'
import {Flex, Box} from 'rebass'

import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'

import {IPropsWrapperBox as IProps} from './types.d'

const WrapperBox: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledContainer {...props}>
    <StyledContent {...props}>
      <Flex
        style={{position: 'relative', height: '100%'}}
        flexDirection="row"
        flexWrap="wrap"
        pt={[2, 20, 30]}
        pb={[2, 20, 30]}
        px={[3, 3, 3, 0]}
        alignItems="stretch"
        justifyContent="center">
        <JumpSpot id={props.jumpid} />
        {children}
      </Flex>
    </StyledContent>
  </StyledContainer>
)
export default WrapperBox

const JumpSpot = styled.div`
  content: '';
  position: absolute;
  top: -75px;
`

const StyledContainer = styled.div`
  height: 100%;
  ${({Debug}: IProps) => Debug && 'background-color: magenta !important;'}
  ${({backgroundColor}: IProps) => backgroundColor && `background-color: ${PickColor(backgroundColor)} ;`}
`

const StyledContent = styled.div`
  margin: 0 auto;
  height: 100%;
  ${({fullWith}: IProps) => !fullWith && 'max-width: 960px;'}
  h1,h2,h3,h4,h5,h6,p,li {
    ${({backgroundColor, theme}: any) =>
      (backgroundColor && `color: ${PickColorFont(backgroundColor)};`) || `color: ${theme.colors.textColor}`}
  }
  p {
    text-align: justify;
  }
`
