/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Layout} from '../components/Layout'
import Markdown from 'react-markdown'
import Text from '../../content/test.md'

export default class test extends React.Component {
  render() {
    console.log(Text)
    return (
      <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 3</p>
        <Link to="/">Go back to the homepage</Link>
        <Text />
      </Layout>
    )
  }
}
