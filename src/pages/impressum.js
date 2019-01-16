/** @format */

import React from 'react'

import Text from '../../content/impressum.md'
import {Layout, Container, Headline, Seo} from '../components'
// import Markdown from 'react-markdown'

const impressumPage = () => (
  <div>
    <Seo title="Impressum" />
    <Headline>
      <Container style={{textAlign: 'center', marginTop: 60}}>
        <Text />
      </Container>
    </Headline>
  </div>
)

export default impressumPage
