/** @format */

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

interface IImage {
  src: any
  alt: any
  style?: any
}

const Image = (props: IImage) => {
  const {src, alt, style} = props
  return (
    <React.Fragment>
      <Img fluid={src} alt={alt} style={style} />
    </React.Fragment>
  )
}
export default Image
