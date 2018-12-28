/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'

import icon from './icon/deal.svg'
import icon2 from './icon/diamond.svg'
import icon3 from './icon/lightbulb.svg'
import icon4 from './icon/padlock.svg'
import icon5 from './icon/team.svg'
import icon6 from './icon/timer.svg'

export const IconList = () => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
      <Box width={[1, 1 / 3, 1 / 3]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={icon} />
        <h4>Bertaung</h4>
        <Image width={[60, 75, 90]} src={icon2} />
        <h4>Erfolg</h4>
      </Box>
      <Box width={[1, 1 / 3, 1 / 3]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={icon3} />
        <h4>Innovation</h4>
        <Image width={[60, 75, 90]} src={icon4} />
        <h4>Sicherheit</h4>
      </Box>
      <Box width={[1, 1 / 3, 1 / 3]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={icon5} />
        <h4>Zusammenhalt</h4>
        <Image width={[60, 75, 90]} src={icon6} />
        <h4>Zuverlässig</h4>
      </Box>
    </Flex>
  )
}
// <Box>
// <Image width={[50, 65, 80]} src={icon4} />
// <h4>Sicherheit</h4>
// <Image width={[50, 65, 80]} src={icon5} />
// <h4>Zusammenhalt</h4>
// <Image width={[50, 65, 80]} src={icon6} />
// <h4>Zuverlässig</h4>
// </Box>
