/** @format */

// /** @format */

import React from 'react'

// Containers
import {WrapperBox, ContentBox} from '../container'

export default () => (
  <WrapperBox backgroundColor={'second'} style={{padding: '30px 0 10px 0'}}>
    <ContentBox
      width={[1, 2 / 3]}
      h1={{content: 'Diese Seite wurde nicht gefunden', color: 'white'}}
      textColor={'white'}
      paragraph={''}
    />
  </WrapperBox>
)
