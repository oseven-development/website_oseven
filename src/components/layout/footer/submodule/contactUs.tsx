/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

import {ContainerBox, SvgImage, ContactButton} from '../../../'

interface IProps {
  title: string
  text: string
  contact: any
}
const ContactUs = ({title, text, contact}: IProps) => {
  return (
    <ContainerBox>
      <Flex alignItems="center" flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 5]}>
          <h2>{title}</h2>
          <p>{text}</p>
          <ContactButton text={'kontaktiere uns hier'} link={'/kontakt'} textColor={'primary'} width={'320px'} border />
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 5]}>
          <Positioning pos={'flex-end'}>
            <SvgImage dWidth={350} src={contact} m={'0'} />
          </Positioning>
        </Box>
      </Flex>
    </ContainerBox>
  )
}
export {ContactUs}

const Positioning = styled.div`
  justify-content: ${(props: {pos: string}) => props.pos};
  display: flex;
  @media screen and (${props => props.theme.device.laptop}) {
    justify-content: center;
  }
  li.contact {
    padding-bottom: 1em;
  }
`
