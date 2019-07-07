/** @format */

import React from 'react'
import {graphql} from 'gatsby'

// Components
import {Seo, Container, Typography, Content, Parallax, BackgroundImage} from '../components'

// Bilder Backgrounds

export default props => (
  <React.Fragment>
    <Container>
      <Content />
    </Container>
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    process: file(relativePath: {eq: "process.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background: file(relativePath: {eq: "process.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
