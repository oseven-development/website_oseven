/** @format */

module.exports = {
  siteMetadata: {
    title: 'oseven',
    titleTemplate: 'test',
    description: 'oseven Website',
    author: 'Philipp Schmid',
    siteUrl: 'https://www.oseven.de',
    twitterUsername: 'maxhaensel_',
    languages: {
      defaultLangKey: 'de',
      langs: ['de', 'en'],
    },
    navigation: [
      {
        to: 'UnsereArbeit',
        label: {de: 'Unsere Arbeit', en: 'Our Work'},
      },
      {
        to: 'UnsereDienstleistungen',
        label: {de: 'Unsere Dienstleistungen', en: 'Our Portfolio'},
      },
      {
        to: 'kontakt',
        label: {de: 'Kontakt', en: 'Contact'},
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
    'gatsby-plugin-stylus',
    'gatsby-plugin-robots-txt',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
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
        host: 'https://www.oseven.de',
        sitemap: 'https://www.oseven.de/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}],
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
  ],
}
