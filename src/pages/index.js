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
        <AnimatedLogo />
        <p>
          <strong>Thanks for using awesome-gatsby-starter!</strong> Remember to
          <a href="https://github.com/South-Paw/awesome-gatsby-starter">drop a ⭐ on the project</a> if you find it
          useful.
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
// <BackgroundImage img={background} style={{position: 'fixed'}} />
