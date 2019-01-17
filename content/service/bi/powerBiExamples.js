/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {Button} from '../../../src/components'
import theme from '../../../src/components/theme'
import {FaMagic, FaBalanceScale} from 'react-icons/fa'

export const PowerBiExamples = props => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center" style={{textAlign: 'center'}}>
    <Box width={1}>
      <h2>Live-Demo Berichte</h2>
    </Box>
    <Box width={1}>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="flex-start">
        <Box width={[1, 1 / 2, 1 / 3]} my={['1', 5, 10]} mx={[1, 15, 40]}>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiY2E0M2I3ZjktYmYyOS00ZWI5LTg3ODQtNjFkOTliZDVmNjVmIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
            target="blank">
            <Button
              color="black"
              bgRadius={'0px'}
              border={false}
              bgColor={'#f2c811'}
              icon={<FaBalanceScale size="1.3em" style={{fill: 'black'}} />}>
              Jahresvergleichsbericht
            </Button>
          </a>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} my={['1', 5, 10]} mx={[1, 15, 40]}>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiYTM0YmVlMzgtNWY3OC00ZjEyLTg1ZDgtMWFhNzQ3ZmU3ZWFiIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
            target="blank">
            <Button
              bgRadius={'0px'}
              color="black"
              bgColor={'#f2c811'}
              border={false}
              icon={<FaMagic size="1.3em" style={{fill: 'black'}} />}>
              Produktdetailbericht
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
  </Flex>
)
