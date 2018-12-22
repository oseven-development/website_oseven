/** @format */

import React from 'react'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'

export const Seo = ({title, description, keywords}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteMetadata = data.site.siteMetadata
        console.log(siteMetadata)
        return (
          <Helmet
            title={title || siteMetadata.title}
            meta={[
              {name: 'description', content: description || siteMetadata.description},
              {name: 'keywords', content: keywords || siteMetadata.keywords},
            ]}>
            <html lang="de" />
          </Helmet>
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

// {
//     content: "website",
//     property: "og:type",
//   },
//   {
//     content: "summary",
//     name: "twitter:card",
//   },
//   {
//     content: data.site.siteMetadata.author,
//     name: "twitter:creator",
//   },
//   {
//     content: title,
//     name: "twitter:title",
//   },
//   {
//     content: metaDescription,
//     name: "twitter:description",
//   },
