/** @format */

// React and Libarys
import React from 'react'
import NavDesktop from './navDesktop'
import NavMobil from './navMobile'
import Footer from './footer'

import {getCurrentLangKey, getLangs, getUrlForLang} from 'ptz-i18n'
import {StaticQuery, graphql, Link, useStaticQuery} from 'gatsby'
import {IntlProvider} from 'react-intl'

export default ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
          navigation {
            to
            label {
              de
              en
            }
          }
        }
      }
    }
  `)

  const url = location.pathname
  const {langs, defaultLangKey} = data.site.siteMetadata.languages
  const {navigation} = data.site.siteMetadata
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/')
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/'),
  }))
  return (
    <React.Fragment>
      <IntlProvider locale={langKey}>
        <NavDesktop {...{langKey, navigation, langsMenu}} />
        <NavMobil {...{langKey, navigation, langsMenu}} />
        <main>{children}</main>
        <Footer />
      </IntlProvider>
    </React.Fragment>
  )
}

// export const indexQuery = graphql`
//   fragment imagePre on File {
//     childImageSharp {
//       fluid(quality: 80, maxWidth: 1920) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// `
