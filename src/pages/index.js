/** @format */

import React from 'react'
import {Flex} from 'rebass'
import {Layout, Seo, AnimatedLogo, Container, BackgroundImage} from '../components'

import background from '../assets/images/backgrounds/home.jpg'

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
  </Layout>
)

export default IndexPage
