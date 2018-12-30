/** @format */

import React from 'react'
import {Link} from 'gatsby'

import {Layout, Seo, HeaderTitleBackground} from '../components'
import background from '../assets/images/backgrounds/consutling.jpg'

const ConsultingPage = () => (
  <Layout>
    <Seo title="Consulting" />
    <HeaderTitleBackground
      bgPosition="center right"
      img={background}
      h1Text="Business & Projekt Consulting"
      h3Text="Wir beraten Sie bei IT-Projekte und IT-Management etc."
    />
  </Layout>
)

export default ConsultingPage
