/** @format */

import React from 'react'
import {graphql} from 'gatsby'
import {references as SiteContent} from '../assets'
import {SVGreferences} from '../assets/'

// Components
import {Seo, Parallax} from '../components'
import HeaderWithSubNavigation from '../components/header/headerWithSubNavigation'

// Content
import {Customer} from '../pageContent/referenzenContent/customers'
import {Projects} from '../pageContent/referenzenContent/projects'

const lang = 'de'

const title = SiteContent.header.title[lang]
const subtitle = SiteContent.header.text[lang]
const nav = SiteContent.header.nav
const SVG = SVGreferences

export default props => {
  return (
    <React.Fragment>
      <Seo title="Referenzen" description="Refrenzen" keywords="Kunden Talos Caligraf Referenzen" />
      {/* //! Header */}
      <HeaderWithSubNavigation {...{title, subtitle, nav, SVG}} />
      <Projects />
      <Parallax src={props.data.parallax.childImageSharp.fluid} />
      <Customer />
    </React.Fragment>
  )
}
export const indexQuery = graphql`
  query {
    parallax: file(relativePath: {eq: "parallax/together.jpg"}) {
      ...imagePre
    }
  }
`
