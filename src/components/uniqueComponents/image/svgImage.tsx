/** @format */

import React from 'react'
import {Image} from 'rebass'

interface ISvgImage {
  m?: string
  mWidth?: string | number
  dWidth?: string | number

  p?: string
  src: any
  alt?: string
}

const SvgImage = (props: ISvgImage) => {
  const {mWidth, dWidth, m, p, src, alt} = props
  const margin = m ? m : '0 auto'
  const padding = p ? p : '0px 0px 0px 0px'
  const mobileWidth = mWidth ? mWidth : '150px'
  const desktopWidth = dWidth ? dWidth : 1
  const width = [mobileWidth, desktopWidth]
  const tag = alt ? alt : 'image'
  return <Image p={padding} m={margin} width={width} src={src} alt={tag} />
}
export default SvgImage
