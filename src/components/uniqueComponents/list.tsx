/** @format */

import React from 'react'
import styled from 'styled-components'
import {SvgImage} from '..'
import {Flex, Box} from 'rebass'
import Check from '../../../assets/images/icons/listIcons/tick.svg'
import theme from '../../assets/theme'
interface IList {
  items: IListItem[]
}

interface IListItem {
  icon?: any
  text: string
}

const List = (props: IList) => {
  const {items} = props
  return (
    <React.Fragment>
      <ul>
        {items.map((item: IListItem) => (
          <StyledLi key={item.text}>
            <Flex justifyContent={'flex-start'} alignItems={'center'}>
              {item.icon ? (
                <Box px={'8px'} style={{flexShrink: 0}}>
                  {/* <SvgImage src={item.icon} /> */}
                  <SvgImage src={Check} dWidth={20} mWidth={20} />
                </Box>
              ) : null}
              <Box>{item.text}</Box>
            </Flex>
          </StyledLi>
        ))}
      </ul>
    </React.Fragment>
  )
}
export default List

export const StyledLi = styled.li`
  list-style-type: none;
  margin: 10px;
  padding: 16px;
  /* background: ${theme.colors.third}; */
  border-bottom: 1px solid #7f83885f;
  /* border-radius: 30px; */
`
