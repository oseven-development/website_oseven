/** @format */
import React from 'react'

import LinkedIn from '../assets/svg/linkedin.svg'
import Twitter from '../assets/svg/twitter.svg'
import { A } from '.'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ChildImageSharp } from '..'

interface ProfileCardProps {
  image: ChildImageSharp
  profile: {
    name: string
    title: string
  }
  socialMedia: { linkedIn: string; twitter: string; blog?: string }
}

const ProfileCard = ({
  image,
  profile: { name, title },
  socialMedia: { linkedIn, twitter, blog },
}: ProfileCardProps) => (
  <div className="flex flex-col w-full items-center">
    <A href={blog ?? '#'}>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={'name'}
        aria-hidden="true"
        className=" rounded-full h-40 w-40"
      />
    </A>

    <div className="flex flex-col pt-4 px-4">
      <h6 className="text-center">{name}</h6>
      <h4 className="text-center font-thin mt-0">{title}</h4>
      <div className="flex space-x-4 justify-center pt-4">
        {linkedIn && (
          <A href={linkedIn}>
            <LinkedIn className="h-8 w-8" />
          </A>
        )}
        {twitter && (
          <A href={twitter}>
            <Twitter className="h-8 w-8" />
          </A>
        )}
      </div>
    </div>
  </div>
)

const Profile = () => {
  const images: {
    Max: ChildImageSharp
    Philipp: ChildImageSharp
  } = useStaticQuery(graphql`
    query {
      Max: file(relativePath: { eq: "Max.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      Philipp: file(relativePath: { eq: "Philipp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  console.log(images)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      <ProfileCard
        {...{
          image: images.Philipp,
          profile: { name: 'Philipp', title: 'Machine Learning Engineer' },
          socialMedia: {
            linkedIn: 'https://www.linkedin.com/in/philipp-schmid-a6a2bb196/',
            twitter: 'https://twitter.com/_philschmid',
            blog: 'https://www.philschmid.de/',
          },
        }}></ProfileCard>
      <ProfileCard
        {...{
          image: images.Max,
          profile: { name: 'Max', title: 'AWS - Cloud Architekt' },
          socialMedia: {
            linkedIn: 'https://www.linkedin.com/in/maximilian-h%C3%A4nsel-46719b196/',
            twitter: 'https://twitter.com/maxhaensel_',
          },
        }}></ProfileCard>
    </div>
  )
}

export default Profile
