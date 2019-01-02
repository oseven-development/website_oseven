/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Layout, Seo, HeaderTitleBackground, Container, ConsultingHeadline, AnimatedArrow} from '../components'
import background from '../assets/images/backgrounds/beard.jpg'
import Bitext from '../../content/service/bi/Bitext.md'
import icon from '../../content/service/bi/icon/presentation.svg'
import icon2 from '../../content/service/bi/icon/presentation2.svg'
import picon from '../../content/service/bi/icon/picon.svg'
import theme from '../components/theme'
import Reporting from '../../content/service/bi/reporting.md'
import PowerBi from '../../content/service/bi/powerbi.md'

const BusinessIntelligenceAndReporting = () => (
  <Layout>
    <Seo title="Business Intelligence & Reporting" />
    <HeaderTitleBackground
      img={background}
      h1Text="Business Intelligence & Reporting"
      h3Text="Mehr Informationen über ihre Kunden, Produkte und Standorte gewinnen."
      bgPosition="center right">
      <AnimatedArrow />
    </HeaderTitleBackground>
    <Container>
      <Flex flexDirection="row" flexWrap="wrap" mt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon} />
            <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon2} />
          </Flex>
        </Box>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <Bitext />
        </Box>
      </Flex>
    </Container>
    <div style={{background: theme.colors.second}}>
      <Container>
        <Flex justifyContent="center" alignItems="center" px={[1, 2, 3]} pt={[5, 20, 40]}>
          <ConsultingHeadline h3color="white" h4color="white" pcolor="white" weight={600} style={{textAlign: 'center'}}>
            <Reporting />
          </ConsultingHeadline>
        </Flex>
      </Container>
    </div>
    <Container>
      <Flex flexDirection="row" flexWrap="wrap" mt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Image
              my={[15, 20, 30]}
              width={[130, 150, 180]}
              src={'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg'}
            />
          </Flex>
        </Box>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <PowerBi />
        </Box>
      </Flex>
    </Container>
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <ConsultingHeadline style={{textAlign: 'center'}}>
        <h1>Power Bi Beispiel</h1>
        <h3>Beispiel Berichte mit echten Daten erstellen</h3>
      </ConsultingHeadline>

      <iframe
        src="https://app.powerbi.com/view?r=eyJrIjoiZDRhYjljNjAtMGQ5MC00ODE3LWIyMWEtOTJkMzUyNzIyZjQwIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
        frameborder="0"
        allowFullScreen="true"
        style={{width: window.innerWidth - 20, height: window.innerWidth / 1.65 - 20, maxWidth: 1330, maxHeight: 795}}
      />
    </Flex>
  </Layout>
)

export default BusinessIntelligenceAndReporting
