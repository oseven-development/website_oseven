/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Parallax, Background} from 'react-parallax'
import Img from 'gatsby-image'

const _Parallax: FunctionComponent<any> = ({children, ...props}) => (
  <Parallax strength={500} style={{height: props.height ? props.height : 300}}>
    <Background className="custom-bg">
      <Img fluid={props.src} />
      <div style={{width: '100vw'}} />
    </Background>
  </Parallax>
)

export default _Parallax
