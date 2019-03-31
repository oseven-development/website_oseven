/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {IPropsBackgroundImage as IProps} from './types.d'

const BackgroundImage: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledBackgroundImage bgHeight={['40vh', '80vh']} {...props}>
    <StyledBackgroundOverlay {...props}>{children}</StyledBackgroundOverlay>
  </StyledBackgroundImage>
)

export default BackgroundImage

const StyledBackgroundOverlay = styled.div`
  background-image: ${({overlay}: IProps) => overlay && overlay.color};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({overlay}: IProps) => overlay && overlay.opacity};
`

const StyledBackgroundImage = styled.div`
  width: 100%;

  @media (min-width: ${({theme}: IProps) => theme && theme.breakpoints[1]}) {
    height: ${props => (props.bgHeight ? props.bgHeight[1] : props.bgHeight[0])};
  }
  /* Mobile */
  @media (max-width: ${({theme}: IProps) => theme && theme.breakpoints[1]}) {
    height: ${props => (props.bgHeight ? props.bgHeight[0] : '100vh')};
  }

  display: block;
  position: relative;
  &:after {
    content: '';
    background-image: url(${({image}: IProps) => image});
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-position: 50% center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    z-index: -1;

    @media (min-width: ${({theme}: IProps) => theme && theme.breakpoints[1]}) {
      background-attachment: fixed;
    }
    /* Mobile */
    @media (max-width: ${({theme}: IProps) => theme && theme.breakpoints[1]}) {
      background-attachment: scroll;
    }
  }
`
