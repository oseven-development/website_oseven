/** @format */
import React from 'react'
import Img from 'gatsby-image'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'

export default props => (
  <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
    <Box mx={[2, 20, 30]} width={[3 / 5, 4 / 5, 1 / 3]}>
      <StyledImage>
        <Img fluid={props.image} alt={props.alt} style={{borderRadius: '50%', overflow: 'hidden'}} />
      </StyledImage>
      <h4 style={{textAlign: 'center'}}>Max Hänsel</h4>
    </Box>
  </Flex>
)

// import {COLOR} from '../../constants'

const StyledImage = styled.div`
  filter: grayscale(100%);
  transition: all 0.5s ease;
  :hover {
    filter: grayscale(0%);
  }
`
