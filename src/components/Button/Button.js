/** @format */

import React from 'react'
import {ButtonWrapper} from './styled'

export const Button = ({children, ...props}) => (
  <ButtonWrapper type="button" {...props}>
    <a href={props.linkto} target="blank">
      {props.icon}
      <span>{children}</span>
    </a>
  </ButtonWrapper>
)
