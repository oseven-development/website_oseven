/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import theme from '../theme'
import logo from '../../assets/images/logo-o-seven-black-small.svg'
import '../../assets/style/menu.styl'
// import {Container} from '../Container'
// import {HeaderWrapper, HeaderInner, SiteTitle, Navigation} from './styled'

const Header = props => (
  <Flex
    style={{
      background: theme.colors.lightwhite,
    }}
    alignItems="center"
    justifyContent="space-between">
    <Box style={{height: '60px'}}>
      <Link to="/">
        <Image width={[1, 1, 1]} src={logo} height={55} />
      </Link>
    </Box>
    <Box style={{marginRight: '20px'}}>
      <div className={`button ${props.isMenuVisible ? 'active' : ''}`} onClick={props.onToggleMenu}>
        <span />
      </div>
    </Box>
  </Flex>
)

Header.propTypes = {}

Header.defaultProps = {
  title: null,
  navigation: null,
}

export {Header}
// <Image src={menu} onClick={props.onToggleMenu} />
