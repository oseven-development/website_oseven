/** @format */
import React, {FunctionComponent} from 'react'
import Img from 'gatsby-image'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'

import {DefaultHeadline} from '../'

interface IProps {
  image: any
  alt: string
}

const EmployerBox: FunctionComponent<IProps> = props => (
  <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
    <Box mx={[2, 20, 30]} width={[3 / 5, 4 / 5, 1 / 3]}>
      <StyledImage>
        <Img fluid={props.image} alt={props.alt} style={{borderRadius: '50%', overflow: 'hidden'}} />
      </StyledImage>
      <DefaultHeadline>
        <h4>Max Hänsel</h4>
      </DefaultHeadline>
    </Box>
  </Flex>
)

export default EmployerBox

const StyledImage = styled.div`
  filter: grayscale(100%);
  transition: all 0.5s ease;
  :hover {
    filter: grayscale(0%);
  }
`
