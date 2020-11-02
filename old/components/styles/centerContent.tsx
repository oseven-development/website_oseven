/** @format */

import styled from 'styled-components'

const CenterContent = styled.div`
  @media screen and (${props => props.theme.device.laptop}) {
    width: 100%;
    text-align: center;
  }
`

export {CenterContent}
