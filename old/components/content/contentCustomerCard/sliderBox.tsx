/** @format */
import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {StyledButton, StyledShadowBoxInner, StyledShadowBoxWrapper} from './style'
import {Flex, Box} from 'rebass'

interface IProps {
  imageFolder: string
}

export default ({imageFolder}: IProps) => {
  const [index, setIndex] = useState(0)
  const items = useStaticQuery(
    graphql`
      query {
        # Customers
        heikehaensel: allFile(
          sort: {fields: name, order: DESC}
          filter: {sourceInstanceName: {eq: "customerSlides"}, relativeDirectory: {eq: "heikehaensel"}}
        ) {
          ...image
        }
        wagnerbauservice: allFile(
          sort: {fields: name, order: DESC}
          filter: {sourceInstanceName: {eq: "customerSlides"}, relativeDirectory: {eq: "wagnerbauservice"}}
        ) {
          ...image
        }
        soarce: allFile(
          sort: {fields: name, order: DESC}
          filter: {sourceInstanceName: {eq: "customerSlides"}, relativeDirectory: {eq: "soarce"}}
        ) {
          ...image
        }
        priofol: allFile(
          sort: {fields: name, order: DESC}
          filter: {sourceInstanceName: {eq: "customerSlides"}, relativeDirectory: {eq: "priofol"}}
        ) {
          ...image
        }
        # Projects
        caligraf: allFile(
          sort: {fields: name, order: DESC}
          filter: {sourceInstanceName: {eq: "customerSlides"}, relativeDirectory: {eq: "caligraf"}}
        ) {
          ...image
        }
        talos: allFile(
          sort: {fields: name, order: DESC}
          filter: {sourceInstanceName: {eq: "customerSlides"}, relativeDirectory: {eq: "talos"}}
        ) {
          ...image
        }
      }
    `,
  )

  const handleNext = () => (index === length ? setIndex(0) : setIndex(index + 1))
  const handlePrevious = () => (index === 0 ? setIndex(length) : setIndex(index - 1))
  const length = items[imageFolder].edges.length !== 0 ? items[imageFolder].edges.length - 1 : undefined
  const node = items[imageFolder].edges.length !== 0 ? items[imageFolder].edges[index] : undefined

  return (
    <StyledShadowBoxWrapper>
      <div style={{position: 'relative'}}>
        <StyledShadowBoxInner>
          <Flex alignItems={'center'} height={'100%'}>
            <Box width={1}>
              {items[imageFolder] && node ? (
                <Img
                  style={{margin: 'auto'}}
                  fluid={node.node.childImageSharp.fluid}
                  key={node.node.id}
                  alt={node.node.name.replace(/-/g, ' ').substring(2)}
                />
              ) : (
                <p style={{textAlign: 'center'}}>no images</p>
              )}
            </Box>
          </Flex>
        </StyledShadowBoxInner>
        <StyledButton onClick={handlePrevious} />
        <StyledButton onClick={handleNext} />
      </div>
    </StyledShadowBoxWrapper>
  )
}

export const fragment = graphql`
  fragment image on FileConnection {
    edges {
      node {
        id
        name
        childImageSharp {
          fluid(maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
