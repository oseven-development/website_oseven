/** @format */

import React from 'react'
import styled from 'styled-components'

const ShadowBox = ({children}) => <StyledBox>{children}</StyledBox>

export const StyledBox = styled.div`
  padding: 40px;
  box-shadow: ${({theme}) => theme.shadows.large};
`

export default ShadowBox
