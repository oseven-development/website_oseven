/** @format */

import React from 'react'

import Impressum from '../../content/impressum.md'

// Containers
import {WrapperBox, ContentBox} from '../container'

// Old components maybe Merge
import {Seo} from '../components'

export default () => (
  <React.Fragment>
    <Seo title="Impressum" />
    <WrapperBox backgroundColor={'white'}>
      <ContentBox width={1} h1={{content: 'Impressum'}} paragraph={[<Impressum />]} />
    </WrapperBox>
  </React.Fragment>
)
