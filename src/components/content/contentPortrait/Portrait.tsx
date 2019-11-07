/** @format */
import React from 'react'
import {Flex, Box} from 'rebass'
import PortraitElement from './portraitElement'
import {ContainerBox} from '../../'

const PortraitBox = (props: {}) => {
  return (
    <ContainerBox>
      <Flex flexWrap="wrap">
        {[
          {name: 'Max', title: 'Software Engineer & Cloud Architekt', img: 'asd'},
          {name: 'Philipp', title: 'Machine Learning Engineer', img: 'asd'},
          {name: 'Markus', title: 'Account Manager', img: 'asd'},
        ].map(commonProps => (
          <Box key={commonProps.name} width={[1, 1 / 3]}>
            <PortraitElement {...commonProps} />
          </Box>
        ))}
      </Flex>
    </ContainerBox>
  )
}
export default PortraitBox
