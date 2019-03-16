/** @format */
// React and Libarys
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import Fade from 'react-reveal/Fade'

// Bilder
import consutling from '../assets/images/backgrounds/consutling.jpg'
import consultingparallax from '../assets/images/backgrounds/consultingparallax.jpg'

// Icons
import projekt1 from '../assets/icon/beratung/content.svg'
import projekt2 from '../assets/icon/beratung/checklist.svg'
import projekt3 from '../assets/icon/beratung/presentation.svg'
import consulting1 from '../assets/icon/beratung/analytics.svg'
import consulting2 from '../assets/icon/beratung/mountains.svg'
import consulting3 from '../assets/icon/beratung/folder.svg'

import lightBulb from '../assets/icon/beratung/light-bulb.svg'
import checklistflat from '../assets/icon/beratung/checklistflat.svg'
import build from '../assets/icon/beratung/build.svg'
import checked from '../assets/icon/beratung/checked.svg'
import refresh from '../assets/icon/beratung/refresh.svg'

// Containers
import {WrapperBox, ContentBox} from '../container'

// Old components maybe Merge
import {
  Seo,
  HeaderTitleBackground,
  Container,
  Parallax,
  HeadingWithSublime,
  AnimatedArrow,
  smallNav,
  ListContainer as Mylist,
  FadeImageOrIconBox,
} from '../components'

// ????
import theme from '../components/theme'
import Projekte from '../../content/service/consulting/projekte.md'
import Business from '../../content/service/consulting/business.md'

const navObject = [
  {name: 'Projekt Consulting', to: 'Projektberatung'},
  {name: 'Business Consulting', to: 'Unternehmensberatung'},
]

const ConsultingPage = () => (
  <React.Fragment>
    <Seo title="Business & Projekt Consulting" />
    <HeaderTitleBackground
      bgPosition="center right"
      img={consutling}
      h1Text="Business & Projekt Consulting"
      h3Text="Wir beraten Sie bei der Durchführung von IT-Projekte und Unternehmensspezifischen Problemstellungen."
      nav={smallNav(navObject)}>
      <a href="#Projektberatung">
        <AnimatedArrow />
      </a>
    </HeaderTitleBackground>

    <Container>
      <Flex
        id="Projektberatung"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        pt={[5, 20, 30]}>
        <Box p={theme.paddings} width={[1, 1 / 3, 1 / 3]}>
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
        <Box p={theme.paddings} width={[1, 2 / 3, 2 / 3]}>
          <HeadingWithSublime
            headline="Erfolgreiche Projekte"
            sublime="Organisation, Konzeption, Planung und Steuerung"
            spanColor="black"
          />
          <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}>
            <Projekte />
          </Mylist>
        </Box>
      </Flex>
    </Container>

    <WrapperBox backgroundColor={'second'}>
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'Projekte gelingen mit einfachen Werkzeugen', color: 'white', style: 'sublime'}}
        h2={{content: 'Phasen des Projektmanagements', color: 'white', style: 'sublime'}}
        textColor={'white'}
        paragraph={
          'Wichtig ist ein Projekt in die einzelne Phasen einzuteilen, um das Projektziel auf Teilschritte herunter zu brechen. Dieser Aspekt reduziert außerdem die Komplexität des Projektes. Auf diese 5 Phasen setzen wir.'
        }
        componentMid={
          <FadeImageOrIconBox
            spacebetween={25}
            colorSubtitle={'white'}
            icons={[
              {icon: lightBulb, fade: {delay: 500, duration: 500}, width: [35, 40, 80], subtitle: 'Entwickeln'},
              {icon: checklistflat, fade: {delay: 1000, duration: 500}, width: [35, 40, 80], subtitle: 'Planen'},
              {icon: build, fade: {delay: 1500, duration: 500}, width: [35, 40, 80], subtitle: 'Umsetzen'},
              {icon: checked, fade: {delay: 2000, duration: 500}, width: [35, 40, 80], subtitle: 'Überprüfen'},
              {icon: refresh, fade: {delay: 2500, duration: 500}, width: [35, 40, 80], subtitle: 'Optimieren'},
            ]}
          />
        }
      />
    </WrapperBox>

    <Parallax img={consultingparallax} />
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
            spanColor="black"
          />
          <Mylist bgcolor={'#eee'} dotColor={'#45B39C'}>
            <Business />
          </Mylist>
        </Box>
        <Box p={theme.paddings} width={[1, 1 / 3, 1 / 3]}>
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
  </React.Fragment>
)

export default ConsultingPage
