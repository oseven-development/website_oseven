/** @format */

import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'oseven',
    titleTemplate: 'test',
    description: 'oseven Website',
    author: 'Philipp Schmid',
    siteUrl: 'https://oseven.de',
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: 'maxhaensel_',
    languages: {
      defaultLangKey: 'de',
      langs: ['de', 'en'],
    },
    navigation: [
      {
        to: 'UnsereArbeit',
        label: { de: 'Unsere Arbeit', en: 'Our Work' },
      },
      // {
      //   to: 'news',
      //   label: {de: 'News', en: 'News'},
      // },
      {
        to: 'UnsereDienstleistungen',
        label: { de: 'Unsere Dienstleistungen', en: 'Our Portfolio' },
      },
      {
        to: 'kontakt',
        label: { de: 'Kontakt', en: 'Contact' },
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://oseven.de`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-stylus',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://oseven.de',
        sitemap: 'https://oseven.de/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dies ist der Webauftritt von oseven - Maximilian Hänsel Einzelunternehmen',
        short_name: 'oseven',
        start_url: '/',
        background_color: '#000',
        theme_color: '#333',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'de',
        useLangKeyLayout: false,
      },
    },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: 'https://www.philschmid.de/rss.xml',
    //     name: `PhilschmidBlog`,
    //     // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
    //     parserOption: {
    //       customFields: {
    //         item: ['image'],
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: 'https://medium.com/feed/@stefanseegerer',
    //     name: `StefanSeegererBlog`,
    //     parserOption: {
    //       customFields: {
    //         item: ['image'],
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: 'https://medium.com/feed/@lars.neusesser',
    //     name: `LarsNeusesserBlog`,
    //     parserOption: {
    //       customFields: {
    //         item: ['image'],
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-rss-feed`,
    //   options: {
    //     url: 'https://medium.com/feed/@stefanblos',
    //     name: `StefanBlosBlog`,
    //     parserOption: {
    //       customFields: {
    //         item: ['image'],
    //       },
    //     },
    //   },
    // },
  ],
}

export default config
