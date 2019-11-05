/** @format */

import React from 'react'

import styled from 'styled-components'
import theme from '../../../assets/theme/index'
import {useWindowSize} from '../../../assets/hooks/windowWidth'

interface IProps {
  nav: {label: string; href: string}[]
}

const SubNavigation = ({nav}: IProps) => {
  const {windowWidth} = useWindowSize()
  return (
    <ul style={{marginTop: '4em'}}>
      {nav.map(link => (
        <li style={{listStyle: 'none', float: windowWidth > 768 ? 'left' : null}}>
          <StyledSubNav key={link.label} href={`#${link.href}`}>
            {link.label}
          </StyledSubNav>
        </li>
      ))}
    </ul>
  )
}
export default SubNavigation

const StyledSubNav = styled.a`
  transition: 0.2s;
  color: ${() => theme.colors.secondary};
  padding: 30px 10px 10px 0px;
  text-decoration: underline;

  &:hover {
    color: ${() => theme.colors.primary};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
