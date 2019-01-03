/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'

// import icon from './icon/deal.svg'
// import icon2 from './icon/diamond.svg'
// import icon3 from './icon/lightbulb.svg'
// import icon4 from './icon/padlock.svg'
// import icon5 from './icon/team.svg'
// import icon6 from './icon/timer.svg'
import zuverlässig from './icon/newicon/calendar.svg'
import ausgebildet from './icon/newicon/degree.svg'
import innovativ from './icon/newicon/light-bulb.svg'
import sicher from './icon/newicon/lock.svg'
import beraten from './icon/newicon/manager.svg'
import erfolg from './icon/newicon/quality.svg'
import zielstrebig from './icon/newicon/startup.svg'
import zusammenhalt from './icon/newicon/team.svg'

export const IconList = () => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
      <Box width={[1/2, 1 / 2, 1 / 4]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={beraten} />
        <h4>Bertaung</h4>
        <Image width={[60, 75, 90]} src={zielstrebig} />
        <h4>Ehrgeiz</h4>

      </Box>
      <Box width={[1/2, 1 / 2, 1 / 4]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={innovativ} />
        <h4>Innovation</h4>

        <Image width={[60, 75, 90]} src={erfolg} />
        <h4>Erfolg</h4>
      </Box>
      <Box width={[1/2, 1 / 2, 1 / 4]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={zuverlässig} />
        <h4>Zuverlässigkeit</h4>
        <Image width={[60, 75, 90]} src={zusammenhalt} />
        <h4>Teamwork</h4>
      </Box>
      <Box width={[1/2, 1 / 2, 1 / 4]} style={{textAlign: 'center'}}>
        <Image width={[60, 75, 90]} src={ausgebildet} />
        <h4>Bildung</h4>
        <Image width={[60, 75, 90]} src={sicher} />
        <h4>Sicherheit</h4>

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
