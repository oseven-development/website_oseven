/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'
import {Layout, FullscreenBackground, Button, Seo, Headline} from '../components'
import parallax from '../assets/images/backgrounds/contact.jpg'
import {FaPhone, FaEnvelope} from 'react-icons/fa'

const ContactPage = () => (
  <div>
    <Seo title="Kontakt" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
    <Headline>
      <FullscreenBackground img={parallax}>
        <Flex alignItems="center" justifyContent="center">
          <Box
            mt={[65, 75, '5%', '5%']}
            style={{padding: '0 40px', backgroundColor: 'rgba(255,255,255,0.9)', flexBasis: '500px'}}>
            <h2>Den Ersten Kontakt vergisst man nie</h2>
            <p style={{color: theme.colors.text, lineHeight: '2em'}}>
              Maximilian Hänsel
              <a
                href="tel:+491634412159"
                className="icon-wrapper"
                style={{justifyContent: 'start', color: theme.colors.text}}>
                <FaPhone style={{fill: theme.colors.text, magrinRight: 3}} className="icon" /> Tel: 01634412159
              </a>
              <a
                href="mailto:info@o-seven.de"
                className="icon-wrapper"
                style={{justifyContent: 'start', color: theme.colors.text}}>
                <FaEnvelope style={{fill: theme.colors.text, magrinRight: 3}} className="icon" />
                info@o-seven.de
              </a>
              Nordring 171 <br style={{marginBottom: 0}} /> 90409 Nürnberg
            </p>
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
    </Headline>
  </div>
)

export default ContactPage
