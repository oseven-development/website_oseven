/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import '../../assets/style/footer.styl'
import logo from '../../assets/images/logo-o-seven-07.svg'
import {FaPhone, FaEnvelope} from 'react-icons/fa'
import theme from '../theme'
import nav_items from '../Header/NavigationItems'

const NavList = nav_items.map(e => {
  if (Array.isArray(e.to)) {
    return e.to.map(e2 => {
      console.log(e2.to)
      return (
        <li key={e2.to}>
          <Link to={e2.to}>{e2.label}</Link>
        </li>
      )
    })
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

const Footer = props => (
  <Flex id="bottom-footer" flexDirection="column" style={{color: '#333', width: '100%'}}>
    <Box>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box width={[1, 1 / 3, 1 / 3]}>
          <h3>Navigation</h3>
          <ul className="navigation-bottom">{NavList}</ul>
        </Box>
        <Box width={[1, 1 / 3, 1 / 3]}>
          <Link to="/">
            <Image width={250} src={logo} />
          </Link>
        </Box>
        <Box width={[1, 1 / 3, 1 / 3]}>
          <h3>Kontaktdaten</h3>
          <ul className="contact">
            <li>Maximilian Hänsel</li>
            <li>
              <a href="tel:+491634412159" className="icon-wrapper">
                <FaPhone style={{fill: theme.colors.text, magrinRight: 3}} className="icon" /> Tel: 01634412159
              </a>
            </li>
            <li>
              <a href="mailto:info@o-seven.de" className="icon-wrapper">
                <FaEnvelope style={{fill: theme.colors.text, magrinRight: 3}} className="icon" />
                info@o-seven.de
              </a>
            </li>
            <li>
              Nordring 171 <br /> 90409 Nurnberg
            </li>
          </ul>
        </Box>
      </Flex>
    </Box>
    <Box>
      <div class="footer-bottom-wrapper">
        O-SEVEN
        <address class="footer-address" role="company address">
          Nordring 171, 90409 Nürnberg
        </address>
        <span class="footer-bottom-rights"> - All Rights Reserved - </span>
      </div>
    </Box>
  </Flex>
)

Footer.propTypes = {}

export {Footer}
// <Image src={menu} onClick={props.onToggleMenu} />
