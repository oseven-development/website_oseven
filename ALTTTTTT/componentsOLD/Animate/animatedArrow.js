/** @format */

import anime from 'animejs'
import React, {Component} from 'react'

export class AnimatedArrow extends Component {
  componentDidMount() {
    anime({
      targets: '#ArrowDrawing .lines .pt',
      translateY: [-30, 30],
      opacity: [0.7, 1],
      loop: true,
      easing: 'easeInOutCubic',
      duration: 800,
      delay: function(el, i) {
        return i * 30
      },
      direction: 'alternate',
    })
  }
  render() {
    return (
      <div
        id="ArrowDrawing"
        style={{position: 'absolute', bottom: 0, left: '50%', width: 50, height: 50, marginLeft: '-25px'}}>
        <svg viewBox="0 0 418.35938 418.35938">
          <g fill="white" fillRule="evenodd" strokeWidth="1" className="lines">
            <path className="pt" d="M 153,247.35 306,94.35 270.3,58.65 153,175.95 35.7,58.65 0,94.35 Z" />
          </g>
        </svg>
      </div>
    )
  }
}
