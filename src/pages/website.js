/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'
import {Layout, SkewedBackground, Container, ServiceContainer, Parallax} from '../components'
import Praesenz from '../../content/service/website/zeigenSiePräsens.md'
import OhneGehtsNicht from '../../content/service/website/ohneGehtsnicht.md'
import Beratung from '../../content/service/website/beratung.md'
import Technik from '../../content/service/website/aktuelleTechnik.md'
import Information from '../../content/service/website/ihreInformation.md'
import background from '../assets/images/backgrounds/website.jpg'
import parallax from '../assets/images/backgrounds/meeting_with_text.jpg'

const WebsitePage = () => (
  <Layout>
    <div>
      <SkewedBackground
        img={background}
        color="linear-gradient(161deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%)"
        bgPosition="center"
        rotation="rotate(6.6deg) translateZ(0)"
      />
      <Container style={{color: theme.colors.textBlack}}>
        <h1 class="awesome-headline" style={{color: theme.colors.lightwhite, marginTop: '2em'}}>
          <span class="span">Deine </span>Webseite
        </h1>
        <h2 class="awesome-headline">mehr als nur Code</h2>
        <ServiceContainer style={{backgroundColor: 'white', padding: '1rem 2rem', marginTop: '1em'}}>
          <Flex flexDirection="row" flexWrap="wrap">
            <Box p={3} width={[1, 1, 1 / 2]}>
              <Praesenz />
            </Box>
            <Box p={3} width={[1, 1, 1 / 2]}>
              <OhneGehtsNicht />
            </Box>
          </Flex>
        </ServiceContainer>
      </Container>
      <Parallax img={parallax} />
      <Container style={{color: theme.colors.textBlack}}>
        <ServiceContainer style={{backgroundColor: 'white', padding: '1rem 2rem', marginTop: '1em'}}>
          <Flex flexDirection="row" flexWrap="wrap">
            <Box p={3} width={[1, 1, 1 / 3]}>
              <Beratung />
            </Box>
            <Box p={3} width={[1, 1, 1 / 3]}>
              <Technik />
            </Box>
            <Box p={3} width={[1, 1, 1 / 3]}>
            <Information />
          </Box>
          </Flex>
          <Flex>
          
          </Flex>
        </ServiceContainer>
      </Container>
    </div>
  </Layout>
)

export default WebsitePage
