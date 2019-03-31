/** @format */

import anime from 'animejs'
import React, {Component} from 'react'

export class AnimatedLogo extends Component {
  componentDidMount() {
    const lineDrawing = anime.timeline()
    lineDrawing
      .add({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        stroke: '#ccc',
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: function(el, i) {
          return i * 30
        },
        direction: 'alternate',
        loop: false,
      })
      .add({
        targets: '#lineDrawing .lines .pt',
        fill: '#fff',
        stroke: '#ccc',
        opacity: '0.78',
        duration: 500,
        easing: 'easeInOutCubic',
        delay: function(el, i) {
          return i * 50
        },
        direction: 'alternate',
        loop: false,
      })
      .add({
        targets: '#line',
        opacity: '0.8',
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: function(el, i) {
          return i * 30
        },
        direction: 'alternate',
        loop: false,
      })
  }
  render() {
    return (
      <div style={{maxWidth: 700, margin: '-160px auto auto auto'}}>
        <svg viewBox="0 0 1 0" />
        <div id="lineDrawing" className="logo">
          <svg viewBox="0 0 558.07 130.48">
            <g fill="none" fillRule="evenodd" stroke="#ccc" strokeWidth="1" className="lines">
              <path
                className="pt"
                d="M0,36.6V95.13H52.43l19.4-20.4V15.19H22.41Zm51.88-1.47V66.46L45,75.19H16.94V43.71l8.81-8.58Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 316.855, fill: 'transparent', stroke: 'transparent'}}
              />
              <path
                className="pt"
                d="m 82.82,44.869999 h 39.5 v 19.94 h -39.5 z"
                strokeDasharray="150"
                style={{strokeDasharray: 150, fill: 'transparent', stroke: 'transparent'}}
              />
              <path
                className="pt"
                d="M 538.13,14.96 V 59.82 L 478.31,0 V 14.96 H 398.55 V 34.9 h 79.76 v 9.97 h -79.76 v 19.94 h 79.76 v 9.97 h -79.76 v 19.94 h 79.76 6.26 13.68 V 49.85 l 59.82,59.82 V 14.96 Z"
                strokeDasharray="1000"
                style={{strokeDasharray: 1000, fill: 'transparent', stroke: 'transparent'}}
              />
              <path
                className="pt"
                d="M 207.07,34.9 227.01,14.96 H 152.24 L 132.3,34.9 v 29.91 h 59.82 l -9.97,9.97 h -44.87 l -19.94,19.94 h 74.78 L 212.06,74.78 V 44.87 h -59.82 l 9.97,-9.97 z"
                strokeDasharray="900"
                style={{strokeDasharray: 900, fill: 'transparent', stroke: 'transparent'}}
              />
              <path
                className="pt"
                d="M 331.7,14.96 H 311.76 232 V 34.9 h 79.76 v 9.97 H 232 v 19.94 h 79.76 v 9.97 H 232 v 19.94 h 79.76 v 29.91 L 391.52,44.87 V 14.96 L 331.7,74.78 Z"
                strokeDasharray="900"
                style={{strokeDasharray: 900, fill: 'transparent', stroke: 'transparent'}}
              />
              />
            </g>
          </svg>
        </div>
        <div id="line" className="logo" style={{opacity: 0}}>
          <svg viewBox="0 0 558.07 79.86">
            <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="1" className="lines">
              <path
                className="pt"
                d="M 0,11.77 H 558.07001"
                strokeDasharray="900"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M17.15,67.42a14.82,14.82,0,0,1-8.84-2.82,15.76,15.76,0,0,1-2.57-2.43,15,15,0,0,1-3.79-9.42V36.92H3.31l0,15.3a12.68,12.68,0,0,0,1,5.1,14,14,0,0,0,13,8.74,14.39,14.39,0,0,0,7.89-2.45,11.55,11.55,0,0,0,5-6.29,32.43,32.43,0,0,0,.73-6.61q.24-5.1.24-9.42V36.92H32.4V63a15,15,0,0,1-3.79,9.47A13.18,13.18,0,0,1,26,74.81a14.76,14.76,0,0,1-8.89,2.82,14.82,14.82,0,0,1-8.84-2.82,15.81,15.81,0,0,1-2.57-2.43,14.72,14.72,0,0,1-3-5H4.23a14,14,0,0,0,5.1,6.36,13.43,13.43,0,0,0,7.87,2.48,13.65,13.65,0,0,0,7.72-2.48,13.46,13.46,0,0,0,5.2-6.26,5.73,5.73,0,0,0,.36-.8A16.52,16.52,0,0,0,31,63.83a29.21,29.21,0,0,0,.1-5.39,12.94,12.94,0,0,1-2.48,3.84A14.44,14.44,0,0,1,26,64.61,14.76,14.76,0,0,1,17.15,67.42Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M54.84,67.42A15.26,15.26,0,0,1,39.59,52.17,15.26,15.26,0,0,1,54.84,36.92,15.17,15.17,0,0,1,70.09,52.17,15.17,15.17,0,0,1,54.84,67.42ZM64.7,62a13.84,13.84,0,0,0,0-19.65,13.84,13.84,0,0,0-19.65,0A13.9,13.9,0,0,0,45,62,13.89,13.89,0,0,0,64.7,62Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 316.855, fill: '#fff', stroke: '#ccc'}}
              />

