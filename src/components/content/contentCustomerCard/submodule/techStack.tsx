/** @format */

import React from 'react'
import styled from 'styled-components'

interface IProps {
  techStack: string[]
}

export default ({techStack}: IProps) => (
  <>
    <h3>Technolgoien</h3>
    <div>
      {techStack.map(content => (
        <StyledTechItem key={content}>{content}</StyledTechItem>
      ))}
    </div>
  </>
)

// Styling Techbubbels
const StyledTechItem = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  margin-right: 10px;
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.third};
  box-shadow: 0 0 5px -2px black;
  display: inline-block;
  margin-bottom: 10px;
`
