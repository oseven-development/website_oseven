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

import navItems from '../../routes/routes'
import {Navigation, Header, Image} from '..'

import Logo from '../../assets/images/logo.png'

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Header logo={Logo} navigation={<Navigation links={navItems} />} />
            <main style={{background: theme.colors.background}}>{children}</main>
            {/* <Footer /> */}
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
