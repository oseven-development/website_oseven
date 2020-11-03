/** @format */
import React from 'react'

import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Img from 'gatsby-image'
import {A} from '.'

export default ({images, profile: {name, title}, socialMedia: {linkedIn, twitter, blog}}) => (
  <div className="flex flex-col w-full items-center">
    <A href={blog ?? '#'}>
      <Img
        className=" h-40 w-40  overflow-hidden rounded-full "
        fluid={images[name].childImageSharp.fluid}
        alt={name}
      />
    </A>

    <div className="flex flex-col pt-4 px-4">
      <h6 className="text-center">{name}</h6>
      <h4 className="text-center font-thin mt-0">{title}</h4>
      <div className="flex space-x-4 justify-center pt-4">
        <A href={linkedIn}>
          <LinkedIn className="h-8 w-8" />
        </A>
        <A href={twitter}>
          <Twitter className="h-8 w-8" />
        </A>
      </div>
    </div>
  </div>
)
