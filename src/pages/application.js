/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'
import {Layout, SkewedBackground, Container, ServiceContainer, Parallax, Seo, Headline} from '../components'
import App from '../../content/produkt/application/app.md'
import Chancen from '../../content/produkt/application/chancen.md'
import Aktuell from '../../content/produkt/application/aktuell.md'
import Verwenden from '../../content/produkt/application/verwenden.md'
import background from '../assets/images/backgrounds/application.jpg'
import parallax from '../assets/images/backgrounds/code-javascript.jpg'
import parallax2 from '../assets/images/backgrounds/digital-marketing.jpg'
import Fade from 'react-reveal/Fade'

const ApplicationPage = () => (
  <Layout>
    <Seo
      title="Applikation"
      description="Übersicht des Services Webseiten"
      keywords="Cool Fancy Beste Seite Webdeveloper"
    />
    <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
      <SkewedBackground
        img={background}
        color="linear-gradient(161deg, #21D4FD 0%, green 100%)"
        bgPosition="center"
        rotation="rotate(6.6deg) translateZ(0)"
      />

      <Container style={{color: theme.colors.textBlack}}>
        <Box mt={['90px', '140px', '240px', '300px']}>
          <Fade left>
            <h1 className="awesome-headline-h1" style={{color: theme.colors.lightwhite, marginTop: '2em'}}>
              <span className="span">Deine </span>Application
            </h1>
          </Fade>
          <Fade right>
            <h2 className="awesome-headline-h2">einfach immer und überall</h2>
          </Fade>
        </Box>
        <ServiceContainer style={{marginTop: '1em'}} color={theme.colors.second} bgcolor="white">
          <Flex flexDirection="row" flexWrap="wrap">
            <Box p={[1, 2, 3]} width={[1, 1, 1 / 2]}>
              <App />
            </Box>
            <Box p={[1, 2, 3]} width={[1, 1, 1 / 2]}>
              <Chancen />
            </Box>
          </Flex>
        </ServiceContainer>
      </Container>
      <Parallax img={parallax} />
      <Container style={{color: theme.colors.textBlack}}>
        <ServiceContainer bgcolor="white" style={{marginTop: '1em'}} color={theme.colors.second}>
          <Flex flexDirection="row" flexWrap="wrap">
            <Box p={[1, 2, 3]} width={[1, 1, 1]}>
              <Aktuell />
            </Box>
          </Flex>
        </ServiceContainer>
      </Container>
      <ServiceContainer bgcolor={theme.colors.second} style={{color: 'white'}}>
        <Container style={{padding: '40px 0'}}>
          <Box p={[1, 2, 3]}>
            <Verwenden />
          </Box>
        </Container>
      </ServiceContainer>
      <Parallax img={parallax2} />
    </div>
  </Layout>
)

export default ApplicationPage
