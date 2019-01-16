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
      <h2>Year over Year Example Report</h2>
      <iframe
        width="933"
        height="700"
        src="https://app.powerbi.com/view?r=eyJrIjoiYTM0YmVlMzgtNWY3OC00ZjEyLTg1ZDgtMWFhNzQ3ZmU3ZWFiIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
        frameborder="0"
        allowFullScreen="true"
      />
    </Box>
    <Box>
      <h2>Standard Sales Bericht mit Produkten</h2>
      <iframe
        width="933"
        height="700"
        src="https://app.powerbi.com/view?r=eyJrIjoiY2E0M2I3ZjktYmYyOS00ZWI5LTg3ODQtNjFkOTliZDVmNjVmIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
        frameborder="0"
        allowFullScreen="true"
      />
    </Box>
  </Flex>
)
