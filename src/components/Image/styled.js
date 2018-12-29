/** @format */

import styled from 'styled-components'

// import {COLOR} from '../../constants'

export const StyledImageBackground = styled.div`
  background-size: 80% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: flex;
  flex-direction: column;
  height: 200px;
  background-image: url(${props => props.img});
`
