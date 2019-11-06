/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import {Link} from 'gatsby'
import {Image} from 'rebass'
import styled from 'styled-components'

interface IProps {
  text: string
  link: string
  icon?: any
  extern?: boolean
  textColor?: string
  border?: boolean
  width?: string
  theme?: any
  bg?: string
}

const ContactButton = (props: IProps) => {
  const {text, link, icon, extern} = props
  return (
    <StyledButton {...props}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        {extern ? (
          <a href={link}>
            <Box width={1}>{text}</Box>
          </a>
        ) : (
          <Link to={link}>
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
  margin: 15px auto;
  text-align: center;
  max-width: 300px;
  border: ${({border, theme, textColor}: IProps) => (border ? `2px solid ${theme.colors[textColor]}` : 'none')};
  border-radius: ${({border}: IProps) => (border ? '30px' : 'none')};
  width: ${({width}: IProps) => (width ? width : '100%')};
  background: ${({bg, theme}: IProps) => (bg ? theme.colors[bg] : 'transparent')};
  transition: 0.4s;
  div > a {
    padding: 10px 20px;
    color: ${({textColor, theme}: IProps) => (textColor ? theme.colors[textColor] : theme.colors.default)};
  }
  div > a:hover {
    padding: 10px 20px;
    color: ${({bg, theme}: IProps) => (bg ? theme.colors[bg] : theme.colors.inherit)};
  }
  &:hover {
    background: ${({textColor, theme}: IProps) => (textColor ? theme.colors[textColor] : theme.colors.default)};
  }
`
