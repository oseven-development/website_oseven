/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import Homescreen from '../assets/images/illustrations/homescreen.svg'

// Components
import {Seo, Container, Typography, Content, Parallax, BackgroundImage} from '../components'

// Bilder Backgrounds

export default props => {
  console.log(props)
  return (
    <React.Fragment>
      <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900} ratio={21}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>
      <Container>
        <Typography color={'secondary'} variant="h2">
          OSEVEN
        </Typography>
      </Container>
      <Container>
        <Content
          title="Test"
          titleColor="primary"
          subtitle="test2"
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        />
      </Container>
      <Container>
        <Content
          title="Test"
          titleColor="primary"
          subtitle="test2"
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        />
      </Container>
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>
      <Container>
        <Content
          title="Test"
          titleColor="primary"
          subtitle="test2"
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        />
      </Container>
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>
      <Container>
        <Content
          title="Test"
          titleColor="primary"
          subtitle="test2"
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        />
      </Container>
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>{' '}
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>{' '}
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>{' '}
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>{' '}
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>{' '}
      <Container fullscreen>
        <BackgroundImage Tag="section" fluid={props.data.background.childImageSharp.fluid} backgroundColor={`#040e18`}>
          <Container transparent height={900}>
            <Content maxTitle title="Cloudnative Anwendungs-entwicklung" subtitle={'simple, flexibel & skalierbar'} />
            <Content />
          </Container>
        </BackgroundImage>
      </Container>
    </React.Fragment>
  )
}
// props.data.clock.childImageSharp.fluid
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
