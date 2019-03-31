/** @format */
import React, {Children} from 'react'
import styled from 'styled-components'
import {colorFont} from '../../components/colorTheme'

import {DefaultHeadline, IndieFlower, RobotoSlab} from '../../components'
import Fade from 'react-reveal/Fade'
export default ({children, ...props}) => (
  <React.Fragment>
    {props.componentTop ? props.componentTop : ''}
    {props.h1 ? <RenderHeadlineStyleH1 {...props} /> : ''}
    {props.h2 ? <RenderHeadlineStyleH2 {...props} /> : ''}
    {props.h3 ? <RenderHeadlineStyleH3 {...props} /> : ''}
    {props.componentMid ? props.componentMid : ''}
    {props.paragraph ? <StyledP {...props}>{props.paragraph}</StyledP> : ''}
    {props.componentBottom ? props.componentBottom : ''}
    {children}
  </React.Fragment>
)
// {props.paragraph ? <p style={{textAlign: props.textCenter ? 'center' : ' justify'}}>{props.paragraph}</p> : ''}
const StyledP = styled.p`
  color: ${props => props.textColor};
  text-align: ${props => (props.textCenter ? 'center' : ' justify')};
`

const HeadlineColorH3 = styled.h3`
  color: ${props => colorFont(props.backgroundColor, false)};
`

const RenderHeadlineStyleH1 = props => {
  switch (props.h1.style) {
    case 'block':
      return (
        <RobotoSlab colorShema={props.h1.color}>
          <h1>
            {props.h1.content[0]} <span>{props.h1.content[1]}</span>
          </h1>
        </RobotoSlab>
      )
    case 'swift':
      return (
        <IndieFlower colorShema={props.h1.color}>
          <h1>{props.h1.content}</h1>
        </IndieFlower>
      )
    case 'sublime':
      return (
        <DefaultHeadline colorShema={props.h1.color} textAlignLeft>
          <Fade>
            <h2 style={{margin: '15px 0 '}}>{props.h1.content}</h2>
            <div style={{width: '4em', height: '1px', background: props.h1.color, marginBottom: '10px'}} />
          </Fade>
        </DefaultHeadline>
      )
    default:
      return (
        <DefaultHeadline colorShema={props.h1.color}>
          <h1>{props.h1.content}</h1>
        </DefaultHeadline>
      )
  }
}

const RenderHeadlineStyleH2 = props => {
  switch (props.h2.style) {
    case 'block':
      return (
        <RobotoSlab colorShema={props.h2.color}>
          <h2>
            {props.h2.content[0]} <span>{props.h2.content[1]}</span>
          </h2>
        </RobotoSlab>
      )
    case 'swift':
      return (
        <IndieFlower colorShema={props.h2.color}>
          <h2>{props.h2.content}</h2>
        </IndieFlower>
      )
    case 'sublime':
      return (
        <DefaultHeadline colorShema={props.h2.color} textAlignLeft>
          <Fade>
            <h3>{props.h2.content}</h3>
          </Fade>
        </DefaultHeadline>
      )
    default:
      return (
        <DefaultHeadline colorShema={props.h2.color}>
          <h2>{props.h2.content}</h2>
        </DefaultHeadline>
      )
  }
}

const RenderHeadlineStyleH3 = props => <HeadlineColorH3 {...props}>{props.h3}</HeadlineColorH3>
