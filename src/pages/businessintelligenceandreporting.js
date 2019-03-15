/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {
  Seo,
  HeaderTitleBackground,
  Container,
  ConsultingHeadline,
  AnimatedArrow,
  HeadingWithSublime,
  smallNav,
  Parallax,
  TextSlider,
  ListContainer as Mylist,
  Lightbox,
} from '../components'
import Fade from 'react-reveal/Fade'
import background from '../assets/images/backgrounds/beard.jpg'
import powerbiBg from '../assets/images/backgrounds/powerbi_parallax.jpg'
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
import powerbiBg2 from '../assets/images/backgrounds/clock.jpg'

import {SmallContainers, ContentBox} from '../container'

const navObject = [
  {name: 'Business Intelligence', to: 'BusinessIntelligence'},
  {name: 'Business Reporting', to: 'BusinessReporting'},
  {name: 'Power Bi', to: 'PowerBi'},
]

const BusinessIntelligenceAndReporting = () => (
  <React.Fragment>
    <Seo title="Business Intelligence & Reporting" />

    <HeaderTitleBackground
      img={background}
      h1Text="Business Intelligence & Reporting"
      h3Text="Mehr Informationen über ihre Kunden, Produkte und Standorte gewinnen."
      bgPosition="center right"
      nav={smallNav(navObject)}
    />

    <Container>
      <Flex id="BusinessIntelligence" flexDirection="row" flexWrap="wrap" pt={[5, 20, 30]}>
        <Box p={theme.paddings} width={[1, 1 / 3, 1 / 3]}>
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
        <Box p={theme.paddings} width={[1, 2 / 3, 2 / 3]}>
          <HeadingWithSublime spanColor="black" headline="Buisness Intelligence" sublime="Der Weg zur Datenkontrolle" />
          <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}>
            <Bitext />
          </Mylist>
        </Box>
      </Flex>
    </Container>

    <Parallax img={powerbiBg} />

    <SmallContainers backgroundColor={'second'}>
      <ContentBox
        width={[1]}
        h2={{content: 'Business Reporting', color: 'white'}}
        componentBottom={
          <TextSlider
            textColor="white"
            headingColor="white"
            padding={'0px 5px'}
            items={[<Reporting />, <Zweck />, <Berichtswesen />]}
          />
        }
      />
    </SmallContainers>

    <Parallax img={powerbiBg2} />

    <SmallContainers backgroundColor={'#f2c811'}>
      <ContentBox
        width={[1, 1 / 3]}
        componentTop={
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Fade left>
              <Image
                my={[15, 20, 30]}
                width={[130, 150, 180]}
                src={'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg'}
              />
            </Fade>
          </Flex>
        }
      />
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'POWER BI', color: 'black', style: 'sublime'}}
        h2={{content: 'Das Datenvisualierungs-Tool für Alle', color: 'black', style: 'sublime'}}
        paragraph={
          'Power BI ist eine Business Intelligence Lösung, mit der Sie Ihre Daten visualisieren und Erkenntnisse in Ihrem Unternehmen austauschen oder in Ihre App oder Website einbetten können. Erwecken Sie Ihre Daten mit Live-Dashboards und Berichten zum Leben.'
        }
      />
    </SmallContainers>

    <SmallContainers>
      <ContentBox
        width={3 / 4}
        h2={{content: 'PowerBi für Sie', color: 'black'}}
        paragraph={
          'Hier finden Sie nun ein paar Beispielbilder, wie Power Bi Reports aussehen können und was alles möglich ist. Weiterunten finden Sie noch Live-Demo Berichte, die Sie sich gerne ansehen dürfen.'
        }
        componentBottom={<Lightbox images={[powerbi1, powerbi2]} />}
      />
    </SmallContainers>

    <SmallContainers backgroundColor={'#f2c811'}>
      <ContentBox
        width={1}
        h2={{content: 'WAS WIR IHNEN ERMÖGLICHEN', color: 'black'}}
        paragraph={
          'Hier finden Sie nun ein paar Beispielbilder, wie Power Bi Reports aussehen können und was alles möglich ist. Weiterunten finden Sie noch Live-Demo Berichte, die Sie sich gerne ansehen dürfen.'
        }
        componentBottom={<PowerbiService />}
      />
    </SmallContainers>

    <SmallContainers>
      <ContentBox
        width={1}
        h2={{content: 'LIVE-DEMO BERICHTE', color: 'black'}}
        componentBottom={<PowerBiExamples />}
      />
    </SmallContainers>
  </React.Fragment>
)

export default BusinessIntelligenceAndReporting
