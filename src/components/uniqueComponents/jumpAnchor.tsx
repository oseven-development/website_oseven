/** @format */

import React from 'react'
import styled from 'styled-components'

interface IProps {
  id: string
}
export const JumpAnchor = ({id}: IProps) => <StyledJumpAncor id={id} />

export const StyledJumpAncor = styled.div`
  position: relative;
  top: -90px;
`
