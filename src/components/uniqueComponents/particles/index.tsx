/** @format */

import React from 'react'
import Particles, {IParticlesParams} from 'react-particles-js'
import styled from 'styled-components'
import {useWindowSize} from '../../../assets/hooks/windowWidth'
import Typography from '../../typography'

interface IParticles extends IParticlesParams {
  title?: string
  text?: string
  action?: JSX.Element
  height: string[]
}

const _Particles = (props: IParticles) => {
  const {windowWidth} = useWindowSize()
  const {title, text, action, height} = props
  return (
    <div style={{position: 'relative'}}>
      <Particles
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
      <StyledDiv
        style={{
          transform: windowWidth > 768 ? 'translateX(45vw)' : '0',
          top: windowWidth > 768 ? '45%' : '0',
        }}>
        {title ? (
          <Typography variant="h1" color={'inherit'}>
            {title}
          </Typography>
        ) : null}
        {text ? (
          <Typography variant="p" color={'inherit'}>
            {Array.isArray(text)
              ? text.map((para: any) => {
                  return (
                    <React.Fragment key={para}>
                      {para} <br />
                    </React.Fragment>
                  )
                })
              : text}
          </Typography>
        ) : null}
        {action ? action : null}
      </StyledDiv>
    </div>
  )
}

const StyledDiv = styled.div`
  position: absolute;
  margin: 0px 10px;
`
export default _Particles
