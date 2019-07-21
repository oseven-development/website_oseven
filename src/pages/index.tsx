/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import team from '../assets/images/illustrations/team.svg'
import business from '../assets/images/illustrations/business.svg'
import developer from '../assets/images/illustrations/developer.svg'
import professor from '../assets/images/illustrations/professor.svg'
import SiteContent from '../../content/uberuns.json'
// Components
import {Seo, Container, Typography, Content, Parallax, BackgroundImage, SvgImage} from '../components'
import theme from '../assets/theme'

// Bilder Backgrounds

export default props => {
  console.log(props)
  const lang = 'de'
  return (
    <React.Fragment>
      <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={[250, 700]} pt={'10px'}>
            <Content />
            <Content
              maxTitle
              titleColor="inherit"
              subtitleColor="inherit"
              title={SiteContent.header[lang].title}
              subtitle={SiteContent.header[lang].subtitle}
            />
          </Container>
        </BackgroundImage>
      </Container>
      <Container ratio={12}>
        <Content title={SiteContent.uberuns[lang].title} titleColor="primary" />
        <Content
          textPadding={'20px 20px'}
          text={
            <React.Fragment>
              <b style={{color: theme.colors.primary}}>oseven</b> {SiteContent.uberuns[lang].text}
            </React.Fragment>
          }
        />
      </Container>
      <Container>
        <Content
          imageDirection={'row'}
          image={[
            {
              src: <SvgImage dWidth={250} src={business} />,
              type: 'svg',
              padding: '5px',
            },
            {
              src: <SvgImage dWidth={250} src={developer} />,
              type: 'svg',
              padding: '5px',
            },
            {
              src: <SvgImage dWidth={250} src={professor} />,
              type: 'svg',
              padding: '5px',
            },
          ]}
        />
      </Container>
      <Container fullscreen>
        <Parallax src={props.data.parallax.childImageSharp.fluid} />
      </Container>
      <Container fullscreen bg={'secondary'}>
        <Container transparent>
          <Content maxTitle title={SiteContent.team[lang].title} titleColor="inherit" />
          <Content
            image={{
              src: <SvgImage dWidth={950} src={team} />,
              type: 'svg',
            }}
          />
        </Container>
      </Container>
      <Container fullscreen bg={'secondary'}>
        <Container transparent>
          <Content textColor="inherit" text={SiteContent.team[lang].text} />
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
