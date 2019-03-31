/** @format */

import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: ${props => props.theme.colors.black};
`

export const StyledNavigationListWrapper = styled.ul`
  text-align: center;
  text-decoration: none;
  .nav-level-2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  li.nav-element-level-1.slide-in-nav-item.active {
    li.nav-element-level-2 {
      max-height: 100px;
      padding: 0.6em 0;
    }
  }
`
export const StyledNavigationArrow = styled.span`
  &.active {
    &:before,
    &:after {
      background: ${({theme}: any) => theme.colors.contrast.color};
    }
  }
  width: 30px;
  height: 40px;
  position: absolute;
  margin-left: 10px;
  &:hover {
    &:after,
    &:before {
      background: white;
    }
  }
  &:before,
  &:after {
    background: whitesmoke;
    width: 20px;
    transition: 0.3s all;
    height: 1px;
    display: block;
    content: '';
    right: 10%;
    position: absolute;
    margin-top: 0;
    top: 17px;
  }
  &:after {
    transform: rotate(90deg);
  }
  &.active {
    &:after {
      transform: rotate(45deg);
    }
    &:before {
      transform: rotate(-45deg);
    }
    &:after,
    &:before {
      transition: 0.3s all;
      width: 20px;
      height: 1px;
      display: block;
      content: '';
      position: absolute;
    }
  }
`

export const StyledNavigationListItems = styled.li`
  text-transform: uppercase;
  font-family: 'Quicksand', sans-serif;
  display: block;
  font-weight: 100;
  letter-spacing: 4px;
  cursor: pointer;
  padding: 0.6em 0;
  a,
  span  {
    font-size: 1.6rem;
    text-decoration: none;
    color: #fff;
    > &:hover { color: #777; }
    /* @media ${props => props.theme.device.desktop} {
      &:hover {
        color: ${props => props.theme.colors.main};
        &:after {
          width: 60%;
        }
      }
    } */
    > &:after {
      content: '';
      display: block;
      left: 20%;
      width: 0;
      margin-top: 10px;
      height: 1px;
      background: ${props => props.theme.colors.main};
      transition: width 0.5s;
      position: relative;
    }
  }
  .nav-level-2{
      li {
        a, span {
          font-size: 1.2em
        }
      }
    }
  &.nav-element-level-1.slide-in-nav-item.active {
    > a, > span {
      color: ${({theme}: any) => theme.colors.contrast.color};
    }
  };
  .nav-element-level-2{
      transition: 1s all ease;
      max-height: 0px;
      overflow: hidden;
      padding: 0;
  }
`
