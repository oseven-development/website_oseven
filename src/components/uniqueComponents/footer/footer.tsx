/** @format */

import React from 'react'
import styled from 'styled-components'
import SiteContent from '../../../assets/content/uberuns'

import {contact} from '../../../assets'

// Submodule
import {ContactUs} from './submodule/contactUs'
import {MainModule} from './submodule/mainModule'
import {ClosureBar} from './submodule/closureBar'

const lang = 'de'
const Footer = (props: any) => {
  const {logo} = props
  const links = [
    ...props.links,
    {
      to: '/impressum',
      label: 'Impressum',
    },
  ]
  const text = SiteContent.contact.text[lang]
  const title = SiteContent.contact.title[lang]

  return (
    <StyledFooter>
      {/* ContactUs  */}
      <ContactUs {...{title, text, contact}} />

      {/* Main  */}
      <MainModule {...{logo, links}} />

      {/* ClosureBAR  */}
      <ClosureBar />
    </StyledFooter>
  )
}
export default Footer

const StyledFooter = styled.footer`
  border-top: 1px solid #7f83885f;
  background: ${props => props.theme.colors.third};
`
