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
      <HeadTextIntro>Kontakt</HeadTextIntro>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Profile
            {...{
              images,
              profile: {name: 'Philipp', title: 'Machine Learning Engineer'},
              socialMedia: {
                linkedIn: 'https://www.linkedin.com/in/philipp-schmid-a6a2bb196/',
                twitter: 'https://twitter.com/_philschmid',
                blog: 'https://www.philschmid.de/',
              },
            }}></Profile>
          <Profile
            {...{
              images,
              profile: {name: 'Max', title: 'Software Engineer & Cloud Architekt'},
              socialMedia: {
                linkedIn: 'https://www.linkedin.com/in/maximilian-h%C3%A4nsel-46719b196/',
                twitter: 'https://twitter.com/maxhaensel_',
                blog: null,
              },
            }}></Profile>
        </div>
      </section>
    </>
  )
}
