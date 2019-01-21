/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../theme'
import {Header, Navigation} from '../Header'
import {Footer} from '../Footer'
import {Navigation as NewNav} from '../Navigation'
import navItems from '../Header/NavigationItems'
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

@media (max-width: 769px) {
 #ArrowDrawing{
   Display:none;
 }
}

`

class Layout extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {children} = this.props
    return (
      <main className={`body`}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NewNav nav={navItems} brand={oseven} />
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

export {Layout}
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
