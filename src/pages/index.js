/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Flex, Image} from 'rebass'
import {Layout} from '../components/Layout'

import {BackgroundImage} from '../components/backgroundImage'
import {Container} from '../components/Container'
import Logo from '../assets/images/logo-white.svg'
import background from '../assets/images/backgrounds/home.jpg'
import {AnimatedLogo} from '../components/Animate/animatedLogo'

const IndexPage = () => (
  <Layout>
    <section className="background-Section" id="bg1">
      <Container>
        <BackgroundImage img={background} style={{position: 'fixed'}} />
        <AnimatedLogo />
      </Container>
    </section>
  </Layout>
)

export default IndexPage
