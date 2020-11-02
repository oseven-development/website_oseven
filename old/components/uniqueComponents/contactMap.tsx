/** @format */

import React from 'react'
import styled from 'styled-components'

export const ContactMap = () => (
  <StyledContactMap>
    <iframe
      width="100%"
      height="100%"
      style={{border: ' 0'}}
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOekNQ2DfUiWrBM8P8GUVJmoKHc0trj3A
&amp;q=Maximilian Hänsel - oseven, Nordring 171, 90409 Nürnberg"></iframe>
  </StyledContactMap>
)

export const StyledContactMap = styled.div`
  height: 550px;
  @media screen and (${props => props.theme.device.laptop}) {
    height: 300px;
  }
`
