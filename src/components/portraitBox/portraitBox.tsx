/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import PortraitElement from './portraitElement'

const PortraitBox = (props: {}) => {
  return (
    <Flex flexWrap="wrap">
      {[
        {name: 'Max', title: 'Software Engineer & Cloud Architekt', img: 'asd'},
        {name: 'Philipp', title: 'Machine Learning Engineer', img: 'asd'},
        {name: 'Markus', title: 'Account Manager', img: 'asd'},
      ].map(commonProps => (
        <Box width={[1, 1 / 3]}>
          <PortraitElement {...commonProps} />
        </Box>
      ))}

      {/* <Box width={[1, 1 / 3]}>
        <PortraitElement></PortraitElement>
      </Box>
      <Box width={[1, 1 / 3]}>
        <PortraitElement></PortraitElement>
      </Box> */}
    </Flex>
  )
}
export default PortraitBox
