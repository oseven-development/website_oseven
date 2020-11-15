/** @format */
import React from 'react'

import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Img from 'gatsby-image'
import {A} from '.'
import {graphql, useStaticQuery} from 'gatsby'

const Profile = ({images, profile: {name, title}, socialMedia: {linkedIn, twitter, blog}}) => (
  <div className="flex flex-col w-full items-center">
    <A href={blog ?? '#'}>
      <Img className=" h-40 w-40  overflow-hidden rounded-full" fluid={images[name].childImageSharp.fluid} alt={name} />
    </A>

    <div className="flex flex-col pt-4 px-4">
      <h6 className="text-center">{name}</h6>
      <h4 className="text-center font-thin mt-0">{title}</h4>
      <div className="flex space-x-4 justify-center pt-4">
        {linkedIn && <A href={linkedIn}>
          <LinkedIn className="h-8 w-8" />
        </A>
        }
        { twitter &&
        <A href={twitter}>
          <Twitter className="h-8 w-8" />
        </A> }
      </div>
    </div>
  </div>
)

export default () => {
  const images = useStaticQuery(graphql`
    query {
      Max: file(relativePath: {eq: "Max.png"}) {
        ...FileFragment
      }
      Philipp: file(relativePath: {eq: "PS.png"}) {
        ...FileFragment
      }
      Lars: file(relativePath: {eq: "PS.png"}) {
        ...FileFragment
      }
    }
  `)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
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
          profile: {name: 'Lars', title: 'Business Development'},
          socialMedia: {
            linkedIn: 'https://www.linkedin.com/in/lars-neusesser/',
            twitter: null,
            blog: null,
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
  )
}
