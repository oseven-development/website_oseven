/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'

import styled from 'styled-components'

export default props => (
  <TopStrip className={`${props.isMenuVisible ? 'active' : ''}`}>
    <Flex alignItems="center" justifyContent="space-between">
      <Box style={{height: '60px'}}>
        <Link to="/">
          <Image width={200} src={props.brand} />
        </Link>
      </Box>
      <Box style={{marginRight: '20px'}}>
        <NavigationButton className={`${props.isMenuVisible ? 'active' : ''}`} onClick={props.onToggleMenu}>
          <span />
        </NavigationButton>
      </Box>
    </Flex>
  </TopStrip>
)

const NavigationButton = styled.div`
  cursor: pointer;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  z-index: 101;
  span,
  span:after,
  span:before {
    transition: 0.3s all;
    width: 30px;
    background: ${props => props.theme.colors.black};
    height: 1px;
    display: block;
    content: '';
    position: relative;
  }
  span {
    &:after {
      top: 10px;
    }
    &:before {
      top: -10px;
    }
  }
  &.active {
    span {
      &:after {
        transform: rotate(-45deg);
        top: -1px;
        background: whitesmoke;
      }
      &:before {
        transform: rotate(45deg);
        top: 0;
        background: whitesmoke;
      }
    }
  }
`

const TopStrip = styled.div`
  width: 100%;
  height: 55px;
  background: whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 5px black;
  transition: 0s all;
  opacity: 0.95;
  &.active {
    background: ${props => props.theme.colors.black};
    box-shadow: none;
  }
`
