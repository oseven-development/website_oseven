/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 *
 * @format
 */

// You can delete this file if you're not using it

import React from 'react'
import { Layout } from './src/layout'
import './src/styles/global.scss'
import * as ReactGA from 'react-ga'
const uuid = require('uuid')

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    // eslint-disable-next-line no-unused-expressions
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}> {element}</Layout>
)

const GA_LOCAL_STORAGE_KEY = 'ga:clientId'
// const state = localStorage.getItem('Privacy');
if (localStorage) {
  if (localStorage.getItem(GA_LOCAL_STORAGE_KEY)) {
    ReactGA.initialize('UA-123154407-1', {
      gaOptions: {
        storage: 'none',
        clientId: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
      },
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  } else {
    localStorage.setItem(GA_LOCAL_STORAGE_KEY, uuid.v4())
    ReactGA.initialize('UA-123154407-1', {
      gaOptions: {
        storage: 'none',
        clientId: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
      },
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}
