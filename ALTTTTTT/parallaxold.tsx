/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {IPropsParallax as IProps} from './types.d'

const Parallax: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledParallax {...props}>{children}</StyledParallax>
)

export default Parallax

const StyledParallax = styled.div`
  background-image: url(${({img}: IProps) => img});

  background-repeat: no-repeat;
  background-position: 'center';

  /* background-size: cover; */
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  /* background-color: ${({theme}: IProps) => (theme.colors.main.color ? theme.colors.main.color : '')}; */
  /* Rest Device */

  @media (min-width: ${({theme}: IProps) => theme && theme.breakpoints[1]}) {
    min-height: 400px;
    background-attachment: fixed;
  }
  /* Mobile */
  @media (max-width: ${({theme}: IProps) => theme && theme.breakpoints[1]}) {
    min-height: 200px;
    background-attachment: scroll;
  }
`
