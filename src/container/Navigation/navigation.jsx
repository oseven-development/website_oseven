/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'

import styled from 'styled-components'

import TopStrip from './topStrip'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      isMenuFadeing: false,
      activeTab: '',
      activeMenu: 'Home',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.setActiveToSpan = this.setActiveToSpan.bind(this)
    this.setActiveToMenu = this.setActiveToMenu.bind(this)
  }

  componentDidMount() {}

  componentWillUnmount() {
    console.log('Navigation Will Unmount')
  }

  handleToggleMenu() {
    if (this.state.isMenuVisible === true) {
      setTimeout(() => {
        this.setState({
          isMenuVisible: !this.state.isMenuVisible,
        })
      }, 1000)
    } else {
      this.setState({
        isMenuVisible: !this.state.isMenuVisible,
      })
    }
    this.setState({
      isMenuFadeing: !this.state.isMenuFadeing,
    })
  }

  setActiveToMenu(activeMenu) {
    this.handleToggleMenu()
    this.setState({activeMenu: activeMenu, activeTab: ''})
  }

  setActiveToSpan(activeTab) {
    if (this.state.activeTab === activeTab) {
      this.setState({
        activeTab: '',
      })
    } else {
      this.setState({
        activeTab: activeTab,
      })
    }
  }

  render() {
    const {nav, brand} = this.props
    return (
      <header>
        <TopStrip onToggleMenu={this.handleToggleMenu} isMenuVisible={this.state.isMenuFadeing} brand={brand} />
        <StyledNavigation
          className={'overlay-navigation'}
          // id="menu"
          style={
            this.state.isMenuFadeing ? {height: '100%', transition: 'all 0.5s'} : {height: '0%', transition: 'all 1s'}
          }>
          {this.state.isMenuVisible && (
            <Flex justifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
              <WrapNavigation
                nav={nav}
                activeTab={this.state.activeTab}
                setActiveToSpan={this.setActiveToSpan}
                activeMenu={this.state.activeMenu}
                setActiveToMenu={this.setActiveToMenu}
              />
            </Flex>
          )}
        </StyledNavigation>
      </header>
    )
  }
}

const StyledNavigation = styled.nav`
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: ${props => props.theme.colors.black};
`

class WrapNavigation extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  createActiveClass(label, state) {
    // Returns active as css Class
    return label === state ? 'active' : ''
  }

  render() {
    const {nav, level, setActiveToSpan, setActiveToMenu, activeTab, activeMenu} = this.props
    const navElement = nav.map(nav => {
      const menuIsActive = this.createActiveClass(nav.label, activeMenu)
      if (Array.isArray(nav.to)) {
        let currentLevel = level || 1
        currentLevel++
        const activeState = this.createActiveClass(nav.label, activeTab)
        return (
          <li key={nav.label} className={`nav-element-level-${level || 1} ${activeState} slide-in-nav-item `}>
            <span
              onClick={() => {
                setActiveToSpan(nav.label)
              }}
              className={`${activeState}`}>
              {nav.label}
              <span className={`arrow ${activeState}`} />
            </span>
            <WrapNavigation
              nav={nav.to}
              level={currentLevel}
              activeTab={activeTab}
              setActiveToSpan={setActiveToSpan}
              activeMenu={activeMenu}
              setActiveToMenu={setActiveToMenu}
            />
          </li>
        )
      }
      return (
        <li
          onClick={() => {
            setActiveToMenu(nav.label)
          }}
          key={nav.label}
          className={`nav-element-level-${level || 1} ${menuIsActive} slide-in-nav-item`}>
          <Link to={nav.to}>{nav.label}</Link>
        </li>
      )
    })
    return <ul className={`nav-level-${level || 1}`}>{navElement}</ul>
  }
}

// const StyledNavigationItems = styled.ul`
//   text-align: center;
//   text-decoration: none;
//   li {
//     padding: 0;
//     text-transform: uppercase;
//     font-family: 'Quicksand', sans-serif;
//     display: block;
//     font-weight: 100;
//     letter-spacing: 4px;
//     cursor: pointer;
//     padding: 1em;
//     a,
//     span  {
//       font-size: 2rem;
//       text-decoration: none;
//       color: #fff;
//       @media ${props => props.theme.device.desktop} {
//         &:hover {
//           color: ${props => props.theme.colors.main};
//           &:after {
//             width: 60%;
//           }
//         }
//       }
//       &:after {
//         content: '';
//         display: block;
//         left: 20%;
//         width: 0;
//         margin-top: 10px;
//         height: 1px;
//         background: ${props => props.theme.colors.main};
//         transition: width 0.5s;
//         position: relative;
//       }
//     }
//   }
// `

// @media (min-width: 400px)
// &:hover
//   color: lighten($color-main, 20%)
//   &:after
//     width: 60%
// &:after
// content: ''
// display: block
// left: 20%
// width: 0
// margin-top:10px
// height: 1px
// background: lighten($color-main, 20%)
// transition: width .5s
// position: relative
