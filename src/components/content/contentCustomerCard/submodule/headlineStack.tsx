/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

interface IProps {
  title: {de: string}
  subtitle: {de: string}
  imageFolder: string
  description: {
    de: string[]
  }
}

export default ({title, subtitle, imageFolder, description}: IProps) => {
  const customer = useStaticQuery(graphql`
    query {
      heikehaensel: file(relativePath: {eq: "references/heikehaensel.png"}) {
        ...imagePropsCustomer
      }
      wagnerbauservice: file(relativePath: {eq: "references/wagner.png"}) {
        ...imagePropsCustomer
      }
      soarce: file(relativePath: {eq: "references/soarce.png"}) {
        ...imagePropsCustomer
      }
      priofol: file(relativePath: {eq: "references/priofol.png"}) {
        ...imagePropsCustomer
      }
      talos: file(relativePath: {eq: "references/talos.png"}) {
        ...imagePropsCustomer
      }
    }
  `)
  return (
    <>
      <Flex flex="flexWrap">
        <Box flex="1 1 auto">
          <h2>{title && title.de ? title.de : null}</h2>
          {subtitle && subtitle.de ? <h3>{subtitle.de}</h3> : null}
        </Box>
        <Box>
          {customer[imageFolder] ? (
            <Img
              style={{margin: 'auto'}}
              fixed={customer[imageFolder].childImageSharp.fixed}
              key={'node.node.id'}
              alt={'node.node.name.replace(/-/g,)'}
            />
          ) : null}
        </Box>
      </Flex>

      {description.de.map((content, i) => (
        <p key={i}>{content}</p>
      ))}
    </>
  )
}

export const imagePropsCustomer = graphql`
  fragment imagePropsCustomer on File {
    childImageSharp {
      fixed(height: 80) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`
