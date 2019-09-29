/** @format */

import React from 'react'
import styled from 'styled-components'

const BoxShadowBox = ({children}) => <StyledBox>{children}</StyledBox>

const StyledBox = styled.div`
  padding: 40px;
  box-shadow: 0 0 15px #565656;
`

export default BoxShadowBox
