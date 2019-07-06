/** @format */

import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {Typography} from '..'
interface INavigation {
  links: any[]
  active: string
}

const Navigation = (props: INavigation) => {
  const {links, active} = props
  const [menu, setMenu] = React.useState(false)
  const mobile = window.innerWidth < 768 ? true : false

  return (
    <React.Fragment>
      {mobile ? (
        <React.Fragment>
          <NavigationButton
            className={menu?'active':''}
            onClick={() => {
              setMenu(!menu)
            }}>
            <span />
          </NavigationButton>
          {menu ?  <StyledFullScreenNav>
          {links.map((link: any) => (
            <li>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
          </StyledFullScreenNav>: null}
         
        </React.Fragment>
      ) : (
        <StyledNav>
          {links.map((link: any) => (
            <li>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </StyledNav>
      )}
    </React.Fragment>
  )
}
export default Navigation

const StyledNav = styled.nav`
  
  li {
    list-style-type: none;
    margin: 0;
    padding: 8px;
    float: left;
  }
  li a {
    display: block;
    text-transform: uppercase;
    color: ${({theme}: any) => theme.colors.default};
  }
  [aria-current]:not([aria-current='false']) {
    font-weight: bold;
    color: ${({theme}: any) => theme.colors.primary};
  }
  li a:after,
  li a:hover {
    transition: all 0.5s;
  }
  li a:hover {
    color: ${({theme}: any) => theme.colors.primary};
    /* border-bottom: 1px solid ${({theme}: any) => theme.colors.primary}; */
  }
`

const StyledFullScreenNav = styled.nav`
  position:absolute;
  top:60;
  left:0;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:${window.innerHeight-60}px;
  width:100vw;
  background:${props => props.theme.colors.background};
  li {
    margin:auto;
    list-style-type: none;
    margin: 0;
    padding: 8px;
    text-align:center;
  }
  li a {
    display: block;
    text-transform: uppercase;
    color: ${({theme}: any) => theme.colors.default};
  }
  [aria-current]:not([aria-current='false']) {
    font-weight: bold;
    color: ${({theme}: any) => theme.colors.primary};
  }
  li a:after,
  li a:hover {
    transition: all 0.5s;
  }
  li a:hover {
    color: ${({theme}: any) => theme.colors.primary};
    /* border-bottom: 1px solid ${({theme}: any) => theme.colors.primary}; */
  }
`


const NavigationButton = styled.div`
  cursor: pointer;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  z-index: 101;
  margin-right:-20px;
  span,
  span:after,
  span:before {
    transition: 0.3s all;
    width: 30px;
    background: ${props => props.theme.colors.default};
    height: 1px;
    display: block;
    content: '';
    position: relative;
  }
  span {
    &:after {
      top: 10px;
    }
    &:before {
      top: -10px;
    }
  }
  &.active {
    span {
      background: transparent;
      &:after {
        transform: rotate(-45deg);
        top: -1px;
        background: ${props => props.theme.colors.default};
      }
      &:before {
        transform: rotate(45deg);
        top: 0;
        background: ${props => props.theme.colors.default};
      }
    }
  }
`
