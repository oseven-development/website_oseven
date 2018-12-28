/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import theme from '../components/theme'
import {Layout, Seo, AnimatedLogo, Container, BackgroundImage, Headline} from '../components'
import Wir from '../../content/home/wir.md'
import background from '../assets/images/backgrounds/home.jpg'
import {IconList} from '../../content/home/AboutIcon'
import Aboutus from '../../content/home/aboutus.md'
const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
    <BackgroundImage img={background} bgColor={'linear-gradient(90deg, #111 0%, #555 100%)'}>
      <Flex ajustifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
        <Container>
          <AnimatedLogo />
        </Container>
      </Flex>
    </BackgroundImage>
    <Container>
      <Headline>
        <h1 className="headline">
          Über <span style={{backgroundColor: theme.colors.contrast, color: 'white', padding: '0 10px'}}>O-Seven</span>
        </h1>
      </Headline>

      <Box p={[1, 2, 3]}>
        <Headline h2color={theme.colors.main}>
          <Wir />
          <IconList />
          <Aboutus />
        </Headline>
      </Box>
    </Container>
  </Layout>
)

export default IndexPage

// load all Icon from Folder
// const reqSvgs = require.context('../../content/home/icon', true, /\.svg$/)
// const paths = reqSvgs.keys()

// const svgs = paths.map(path => {
//   return <Image width={[80, 100, 120]} src={reqSvgs(path)} />
// })
