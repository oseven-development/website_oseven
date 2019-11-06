/** @format */

// React and Libarys
import React from 'react'

import {ThemeProvider} from 'styled-components'
import GlobalStyle from './globalStyle'

// Theme
import theme from '../../assets/theme'
// import {darkTheme as theme} from '../../assets/theme'
// Containers

// Routen
import links from '../../routes/routes'

import {Navigation, HeaderNavigation, Footer} from '..'

import logo from '../../assets/images/logo.svg'
import LogoFooter from '../../assets/images/logo-footer.svg'

export default props => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <HeaderNavigation {...{logo}} navigation={<Navigation {...{links}} />} />
        <main style={{background: theme.colors.background}}>{props.children}</main>
        <Footer {...{links}} logo={LogoFooter} />
      </React.Fragment>
    </ThemeProvider>
  </React.Fragment>
)
