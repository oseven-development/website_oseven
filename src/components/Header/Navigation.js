/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {OpacityTransition} from '../Transition'
import {Flex} from 'rebass'
import '../../assets/style/navigation.styl'
import nav_items from './NavigationItems'

const HierachyList = arr => {
  return arr.map(e => (
    <li className="nav-element-level-2" key={e.to}>
      <Link className="slide-in-nav-item" to={e.to}>
        {e.label}
      </Link>
    </li>
  ))
}

const NavList = props =>
  nav_items.map((e, key) => {
    if (Array.isArray(e.to)) {
      return (
        <li
          key={key}
          className={`nav-element-level-1 slide-in-nav-item ${props.activeTab === e.label ? 'active' : ''} `}>
          <span onClick={() => props.toggleActive(e.label)}>{e.label}</span>
          <ul key={e.to} className="nav-level-2">
            {HierachyList(e.to)}
          </ul>
        </li>
      )
    } else {
      return (
        <li className="nav-element-level-1 slide-in-nav-item" key={e.to}>
          <Link to={e.to}>{e.label}</Link>
        </li>
      )
    }
  })

const Nav = props => (
  <Flex justifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
    <ul className="nav-level-1">
      <NavList toggleActive={props.toggleActive} activeTab={props.activeTab} />
    </ul>
  </Flex>
)

export const Navigation = props => (
  <nav
    className={'overlay-navigation'}
    id="menu"
    style={props.isMenuFadeing ? {height: '100%', transition: 'all 1s'} : {height: '0%', transition: 'all 1s'}}>
    {props.isMenuVisible && <Nav toggleActive={props.toggleActive} activeTab={props.activeTab} />}
  </nav>
)

Navigation.propTypes = {
  onToggleMenu: PropTypes.func,
}
