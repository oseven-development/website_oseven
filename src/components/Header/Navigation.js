/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {OpacityTransition} from '../Transition'
import {Flex, Box} from 'rebass'
import '../../assets/style/navigation.styl'

const NAV_ITEMS = [
	{
		to: '/',
		label: 'Index',
	},
	{
		to: '/page-3',
		label: 'Page 2',
	},
	{
		to: '/page-4',
		label: 'Test',
	},
	{
		to: '/mdx-example',
		label: 'Markdown Example',
	},
]

const NavList = NAV_ITEMS.map(e => {
	return (
		<li key={e.to}>
			<Link className="li-level1" to={e.to}>
				{e.label}
			</Link>
		</li>
	)
})

export const Navigation = props => (
	<OpacityTransition className={`overlay-navigation ${props.isMenuVisible ? 'overlay-slide-down' : ''}`}>
		<Flex justifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
			<ul className="level1">{NavList}</ul>
		</Flex>
	</OpacityTransition>
)

Navigation.propTypes = {
	onToggleMenu: PropTypes.func,
}
