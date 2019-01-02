/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Flex, Box, Image} from 'rebass'
import {Layout, Seo, HeaderTitleBackground, Container, Parallax} from '../components'
import background from '../assets/images/backgrounds/consutling.jpg'
import Business from '../../content/service/consulting/business.md'
import Zitat from '../../content/service/consulting/zitat.md'
import icon from '../../content/service/consulting/icon/content.svg'
import icon2 from '../../content/service/consulting/icon/checklist.svg'
import {Schritte} from '../../content/service/consulting/schritte'
import theme from '../components/theme'
import parallax from '../assets/images/backgrounds/consultingparallax.jpg'

const ConsultingPage = () => (
  <Layout>
    <Seo title="Consulting" />
    <HeaderTitleBackground
      bgPosition="center right"
      img={background}
      h1Text="Business & Projekt Consulting"
      h3Text="Wir beraten Sie bei der Durchführung von IT-Projekte und Unternehmensentscheidungen."
    />
    <Container>
      <Flex flexDirection="row" flexWrap="wrap" mt={[5, 20, 30]}>
        <Box p={[1, 2, 3]} width={[1, 1 / 3, 1 / 3]}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon} />
            <Image my={[15, 20, 30]} width={[130, 150, 180]} src={icon2} />
          </Flex>
        </Box>
        <Box p={[1, 2, 3]} width={[1, 2 / 3, 2 / 3]}>
          <Business />
        </Box>
      </Flex>
    </Container>
    <Flex py={[10, 30, 60, 80]} style={{background: theme.colors.second}}>
      <Container style={{textAlign: 'center'}}>
        <Schritte />
      </Container>
    </Flex>
    <Parallax img={parallax} />
  </Layout>
)

export default ConsultingPage
