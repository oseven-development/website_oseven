/** @format */

// React and Libarys
import React from 'react'
import NavDesktop from './navDesktop'
import NavMobil from './navMobile'
import Footer from './footer'

import {getCurrentLangKey, getLangs, getUrlForLang} from 'ptz-i18n'
import {StaticQuery, graphql, Link, useStaticQuery} from 'gatsby'
import {IntlProvider} from 'react-intl'
import useLangKey from '../hooks/useLangKey'

export default ({children, location}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
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

  const {navigation} = data.site.siteMetadata
  const {langKey, langsMenu} = useLangKey()

  return (
    <React.Fragment>
      <IntlProvider locale={langKey}>
        <NavDesktop {...{langKey, navigation, langsMenu}} />
        <NavMobil {...{langKey, navigation, langsMenu}} />
        <main>{children}</main>
        <Footer {...{langKey}} />
      </IntlProvider>
    </React.Fragment>
  )
}
