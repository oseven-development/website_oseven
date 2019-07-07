/** @format */

import React from 'react'
import styled, {ThemeContext} from 'styled-components'

import {Flex, Box} from 'rebass'
import {TColor} from '../../assets/theme/types'
import theme from '../../assets/theme'
interface IContainer {
  flexDirection?: 'row' | 'column'
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'flex-start' | 'space-between' | 'stretch'
  alignContent?: 'center' | 'flex-start' | 'space-between'
  justifyContent?: 'center' | 'flex-start' | 'space-between'
  ratio?: 21 | 12
  children: any
  fullscreen?: true
  bg?: TColor
  height?: number | string
  transparent?: boolean
  pt?: number | string
}
const Container = (props: IContainer) => {
  const {
    flexDirection,
    flexWrap,
    alignItems,
    transparent,
    justifyContent,
    alignContent,
    ratio,
    children,
    fullscreen,
    bg,
    height,
    pt,
  } = props
  const marginDesktop = '0px 0px 0px 0px'
  const marginMobile = '0px 8px 0px 8px'
  const margin = [marginMobile, marginDesktop]
  const padding = [0, '0px 15px 0px 15px']
  // const theme = React.useContext(ThemeContext)
  return (
    <Flex
      flexDirection={flexDirection ? flexDirection : 'row'}
      flexWrap={flexWrap ? flexWrap : 'wrap'}
      alignItems={alignItems ? alignItems : 'center'}
      alignContent={alignContent ? alignContent : 'center'}
      justifyContent={justifyContent ? justifyContent : 'center'}
      pt={pt ? pt : 0}
      bg={bg ? theme.colors[bg] : transparent ? 'transparent' : theme.colors.background}
      style={{
        maxWidth: fullscreen ? '100%' : '1000px',
        margin: 'auto',
        height: height ? height : '',
      }}>
      {Array.isArray(children) ? (
        ratio && children.length === 2 ? (
          ratio === 21 ? (
            <React.Fragment>
              <Box p={padding} m={margin} width={flexDirection === 'row' ? 1 : [1, 2 / 3]}>
                {children[0]}
              </Box>
              <Box p={padding} m={margin} width={flexDirection === 'row' ? 1 : [1, 1 / 3]}>
                {children[1]}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box p={padding} m={margin} width={flexDirection === 'row' ? 1 : [1, 1 / 3]}>
                {children[0]}
              </Box>
              <Box p={padding} m={margin} width={flexDirection === 'row' ? 1 : [1, 2 / 3]}>
                {children[1]}
              </Box>
            </React.Fragment>
          )
        ) : (
          children.map((child: any) => (
            <Box p={padding} m={margin} width={flexDirection === 'row' ? 1 : [1, 1 / children.length]}>
              {child}
            </Box>
          ))
        )
      ) : (
        <Box p={padding} m={margin} width={1}>
          {children}
        </Box>
      )}
    </Flex>
  )
}
export default Container
