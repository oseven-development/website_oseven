/** @format */

import React from 'react'

import styled from 'styled-components'
import {useWindowSize} from '../../../assets/hooks/windowWidth'

interface IProps {
  nav: {label: string; href: string}[]
}

const SubNavigation = ({nav}: IProps) => {
  const {windowWidth} = useWindowSize()
  return (
    <StyledSubNavx>
      {nav.map(link => (
        <li key={link.label}>
          <a key={link.label} href={`#${link.href}`}>
            {link.label}
          </a>
        </li>
      ))}
    </StyledSubNavx>
  )
}
export default SubNavigation

const StyledSubNavx = styled.ul`
  margin-top: 4em;
  @media (${({theme}) => theme.device.laptop}) {
    margin-top: 0em;
  }
  li {
    list-style: none;
    float: left;
    @media (${({theme}) => theme.device.laptop}) {
      float: none;
    }
    a {
      transition: 0.2s;
      color: ${({theme}) => theme.colors.secondary};
      padding: 0 10px 0 0;
      text-decoration: underline;

      &:hover {
        color: ${({theme}) => theme.colors.primary};
      }
      @media (${({theme}) => theme.device.laptop}) {
        width: 100%;
      }
    }
  }
`
