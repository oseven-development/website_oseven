/** @format */

import React from 'react'
import {graphql} from 'gatsby'
import SiteContent from '../assets/content/references.json'
import ContactSvg from '../assets/images/illustrations/references.svg'

import {Flex, Box} from 'rebass'
// Components
import {Seo, Container, SvgImage, Content, Parallax, Project, CustomerBox} from '../components'

// Bilder Backgrounds
const lang = 'de'

export default props => {
  return (
    <React.Fragment>
      <Seo title="Referenzen" description="Refrenzen" keywords="Kunden Talos Caligraf Referenzen" />
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

      <div style={{maxWidth: '1200px', margin: 'auto'}}>
        <Flex p={['0 20px', '0']}>
          <Box width={[1, 0.5]} pr={[0, 3]}>
            <h1>{SiteContent.customer[lang].title}</h1>
            <h3>
              Erfahren Sie mehr über unsere neuesten Engagements, die Innovationen für Unternehmen und Behörden
              vorantreiben.
            </h3>
          </Box>
        </Flex>
      </div>

      {/* Put Container here */}
      <div style={{maxWidth: '1200px', margin: 'auto'}}>
        <CustomerBox
          title="Wagner Bau Service"
          description={[
            'Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, onsetetur sadipscing elitr, sed diam … more',
            'asd',
          ]}
          contactStack={[{provider: 'xing', linkTo: 'https://www.xing.com'}]}
          techStack={['react', 'python3']}
          imageStack={[]}
        />

        <CustomerBox
          title="Wagner Bau Service"
          description={[
            'Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, onsetetur sadipscing elitr, sed diam … more',
            'asd',
          ]}
          contactStack={[{provider: 'xing', linkTo: 'https://www.xing.com'}]}
          techStack={['react', 'python3']}
          imageStack={[]}
        />
      </div>

      <Container fullscreen bg={'secondary'}>
        <Container transparent flexDirection={'column'}>
          <Content
            imageDirection={'row'}
            image={[
              {
                src: props.data.heike.childImageSharp.fluid,
                width: [130, 200],
              },
              {
                src: props.data.paul.childImageSharp.fluid,
                width: [130, 200],
              },
              {
                src: props.data.priofol.childImageSharp.fluid,
                width: [130, 200],
              },
              {
                src: props.data.wagner.childImageSharp.fluid,
                width: [130, 200],
              },
            ]}
          />
        </Container>
      </Container>
      <Container inbox fullscreen>
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
