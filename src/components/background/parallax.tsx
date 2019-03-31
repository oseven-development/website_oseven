/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Parallax, Background} from 'react-parallax'
import Img from 'gatsby-image'
import {IPropsParallax as IProps} from './types.d'

const _Parallax: FunctionComponent<IProps> = ({children, ...props}) => (
  <Parallax strength={300} style={{height: 300}}>
    <Background className="custom-bg">
      <Img fluid={props.img} />
      <div style={{width: '100vw'}} />
    </Background>
  </Parallax>
)

export default _Parallax
