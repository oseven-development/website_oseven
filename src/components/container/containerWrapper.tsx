/** @format */

import React from 'react'
import styled from 'styled-components'

interface IProps {
  children?: JSX.Element | JSX.Element[] | string | null
  noSpace?: boolean
}

export const ContainerWrapper = (props: IProps) => {
  const {children, noSpace} = props
  return <StyledContainerWrapper noSpace={noSpace}>{children}</StyledContainerWrapper>
}

interface IStyledProps {
  noSpace?: boolean
}

const StyledContainerWrapper = styled.div`
  max-width: 1200px;
  margin: ${({noSpace}: IStyledProps) => (!noSpace ? '2em auto' : '0em auto')};
  padding: 20px;
  @media screen and (${props => props.theme.device.laptop}) {
    margin: 0em auto;
  }
`
