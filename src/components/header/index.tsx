/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import {Link} from 'gatsby'
import theme from '../../assets/theme'
import {SvgImage} from '..'

interface IHeader {
  navigation: JSX.Element
  logo: any
  transparent?: boolean
}
const StyledHeader = styled.header`
  height: 65px;
  background: ${({theme, transparent}: any) => (transparent === true ? 'transparent' : theme.colors.background)};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 5px black;
  transition: 0s all;
  opacity: 0.95;
`
// const Header = (props: IHeader) => {
//   const {navigation, logo, transparent} = props
// return (
export default (props: any) => (
  <React.Fragment>
    <StyledHeader {...props}>
      <Flex justifyContent={'space-between'} style={{height: '100%'}}>
        <Box mx={'15px'} alignSelf={'center'}>
          <Link to="/" style={{fontFamily: 'none'}}>
            <SvgImage src={props.logo} dWidth={60} />
          </Link>
        </Box>
        <Box mx={'50px'} alignSelf={'center'}>
          {props.navigation}
        </Box>
      </Flex>
    </StyledHeader>
  </React.Fragment>
)
// export default Header
