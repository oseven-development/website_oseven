/** @format */

import React from 'react'
import {HeadTextIntro, Profile, Seo} from '../components'

export default () => {
  return (
    <>
      <Seo
        title="Kontakt oseven"
        description="Kontaktiere uns! Kontaktdaten"
        keywords="Kontakt Cloud Email E-mail Telefon Adresse Kontakt Contact"
      />
      <HeadTextIntro>Kontakt</HeadTextIntro>

      <section>
        <Profile />
      </section>
    </>
  )
}
