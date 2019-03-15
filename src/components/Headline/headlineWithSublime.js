/** @format */

import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

export const HeadlineWithSublime = ({children, ...props}) => (
  <StyledHeadlineWithSublime {...props}>
    <Fade>
      <h2>{props.headline}</h2>
    </Fade>
    <Fade>
      <div style={{width: '4em', height: '1px', background: props.spanColor, marginBottom: '10px'}} />
    </Fade>
    <Fade>
      <h3>{props.sublime}</h3>
    </Fade>
  </StyledHeadlineWithSublime>
)

const StyledHeadlineWithSublime = styled.div`
  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`
