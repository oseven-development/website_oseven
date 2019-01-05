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
} from '../components'
import Fade from 'react-reveal/Fade'
import background from '../assets/images/backgrounds/beard.jpg'
import Bitext from '../../content/service/bi/Bitext.md'
import icon1 from '../../content/service/bi/icon/bi1.svg'
import icon2 from '../../content/service/bi/icon/bi2.svg'
import icon3 from '../../content/service/bi/icon/bi3.svg'
import theme from '../components/theme'
import Reporting from '../../content/service/bi/reporting.md'
import PowerBi from '../../content/service/bi/powerbi.md'

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
      <AnimatedArrow />
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
          <HeadingWithSublime headline="Buisness Intelligence" sublime="Der Weg zur Datenkontrolle" />
          <Bitext />
        </Box>
      </Flex>
    </Container>
    <div style={{background: theme.colors.second}}>
      <Container>
        <Flex id="BusinessReporting" justifyContent="center" alignItems="center" px={[1, 2, 3]} py={[5, 20, 40]}>
          <ConsultingHeadline h3color="white" h4color="white" pcolor="white" weight={600} style={{textAlign: 'center'}}>
            <Fade>
              <Reporting />
            </Fade>
          </ConsultingHeadline>
        </Flex>
      </Container>
    </div>
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
          <HeadingWithSublime headline="Power BI" sublime="Das Datenvisualierungs-Tool für Alle" />
          <PowerBi />
        </Box>
      </Flex>
    </Container>
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <ConsultingHeadline style={{textAlign: 'center'}}>
        <h1>Power Bi Beispiel</h1>
        <h3>Beispiel Berichte mit echten Daten eines Onlineshop</h3>
      </ConsultingHeadline>

      <iframe
        src="https://app.powerbi.com/view?r=eyJrIjoiZDRhYjljNjAtMGQ5MC00ODE3LWIyMWEtOTJkMzUyNzIyZjQwIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
        frameBorder="0"
        allowFullScreen={true}
        style={{width: 'calc(500px + 10vw * 5 )', height: 'calc(calc(500px + 10vw * 5 )/4*2.378)'}}
      />
    </Flex>
  </Layout>
)

export default BusinessIntelligenceAndReporting
