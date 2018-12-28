/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'
import {Layout, FullscreenBackground, Button, Seo} from '../components'
import parallax from '../assets/images/backgrounds/contact.jpg'
import {FaPhone, FaEnvelope} from 'react-icons/fa'

const ContactPage = () => (
  <Layout>
    <Seo title="Kontakt" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
    <FullscreenBackground img={parallax}>
      <Flex>
        <Box style={{backgroundColor: 'white', margin: '20vw', padding: '60px', opacity: 0.9}}>
          <h1>Den Ersten Kontakt vergisst man nie</h1>
          <h3>O-SEVEN</h3>

          <ul className="contact" style={{color: theme.colors.text}}>
            <li>Maximilian Hänsel</li>
            <li>
              <a
                href="tel:+491634412159"
                className="icon-wrapper"
                style={{justifyContent: 'start', color: theme.colors.text}}>
                <FaPhone style={{fill: theme.colors.text, magrinRight: 3}} className="icon" /> Tel: 01634412159
              </a>
            </li>
            <li>
              <a
                href="mailto:info@o-seven.de"
                className="icon-wrapper"
                style={{justifyContent: 'start', color: theme.colors.text}}>
                <FaEnvelope style={{fill: theme.colors.text, magrinRight: 3}} className="icon" />
                info@o-seven.de
              </a>
            </li>
            <li>
              Nordring 171 <br /> 90409 Nürnberg
            </li>
          </ul>
          <a href="tel:+491634412159">
            <Button color={theme.colors.second} icon={<FaPhone style={{fill: theme.colors.second}} />}>
              Tel: 0163 - 44 12 159
            </Button>
          </a>

          <a href="mailto:info@o-seven.de">
            <Button color={theme.colors.second} icon={<FaEnvelope style={{fill: theme.colors.second}} />}>
              info@o-seven.de
            </Button>
          </a>
        </Box>
      </Flex>
    </FullscreenBackground>
  </Layout>
)

export default ContactPage
