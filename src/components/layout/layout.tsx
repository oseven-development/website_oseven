/** @format */

// React and Libarys
import React from 'react'
import {graphql} from 'gatsby'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'

// Theme
import theme from '../../assets/theme'
// import {darkTheme as theme} from '../../assets/theme'
// Containers

// Routen
import links from '../../routes/routes'

import {Navigation, HeaderNavigation, Footer} from '..'

import {LogoOseven as logo, LogoOsevenFooter} from '../../assets/'

export default props => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <HeaderNavigation {...{logo}} navigation={<Navigation {...{links}} />} />
        <main style={{background: theme.colors.background}}>{props.children}</main>
        <Footer {...{links}} logo={LogoOsevenFooter} />
      </React.Fragment>
    </ThemeProvider>
  </React.Fragment>
)

export const indexQuery = graphql`
  fragment imagePre on File {
    childImageSharp {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
