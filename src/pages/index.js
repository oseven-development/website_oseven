/** @format */

import React from 'react'
import {Flex} from 'rebass'
import {Layout} from '../components/Layout'

import {BackgroundImage} from '../components/backgroundImage'
import {Container} from '../components/Container'
import background from '../assets/images/backgrounds/home.jpg'
import {AnimatedLogo} from '../components/Animate/animatedLogo'

const IndexPage = () => (
  <Layout>
    <section className="background-Section" id="bg1">
      <BackgroundImage img={background} style={{position: 'fixed'}}>
        <Flex ajustifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
          <Container>
            <AnimatedLogo />
          </Container>
        </Flex>
      </BackgroundImage>
    </section>
  </Layout>
)

export default IndexPage
//  <Layout>
// <section className="background-Section" id="bg1">
// <BackgroundImage img={background} style={{position: 'fixed'}}>
//   <Flex ajustifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
//     <Container ><AnimatedLogo /></Container>
//   </Flex>
// </BackgroundImage>
// </section>
// </Layout>
