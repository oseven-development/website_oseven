/** @format */

import React from 'react'
import styled from 'styled-components'
import {SvgImage} from '../..'
import {Flex, Box} from 'rebass'
import Check from '../../../assets/images/icons/listIcons/tick.svg'
interface IList {
  items: IListItem[]
}

interface IListItem {
  icon?: any
  text: string
}

const List = (props: IList) => {
  const {items} = props
  console.log(items)
  return (
    <React.Fragment>
      <ul>
        {items.map((item: IListItem) => (
          <StyledLi key={item.text}>
            <Flex justifyContent={'flex-start'} alignItems={'center'}>
              {item.icon ? (
                <Box px={'8px'}>
                  {/* <SvgImage src={item.icon} /> */}
                  <SvgImage src={Check} dWidth={20} />
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
  background: ${props => props.theme.colors.third};
  border: 1px solid #7f83885f;
  border-radius: 30px;
`
