/** @format */

module.exports = {
  siteMetadata: {
    title: 'O-Seven',
    description: 'O-Seven Website',
    author: 'Philipp Schmid',
    siteUrl: 'https://www.o-seven.de',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-stylus',
    'gatsby-plugin-robots-txt',
    // 'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.o-seven.de',
        sitemap: 'https://www.o-seven.de/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /illustrations/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/assets/images/logo-o-seven-black-small.svg', // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
