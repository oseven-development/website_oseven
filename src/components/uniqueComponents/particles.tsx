/** @format */

import React from 'react'
import ReactParticles, {IParticlesParams} from 'react-particles-js'
import styled from 'styled-components'
import {useWindowSize} from '../../assets/hooks/windowWidth'
import Typography from './typography'

import {TypographyRenderHelper, TypographyRenderP} from '../'

interface IParticles extends IParticlesParams {
  title?: string | string[]
  text?: string[]
  action?: JSX.Element
  height: string[]
}

const _Particles = (props: IParticles) => {
  const {windowWidth} = useWindowSize()
  const {title, text, action, height} = props
  return (
    <StyledDiv>
      <ReactParticles
        height={windowWidth > 768 ? height[1] : height[0]}
        params={{
          particles: {
            number: {
              value: windowWidth > 786 ? 40 : 5,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <div
        className="title-box"
        style={{
          transform: windowWidth > 768 ? 'translateX(45vw)' : '0',
          top: windowWidth > 768 ? '25%' : '0',
        }}>
        {title ? <TypographyRenderHelper variant={'h1'} content={title} /> : null}
        {text ? <TypographyRenderP content={text} /> : null}
        {action ? action : null}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background: ${({theme}) => theme.colors.secondary};
  position: relative;
  color: white;
  .title-box {
    position: absolute;
    padding: 0px 20px;
  }
`
export default _Particles
