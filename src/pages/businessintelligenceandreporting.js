/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {
  Layout,
  Seo,
  HeaderTitleBackground,
  Container,
  ConsultingHeadline,
  AnimatedArrow,
  HeadingWithSublime,
  smallNav,
  Parallax,
  Slider,
  TextSlider,
  ListContainer as Mylist,
  ParallaxClaimed,
  Lightbox,
} from '../components'
import Fade from 'react-reveal/Fade'
import background from '../assets/images/backgrounds/beard.jpg'
import powerbiBg from '../assets/images/backgrounds/Powerbi_parallax.jpg'
import powerbiBg2 from '../assets/images/backgrounds/clock.jpg'
import Bitext from '../../content/service/bi/Bitext.md'
import icon1 from '../../content/service/bi/icon/bi1.svg'
import icon2 from '../../content/service/bi/icon/bi2.svg'
import icon3 from '../../content/service/bi/icon/bi3.svg'
import theme from '../components/theme'
import Reporting from '../../content/service/bi/reporting.md'
import PowerBi from '../../content/service/bi/powerbi.md'
import Berichtswesen from '../../content/service/bi/berichtswesen.md'
import Zweck from '../../content/service/bi/zweck.md'
import {PowerbiService} from '../../content/service/bi/PowerBiServices'
import {PowerBiExamples} from '../../content/service/bi/powerBiExamples'
import powerbi1 from '../../content/service/bi/powerbi1.png'
import powerbi2 from '../../content/service/bi/powerbi2.png'

const navObject = [
  {name: 'Business Intelligence', to: 'BusinessIntelligence'},
  {name: 'Business Reporting', to: 'BusinessReporting'},
  {name: 'Power Bi', to: 'PowerBi'},
]

const BusinessIntelligenceAndReporting = () => (
  <Layout>
    <Seo title="Business Intelligence & Reporting" />
    <HeaderTitleBackground
      img={background}
      h1Text="Business Intelligence & Reporting"
      h3Text="Mehr Informationen über ihre Kunden, Produkte und Standorte gewinnen."
      bgPosition="center right"
      nav={smallNav(navObject)}>
      <a href="#BusinessIntelligence">
        <AnimatedArrow />
      </a>
    </HeaderTitleBackground>
    <Container>
      <Flex id="BusinessIntelligence" flexDirection="row" flexWrap="wrap" pt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Fade left>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon1} />
            </Fade>
            <Fade left>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon2} />
            </Fade>
            <Fade left>
              <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon3} />
            </Fade>
          </Flex>
        </Box>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <HeadingWithSublime spanColor="black" headline="Buisness Intelligence" sublime="Der Weg zur Datenkontrolle" />
          <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}>
            <Bitext />
          </Mylist>
        </Box>
      </Flex>
    </Container>
    <Parallax img={powerbiBg} />
    <div style={{background: theme.colors.second, overflow: 'hidden'}}>
      <Container>
        <Flex id="BusinessReporting" justifyContent="center" alignItems="center" px={[1, 2, 3]} pt={[5, 20, 40]}>
          <ConsultingHeadline
            h2color="white"
            h3color="white"
            h4color="white"
            pcolor="white"
            weight={200}
            style={{textAlign: 'center'}}>
            <Fade>
              <HeadingWithSublime spanColor="transparent" headline="Business Reporting" />
            </Fade>
          </ConsultingHeadline>
        </Flex>
        <TextSlider textColor="white" headingColor="white" items={[<Reporting />, <Zweck />, <Berichtswesen />]} />
      </Container>
    </div>
    <Parallax img={powerbiBg2} />
    <div style={{backgroundColor: '#f2c811'}}>
      <Container>
        <Flex id="PowerBi" flexDirection="row" flexWrap="wrap" pt={[5, 20, 30]}>
          <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
              <Fade left>
                <Image
                  my={[15, 20, 30]}
                  width={[130, 150, 180]}
                  src={'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg'}
                />
              </Fade>
            </Flex>
          </Box>
          <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
            <HeadingWithSublime spanColor="black" headline="Power BI" sublime="Das Datenvisualierungs-Tool für Alle" />
            <PowerBi />
          </Box>
        </Flex>
      </Container>
    </div>
    <Container>
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        style={{textAlign: 'center'}}>
        <Box>
          <h2 style={{marginBottom: 0}}>PowerBi für Sie</h2>
          <p>
            Hier finden Sie nun ein paar Beispielbilder, wie Power Bi Reports aussehen können und was alles möglich ist.
            Weiterunten finden Sie noch Live-Demo Berichte, die Sie sich gerne ansehen dürfen.
          </p>
        </Box>
        <Box>
          <Lightbox images={[powerbi1, powerbi2]} />
        </Box>
      </Flex>
    </Container>
    <div style={{backgroundColor: '#f2c811'}}>
      <Container>
        <PowerbiService />
      </Container>
    </div>
    <Container>
      <PowerBiExamples />
    </Container>
  </Layout>
)

export default BusinessIntelligenceAndReporting

// <Parallax img={powerbiBg} />
