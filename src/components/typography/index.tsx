/** @format */

import React from 'react'
import styled from 'styled-components'
import {TColor} from '../../assets/theme/types'
import theme from '../../assets/theme'
interface ITypography {
  variant?: 'h1' | 'h2' | 'h3' | 'title' | 'p'
  children: any
  color?: TColor
  margin?: string
  textAlign?: string
  style?: any
}

const Typography = (props: ITypography) => {
  const {variant, children, margin, style} = props
  return (
    <StyledTypograhpy {...props}>
      {variant === 'title' ? (
        <h1 className="title" style={style}>
          {children}
        </h1>
      ) : variant === 'h1' ? (
        <h1 style={style}>{children}</h1>
      ) : variant === 'h2' ? (
        <h2 style={style}>{children}</h2>
      ) : variant === 'h3' ? (
        <h3 style={style}>{children}</h3>
      ) : variant === 'p' ? (
        <p style={style}>{children}</p>
      ) : (
        <div style={style}>{children}</div>
      )}
    </StyledTypograhpy>
  )
}

const StyledTypograhpy = styled.div`
  /* color: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.textColor)}; */
  color: ${({color}) => (color ? theme.colors[color] : theme.colors.textColor)};
  margin: ${({margin}: any) => (margin ? margin : '5px 0px 10px 0px')};
  text-align: ${({textAlign}) => (textAlign ? textAlign : 'left')};
  p {
    text-align: ${({textAlign}) => (textAlign ? textAlign : 'justify')}

  }
`

export default Typography