              <path
                className="pt"
                d="M91.85,67.42h-.44a14.82,14.82,0,0,1-8.84-2.82A15.76,15.76,0,0,1,80,62.18a15,15,0,0,1-3.79-9.42V36.92h1.36V52.17a14.63,14.63,0,0,0,.92,5.05v.1a14,14,0,0,0,13,8.74,13.89,13.89,0,0,0,7.84-2.45,13.57,13.57,0,0,0,5.08-6.29v0l0,0a14.65,14.65,0,0,0,.92-5.05V36.92h1.36V51.64l0,1.12a15,15,0,0,1-3.79,9.52,14.44,14.44,0,0,1-2.57,2.33A14.69,14.69,0,0,1,91.85,67.42Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M130.12,36.92a16.24,16.24,0,0,1,3.4.36,19.7,19.7,0,0,1,3.86,1.34,12,12,0,0,1,4.06,3.13,16.8,16.8,0,0,1,3.06,5.32h-1.41a12.74,12.74,0,0,0-5-6.46,14,14,0,0,0-8-2.38,13.93,13.93,0,0,0-13.89,13.94V67.42h-1.36V52.71l0-1.17h0V36.92h1.36v9a14.5,14.5,0,0,1,3.11-4.61A14.67,14.67,0,0,1,130.12,36.92Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M199,27.5h1.31V67.42H199V58.29A14.32,14.32,0,0,1,195.83,63a15.27,15.27,0,0,1-26.08-10.78,15.28,15.28,0,0,1,26.08-10.78A14.34,14.34,0,0,1,199,46.05ZM185,66.06a13.93,13.93,0,0,0,13.94-13.89A13.92,13.92,0,1,0,175.19,62,13.38,13.38,0,0,0,185,66.06Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M210.45,30.75q0-.68.63-.68t.73.68q0,.68-.73.68T210.45,30.75Zm1.36,18.46V67.42h-1.36V36.92h1.36Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M258.14,36.92V63a15.27,15.27,0,0,1-24.09,11.85,15.17,15.17,0,0,1-5.54-7.38H230a13.09,13.09,0,0,0,5,6.46,13.75,13.75,0,0,0,7.92,2.38,13.93,13.93,0,0,0,13.94-13.89v-4A15.46,15.46,0,0,1,253.72,63a15.27,15.27,0,0,1-26.08-10.78,15.28,15.28,0,0,1,26.08-10.78A15.46,15.46,0,0,1,256.83,46v-9ZM242.89,66.06a13.93,13.93,0,0,0,13.94-13.89A13.91,13.91,0,1,0,233.08,62,13.38,13.38,0,0,0,242.89,66.06Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M267.32,30.75q0-.68.63-.68t.73.68q0,.68-.73.68T267.32,30.75Zm1.36,18.46V67.42h-1.36V36.92h1.36Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M300.74,66.06a14,14,0,0,0,8-2.38,12.74,12.74,0,0,0,5-6.46h1.36a15.37,15.37,0,0,1-5.49,7.38,15.27,15.27,0,0,1-24.09-11.85V27.5h1.36v8.74h19.09V37.6H286.85V52.17a13.93,13.93,0,0,0,13.89,13.89Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M347.17,67.42v-9A14.49,14.49,0,0,1,344.06,63,15.27,15.27,0,0,1,318,52.17a15.28,15.28,0,0,1,26.08-10.78A15.46,15.46,0,0,1,347.17,46v-9h1.31v30.5Zm0-15.15v-.15a14,14,0,0,0-13.94-13.89,13.93,13.93,0,0,0-13.89,13.94,13.91,13.91,0,0,0,27.83.1Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M359,66.06v1.36h-1.36V27.5H359V66.06Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M419.24,48.38v19H418v-19a8.92,8.92,0,0,0-3.52-7.07A12.8,12.8,0,0,0,406,38.43a11.87,11.87,0,0,0-7.92,2.74,9.3,9.3,0,0,0-3.5,6.78V67.42h-1.36V27.5h1.36V43.33a10.08,10.08,0,0,1,2.33-2.91,13.24,13.24,0,0,1,9.08-3.3,14,14,0,0,1,9.33,3.3A10.16,10.16,0,0,1,419.24,48.38Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M444.06,67.42a15.26,15.26,0,0,1-15.25-15.25A15.25,15.25,0,1,1,454.89,63,14.75,14.75,0,0,1,444.06,67.42ZM453.92,62a13.84,13.84,0,0,0,0-19.65,13.89,13.89,0,0,0-23.72,9.83A13.91,13.91,0,0,0,453.92,62Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M490.2,67.42v-19a8.92,8.92,0,0,0-3.52-7.07,12.8,12.8,0,0,0-8.48-2.94,12,12,0,0,0-7.94,2.74,9.27,9.27,0,0,0-3.52,6.78l0,1.26V67.42h-1.36V36.92h1.36v6.41a10.08,10.08,0,0,1,2.33-2.91,13.24,13.24,0,0,1,9.08-3.3,14,14,0,0,1,9.33,3.3,11,11,0,0,1,3.25,4.52,10.14,10.14,0,0,1,3.06-4.52,13.24,13.24,0,0,1,9.08-3.3,14,14,0,0,1,9.33,3.3,10.11,10.11,0,0,1,3.89,8v19h-1.26v-19a8.94,8.94,0,0,0-3.5-7.07,12.7,12.7,0,0,0-8.45-2.94,12.06,12.06,0,0,0-8,2.77A9,9,0,0,0,491.46,48V67.42Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />

              <path
                className="pt"
                d="M554.21,51.1H525.36a8.43,8.43,0,0,0,0,1.07A13.93,13.93,0,0,0,539.2,66.06a14.13,14.13,0,0,0,7.19-2,13.35,13.35,0,0,0,5.2-5.32H553A16.92,16.92,0,0,1,547.12,65a14.52,14.52,0,0,1-7.92,2.45A15.26,15.26,0,0,1,524,52.17a15.24,15.24,0,0,1,30.45-1.07Zm-15-12.87a13.37,13.37,0,0,0-9,3.3,13.68,13.68,0,0,0-4.74,8.21h27.44A14,14,0,0,0,539.2,38.23Z"
                strokeDasharray="316.8546142578125"
                style={{strokeDasharray: 900, fill: '#fff', stroke: '#ccc', opacity: '0.8'}}
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}
