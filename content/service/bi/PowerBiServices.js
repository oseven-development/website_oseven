/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import powerbi1 from './icon/powerbicloud.svg'
import powerbi2 from './icon/powerbiresponsive.svg'
import powerbi3 from './icon/powerbisecure.svg'

export const PowerbiService = props => (
  <Flex
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="flex-start"
    style={{textAlign: 'center'}}>
    <Box width={[1, 1 / 3]}>
      <Image src={powerbi3} mt={[15, 20, 30]} width={[60, 80, 120]} />
      <h4>Interaktive dynamische Berichte</h4>
    </Box>
    <Box width={[1, 1 / 3]}>
      <Image src={powerbi1} mt={[15, 20, 30]} width={[60, 80, 120]} />
      <h4>Zugriff auf deine Berichte von überall</h4>
    </Box>
    <Box width={[1, 1 / 3]}>
      <Image src={powerbi2} mt={[15, 20, 30]} width={[60, 80, 120]} />
      <h4>Mobile & Desktop Berichte</h4>
    </Box>
  </Flex>
)
