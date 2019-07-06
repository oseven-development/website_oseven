/** @format */
import React, {FunctionComponent} from 'react'
import {Flex, Box} from 'rebass'

const CentertContant: FunctionComponent<{}> = ({children, ...props}) => (
  <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" style={{height: '100%'}}>
    <Box alignSelf={'center'}>{children}</Box>
  </Flex>
)
export default CentertContant
