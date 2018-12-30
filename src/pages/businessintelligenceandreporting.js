/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Layout, Seo, HeaderTitleBackground, Container} from '../components'
import background from '../assets/images/backgrounds/beard.jpg'
import Bitext from '../../content/service/bi/Bitext.md'
import icon from '../../content/service/bi/icon/presentation.svg'
import icon2 from '../../content/service/bi/icon/presentation2.svg'

const BusinessIntelligenceAndReporting = () => (
  <Layout>
    <Seo title="Business Intelligence & Reporting" />
    <HeaderTitleBackground
      img={background}
      h1Text="Business Intelligence & Reporting"
      h3Text="Mehr Informationen über ihre Kunden, Produkte und Standorte"
      bgPosition="center right"
    />
    <Container>
      <Flex flexDirection="row" flexWrap="wrap" mt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column">
            <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon} />
            <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon2} />
          </Flex>
        </Box>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <Bitext />
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default BusinessIntelligenceAndReporting
