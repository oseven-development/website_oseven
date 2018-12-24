/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../theme'
import {Header, Navigation} from '../Header'
import {Footer} from '../Footer'
import '../../assets/style/stylesheet.styl'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Cabin;
}
ul {
  list-style-type: none;
}
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    console.log(this.state)
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
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
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const {children} = this.props
    // if (this.state.loading === 'is-loading') {
    //   return <Spinner />
    // } else {
    return (
      <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>
            <Header onToggleMenu={this.handleToggleMenu} isMenuVisible={this.state.isMenuVisible} />
            {children}
            {this.state.isMenuVisible && (
              <Navigation onToggleMenu={this.handleToggleMenu} isMenuVisible={this.state.isMenuVisible} />
            )}
            <Footer />
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
