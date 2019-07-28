/** @format */

import React from 'react'
import {Container, SvgImage, Typography} from '../..'
import {Flex, Box, Image} from 'rebass'
import {Link} from 'gatsby'
import styled from 'styled-components'

import facebook from '../../../assets/images/icons/facebook.svg'
import google from '../../../assets/images/icons/google.svg'
import twitter from '../../../assets/images/icons/twitter.svg'
import xing from '../../../assets/images/icons/xing.svg'
import phone from '../../../assets/images/icons/phone.svg'
import mail from '../../../assets/images/icons/mail.svg'
import {StyledNav} from '../../navigation'

const Footer = (props: any) => {
  const {links, logo} = props

  return (
    <React.Fragment>
      <Container fullscreen flexDirection={'column'} style={{borderTop: '1px solid #7F83885F'}}>
        <Container
          transparent
          style={window.innerWidth > 768 ? {padding: '60px 0px 20px 0px'} : {padding: '20px 0px 10px 0px'}}
          alignItems={'flex-start'}>
          <Box>
            <Flex flexDirection={'column'}>
              <Box>
                <Typography style={{textAlign: window.innerWidth > 768 ? 'left' : 'center'}}>
                  <b>Kontaktdaten</b> <br />
                  Nordring 171 <br /> 90409 Nürnberg
                  <br /> Deutschland
                </Typography>
              </Box>
              <Box>
                <Typography color="primary">
                  <a
                    href="mailto:hallo@oseven.de"
                    style={{
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center',
                    }}>
                    <Image width={20} src={mail} style={{marginRight: 10}} />
                    hallo@oseven.de
                  </a>
                </Typography>
              </Box>
              <Box>
                <Typography color="primary">
                  <a
                    href="tel:+491634412159"
                    style={{
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center',
                    }}>
                    <Image width={20} src={phone} style={{marginRight: 10}} />
                    +49 1634412159
                  </a>
                </Typography>
              </Box>
            </Flex>
          </Box>
          <Box style={{textAlign: window.innerWidth > 768 ? 'left' : 'center'}}>
            <SvgImage src={logo} dWidth={300} />
          </Box>
          <Box style={{textAlign: 'center'}}>
            <StyledNav>
              {links.map((link: any) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </StyledNav>
          </Box>
        </Container>
        <Flex
          style={{borderTop: '1px solid #7F83885F', maxWidth: 1200, margin: 'auto', padding: '15px 0 40px 0'}}
          justifyContent={window.innerWidth > 768 ? 'space-between' : 'center'}
          alignItems="center"
          flexWrap="wrap">
          <Box style={{display: 'flex', flexDirection: 'row', fontSize: '0.8em', color: '#121212'}} pt={'15px'}>
            © 2019 - oseven
            <Link to="/impressum" style={{color: 'inherit', margin: '0px 5px 0px 5px'}}>
              Impressum
            </Link>
            <Link to="/agb" style={{color: 'inherit', margin: '0px 5px 0px 0px'}}>
              AGBs
            </Link>
            {/* - All Rights Reserved - */}
          </Box>
          <Box style={{display: 'flex', flexDirection: 'row'}} pt={'15px'}>
            <a href="https://www.facebook.com/osevenNBG/" target="_blank" style={{padding: '0px 15px 0px 15px'}}>
              <Image width={20} src={facebook} />
            </a>
            <a
              href="https://www.google.com/maps/place/Maximilian+H%C3%A4nsel+Einzelunternehmer+-+o-seven/@49.4707511,11.0960315,15z/data=!4m5!3m4!1s0x0:0x92950030122af397!8m2!3d49.4707511!4d11.0960315"
              target="_blank"
              style={{padding: '0px 15px 0px 15px'}}>
              <Image width={20} src={google} />
            </a>
            <a style={{padding: '0px 15px 0px 15px'}}>
              <Image width={20} src={xing} />
            </a>
            <a style={{padding: '0px 15px 0px 15px'}}>
              <Image width={20} src={twitter} />
            </a>
          </Box>
        </Flex>
      </Container>
    </React.Fragment>
  )
}
export default Footer
