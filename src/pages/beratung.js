/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {
  Layout,
  Seo,
  HeaderTitleBackground,
  Container,
  Parallax,
  HeadingWithSublime,
  AnimatedArrow,
  smallNav,
} from '../components'
import Fade from 'react-reveal/Fade'
import background from '../assets/images/backgrounds/consutling.jpg'
import Projekte from '../../content/service/consulting/projekte.md'
import projekt1 from '../../content/service/consulting/icon/content.svg'
import projekt2 from '../../content/service/consulting/icon/checklist.svg'
import projekt3 from '../../content/service/consulting/icon/presentation.svg'
import consulting1 from '../../content/service/consulting/icon/analytics.svg'
import consulting2 from '../../content/service/consulting/icon/mountains.svg'
import consulting3 from '../../content/service/consulting/icon/folder.svg'
import {Schritte} from '../../content/service/consulting/schritte'
import theme from '../components/theme'
import parallax from '../assets/images/backgrounds/consultingparallax.jpg'
import Business from '../../content/service/consulting/business.md'

const navObject = [
  {name: 'Projekt Consulting', to: 'Projektberatung'},
  {name: 'Business Consulting', to: 'Unternehmensberatung'},
]

const ConsultingPage = () => (
  <Layout>
    <Seo title="Business & Projekt Consulting" />
    <HeaderTitleBackground
      bgPosition="center right"
      img={background}
      h1Text="Business & Projekt Consulting"
      h3Text="Wir beraten Sie bei der Durchführung von IT-Projekte und Unternehmensspezifischen Problemstellungen."
      nav={smallNav(navObject)}>
      <AnimatedArrow />
    </HeaderTitleBackground>
    <Container>
      <Flex
        id="Projektberatung"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        pt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Fade left>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={projekt1} />
            </Fade>
            <Fade left>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={projekt2} />
            </Fade>
            <Fade left>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={projekt3} />
            </Fade>
          </Flex>
        </Box>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <HeadingWithSublime
            headline="Erfolgreiche Projekte"
            sublime="Organisation, Konzeption, Planung und Steuerung"
          />

          <Projekte />
        </Box>
      </Flex>
    </Container>
    <Flex pb={[10, 30, 60, 80]} pt={[10, 40, 40, 40]} style={{background: theme.colors.second}}>
      <Container style={{textAlign: 'center'}}>
        <Fade>
          <Schritte />
        </Fade>
      </Container>
    </Flex>
    <Parallax img={parallax} />
    <Container>
      <Flex
        id="Unternehmensberatung"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        pt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <HeadingWithSublime
            headline="Business Consulting"
            sublime="Beratung für jeden Schritt in Ihrem Unternehmen"
          />
          <Business />
        </Box>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Fade right>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={consulting1} />
            </Fade>
            <Fade right>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={consulting2} />
            </Fade>
            <Fade right>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={consulting3} />
            </Fade>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default ConsultingPage
