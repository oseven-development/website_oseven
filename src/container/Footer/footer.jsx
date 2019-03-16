/** @format */

// React and Libarys
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import theme from '../../components/theme'
import navItems from '../../routes/routes'

// Icons
import {FaPhone, FaEnvelope} from 'react-icons/fa'
import logo from '../../assets/images/logo-o-seven-07.svg'
import facebook from '../../assets/images/social/facebook.svg'
import google from '../../assets/images/social/google.svg'
import xing from '../../assets/images/social/xing.svg'

// Components
import {Headline} from '../../components'

// Containers
import {WrapperBox, ContentBox} from '../../container'

// Styled
import {StyledFooter, StyledFooterList, StyledFooterSocialIcons} from './styledFooter'

const NavList = navItems.map(e => {
  if (Array.isArray(e.to)) {
    return e.to.map(e2 => {
      return (
        <li key={e2.to}>
          <Link to={e2.to}>{e2.label}</Link>
        </li>
      )
    })
  } else {
    return (
      <li key={e.to}>
        <Link className="level1" to={e.to}>
          {e.label}
        </Link>
      </li>
    )
  }
})

export default props => (
  <StyledFooter>
    <Flex id="bottom-footer" flexDirection="column" style={{color: '#333', width: '100%'}}>
      <Box>
        <Flex flexDirection="row" flexWrap="wrap">
          <Box width={[1, 1, 1 / 3]}>
            <h3>Navigation</h3>
            <StyledFooterList className="navigation-bottom">{NavList}</StyledFooterList>
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Flex flexDirection="column">
              <Box>
                <Link to="/">
                  <Image width={[200, 300, 450]} src={logo} />
                </Link>
              </Box>
              <StyledFooterSocialIcons>
                <Box>
                  <a href="https://www.facebook.com/osevenNBG/" target="_blank">
                    <Image width={35} src={facebook} />
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Maximilian+H%C3%A4nsel+Einzelunternehmer+-+o-seven/@49.4707511,11.0960315,15z/data=!4m5!3m4!1s0x0:0x92950030122af397!8m2!3d49.4707511!4d11.0960315"
                    target="_blank">
                    <Image width={35} src={google} />
                  </a>
                  <a>
                    <Image width={35} src={xing} />
                  </a>
                </Box>
              </StyledFooterSocialIcons>
            </Flex>
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <h3>Kontaktdaten</h3>
            <StyledFooterList>
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
            </StyledFooterList>
          </Box>
        </Flex>
      </Box>
      <Box py={[2, 10, 15, 20]} style={{borderTop: '1px solid #666'}}>
        <div className="footer-bottom-wrapper">
          O-SEVEN
          <address className="footer-address" role="company address">
            Nordring 171, 90409 Nürnberg
          </address>
          <span className="footer-bottom-rights"> - All Rights Reserved - </span>
        </div>
      </Box>
    </Flex>
  </StyledFooter>
)
