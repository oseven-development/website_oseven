/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import powerbi1 from './icon/powerbicloud.svg'
import powerbi2 from './icon/powerbiresponsive.svg'
import powerbi3 from './icon/powerbisecure.svg'

export const PowerbiService = props => (
  <React.Fragment>
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-start"
      style={{textAlign: 'center'}}>
      <h2>Was wir Ihnen ermöglichen </h2>
      <Box width={[1, 1 / 3, 1 / 3]} py={[1, 2, 3]} px={[1, 4, 10]}>
        <Image src={powerbi3} my={[15, 20, 30]} width={[120, 120, 120]} />
        <h4>Interaktive dynamische Berichte</h4>
      </Box>
      <Box width={[1, 1 / 3, 1 / 3]} py={[1, 2, 3]} px={[1, 4, 10]}>
        <Image src={powerbi1} my={[15, 20, 30]} width={[120, 120, 120]} />
        <h4>Zugriff auf deine Berichte von überall</h4>
      </Box>
      <Box width={[1, 1 / 3, 1 / 3]} py={[1, 2, 3]} px={[1, 4, 10]}>
        <Image src={powerbi2} my={[15, 20, 30]} width={[120, 120, 120]} />
        <h4>Mobile & Desktop Berichte</h4>
      </Box>
    </Flex>
  </React.Fragment>
)
