/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'
import {FullscreenBackground, Button, Seo, Headline} from '../components'
import parallax from '../assets/images/backgrounds/contact.jpg'
import {FaPhone, FaEnvelope} from 'react-icons/fa'

export default () => (
  <React.Fragment>
    <Seo title="Kontakt" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
    <Headline>
      <FullscreenBackground img={parallax}>
        <Flex alignItems="center" justifyContent="center" style={{height: '100%'}}>
          <Box style={{padding: '0 40px', backgroundColor: 'rgba(255,255,255,0.9)', flexBasis: '500px'}}>
            <h2>Den Ersten Kontakt vergisst man nie</h2>
            <p style={{color: theme.colors.text, lineHeight: '2em'}}>
              Maximilian Hänsel
              <br />
              <a
                href="tel:+491634412159"
                className="icon-wrapper"
                style={{justifyContent: 'start', color: theme.colors.text}}>
                <FaPhone style={{fill: theme.colors.text, magrinRight: 3}} className="icon" /> Tel: 01634412159
              </a>
              <br />
              <a
                href="mailto:info@o-seven.de"
                className="icon-wrapper"
                style={{justifyContent: 'start', color: theme.colors.text}}>
                <FaEnvelope style={{fill: theme.colors.text, magrinRight: 3}} className="icon" /> info@o-seven.de
              </a>
              <br />
              Nordring 171 <br style={{marginBottom: 0}} /> 90409 Nürnberg
            </p>

            <Button linkto={'tel:+491634412159'} color={'second'} icon={<FaPhone />}>
              Tel: 0163 - 44 12 159
            </Button>

            <Button linkto={'mailto:info@o-seven.de'} color={'second'} icon={<FaEnvelope />}>
              info@o-seven.de
            </Button>
          </Box>
        </Flex>
      </FullscreenBackground>
    </Headline>
  </React.Fragment>
)
