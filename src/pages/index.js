/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Flex, Image} from 'rebass'
import {Layout} from '../components/Layout'

import {BackgroundImage} from '../components/backgroundImage'
import {Container} from '../components/Container'

import background from '../assets/images/backgrounds/home.jpg'

const IndexPage = () => (
  <Layout>
    <section className="background-Section" id="bg1">
      <BackgroundImage img={background} style={{position: 'fixed'}} />
      <Container>
        <h1>Hi there!</h1>
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
