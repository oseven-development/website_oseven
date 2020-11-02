/** @format */

import React from 'react'
import {references as SiteContent} from '../../assets'
import {ContentDivider, CustomerBox, ContainerWrapper, JumpAnchor} from '../../components'

const lang = 'de'

const Customer = () => (
  <>
    <JumpAnchor id={'currentCustomer'} />
    <ContentDivider
      color={'secondary'}
      title={SiteContent.customer.title[lang]}
      text={SiteContent.customer.text[lang]}
    />

    <ContainerWrapper>
      {SiteContent.customer.content.map(project => (
        <CustomerBox key={project.title[lang]} {...project} />
      ))}
    </ContainerWrapper>
  </>
)

export {Customer}
