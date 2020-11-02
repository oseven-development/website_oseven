/** @format */

import React from 'react'

// Load Content
import SiteContent from '../assets/content/contact'

// Components
import {Seo, HeaderWithButtonGroup, ContactMap} from '../components'

// Images, Background and Graphics
import {SVGcontact} from '../assets'

const lang = 'de'
const title = SiteContent.kontakt.title[lang]
const subtitle = SiteContent.kontakt.text[lang]
const SVG = SVGcontact
const buttonGroup = SiteContent.kontakt.contact[lang]

export default () => (
  <React.Fragment>
    <Seo title="Kontakt" description="Kontaktadressen" keywords="Email E-mail Telefon Adresse Kontakt Contact" />

    {/* //! Header */}
    <HeaderWithButtonGroup {...{title, subtitle, SVG, buttonGroup}} />
    <ContactMap />
  </React.Fragment>
)
