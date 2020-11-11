/** @format */

import React, {FunctionComponent} from 'react'
import Helmet from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import {useLangKey} from '../../hooks'
import {useLocation} from '@reach/router'
import {ImageQuery} from '../..'
import Facebook from './facebook'
import Twitter from './twitter'
interface Props {
  title: string
  description: string
  keywords: string
  article?: true
  image?: string
}

const query = graphql`
  query SEO {
    site {
      buildTime
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        twitterUsername
      }
    }
    file(relativePath: {eq: "consultingParallax.png"}) {
      ...FileFragment
    }
  }
`

const seo: FunctionComponent<Props> = ({title, description, keywords, article, image}) => {
  const {site, file} = useStaticQuery<{site; file: ImageQuery}>(query)
  const {pathname} = useLocation()

  const {buildTime} = site
  const {defaultTitle, defaultDescription, siteUrl, twitterUsername} = site.siteMetadata

  const defaultImage = file.childImageSharp.fluid.src

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  const {langKey} = useLangKey()

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  // add this https://github.com/LekoArts/gatsby-starter-prismic/blob/master/src/components/SEO/SEO.jsx

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={langKey} />

        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta name="keywords" content={keywords} />

        <meta name="description" content={description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={langKey}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitterUsername} />
    </>
  )
}
export default seo
