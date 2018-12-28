/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import {FaPhone, FaEnvelope} from 'react-icons/fa'
import {ButtonWrapper} from './styled'

export const Button = ({children, ...props}) => (
  <ButtonWrapper type="button" {...props}>
    {props.icon}
    <div style={{marginLeft: 10}}>{children}</div>
  </ButtonWrapper>
)
