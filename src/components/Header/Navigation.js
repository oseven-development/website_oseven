/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {OpacityTransition} from '../Transition'
import {Flex} from 'rebass'
import '../../assets/style/navigation.styl'

const nav_items = [
  {
    to: '/',
    label: 'Home',
  },
  {
    label: 'Produkte',
    to: [
      {
        to: '/website',
        label: 'Webseiten',
      },
      {
        to: '/application',
        label: 'Applikation',
      },
    ],
  },
  {
    label: 'Consulting & Solutions',
    to: [
      {
        to: '/businessreportingandanalysis',
        label: 'Business Reporting & Analysis',
      },
      {
        to: '/consulting',
        label: 'Consutling',
      },
    ],
  },
  {
    label: 'Referenzen',
    to: [
      {
        to: '/referenzen',
        label: 'Partner',
      },
      {
        to: '/story',
        label: 'Stories',
      },
    ],
  },
  {
    to: '/contact',
    label: 'Kontakt',
  },
  {
    to: '/impressum',
    label: 'Impressum',
  },
]

const hierachyList = arr => {
  return arr.map(e => (
    <li key={e.to}>
      <Link className="slide-in-nav-item" to={e.to}>
        {e.label}
      </Link>
    </li>
  ))
}

const NavList = nav_items.map(e => {
  if (Array.isArray(e.to)) {
    return (
      <li className="li-level1 slide-in-nav-item ">
        <span className="li-level1">{e.label}</span>
        <ul key={e.to} className="level2">
          {hierachyList(e.to)}
        </ul>
      </li>
    )
  } else {
    return (
      <li key={e.to}>
        <Link className="li-level1" to={e.to}>
          {e.label}
        </Link>
      </li>
    )
  }
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
