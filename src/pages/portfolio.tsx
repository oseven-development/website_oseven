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
    <Parallax src={props.data.punch.childImageSharp.fluid} alt={'post its'} />

    {/* //----------- MachineLearning -----------// */}
    <MachineLearning />

    {/* //----------- Parllax -----------// */}
    <Parallax src={props.data.projects.childImageSharp.fluid} alt={'projectplan'} />

    {/* //----------- Consulting -----------// */}
    <ConsultingAndWorkshops />
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
