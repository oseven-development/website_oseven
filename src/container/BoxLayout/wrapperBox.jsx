/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'
import colorPick from '../../components/colorTheme'

const StyledContainer = styled.div`
  margin: 0 auto;
  background-color: ${props => colorPick(props.backgroundColor) || 'white'};
  ${({Debug}) => Debug && 'background-color: red !important;'}
`

const StyledFlexer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  ${({Debug}) => Debug && 'background-color: red !important;'}
`

const Flexer = ({children, ...props}) => (
  <StyledContainer {...props} id={props.id}>
    <StyledFlexer {...props}>
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        pt={[2, 20, 30]}
        pb={[2, 20, 30]}
        px={[3, 3, 3, 0]}
        alignItems="center"
        justifyContent="center">
        {children}
      </Flex>
    </StyledFlexer>
  </StyledContainer>
)

export default ({children, ...props}) => {
  if (Array.isArray(children)) {
    return (
      <Flexer {...props}>
        {children.map(child => {
          return (
            <Box key={Math.random()} {...props} width={child.props.width}>
              {child}
            </Box>
          )
        })}
      </Flexer>
    )
  } else {
    return (
      <Flexer {...props}>
        <Box key={Math.random()} {...props} width={children.props.width}>
          {children}
        </Box>
      </Flexer>
    )
  }
}
