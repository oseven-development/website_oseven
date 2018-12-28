/** @format */

import React from 'react'

import {StyledServiceContainer} from './styled'

export const ServiceContainer = ({children, ...props}) => (
  <StyledServiceContainer {...props}>{children}</StyledServiceContainer>
)
