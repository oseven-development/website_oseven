/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'
import Fade from 'react-reveal/Fade'

import {Layout, SkewedBackground, Container, ServiceContainer, Parallax, Seo} from '../components'
import Praesenz from '../../content/produkt/website/zeigenSiePräsens.md'
import OhneGehtsNicht from '../../content/produkt/website/ohneGehtsnicht.md'
import Beratung from '../../content/produkt/website/beratung.md'
import Technik from '../../content/produkt/website/aktuelleTechnik.md'
import Unterschied from '../../content/produkt/website/unterschied.md'
import Optimieren from '../../content/produkt/website/optimieren.md'
import Information from '../../content/produkt/website/ihreInformation.md'
import background from '../assets/images/backgrounds/website.jpg'
import parallax from '../assets/images/backgrounds/meeting_with_text.jpg'

const WebsitePage = () => (
  <Layout>
    <Seo
      title="Webseiten"
      description="Übersicht des Services Webseiten"
      keywords="Cool Fancy Beste Seite Webdeveloper"
    />
    <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
      <SkewedBackground
        img={background}
        color="linear-gradient(161deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%)"
        bgPosition="center"
        rotation="rotate(6.6deg) translateZ(0)"
      />
      <Container style={{color: theme.colors.textBlack}}>
        <Box mt={['90px', '140px', '240px', '300px']}>
          <Fade left>
            <h1 className="awesome-headline-h1" style={{color: theme.colors.lightwhite}}>
              <span className="span">Deine </span>Webseite
            </h1>
          </Fade>
          <Fade right>
            <h2 className="awesome-headline-h2">mehr als nur Code</h2>
          </Fade>
        </Box>

        <ServiceContainer style={{marginTop: '1em'}} color={theme.colors.second} bgcolor="white">
          <Flex flexDirection="row" flexWrap="wrap">
            <Box py={['0.5em', '1em', '2em']} p={[1, 2, 3]} width={[1, 1, 1 / 2]}>
              <Praesenz />
            </Box>
            <Box py={['0.5em', '1em', '2em']} p={[1, 2, 3]} width={[1, 1, 1 / 2]}>
              <OhneGehtsNicht />
            </Box>
          </Flex>
        </ServiceContainer>
      </Container>
      <Parallax img={parallax} />
      <Container style={{color: theme.colors.textBlack}}>
        <ServiceContainer bgcolor="white" style={{margin: '2em 0'}} color={theme.colors.second}>
          <Flex flexDirection="row" flexWrap="wrap">
            <Box p={[1, 2, 3]} width={[1, 1, 1 / 3]}>
              <Fade left fraction={0.6}>
                <Beratung />
              </Fade>
            </Box>
            <Box p={[1, 2, 3]} width={[1, 1, 1 / 3]}>
              <Fade bottom fraction={0.6}>
                <Technik />
              </Fade>
            </Box>
            <Box p={[1, 2, 3]} width={[1, 1, 1 / 3]}>
              <Fade right fraction={0.6}>
                <Information />
              </Fade>
            </Box>
          </Flex>
        </ServiceContainer>
      </Container>
      <ServiceContainer bgcolor={theme.colors.second} style={{color: 'white', paddingBottom: '3em'}}>
        <Container>
          <Box py={[1, 4, 5, 10]} px={[1, 2, 3]}>
            <Unterschied />
          </Box>
        </Container>
      </ServiceContainer>
      <Container>
        <ServiceContainer color={theme.colors.contrast} style={{marginBottom: 20}}>
          <Box p={[1, 2, 3]}>
            <Optimieren />
          </Box>
        </ServiceContainer>
      </Container>
    </div>
  </Layout>
)

export default WebsitePage
