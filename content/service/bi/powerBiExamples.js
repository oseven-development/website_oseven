/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
export const PowerBiExamples = props => (
  <Flex
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="flex-start"
    style={{textAlign: 'center'}}>
    <Box>
      <h2>Live-Demo Berichte</h2>
    </Box>
    <Box>
      <Flex>
        <Box>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiY2E0M2I3ZjktYmYyOS00ZWI5LTg3ODQtNjFkOTliZDVmNjVmIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
            target="blank">
            <h3>Jahresvergleichsbericht</h3>
          </a>
        </Box>
        <Box>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiYTM0YmVlMzgtNWY3OC00ZjEyLTg1ZDgtMWFhNzQ3ZmU3ZWFiIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
            target="blank">
            <h3>Produktdetailbericht</h3>
          </a>
        </Box>
      </Flex>
    </Box>
  </Flex>
)
