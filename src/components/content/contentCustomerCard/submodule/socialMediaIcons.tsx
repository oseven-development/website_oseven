/** @format */
import React from 'react'
import {Image} from 'rebass'
import {
  SVGfacebookColor,
  SVGtwitterColor,
  SVGxingColor,
  SVGwhatsappColor,
  SVGwwwColor,
  SVGyoutubeColor,
  SVGhomepageColor,
  SVGinstagramColor,
} from '../../../../assets'

interface ISocialMediaItemProps {
  provider: 'facebook' | 'homepage' | 'instagram' | 'twitter' | 'whatsapp' | 'www' | 'youtube' | 'xing'
}
const icons: Record<string, any> = {
  facebook: SVGfacebookColor,
  homepage: SVGhomepageColor,
  instagram: SVGinstagramColor,
  twitter: SVGtwitterColor,
  whatsapp: SVGwhatsappColor,
  www: SVGwwwColor,
  youtube: SVGyoutubeColor,
  xing: SVGxingColor,
}
export default (props: ISocialMediaItemProps) => <Image width={30} src={icons[props.provider]} />
