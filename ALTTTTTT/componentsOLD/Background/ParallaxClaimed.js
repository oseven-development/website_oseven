/** @format */
import React from 'react'

import {Parallax} from './Parallax'
import PropTypes from 'prop-types'
import {Flex, Box} from 'rebass'
import throttle from 'lodash.throttle'

import {StyledParallaxClaimed} from './styled'
import Fade from 'react-reveal/Fade'
import {clearFix} from 'polished'

// export const ParallaxClaimed = ({children, ...props}) => {
//   return (
//     <StyledParallax {...props}>
//       {children}
//       {isInViewport()}
//       <Fade>
//         <h1>test</h1>
//         <h2>test</h2>
//       </Fade>
//     </StyledParallax>
//   )
// }

// const isInViewport = (offset = 0) => {
//   if (!this.yourElement) return false
//   const top = this.yourElement.getBoundingClientRect().top
//   return top + offset >= 0 && top - offset <= window.innerHeight
// }

class ParallaxClaimed extends React.Component {
  static propTypes = {
    /**
     * Tweak the throttle interval
     * Check https://css-tricks.com/debouncing-throttling-explained-examples/ for more details
     */
    throttleInterval(props, propName, component) {
      const currentProp = props[propName]
      if (!Number.isInteger(currentProp) || currentProp < 0) {
        return new Error(`The ${propName} prop you provided to ${component} is not a valid integer >= 0.`)
      }
      return null
    },

    /**
     * Pass one or more children to track
     */
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),

    /**
     * Exposed for testing but allows node other than internal wrapping <div /> to be tracked
     * for visibility
     */
    nodeRef: PropTypes.object,
    trackRef: PropTypes.object,

    /**
     * Define a custom tag
     */
    tag: PropTypes.string,
  }

  static defaultProps = {
    throttleInterval: 150,
    partialVisibility: false,
    tag: 'div',
  }
  constructor(props) {
    super(props)
    this.ownProps = Object.keys(ParallaxClaimed.propTypes)
    this.state = {
      isVisible: false,
      oldY: 0,
      delta: 0,
      opacity: 1,
    }
    this.throttleCb = throttle(this.isComponentVisible, this.props.throttleInterval)
  }
  componentDidMount() {
    this.attachListener()
    this.isComponentVisible()
  }

  componentWillUnmount() {
    this.removeListener()
  }

  attachListener() {
    window.addEventListener('scroll', this.throttleCb)
    window.addEventListener('resize', this.throttleCb)
  }

  removeListener() {
    window.removeEventListener('scroll', this.throttleCb)
    window.removeEventListener('resize', this.throttleCb)
  }

  isVisible = (dasDiv, boundingClientRect) => {
    if (dasDiv.top > boundingClientRect.top && dasDiv.bottom < boundingClientRect.bottom) {
      // const op = (dasDiv.top - boundingClientRect.top) / 100
      // this.setState({opacity: op})
      return true
    } else {
      return false
    }
  }

  scrollSpeed = () => {
    const speed = Math.abs(this.state.oldY - window.scrollY)
    this.setState({oldY: window.scrollY})
    if (speed > 80) {
      this.setState({delta: true})
      setTimeout(() => {
        this.setState({delta: false})
      }, 500)
    }
  }

  isComponentVisible = () => {
    this.scrollSpeed()
    if (!this.nodeRef || !this.nodeRef.getBoundingClientRect || !this.trackRef || !this.trackRef.getBoundingClientRect)
      return
    // const html = document.documentElement
    // const windowHeight = window.innerHeight || html.clientHeight

    const boundingClientRect = this.nodeRef.getBoundingClientRect()
    const dasDiv = this.trackRef.getBoundingClientRect()

    const isVisible = this.isVisible(dasDiv, boundingClientRect)
    this.setState({isVisible})
  }

  setNodeRef = ref => {
    this.nodeRef = ref
  }
  trackNodeRef = ref => {
    this.trackRef = ref
  }

  render() {
    const {nodeRef, trackRef, tag: Tag} = this.props
    const props = {}
    return (
      <Tag ref={!nodeRef && this.setNodeRef} {...props}>
        <StyledParallaxClaimed opacity={this.state.opacity}>
          <Parallax minHeight={'500px'} img={this.props.img}>
            <div className={'watcher'} ref={!trackRef && this.trackNodeRef}>
              <Fade when={this.state.isVisible} duration={this.state.delta ? 100 : 500}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                  <Box>
                    <div className={'contentBox'}>
                      <h1>"{this.props.claim.title}"</h1>
                      <h2>- {this.props.claim.subtitle}</h2>
                    </div>
                  </Box>
                </Flex>
              </Fade>
            </div>
          </Parallax>
        </StyledParallaxClaimed>
      </Tag>
    )
  }
}

export {ParallaxClaimed}
