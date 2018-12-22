/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import {StaticQuery, graphql, Link} from 'gatsby'

import {Header} from '../Header'
import {Container} from '../Container'
import {ResetStyle} from '../Reset'
import {NAV_ITEMS} from '../../constants'

const Layout = ({children}) => {
  const navigationItems = NAV_ITEMS.map(({to, href, label}) => {
    if (href) {
      return (
        <a key={label} href={href}>
          {label}
        </a>
      )
    }

    return (
      <Link key={label} to={to}>
        {label}
      </Link>
    )
  })

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <ResetStyle />

          <Header title={data.site.siteMetadata.title} navigation={navigationItems} />

          <Container>{children}</Container>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Layout}
