/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import {TColor} from '../../assets/theme/types'
import theme from '../../assets/theme'
interface IContainer {
  flexDirection?: 'row' | 'column'
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'flex-start' | 'space-between'
  alignContent?: 'center' | 'flex-start' | 'space-between'
  justifyContent?: 'center' | 'flex-start' | 'space-between'
  ratio?: 21 | 12
  children: any
  fullscreen?: true
  bg?: TColor
}
const Container = (props: IContainer) => {
  const {flexDirection, flexWrap, alignItems, justifyContent, alignContent, ratio, children, fullscreen, bg} = props
  return (
    <Flex
      flexDirection={flexDirection ? flexDirection : 'row'}
      flexWrap={flexWrap ? flexWrap : 'wrap'}
      alignItems={alignItems ? alignItems : 'center'}
      alignContent={alignContent ? alignContent : 'center'}
      justifyContent={justifyContent ? justifyContent : 'center'}
      bg={bg ? theme.colors[bg] : theme.colors.background}
      style={{
        maxWidth: fullscreen ? '100%' : '1000px',
        margin: 'auto',
      }}>
      {Array.isArray(children) ? (
        ratio && children.length === 2 ? (
          ratio === 21 ? (
            <React.Fragment>
              <Box width={[1, 2 / 3]}>{children[0]}</Box>
              <Box width={[1, 1 / 3]}>{children[1]}</Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box width={[1, 1 / 3]}>{children[0]}</Box>
              <Box width={[1, 2 / 3]}>{children[1]}</Box>
            </React.Fragment>
          )
        ) : (
          children.map((child: any) => <Box width={[1, 1 / children.length]}>{child}</Box>)
        )
      ) : (
        <Box width={1}>{children}</Box>
      )}
    </Flex>
  )
}
export default Container
