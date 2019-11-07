/** @format */

import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {useWindowSize} from '../../../assets/hooks/windowWidth'
interface INavigation {
  links: any[]
}

const Navigation = (props: INavigation) => {
  const {links} = props
  const [menu, setMenu] = React.useState(false)
  const {windowWidth} = useWindowSize()
  const mobile = windowWidth < 768 ? true : false

  return (
    <React.Fragment>
      {mobile ? (
        <React.Fragment>
          <NavigationButton
            className={menu ? 'active' : ''}
            onClick={() => {
              setMenu(!menu)
            }}>
            <span />
          </NavigationButton>
          {menu ? (
            <StyledFullScreenNav>
              <ul>
                {links.map((link: any) => (
                  <li
                    key={link.to}
                    onClick={() => {
                      setMenu(!menu)
                    }}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </StyledFullScreenNav>
          ) : null}
        </React.Fragment>
      ) : (
        <StyledNav>
          <ul>
            {links.map((link: any) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </StyledNav>
      )}
    </React.Fragment>
  )
}
export default Navigation

export const StyledNav = styled.nav`
  
  li {
    list-style-type: none;
    margin: 0;
    padding: 8px;
    float: left;
  }
  li a {
    display: block;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.textColor};
  }
  [aria-current]:not([aria-current='false']) {
    font-weight: bold;
    color: ${({theme}) => theme.colors.primary};
  }
  li a:after,
  li a:hover {
    transition: all 0.5s;
  }
  li a:hover {
    color: ${({theme}) => theme.colors.primary};
    /* border-bottom: 1px solid ${({theme}: any) => theme.colors.primary}; */
  }
`

const StyledFullScreenNav = styled.nav`
  position:absolute;
  top:60px;
  left:0;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:calc(100vh - 60px);
  width:100vw;
  background:${props => props.theme.colors.background};
  ul{
    margin-top:-30px;
  }
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
    font-size: 24px;
    padding:20px;
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
  margin-right: -20px;
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
