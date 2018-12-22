/** @format */

import {CSSTransitionGroup} from 'react-transition-group' // ES6
import React from 'react'
// import './Transition.styl'

export const OpacityTransition = ({children, ...props}) => (
  <CSSTransitionGroup
    transitionName="opacity-transition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
    {...props}>
    {children}
  </CSSTransitionGroup>
)
