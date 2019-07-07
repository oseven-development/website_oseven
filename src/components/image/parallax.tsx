/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Parallax, Background} from 'react-parallax'
import Img from 'gatsby-image'

const _Parallax: FunctionComponent<any> = ({children, ...props}) => (
  <Parallax strength={300} style={{height: 300}}>
    <Img fluid={props.img} />
  </Parallax>
)

export default _Parallax
