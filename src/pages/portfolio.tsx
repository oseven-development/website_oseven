/** @format */

import React from 'react'
import {graphql} from 'gatsby'
// content
import SiteContent from '../assets/content/portfolio'

// illustrations
import {SVGentwicklung} from '../assets'

// Components
import {Seo, Container, Parallax} from '../components'

import HeaderWithSubNavigation from '../components/header/headerWithSubNavigation'
import {SoftwareEngineering} from '../pageContent/portfolioContent/softwareEngineering'
import {MachineLearning} from '../pageContent/portfolioContent/machineLearning'
import {ConsultingAndWorkshops} from '../pageContent/portfolioContent/consultingAndWorkshops'

const lang = 'de'

const title = SiteContent.header[lang].title
const subtitle = SiteContent.header[lang].text
const nav = SiteContent.header[lang].nav
const SVG = SVGentwicklung

export default props => (
  <React.Fragment>
    <Seo
      title="Portfolio"
      description="Portfolioübersicht"
      keywords="Cloud Cloudnative Serverless Software Development Aws Gcp Azure Workshops"
    />

    {/* //----------- Header -----------// */}
    <HeaderWithSubNavigation {...{title, subtitle, nav, SVG}} />
    {/* //----------- Header -----------// */}

    {/* //----------- Software Entwicklung -----------// */}
    <SoftwareEngineering />
    {/* //----------- Software Entwicklung -----------// */}

    {/* //----------- Parllax -----------// */}
    <Container inbox fullscreen>
      <Parallax src={props.data.punch.childImageSharp.fluid} alt={'post its'} />
    </Container>
    {/* //----------- Parllax -----------// */}

    {/* //----------- MachineLearning -----------// */}
    <MachineLearning />
    {/* //----------- MachineLearning -----------// */}

    {/* //----------- Parllax -----------// */}
    <Container inbox fullscreen>
      <Parallax src={props.data.projects.childImageSharp.fluid} alt={'projectplan'} />
    </Container>
    {/* //----------- Parllax -----------// */}

    {/* //----------- Consulting -----------// */}

    <ConsultingAndWorkshops />
    {/* //----------- Consulting -----------// */}
  </React.Fragment>
)
// props.data.clock.childImageSharp.fluid

export const indexQuery = graphql`
  query {
    punch: file(relativePath: {eq: "parallax/punch.jpg"}) {
      ...imagePre
    }
    projects: file(relativePath: {eq: "parallax/projects.jpg"}) {
      ...imagePre
    }
  }
`
