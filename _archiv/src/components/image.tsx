/** @format */

import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

export default ({path}) => {
  return <Img fluid={images.image.childImageSharp.fluid} alt={name} />
}

export const query = graphql`
  fragment FileFragment on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
