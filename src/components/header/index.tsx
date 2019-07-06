/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import {Link} from 'gatsby'

interface IHeader {
  navigation: JSX.Element
  logo: any
  transparent?: boolean
}

const Header = (props: IHeader) => {
  const {navigation, logo, transparent} = props
  return (
    <StyledHeader>
      <Flex justifyContent={'space-between'} style={{height: '100%'}}>
        <Box mx={'15px'} alignSelf={'center'}>
          <Link to="/" style={{fontFamily: 'none'}}>
            <img src={logo} alt={'logo Oseven'} style={{width: 200}} />
          </Link>
        </Box>
        <Box mx={'50px'} alignSelf={'center'}>
          {navigation}
        </Box>
      </Flex>
    </StyledHeader>
  )
}
export default Header
const StyledHeader = styled.div`
  height: 65px;
  background: ${({theme, transparent}: any) => (transparent ? 'transparent' : theme.colors.background)};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 5px black;
  transition: 0s all;
  opacity: 0.95;
`
