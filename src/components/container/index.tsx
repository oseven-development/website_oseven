/** @format */

import React from 'react'
import styled, {ThemeContext} from 'styled-components'

import {Flex, Box} from 'rebass'
import {TColor} from '../../assets/theme/types'
import theme from '../../assets/theme'
import {useWindowSize} from '../../assets/hooks/windowWidth'

interface IContainer {
  flexDirection?: 'row' | 'column'
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'flex-start' | 'space-between' | 'stretch'
  alignContent?: 'center' | 'flex-start' | 'space-between'
  justifyContent?: 'center' | 'flex-start' | 'space-between'
  ratio?: 21 | 12
  children: any
  fullscreen?: true
  style?: any
  bg?: TColor
  height?: number[] | string[]
  transparent?: boolean
  pt?: number | string | number[] | string[]
  id?: string
  p?: string
  inbox?: true
  textColumn?: true
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
    style,
    p,
    inbox,
    textColumn,
  } = props
  const {windowWidth} = useWindowSize()
  const marginDesktop = '0px 0px 0px 0px'
  const marginMobile = '10px 0px 10px 0px'
  const margin = [marginMobile, marginDesktop]
  const padding = p ? ['0px 10px 0px 10px', p] : ['0px 20px 0px 20px', '40px 15px 40px 15px']
  const _height = windowWidth > 768 ? (height ? height[1] : 'auto') : height ? height[0] : 'auto'
  const ContainerStyle = {
    maxWidth: fullscreen ? '100%' : '1200px',
    margin: 'auto',
    height: _height,
    ...style,
  }
  // const theme = React.useContext(ThemeContext)
  return (
    <Flex
      id={props.id}
      flexDirection={flexDirection ? flexDirection : 'row'}
      flexWrap={flexWrap ? flexWrap : 'wrap'}
      alignItems={alignItems ? alignItems : 'center'}
      alignContent={alignContent ? alignContent : 'center'}
      justifyContent={justifyContent ? justifyContent : 'center'}
      p={pt ? pt : inbox ? ['0px 0px', '0px 0px'] : ['20px 0px', '40px 0px']}
      bg={bg ? theme.colors[bg] : transparent ? 'transparent' : theme.colors.background}
      style={ContainerStyle}>
      {Array.isArray(children) ? (
        ratio && children.length === 2 ? (
          ratio === 21 ? (
            <React.Fragment>
              <Box
                p={p ? p : fullscreen || inbox ? 0 : padding}
                m={fullscreen || inbox ? 0 : margin}
                width={flexDirection === 'column' ? 1 : [1, 2 / 3]}>
                {children[0]}
              </Box>
              <Box
                p={p ? p : fullscreen || inbox ? 0 : padding}
                m={fullscreen || inbox ? 0 : margin}
                width={flexDirection === 'column' ? 1 : [1, 1 / 3]}>
                {children[1]}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box
                p={p ? p : fullscreen || inbox ? 0 : padding}
                m={fullscreen || inbox ? 0 : margin}
                width={flexDirection === 'column' ? 1 : [1, 1 / 3]}>
                {children[0]}
              </Box>
              <Box
                p={p ? p : fullscreen || inbox ? 0 : padding}
                m={fullscreen || inbox ? 0 : margin}
                width={flexDirection === 'column' ? 1 : [1, 2 / 3]}>
                {children[1]}
              </Box>
            </React.Fragment>
          )
        ) : (
          children.map((child: any) => {
            let textPadding = undefined
            if (textColumn) {
              switch (children.indexOf(child)) {
                case 0:
                  textPadding = ['0px 20px 0px 20px', '0px 60px 0px 15px']
                  break
                case children.length - 1:
                  textPadding = ['0px 20px 0px 20px', '0px 15px 0px 60px']
                  break
                default:
                  textPadding = ['0px 20px 0px 20px', '0px 60px 0px 60px']
                  break
              }
            }
            return (
              <Box
                p={textPadding ? textPadding : p ? p : fullscreen || inbox ? 0 : padding}
                m={fullscreen || inbox ? 0 : margin}
                width={flexDirection === 'column' ? 1 : [1, 1 / children.length]}
                key={Math.random()}>
                {child}
              </Box>
            )
          })
        )
      ) : (
        <Box p={fullscreen || inbox ? 0 : padding} m={fullscreen || inbox ? 0 : margin} width={1}>
          {children}
        </Box>
      )}
    </Flex>
  )
}
export default Container

export const ContainerBox = (props: {children: JSX.Element | JSX.Element[]}) => {
  const {children} = props
  return <StyledContainerBox>{children}</StyledContainerBox>
}

const StyledContainerBox = styled.div`
  max-width: 1200px;
  margin: 2em auto;
  padding: 20px;
  @media screen and (${props => props.theme.device.laptop}) {
    padding: 0;
  }
`
