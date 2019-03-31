/** @format */

import React from 'react'
import Fade from 'react-reveal/Fade'

interface IProps {}

interface IState {
  show1: boolean
  text: string
}

class FadeExample extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {show1: false, text: 'text1'}
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }
  handleClick1() {
    this.setState({show1: false})
    this.setState({text: 'text1'})
  }

  handleClick2() {
    this.setState({show1: false})
    this.setState({text: 'text2'})
  }
  render() {
    return (
      <div>
        <div style={{background: 'red', height: '100px'}}>
          <Fade left collapse when={this.state.show1}>
            <h1>{this.state.text}</h1>
          </Fade>
        </div>
        <button className="btn btn-success my-5" type="button" onClick={this.handleClick1}>
          Message1
        </button>

        <button className="btn btn-success my-5" type="button" onClick={this.handleClick2}>
          Message2
        </button>
      </div>
    )
  }
}

export default FadeExample
