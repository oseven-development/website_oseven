/** @format */
import React, {Children, FunctionComponent} from 'react'
import {Flex, Box} from 'rebass'

import {PickColor, PickContrastColor, PickColorFont, PickContrastColorFont} from '../../library/theme'

import {IPropsContantBox as IProps} from './types.d'

interface IContantBox extends IProps {
  width: number | number[]
}

export const ContantBox: FunctionComponent<IContantBox> = ({children, ...props}) => (
  <Box width={props.width} {...props}>
    {children}
  </Box>
)

export const ContantBoxFull: FunctionComponent<IProps> = ({children, ...props}) => (
  <Box width={[1]} {...props}>
    {children}
  </Box>
)
export const ContantBoxHalf: FunctionComponent<IProps> = ({children, ...props}) => (
  <Box width={[1, 1 / 2]} p={[0, 2, 3]} {...props}>
    {children}
  </Box>
)
export const ContantBoxFullThirds: FunctionComponent<IProps> = ({children, ...props}) => (
  <Box alignItems={'stretch'} width={[1, 1 / 3]} p={[0, 2, 3]} {...props}>
    {children}
  </Box>
)
