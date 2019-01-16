/** @format */
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'

class Navigation extends React.Component {
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
    console.log('unmount')
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
        <nav
          className={'overlay-navigation'}
          id="menu"
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
        </nav>
      </header>
    )
  }
}

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
            <span onClick={() => setActiveToSpan(nav.label)} className={`${activeState}`}>
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

const TopStrip = props => (
  <Flex className={`strip ${props.isMenuVisible ? 'active' : ''}`} alignItems="center" justifyContent="space-between">
    <Box style={{height: '60px'}}>
      <Link to="/">
        <Image width={200} src={props.brand} />
      </Link>
    </Box>
    <Box style={{marginRight: '20px'}}>
      <div className={`button ${props.isMenuVisible ? 'active' : ''}`} onClick={props.onToggleMenu}>
        <span />
      </div>
    </Box>
  </Flex>
)

export {Navigation}
