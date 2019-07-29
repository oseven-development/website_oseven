/** @format */

import React from 'react'
import {graphql} from 'gatsby'
import SiteContent from '../assets/content/contact.json'
import ContactSvg from '../assets/images/illustrations/contactSite.svg'

// Components
import {Seo, Container, SvgImage, Content, ContactButton, Typography} from '../components'

// Bilder Backgrounds
const lang = 'de'

export default props => (
  <React.Fragment>
    <Seo title="Kontakt" description="Kontaktadressen" keywords="Email E-mail Telefon Adresse Kontakt Contact" />
    <Container transparent>
      <Content
        title={SiteContent.kontakt[lang].title}
        subtitle={SiteContent.kontakt[lang].subtitle}
        text={
          <React.Fragment>
            {SiteContent.kontakt[lang].text.map((text: string) => (
              <Typography>{text}</Typography>
            ))}
            <ContactButton
              text={SiteContent.kontakt[lang].email}
              link={`mailto:${SiteContent.kontakt[lang].email}`}
              textColor={'primary'}
              type={'out'}
              border
            />
            <ContactButton
              text={SiteContent.kontakt[lang].phone}
              link={`tel:${SiteContent.kontakt[lang].phone}`}
              textColor={'primary'}
              type={'out'}
              border
            />
          </React.Fragment>
        }
      />

      <Content
        image={{
          src: <SvgImage dWidth={450} src={ContactSvg} />,
          type: 'svg',
        }}
      />
    </Container>
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    process: file(relativePath: {eq: "process.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background: file(relativePath: {eq: "process.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
