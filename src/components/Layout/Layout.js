/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../theme'
import {Header, Navigation} from '../Header'
import {Spinner} from './spinner'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Cabin;
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
            <div
              style={{
                margin: '0 auto',
                maxWidth: '40rem',
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}>
              {children}
            </div>
            {this.state.isMenuVisible && (
              <Navigation onToggleMenu={this.handleToggleMenu} isMenuVisible={this.state.isMenuVisible} />
            )}
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
