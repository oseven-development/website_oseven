/** @format */

// React and Libarys
import React from 'react'
import PropTypes from 'prop-types'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

import theme from '../../components/theme'

// Containers
import {Footer} from '../'
import {Navigation} from '../'

import navItems from '../../routes/routes'

import oseven from '../../assets/images/logo-o-seven-black-small.svg'
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

@media (max-width: 910px) {
 #ArrowDrawing{
   Display:none;
 }
}

`

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {children} = this.props
    return (
      <main className={'body'}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Navigation nav={navItems} brand={oseven} />
            <div className={'content'}>{children}</div>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

//
// <Header siteTitle={data.site.siteMetadata.title} />
//      <NewNav nav={navItems} brand={oseven} />
//    <NewNav nav={navItems} brand={oseven} />

// <Header onToggleMenu={this.handleToggleMenu} isMenuVisible={this.state.isMenuFadeing} />
// <Navigation
//   isMenuVisible={this.state.isMenuVisible}
//   isMenuFadeing={this.state.isMenuFadeing}
//   toggleActive={this.setActiveToSpan}
//   activeTab={this.state.activeTab}
// />
