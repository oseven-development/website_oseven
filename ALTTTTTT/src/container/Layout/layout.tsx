/** @format */

// React and Libarys
import React from 'react'
import {graphql} from 'gatsby'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'

// Theme
import theme from '../../library/theme'

// Containers
import {Footer, Navigation} from '../'

import navItems from '../../routes/routes'

import oseven from '../../assets/images/logo-o-seven-black-small.svg'
import '../../assets/style/stylesheet.styl'

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Navigation nav={navItems} brand={oseven} />
            <main style={{paddingTop: 55}}>{children}</main>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
