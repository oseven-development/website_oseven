/** @format */

// /** @format */

import React from 'react'
import VierNullVier from '../assets/images/illustrations/404.svg'
import {SvgImage, Container, Content} from '../components'
// Containers

export default () => (
  <React.Fragment>
    <Container height={700}>
      <Content
        titleAlign={'center'}
        title={'Falsche Seite'}
        image={{src: <SvgImage src={VierNullVier} dWidth={700} />, type: 'svg'}}
      />
    </Container>
  </React.Fragment>
)
