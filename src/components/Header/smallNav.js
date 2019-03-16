/** @format */

import React from 'react'
import {StyledSmallNav} from './styled'
import {Box} from 'rebass'
export const smallNav = arr => {
  return (
    <StyledSmallNav>
      <Box pl={[1, 3, 3, 5]}>
        <ul>
          {arr.map(params => {
            return (
              <li key={Math.random()}>
                <a href={`#${params.to}`}>{params.name}</a>
              </li>
            )
          })}
        </ul>
      </Box>
    </StyledSmallNav>
  )
}
