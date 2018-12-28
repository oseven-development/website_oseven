/** @format */

import React from 'react'

import {styledServiceContainer} from './styled'

export const ServiceContainer = ({children, ...props}) => (
  <styledServiceContainer {...props}>{children}</styledServiceContainer>
)
