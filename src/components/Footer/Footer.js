/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import '../../assets/style/footer.styl'
import logo from '../../assets/images/logo-o-seven-07.svg'
// import {Container} from '../Container'
// import {HeaderWrapper, HeaderInner, SiteTitle, Navigation} from './styled'

const Footer = props => (
  <Flex id="bottom-footer" flexDirection="column">
    <Box>
      <Flex flexDirection="row">
        <Box width={[1 / 2, 1 / 2]}>
          <Link to="/">
            <Image width={250} src={logo} />
          </Link>
        </Box>
        <Box width={[1 / 2, 1 / 2]}>
          <h3>Kontaktdaten</h3>
          <ul className="contact">
            <li>Maximilian Hänsel</li>
            <li>
              <a href="tel:+491634412159">
                <i className="fa fa-phone" /> Tel: 01634412159
              </a>
            </li>
            <li>
              <a href="mailto:info@o-seven.de">
                <i className="fas fa-envelope" /> info@o-seven.de
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
