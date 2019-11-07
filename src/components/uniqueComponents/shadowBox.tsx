/** @format */

import React from 'react'
import styled from 'styled-components'

const ShadowBox = ({children}) => <StyledBox>{children}</StyledBox>

export const StyledBox = styled.div`
  padding: 40px;
  box-shadow: 0 0 15px #565656;
`

export default ShadowBox
