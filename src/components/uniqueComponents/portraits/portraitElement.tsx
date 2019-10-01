/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const PortraitElement = props => {
  const {name, title} = props

  const images = useStaticQuery(graphql`
    query {
      Max: file(relativePath: {eq: "portraits/max.png"}) {
        ...FileFragment
      }
      Philipp: file(relativePath: {eq: "portraits/max.png"}) {
        ...FileFragment
      }
      Markus: file(relativePath: {eq: "portraits/markus.png"}) {
        ...FileFragment
      }
    }
  `)
  return (
    <React.Fragment>
      <Flex flexWrap="wrap" justifyContent="center" style={{marginTop: '2em'}}>
        <Box>
          <StyledPortrait>
            <Img fluid={images[name].childImageSharp.fluid} alt={name} />
          </StyledPortrait>
        </Box>
      </Flex>
      <h2 style={{textAlign: 'center'}}>{name}</h2>
      <h4 style={{textAlign: 'center'}}>{title}</h4>
      <p style={{textAlign: 'center'}}>What i DO!</p>
    </React.Fragment>
  )
}
export default PortraitElement

const StyledPortrait = styled.div`
  height: 100px;
  width: 100px;
  @media screen and (${props => props.theme.device.laptop}) {
    height: 200px;
    width: 200px;
  }
  border-radius: 100%;
  background: red;
  overflow: hidden;
`

export const query = graphql`
  fragment FileFragment on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
