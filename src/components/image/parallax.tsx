/** @format */

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Parallax, Background} from 'react-parallax'

import Img from 'gatsby-image'
import {useWindowSize} from '../../assets/hooks/windowWidth'

const _Parallax: FunctionComponent<any> = ({children, ...props}) => {
  const {windowWidth} = useWindowSize()
  return (
    <React.Fragment>
      {windowWidth > 768 ? (
        <Parallax strength={500} style={{height: windowWidth > 768 ? (props.height ? props.height : 300) : 150}}>
          <Background className="custom-bg">
            <Img fluid={props.src} alt={props.alt} />
            <div style={{width: '100vw'}} />
          </Background>
        </Parallax>
      ) : (
        <Img fluid={props.src} alt={props.alt} style={{height: 150}} />
      )}
    </React.Fragment>
  )
}

export default _Parallax
