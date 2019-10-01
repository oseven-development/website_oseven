/** @format */
import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

interface IProps {}

export default (props: IProps) => {
  const [index, setIndex] = useState(0)

  const {allFile} = useStaticQuery(
    graphql`
      query {
        allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "slides"}}) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `,
  )

  const length = allFile.edges.length - 1
  const handleNext = () => (index === length ? setIndex(0) : setIndex(index + 1))
  const handlePrevious = () => (index === 0 ? setIndex(length) : setIndex(index - 1))
  const {node} = allFile.edges[index]
  return (
    <div style={{boxShadow: '0 0 15px #565656', height: '400px', padding: '20px'}}>
      <div style={{position: 'relative'}}>
        <div style={{maxHeight: '400px', overflow: 'hidden', height: '400px'}}>
          <Img
            style={{margin: 'auto'}}
            fluid={node.childImageSharp.fluid}
            key={node.id}
            alt={node.name.replace(/-/g, ' ').substring(2)}
          />
        </div>
        <StyledButton onClick={() => handlePrevious()} />
        <StyledButton onClick={() => handleNext()} />
      </div>
    </div>
  )
}

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  border: none;
  width: 50px;
  height: 100%;
  transition: background 0.2s;
  cursor: pointer;
  /* opacity: 0.3; */
  background: rgba(235, 235, 235, 0.2);
  /* background-image: linear-gradient(to right, rgba(235, 235, 235, 0.2) 80%, rgba(235, 235, 235, 0) 100%); */
  :hover {
    background: rgba(235, 235, 235, 0.4);
    /* opacity: 0.5; */
  }
  :last-child {
    right: 0;
  }
  :focus {
    outline: 0;
  }
  :before,
  :after {
    content: '';
    height: 1px;
    width: 20px;
    background: black;
    display: block;
    opacity: 1;
    position: absolute;
    top: 50%;
  }
  :before {
    transform: translate(10px, 7px) rotate(45deg);
  }
  :after {
    transform: translate(10px, -7px) rotate(-45deg);
  }
  :last-child {
    :before,
    :after {
    }
    :before {
      transform: translate(20px, 7px) rotate(-45deg);
    }
    :after {
      transform: translate(20px, -7px) rotate(45deg);
    }
  }
`

export const indexQuery = graphql`
  query {
    slides: allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "slides"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    background: file(relativePath: {eq: "test/test4.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    consulting: file(relativePath: {eq: "skills/consulting.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sw: file(relativePath: {eq: "skills/sw.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ml: file(relativePath: {eq: "skills/ml.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
