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
}

const Typography = (props: ITypography) => {
  const {variant, children, margin} = props
  return (
    <StyledTypograhpy {...props}>
      {variant === 'title' ? (
        <h1 className="title">{children}</h1>
      ) : variant === 'h1' ? (
        <h1>{children}</h1>
      ) : variant === 'h2' ? (
        <h2>{children}</h2>
      ) : variant === 'h3' ? (
        <h3>{children}</h3>
      ) : variant === 'p' ? (
        <p>{children}</p>
      ) : (
        <div>{children}</div>
      )}
    </StyledTypograhpy>
  )
}

const StyledTypograhpy = styled.div`
  /* color: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.textColor)}; */
  color: ${({color}) => (color ? theme.colors[color] : theme.colors.textColor)};
  margin: ${({margin}: any) => (margin ? margin : '5px 0px 10px 0px')};
`

export default Typography
