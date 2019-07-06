/** @format */

import React from 'react'
import styled from 'styled-components'
import {TColor} from '../../assets/theme/types'
import theme from '../../assets/theme/theme'
interface ITypography {
  variant: 'h1' | 'h2' | 'h3' | 'title' | 'p'
  children: any
  color?: TColor
}

const Typography = (props: ITypography) => {
  const {variant, children, color} = props
  console.log(theme.colors[color])
  return (
    <StyledTypograhpy {...props}>
      {variant === 'title' ? (
        <h1>{children}</h1>
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
  color: ${({theme, color}: any) => (color ? theme.colors[color] : theme.colors.default)};
  h1 {
    margin: 10px 0px 20px 0px;
  }
`

export default Typography
