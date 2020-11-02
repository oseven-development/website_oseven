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
      <Seo title="Kontakt oseven" description="Rufen Sie uns an!" keywords="Kontakt Cloud" />
      <HeadTextIntro>Kontakt</HeadTextIntro>

      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 " style={{justifyItems: 'center'}}>
          <Profile {...{images, profile: {name: 'Philipp', title: 'Machine Learning Engineer'}}}></Profile>
          <Profile
            {...{
              images,
              profile: {name: 'Max', title: 'Software Engineer & Cloud Architekt'},
            }}></Profile>
        </div>
      </section>
    </>
  )
}
