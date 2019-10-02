/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

export default ({title, subtitle, imageFolder}: {title: String; subtitle: String; imageFolder: string}) => {
  const customer = useStaticQuery(graphql`
    query {
      heikehaensel: file(relativePath: {eq: "references/heikehänsel.png"}) {
        ...imagePropsCustomer
      }
      wagnerbauservice: file(relativePath: {eq: "references/wagner-color.png"}) {
        ...imagePropsCustomer
      }
      soarce: file(relativePath: {eq: "references/soarce.png"}) {
        ...imagePropsCustomer
      }
      priofol: file(relativePath: {eq: "references/priofol.png"}) {
        ...imagePropsCustomer
      }
    }
  `)
  return (
    <React.Fragment>
      <Flex flex="flexWrap">
        <Box width={[2 / 3, 3 / 5]}>
          <h2>{title}</h2>
          {subtitle ? <h3>{subtitle}</h3> : null}
        </Box>
        <Box width={[1 / 3, 2 / 5]}>
          {customer[imageFolder] ? (
            <Img
              style={{margin: 'auto'}}
              fluid={customer[imageFolder].childImageSharp.fluid}
              key={'node.node.id'}
              alt={'node.node.name.replace(/-/g,)'}
            />
          ) : null}
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export const imagePropsCustomer = graphql`
  fragment imagePropsCustomer on File {
    childImageSharp {
      fluid(maxHeight: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
