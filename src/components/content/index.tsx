/** @format */

import React from 'react'
import styled from 'styled-components'
import Typography from '../typography'
import {TColor} from '../../assets/theme/types'

interface IContent {
  title?: string
  titleColor?: TColor
  subtitleColor?: TColor
  subtitle?: string
  image?: any | any[]
  text?: string
}

const Content = (props: IContent) => {
  const {title, subtitle, image, text, titleColor, subtitleColor} = props
  return (
    <React.Fragment>
      {title ? (
        <React.Fragment>
          <Typography variant="h1" color={titleColor ? titleColor : 'default'} margin={subtitle ? '0' : ''}>
            {title}
          </Typography>
          {subtitle ? (
            <React.Fragment>
              <StyledSubtitle />
              <Typography variant="h2" color={subtitleColor ? subtitleColor : 'default'} margin={'0'}>
                {subtitle}
              </Typography>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      ) : null}
      {text ? (
        <React.Fragment>
          <Typography variant="p">{text}</Typography>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}
export default Content

const StyledSubtitle = styled.span`
  ::after {
    content: ' ';
    display: block;
    width: 4em;
    height: 1px;
    background: ${({theme}) => theme.colors.default};
  }
`
