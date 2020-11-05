/** @format */
import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import {HeadTextIntro, Profile, Seo} from '../components'

export default () => {
  const images = useStaticQuery(graphql`
    query {
      Max: file(relativePath: {eq: "Max.png"}) {
        ...FileFragment
      }
      Philipp: file(relativePath: {eq: "PS.png"}) {
        ...FileFragment
      }
    }
  `)
  return (
    <>
      <Seo
        title="Kontakt oseven"
        description="Rufen Sie uns an! Kontaktadressen"
        keywords="Kontakt Cloud Email E-mail Telefon Adresse Kontakt Contact"
      />
      <HeadTextIntro>Contact!</HeadTextIntro>
    </>
  )
}
