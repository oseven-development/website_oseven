/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'

import TopStrip from './topStrip'
import {
  StyledNavigation,
  StyledNavigationListWrapper,
  StyledNavigationArrow,
  StyledNavigationListItems,
} from './styledNavigation'

interface IPropsNavigation {
  nav: any
  brand: any
}
interface IStateNavigation {
  isMenuVisible: boolean
  isMenuFadeing: boolean
  activeTab: string
  activeMenu: string
}

export default class Navigation extends React.Component<IPropsNavigation, IStateNavigation> {
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
                {...this.props}
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

interface IPropsWrapNavigation {
  nav: any
  level?: number
  setActiveToSpan: any
  setActiveToMenu: any
  activeTab: any
  activeMenu: any
}
interface IStateWrapNavigation {}

class WrapNavigation extends React.Component<IPropsWrapNavigation, IStateWrapNavigation> {
  constructor(props) {
    super(props)
  }

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
          <StyledNavigationListItems
            {...this.props}
            key={nav.label}
            className={`nav-element-level-${level || 1} ${activeState} slide-in-nav-item `}>
            <span
              onClick={() => {
                setActiveToSpan(nav.label)
              }}
              className={`${activeState}`}>
              {nav.label}
              <StyledNavigationArrow className={`arrow ${activeState}`} />
            </span>
            <WrapNavigation
              nav={nav.to}
              level={currentLevel}
              activeTab={activeTab}
              setActiveToSpan={setActiveToSpan}
              activeMenu={activeMenu}
              setActiveToMenu={setActiveToMenu}
            />
          </StyledNavigationListItems>
        )
      }
      return (
        <StyledNavigationListItems
          {...this.props}
          onClick={() => {
            setActiveToMenu(nav.label)
          }}
          key={nav.label}
          className={`nav-element-level-${level || 1} ${menuIsActive} slide-in-nav-item`}>
          <Link to={nav.to}>{nav.label}</Link>
        </StyledNavigationListItems>
      )
    })
    return (
      <StyledNavigationListWrapper {...this.props} className={`nav-level-${level || 1}`}>
        {navElement}
      </StyledNavigationListWrapper>
    )
  }
}
