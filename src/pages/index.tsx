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
import {Seo, Container, ContactButton, Content, Parallax, Particles, SvgImage, SkillCard} from '../components'
import theme from '../assets/theme'
import Img from 'gatsby-image'

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
        <Content title={SiteContent.uberuns[lang].title} text={SiteContent.uberuns[lang].text} titleColor="primary" />
        <Content
          imageDirection={'row'}
          image={{
            src: <SvgImage dWidth={250} mWidth={80} src={professor} />,
            type: 'svg',
            padding: '5px',
          }}
        />
      </Container>

      <Container pt={'0px 0px 60px 0px '}>
        <SkillCard
          image={<Img fluid={props.data.sw.childImageSharp.fluid} alt={'consulting'} style={{height: 250}} />}
          title={SiteContent.uberuns[lang].skills[0].title}
          text={SiteContent.uberuns[lang].skills[0].text}
          link={SiteContent.uberuns[lang].skills[0].link}
        />
        <SkillCard
          image={<Img fluid={props.data.ml.childImageSharp.fluid} alt={'sw'} style={{height: 250}} />}
          title={SiteContent.uberuns[lang].skills[1].title}
          text={SiteContent.uberuns[lang].skills[1].text}
          link={SiteContent.uberuns[lang].skills[1].link}
        />
        <SkillCard
          image={<Img fluid={props.data.consulting.childImageSharp.fluid} alt={'ml'} style={{height: 250}} />}
          title={SiteContent.uberuns[lang].skills[2].title}
          text={SiteContent.uberuns[lang].skills[2].text}
          link={SiteContent.uberuns[lang].skills[2].link}
        />
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
    consulting: file(relativePath: {eq: "skills/consulting.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sw: file(relativePath: {eq: "skills/sw.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ml: file(relativePath: {eq: "skills/ml.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
