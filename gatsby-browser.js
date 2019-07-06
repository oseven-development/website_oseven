/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 *
 * @format
 */

// You can delete this file if you're not using it

import React from 'react'
import {Layout} from './src/components'

export const wrapPageElement = ({element, props}) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}> {element}</Layout>
)
