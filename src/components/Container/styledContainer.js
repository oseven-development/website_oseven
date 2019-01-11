/** @format */

import React from 'react'

import {StyledServiceContainer, StyledListContainer} from './styled'

export const ServiceContainer = ({children, ...props}) => (
  <StyledServiceContainer {...props}>{children}</StyledServiceContainer>
)

export const ListContainer = ({children, ...props}) => <StyledListContainer {...props}>{children}</StyledListContainer>
