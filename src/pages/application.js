/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Flex, Box} from 'rebass'
import theme from '../components/theme'

import {Layout} from '../components/Layout'

const ApplicationPage = () => (
  <Layout>
    <Flex style={{height: 400}}>
      <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="magenta">
        Box
      </Box>
    </Flex>
  </Layout>
)

export default ApplicationPage
