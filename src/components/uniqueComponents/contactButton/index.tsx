/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import {Link} from 'gatsby'
import {Image} from 'rebass'
import styled from 'styled-components'
import theme from '../../../assets/theme/index'
const ContactButton = (props: any) => {
  const {text, link, icon, type} = props
  return (
    <StyledButton {...props}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        {type === 'out' ? (
          <a href={link} style={{width: '100%'}}>
            <Box width={1}>{text}</Box>
          </a>
        ) : (
          <Link to={link} style={{width: '100%'}}>
            <Box width={1}>{text}</Box>
          </Link>
        )}

        {icon ? <Image width={20} src={icon} /> : null}
      </Flex>
    </StyledButton>
  )
}
export default ContactButton

const StyledButton = styled.div`
  margin: 15px 0px;
  text-align: center;
  border: ${(props: any) => (props.border ? `2px solid ${theme.colors[props.textColor]}` : 'none')};
  border-radius: ${(props: any) => (props.border ? '30px' : 'none')};
  width: ${(props: any) => (props.width ? props.width : '100%')};
  background: ${(props: any) => (props.bg ? theme.colors[props.bg] : 'transparent')};
  transition: 0.4s;
  div > a {
    padding: 10px 20px;
    color: ${(props: any) => (props.textColor ? theme.colors[props.textColor] : theme.colors.default)};
  }
  div > a:hover {
    padding: 10px 20px;
    color: ${(props: any) => (props.bg ? theme.colors[props.bg] : theme.colors.inherit)};
  }
  &:hover {
    background: ${(props: any) => (props.textColor ? theme.colors[props.textColor] : theme.colors.default)};
  }
`
