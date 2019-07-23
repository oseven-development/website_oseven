/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import {Link} from 'gatsby'
import {Image} from 'rebass'
import styled from 'styled-components'

const ContactButton = (props: any) => {
  const {text, link, icon} = props
  return (
    <Flex justifyContent={'center'}>
      <Box>
        <Link to={link}>{text}</Link>
      </Box>
      <Box>
        <Image width={20} src={icon} />
      </Box>
    </Flex>
  )
}
export default ContactButton

const Button = styled.div`
  background: ${props => props.theme.colors[props.bg]};
  &:hover {
  }
`
