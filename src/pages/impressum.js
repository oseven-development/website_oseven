/** @format */

import React from 'react'

import Text from '../../content/impressum.md'
import {Layout, Container, Headline, Seo} from '../components'
// import Markdown from 'react-markdown'

const impressumPage = () => (
  <React.Fragment>
    <Seo title="Impressum" />
    <Headline>
      <Container style={{textAlign: 'center', marginTop: 60}}>
        <Text />
      </Container>
    </Headline>
  </React.Fragment>
)

export default impressumPage
