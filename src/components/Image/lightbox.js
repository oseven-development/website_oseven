/** @format */

import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import {Flex, Box, Image} from 'rebass'

export class _Lightbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const {photoIndex, isOpen} = this.state

    return (
      <Flex my={['1px', '10px', '25px']}>
        <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" pt={[5, 20, 30]}>
          {this.props.images.map(img => (
            <Box>
              <Image src={img} width={250} m={10} onClick={() => this.setState({isOpen: true})} />
            </Box>
          ))}
        </Flex>
        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex]}
            nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
            prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length,
              })
            }
          />
        )}
      </Flex>
    )
  }
}
