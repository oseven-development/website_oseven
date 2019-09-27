/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'

import team from '../assets/images/illustrations/team.svg'
import contact from '../assets/images/illustrations/contact.svg'
import business from '../assets/images/illustrations/business.svg'
import developer from '../assets/images/illustrations/developer.svg'
import professor from '../assets/images/illustrations/professor.svg'
import SiteContent from '../assets/content/uberuns.json'
// Components
import {Seo, Container, ContactButton, Content, Parallax, Particles, SvgImage} from '../components'
import theme from '../assets/theme'

// Bilder Backgrounds

export default props => {
  const lang = 'de'
  return (
    <React.Fragment>
      <Seo title="Über Uns" description="Startseite von Oseven" keywords="oseven Cloud Start-Up Kontakt" />
      <Container fullscreen bg={'secondary'}>
        <Particles
          title={SiteContent.header[lang].title}
          text={SiteContent.header[lang].text}
          height={['220px', '600px']}
        />
      </Container>

      <Container>
        <Content title={SiteContent.uberuns[lang].title} titleColor="primary" />
      </Container>
      <Container inbox flexDirection={'column'}>
        <Content column text={SiteContent.uberuns[lang].text} />
      </Container>
      <Container>
        <Content
          imageDirection={'row'}
          image={[
            {
              src: <SvgImage dWidth={250} mWidth={80} src={developer} />,
              type: 'svg',
              padding: '5px',
            },
            {
              src: <SvgImage dWidth={250} mWidth={80} src={professor} />,
              type: 'svg',
              padding: '5px',
            },
            {
              src: <SvgImage dWidth={250} mWidth={80} src={business} />,
              type: 'svg',
              padding: '5px',
            },
          ]}
        />
      </Container>

      <Container inbox fullscreen>
        <Parallax src={props.data.parallax.childImageSharp.fluid} alt={'man in coffee'} />
      </Container>
      <Container inbox fullscreen bg={'secondary'} flexDirection={'row'}>
        <Container transparent>
          <Container transparent flexDirection={'column'}>
            <Content maxTitle title={SiteContent.team[lang].title} titleColor="inherit" />
            <Content
              image={{
                src: <SvgImage dWidth={450} src={team} />,
                type: 'svg',
              }}
            />
          </Container>
          <Container transparent>
            <Content textColor="inherit" text={SiteContent.team[lang].text} />
          </Container>
        </Container>
      </Container>

      <Container fullscreen>
        <Container transparent>
          <Content
            title={SiteContent.contact[lang].title}
            textVariant={'div'}
            text={
              <React.Fragment>
                {SiteContent.contact[lang].text}
                <ContactButton
                  text={'kontaktiere uns hier'}
                  link={'/kontakt'}
                  textColor={'primary'}
                  width={'320px'}
                  border
                />
              </React.Fragment>
            }
          />
          <Content
            image={{
              src: <SvgImage dWidth={450} src={contact} />,
              type: 'svg',
            }}
          />
        </Container>
      </Container>
    </React.Fragment>
  )
}
// props.data.clock.childImageSharp.fluid
export const indexQuery = graphql`
  query {
    parallax: file(relativePath: {eq: "parallax/manimcoffe.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background: file(relativePath: {eq: "test/test4.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
