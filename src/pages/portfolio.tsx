/** @format */

import React from 'react'
import {graphql} from 'gatsby'
// content
import {portfolio as SiteContent} from '../assets/'

// illustrations
import {SVGportfolio} from '../assets'

// Components
import {Seo, Parallax, HeaderWithSubNavigation} from '../components'

// Content
import {SoftwareEngineering} from '../pageContent/portfolioContent/softwareEngineering'
import {MachineLearning} from '../pageContent/portfolioContent/machineLearning'
import {ConsultingAndWorkshops} from '../pageContent/portfolioContent/consultingAndWorkshops'

const lang = 'de'

const title = SiteContent.header[lang].title
const subtitle = SiteContent.header[lang].text
const nav = SiteContent.header[lang].nav
const SVG = SVGportfolio

export default props => (
  <React.Fragment>
    <Seo
      title="Portfolio"
      description="Portfolioübersicht"
      keywords="Cloud Cloudnative Serverless Software Development Aws Gcp Azure Workshops"
    />

    {/* //----------- Header -----------// */}
    <HeaderWithSubNavigation {...{title, subtitle, nav, SVG}} />

    {/* //----------- Software Entwicklung -----------// */}
    <SoftwareEngineering />

    {/* //----------- Parllax -----------// */}
    <Parallax src={props.data.mlParallax.childImageSharp.fluid} alt={'post its'} />

    {/* //----------- MachineLearning -----------// */}
    <MachineLearning />

    {/* //----------- Parllax -----------// */}
    <Parallax src={props.data.csParallax.childImageSharp.fluid} alt={'projectplan'} />

    {/* //----------- Consulting -----------// */}
    <ConsultingAndWorkshops />
  </React.Fragment>
)
// props.data.clock.childImageSharp.fluid

export const indexQuery = graphql`
  query {
    mlParallax: file(relativePath: {eq: "parallax/machineLearningParallax.png"}) {
      ...imagePre
    }
    csParallax: file(relativePath: {eq: "parallax/consultingParallax.png"}) {
      ...imagePre
    }
  }
`
