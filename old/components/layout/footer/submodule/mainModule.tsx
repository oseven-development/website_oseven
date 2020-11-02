/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import {SVGphone, SVGmail} from '../../../../assets'
import {StyledNav} from '../../navigation'
import {ContainerWrapper, SvgImage} from '../../../'

interface IProps {
  logo: any
  links: {
    to: string
    label: string
  }[]
}
const MainModule = ({logo, links}: IProps) => {
  return (
    <ContainerWrapper>
      <Flex alignItems="center" flexWrap="wrap">
        <Box width={[1 / 2, 1 / 3]}>
          <Positioning pos={'flex-start'}>
            <div>
              <h3>Kontaktdaten </h3>
              <ul>
                <li className={'contact'}>
                  Nordring 171 <br />
                  90409 Nürnberg <br />
                  Deutschland
                </li>
                <li className={'contact'}>
                  <a href="mailto:hallo@oseven.de">
                    <Image width={20} src={SVGmail} style={{marginRight: 10}} alt="email-symbol" />
                    hallo@oseven.de
                  </a>
                </li>
                <li className={'contact'}>
                  <a href="tel:+491634412159">
                    <Image width={20} src={SVGphone} style={{marginRight: 10}} alt="telefon-symbol" />
                    +49 1634412159
                  </a>
                </li>
              </ul>
            </div>
          </Positioning>
        </Box>

        <Box width={[1 / 2, 1 / 3]}>
          <Positioning pos={'center'}>
            <Link to="/">
              <SvgImage src={logo} dWidth={300} alt="oseven-logo" />
            </Link>
          </Positioning>
        </Box>

        <Box width={[1, 1 / 3]}>
          <Positioning pos={'flex-end'}>
            <StyledNav>
              <ul>
                {links.map(link => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </StyledNav>
          </Positioning>
        </Box>
      </Flex>
    </ContainerWrapper>
  )
}
export {MainModule}

const Positioning = styled.div`
  justify-content: ${(props: {pos: string}) => props.pos};
  display: flex;
  @media screen and (${props => props.theme.device.laptop}) {
    justify-content: flex-start;
  }
  li.contact {
    padding-bottom: 1em;
  }
`
