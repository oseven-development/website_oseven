/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../theme'
import {Header, Navigation} from '../Header'
import {Footer} from '../Footer'
import '../../assets/style/stylesheet.styl'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; 
    scroll-behavior: smooth;
  }
body {
  margin: 0;
  font-family: Cabin;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  text-decoration: none;
}

@media (max-width: 769px) {
 #ArrowDrawing{
   Display:none;
 }
}

`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      isMenuFadeing: false,
      activeTab: '',
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.setActiveToSpan = this.setActiveToSpan.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({loading: ''})
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
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
  x() {
    console.log('asd')
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
    const {children} = this.props
    // if (this.state.loading === 'is-loading') {
    //   return <Spinner />
    // } else {
    return (
      <div className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>
            <Header onToggleMenu={this.handleToggleMenu} isMenuVisible={this.state.isMenuFadeing} />
            {children}
            <Footer />
            <Navigation
              isMenuVisible={this.state.isMenuVisible}
              isMenuFadeing={this.state.isMenuFadeing}
              toggleActive={this.setActiveToSpan}
              activeTab={this.state.activeTab}
            />
          </div>
        </ThemeProvider>
      </div>
    )
  }
  //   }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Layout}

// <Header siteTitle={data.site.siteMetadata.title} />
