/** @format */

import React, {FunctionComponent} from 'react'
import {Parallax as ReactParallax, Background} from 'react-parallax'

import Img from 'gatsby-image'
import {useWindowSize} from '../../../assets/hooks/windowWidth'

const Parallax: FunctionComponent<any> = ({children, ...props}) => {
  const {windowWidth} = useWindowSize()
  const size = windowWidth > 768
  return (
    <ReactParallax strength={size ? 500 : 50} style={{height: size ? (props.height ? props.height : 450) : 150}}>
      <Background className="custom-bg">
        <Img fluid={props.src} alt={props.alt} />
        <div style={{width: '100vw'}} />
      </Background>
    </ReactParallax>
    // <React.Fragment>
    //   {windowWidth > 768 ? (
    //     <ReactParallax strength={500} style={{height: windowWidth > 768 ? (props.height ? props.height : 450) : 150}}>
    //       <Background className="custom-bg">
    //         <Img fluid={props.src} alt={props.alt} />
    //         <div style={{width: '100vw'}} />
    //       </Background>
    //     </ReactParallax>
    //   ) : (
    //     <Img fluid={props.src} alt={props.alt} style={{height: 250}} />
    //   )}
    // </React.Fragment>
  )
}

export default Parallax
