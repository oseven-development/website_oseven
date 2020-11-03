/** @format */

// React and Libarys
import React from 'react'
import NavDesktop from './navDesktop'
import NavMobil from './navMobile'
import Footer from './footer'

export default props => (
  <React.Fragment>
    <NavDesktop />
    <NavMobil />
    <main>{props.children}</main>
    <Footer />
  </React.Fragment>
)

// export const indexQuery = graphql`
//   fragment imagePre on File {
//     childImageSharp {
//       fluid(quality: 80, maxWidth: 1920) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// `
