/** @format */
import React from 'react'
import {Image} from 'rebass'
import {
  facebook,
  homepage,
  instagram,
  twitter,
  whatsapp,
  www,
  youtube,
  xing,
} from '../../../../assets/images/socialMedia'

interface ISocialMediaItemProps {
  provider: 'facebook' | 'homepage' | 'instagram' | 'twitter' | 'whatsapp' | 'www' | 'youtube' | 'xing'
}
const icons: Record<string, any> = {
  facebook: facebook,
  homepage: homepage,
  instagram: instagram,
  twitter: twitter,
  whatsapp: whatsapp,
  www: www,
  youtube: youtube,
  xing: xing,
}
export default (props: ISocialMediaItemProps) => <Image width={30} src={icons[props.provider]} />
