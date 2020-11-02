/** @format */
import React from 'react'

import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Img from 'gatsby-image'

export default ({images, profile: {name, title}}) => (
  <div className="flex flex-col w-full items-center">
    {/* <a href="https://www.linkedin.com/in/maximilian-h%C3%A4nsel-46719b196/"> */}

    <Img
      className=" h-40 w-40 overflow-hidden rounded-full bg-primary shadow-lg   "
      fluid={images[name].childImageSharp.fluid}
      alt={name}
    />

    {/* </a> */}
    <div className="flex flex-col pt-4 px-4">
      <h6 className="text-center">{name}</h6>
      <h4 className="text-center font-thin">{title}</h4>
      <div className="flex space-x-4 justify-center pt-4">
        <a href="#">
          <LinkedIn className="h-8 w-8" />
        </a>
        <a href="#">
          <Twitter className="h-8 w-8" />
        </a>
      </div>
    </div>
  </div>
)
