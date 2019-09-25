/** @format */

import React from 'react'

import styled from 'styled-components'
import theme from '../../../assets/theme/index'
import {useWindowSize} from '../../../assets/hooks/windowWidth'

const SubNavigation = ({links}: any) => {
  const {windowWidth} = useWindowSize()
  console.log(windowWidth)
  return (
    <React.Fragment>
      {links.map((link: any) => (
        <li style={{listStyle: 'none', float: windowWidth > 768 ? 'left' : null}}>
          <StyledSubNav key={Math.random()} href={`#${link.href}`}>
            {link.label}
          </StyledSubNav>
        </li>
      ))}
    </React.Fragment>
  )
}
export default SubNavigation

const StyledSubNav = styled.a`
  transition: 0.4s;
  color: ${(props: any) => theme.colors.primary};
  padding: 0px 10px 10px 0px;

  &:hover {
    color: ${(props: any) => theme.colors.secondary};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
