/** @format */

import React from 'react'
import {Link} from 'gatsby'
import theme from '../components/theme'
import {Layout, SkewedBackground, Container, ServiceContainer} from '../components'
import Praesenz from '../../content/service/website/zeigenSiePräsens.md'
import background from '../assets/images/backgrounds/website.jpg'

const WebsitePage = () => (
  <Layout>
    <div>
      <SkewedBackground
        img={background}
        color="linear-gradient(161deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%)"
        bgPosition="center"
        rotation="rotate(6.6deg) translateZ(0)"
      />
      <Container>
        <h1 class="awesome-headline" style={{color: theme.colors.lightwhite, marginTop: '2em'}}>
          <span class="span">Deine </span>Webseite
        </h1>
        <h2 class="awesome-headline">mehr als nur Code</h2>
        <div style={{backgroundColor: 'white', padding: '1rem 2rem', marginTop: '1em'}}>
          <ServiceContainer>
            <Praesenz />
          </ServiceContainer>
        </div>
      </Container>
    </div>
  </Layout>
)

export default WebsitePage
