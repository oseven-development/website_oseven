/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import theme from '../theme'
import logo from '../../assets/images/logo-o-seven-black-small.svg'
import menu from '../../assets/images/menu.svg'
import '../../assets/style/menu.styl'
// import {Container} from '../Container'
// import {HeaderWrapper, HeaderInner, SiteTitle, Navigation} from './styled'

const Header = props => (
	<Flex
		style={{
			background: theme.colors.lightwhite,
		}}
		justifyContent="space-between">
		<Box>
			<div>
				<Link
					to="/"
					style={{
						color: theme.colors.black,
						textDecoration: 'none',
					}}>
					<Image width={[1, 1, 1 / 2]} src={logo} />
				</Link>
			</div>
		</Box>
		<Box>
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
