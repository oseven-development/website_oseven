/** @format */

import React from 'react'

import {StyledBackgroundImage} from './styled'

export const BackgroundImage = ({children, ...props}) => {
  return (
    <StyledBackgroundImage {...props}>
      <div
        style={{
          backgroundImage: props.bgColor,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: props.bgOpacity ? props.bgOpacity : 0.9,
        }}>
        {children}
      </div>
    </StyledBackgroundImage>
  )
}
