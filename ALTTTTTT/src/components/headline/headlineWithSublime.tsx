/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'
import {IProps} from './types.d'
import {StyledHeadline} from './styledHeadline'

const StyledHeadlineWithSublime = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    text-align: left;
    ${({textAlignCenter}: IProps) => textAlignCenter && `text-align: center ;`}
    :first-child {
      ::after {
        content: ' ';
        display: block;
        width: 3em;
        height: 1px;
        background: #333;
        transform: translatey(14px);
      }
    }
  }
`

const HeadlineWithSublime: FunctionComponent<IProps> = ({children, ...props}) => (
  <StyledHeadline {...props}>
    <StyledHeadlineWithSublime {...props}>{children}</StyledHeadlineWithSublime>
  </StyledHeadline>
)

export default HeadlineWithSublime
