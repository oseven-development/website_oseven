/** @format */

import styled from 'styled-components'

export const StyledIcon = styled.div`
  img {
    transition: all 0.2s ease-out;
    transform: scale(1);
    -webkit-transform: scale(1); /* Safari and Chrome */
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1); /* Safari and Chrome */
  }
`
