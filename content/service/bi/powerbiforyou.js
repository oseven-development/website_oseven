/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import powerbi1 from './powerbi1.png'
import powerbi2 from './powerbi2.png'
export const PowerbiforYou = props => (
  <React.Fragment>
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" style={{textAlign: 'center'}}>
      <Box>
        <h2>PowerBi für Sie</h2>
      </Box>
      <Box>
        <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="flex-start">
          <Box width={[1, 1, 1 / 2]} py={[1, 2, 3]}>
            <h3>Year over Year Reports</h3>
            <p>Erstellen von detailierten Year over Year Reports zum Vergleich verschiedener Geschäftsjahren</p>
          </Box>
          <Box width={[1, 1, 1 / 2]} py={[1, 2, 3]}>
            <Image src={powerbi1} />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="flex-start">
          <Box width={[1, 1, 1 / 2]} py={[1, 2, 3]}>
            <Image src={powerbi2} />
          </Box>
          <Box width={[1, 1, 1 / 2]} py={[1, 2, 3]}>
            <h3>Year over Year Reports</h3>
            <p>Erstellen von detailierten Year over Year Reports zum Vergleich verschiedener Geschäftsjahren</p>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </React.Fragment>
)
