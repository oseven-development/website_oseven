/** @format */

import React from 'react'
import {graphql} from 'gatsby'
import SiteContent from '../assets/content/references'
import ContactSvg from '../assets/images/illustrations/references.svg'

import {Flex, Box} from 'rebass'
// Components
import {Seo, Container, SvgImage, Content, Parallax, Project, CustomerBox, Typography} from '../components'
import HeaderWithSubNavigation from '../components/header/headerWithSubNavigation'
// Bilder Backgrounds
const lang = 'de'

const title = SiteContent.header[lang].title
const subtitle = SiteContent.header[lang].text
const nav = SiteContent.header[lang].nav

export default props => {
  return (
    <React.Fragment>
      <Seo title="Referenzen" description="Refrenzen" keywords="Kunden Talos Caligraf Referenzen" />

      {/* //! Header */}
      <HeaderWithSubNavigation {...{title, subtitle, nav}} />

      <Container transparent>
        <Content
          title={SiteContent.header.title[lang]}
          // subtitle={SiteContent.header[lang].subtitle}
          text={SiteContent.header.text[lang]}
        />

        <Content
          image={{
            src: <SvgImage dWidth={450} src={ContactSvg} />,
            type: 'svg',
          }}
        />
      </Container>

      {/* Unser Projekte */}
      {/* Projekteüberschrift */}
      <Container fullscreen bg={'secondary'}>
        <div style={{maxWidth: '1200px', margin: '2em auto'}}>
          <Flex p={['0 20px', '0']}>
            <Box width={[1, 0.5]} p={[0, 3]}>
              <Typography variant="h1" color={'inherit'}>
                {SiteContent.project.title[lang]}
              </Typography>
              <Typography color={'inherit'}>{SiteContent.project.text[lang]}</Typography>
            </Box>
          </Flex>
        </div>
      </Container>
      {/* Projekte */}
      <Container>
        <div style={{maxWidth: '1200px', margin: '2em auto'}}>
          {SiteContent.project.content.map(project => (
            <CustomerBox key={project.title[lang]} {...project} />
          ))}
        </div>
      </Container>

      {/* Parallax */}
      <Container inbox fullscreen>
        <Parallax src={props.data.parallax.childImageSharp.fluid} />
      </Container>

      {/* Unser Kunden */}
      {/* Kundenüberchrift */}
      <Container fullscreen bg={'secondary'}>
        <div style={{maxWidth: '1200px', margin: '2em auto'}}>
          <Flex p={['0 20px', '0']}>
            <Box width={[1, 0.5]} p={[0, 3]}>
              <Typography variant="h1" color={'inherit'}>
                {SiteContent.customer.title[lang]}
              </Typography>
              <Typography color={'inherit'}>{SiteContent.customer.text[lang]}</Typography>
            </Box>
          </Flex>
        </div>
      </Container>

      {/* Customer Boxen */}
      <Container>
        <div style={{maxWidth: '1200px', margin: '2em auto'}}>
          {SiteContent.customer.content.map(customer => (
            <CustomerBox key={customer.title[lang]} {...customer} />
          ))}
        </div>
      </Container>
    </React.Fragment>
  )
}

export const indexQuery = graphql`
  query {
    parallax: file(relativePath: {eq: "parallax/process.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
