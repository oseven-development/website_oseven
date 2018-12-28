/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Flex} from 'rebass'
import Text from '../../content/impressum.md'
import {Layout, Container} from '../components'
// import Markdown from 'react-markdown'

const impressumPage = () => (
  <Layout>
    <Container style={{textAlign: 'center', marginTop: 60}}>
      <Text />
    </Container>
  </Layout>
)

export default impressumPage
