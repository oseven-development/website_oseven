/** @format */

import React from 'react'
import styled from 'styled-components'
import {TColor} from '../../assets/theme/types'
import theme from '../../assets/theme'
interface ITypography {
  variant?: 'h1' | 'h2' | 'h3' | 'title' | 'p' | 'div'
  children: any
  color?: TColor
  margin?: string
  textAlign?: string
  style?: any
  column?: boolean
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
        <div className={'p'} style={style}>
          {children}
        </div>
      )}
    </StyledTypograhpy>
  )
}

const StyledTypograhpy = styled.div`
  /* color: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.textColor)}; */
  color: ${({color}) => (color ? theme.colors[color] : theme.colors.textColor)};
  margin: ${({margin}: any) => (margin ? margin : '5px 0px 10px 0px')};
  text-align: ${({textAlign}: any) => (textAlign ? textAlign : 'left')};
  p,.p {
    text-align: ${({textAlign}: any) => (textAlign ? textAlign : 'justify')};
    column-count:${({column}: any) => (column ? 2 : 1)}; ;
  }
  @media (max-width: 768px) {
    p,.p {
    column-count: 1 ;
  }  }

`

export default Typography
