/** @format */

import React from 'react'
import {graphql} from 'gatsby'
import SiteContent from '../../content/references.json'
import ContactSvg from '../assets/images/illustrations/references.svg'

// Components
import {Seo, Container, SvgImage, Content, Parallax, Project} from '../components'

// Bilder Backgrounds
const lang = 'de'

export default props => (
  <React.Fragment>
    <Seo title="Kontakt" description="Kontaktadressen" keywords="Email E-mail Telefon Adresse Kontakt Contact" />
    <Container transparent>
      <Content
        title={SiteContent.header[lang].title}
        subtitle={SiteContent.header[lang].subtitle}
        text={SiteContent.header[lang].text}
      />

      <Content
        image={{
          src: <SvgImage dWidth={450} src={ContactSvg} />,
          type: 'svg',
        }}
      />
    </Container>

    <Container fullscreen bg={'secondary'}>
      <Container transparent flexDirection={'column'}>
        <Content title={SiteContent.customer[lang].title} titleColor="inherit" />
        <Content
          imageDirection={'row'}
          image={[
            {
              src: props.data.heike.childImageSharp.fluid,
              style: {width: window.innerWidth > 768 ? 200 : 150},
            },
            {
              src: props.data.paul.childImageSharp.fluid,
              style: {width: window.innerWidth > 768 ? 200 : 150},
            },
            {
              src: props.data.priofol.childImageSharp.fluid,
              style: {width: window.innerWidth > 768 ? 200 : 150},
            },
            {
              src: props.data.wagner.childImageSharp.fluid,
              style: {width: window.innerWidth > 768 ? 200 : 150},
            },
          ]}
        />
      </Container>
    </Container>
    <Container fullscreen>
      <Parallax src={props.data.parallax.childImageSharp.fluid} />
    </Container>
    <Container>
      <Content title={SiteContent.project[lang].title} text={SiteContent.project[lang].text} />
    </Container>
    <Container>
      {SiteContent.project[lang].array.map((project: any) => (
        <Project title={project.title} text={project.text} url={project.url} />
      ))}
    </Container>
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    parallax: file(relativePath: {eq: "parallax/process.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heike: file(relativePath: {eq: "references/heikehänsel.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    paul: file(relativePath: {eq: "references/paulschaefer.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    priofol: file(relativePath: {eq: "references/priofol.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wagner: file(relativePath: {eq: "references/wagner.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
