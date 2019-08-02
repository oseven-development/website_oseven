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
}

const _Particles = (props: IParticles) => {
  const {windowWidth} = useWindowSize()
  const {title, text, action} = props
  return (
    <div style={{position: 'relative'}}>
      <Particles
        params={{
          particles: {
            number: {
              value: windowWidth > 786 ? 35 : 10,
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
          transform: windowWidth > 768 ? 'translateX(50vw)' : 'translateX(10px)',
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
`
export default _Particles
