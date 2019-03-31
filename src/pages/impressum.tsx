/** @format */

import React from 'react'

import Impressum from '../assets/impressum/impressum.md'

// Containers
import {WrapperBox, ContantBox, ContantBoxFull} from '../container'

// Old components maybe Merge
import {Seo, DefaultHeadline} from '../components'

export default () => (
  <React.Fragment>
    <Seo title="Impressum" description="" keywords="" />
    <WrapperBox backgroundColor={'second'}>
      <ContantBoxFull>
        <DefaultHeadline>
          <h1>Impressum</h1>
          <Impressum />
        </DefaultHeadline>
      </ContantBoxFull>
    </WrapperBox>
  </React.Fragment>
)
