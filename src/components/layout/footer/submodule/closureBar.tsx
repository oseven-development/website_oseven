/** @format */

import React from 'react'
import styled from 'styled-components'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import {SVGcontact, SVGfacebook, SVGgoogle, SVGtwitter, SVGxing, SVGphone, SVGmail} from '../../../../assets'
import {ContainerBox} from '../../../'

const content = [
  {icon: SVGfacebook, href: 'https://www.facebook.com/osevenNBG/'},
  {
    icon: SVGgoogle,
    href:
      ' https://www.google.com/maps/place/Maximilian+H%C3%A4nsel+Einzelunternehmer+-+o-seven/@49.4707511,11.0960315,15z/data=!4m5!3m4!1s0x0:0x92950030122af397!8m2!3d49.4707511!4d11.0960315',
  },
  {icon: SVGxing, href: 'https://www.xing.com/profile/Maximilian_Haensel'},
  {icon: SVGtwitter, href: 'https://twitter.com/maxhaensel_'},
]

const ClosureBar = () => {
  return (
    <StyledClosureBar>
      <ContainerBox noSpace>
        <Flex alignItems="center" flexWrap="wrap">
          <Box width={[1, 0.5]}>
            © 2019 - oseven
            <Link to="/impressum"> Impressum </Link>
            <Link to="/agb"> AGBs </Link>
            {/* - All Rights Reserved - */}
          </Box>

          <Box width={[1, 0.5]} className={'socialMediaIcons'}>
            {content.map(({icon, href}) => (
              <RenderSocialMedia key={href} {...{icon, href}} />
            ))}
          </Box>
        </Flex>
      </ContainerBox>
    </StyledClosureBar>
  )
}
export {ClosureBar}

const StyledClosureBar = styled.div`
  border-top: 1px solid #7f83885f;

  .socialMediaIcons {
    text-align: right;
    @media screen and (${props => props.theme.device.laptop}) {
      padding-top: 1em;
      text-align: center;
    }
  }
  @media screen and (${props => props.theme.device.laptop}) {
    text-align: center;
  }
`

const RenderSocialMedia = ({icon, href}: {icon; href: string}) => (
  <a href={href} target="_blank" style={{padding: '0px 15px 0px 15px'}}>
    <Image width={20} src={icon} />
  </a>
)
