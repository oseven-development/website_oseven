/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import theme from '../components/theme'
import {Layout, Seo, AnimatedLogo, Container, BackgroundImage, Headline, AnimatedArrow, Parallax} from '../components'
import Wir from '../../content/home/wir.md'
import background from '../assets/images/backgrounds/home.jpg'
import maxhaensel from '../assets/images/maxhaensel.jpg'
import {IconList} from '../../content/home/AboutIcon'
import Aboutus from '../../content/home/aboutus.md'
import parallax from '../assets/images/backgrounds/team2.jpg'

const IndexPage = () => (
  <React.Fragment>
    <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
    <BackgroundImage img={background} bgColor={'linear-gradient(90deg, #111 0%, #555 100%)'}>
      <Flex ajustifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
        <div style={{width: '100%'}}>
          <AnimatedLogo />
          <a href="#ÜberUns">
            <AnimatedArrow />
          </a>
        </div>
      </Flex>
    </BackgroundImage>
    <Container id="ÜberUns" style={{paddingTop: '1em'}}>
      <Headline>
        <h1 className="headline">
          Über <span style={{backgroundColor: theme.colors.contrast, color: 'white', padding: '0 10px'}}>O-Seven</span>
        </h1>
      </Headline>
      <Box p={[3]}>
        <Headline h2color={theme.colors.main}>
          <Wir />
          <IconList />
        </Headline>
      </Box>
    </Container>
    <Parallax img={parallax} bgPosition="center top" />
    <Container>
      <Flex id="BusinessIntelligence" flexDirection="row" flexWrap="wrap" pt={[5, 20, 30]} alignItems="center">
        <Box p={theme.paddings} width={[1, 2 / 3, 3 / 4]}>
          <Headline h2color={theme.colors.main}>
            <Aboutus />
          </Headline>
        </Box>
        <Box p={theme.paddings} width={[1, 1 / 3, 1 / 4]}>
          <Image src={maxhaensel} />
        </Box>
      </Flex>
    </Container>
  </React.Fragment>
)

export default IndexPage

// load all Icon from Folder
// const reqSvgs = require.context('../../content/home/icon', true, /\.svg$/)
// const paths = reqSvgs.keys()

// const svgs = paths.map(path => {
//   return <Image width={[80, 100, 120]} src={reqSvgs(path)} />
// })
