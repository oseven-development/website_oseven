/** @format */

import React from 'react'
import ReactParticles, {IParticlesParams} from 'react-particles-js'
import styled from 'styled-components'
import {useWindowSize} from '../../assets/hooks/windowWidth'
import {TypographyRenderHelper} from '../'

interface IParticles extends IParticlesParams {
  title?: string | string[]
  text?: string[]
  action?: JSX.Element
}

const _Particles = (props: IParticles) => {
  const {windowWidth} = useWindowSize()
  const {title, text, action} = props
  return (
    <StyledDiv>
      <ReactParticles
        height={'100%'}
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
      <div className="title-box">
        {title ? <TypographyRenderHelper variant={'h1'} content={title} /> : null}
        {text ? <TypographyRenderHelper variant={'pbr'} content={text} /> : null}
        {action ? action : null}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  height: 600px;
  .title-box {
    position: absolute;
    padding: 0px 20px;
    transform: translateX(45vw);
    top: 25%;
  }
  @media screen and (${props => props.theme.device.laptop}) {
    height: 250px;
    .title-box {
      transform: translateX(0);
      top: 0;
    }
  }
  background: ${({theme}) => theme.colors.secondary};
  position: relative;
  color: white;
`
export default _Particles
