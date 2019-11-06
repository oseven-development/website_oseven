/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'

import {team, professor} from '../assets'
import SiteContent from '../assets/content/uberuns'
// Components
import {Seo, Container, Content, Particles, SvgImage, SkillCardBox, ContainerBox, PortraitBox} from '../components'

// Bilder Backgrounds

export default props => {
  const lang = 'de'
  const content = [
    {
      image: props.data.sw.childImageSharp.fluid,
      title: SiteContent.uberuns.skills[0].title[lang],
      text: SiteContent.uberuns.skills[0].text[lang],
      link: {to: SiteContent.uberuns.skills[0].link.to, label: SiteContent.uberuns.skills[0].link.label[lang]},
    },
    {
      image: props.data.ml.childImageSharp.fluid,
      title: SiteContent.uberuns.skills[1].title[lang],
      text: SiteContent.uberuns.skills[1].text[lang],
      link: {to: SiteContent.uberuns.skills[1].link.to, label: SiteContent.uberuns.skills[1].link.label[lang]},
    },
    {
      image: props.data.consulting.childImageSharp.fluid,
      title: SiteContent.uberuns.skills[2].title[lang],
      text: SiteContent.uberuns.skills[2].text[lang],
      link: {to: SiteContent.uberuns.skills[2].link.to, label: SiteContent.uberuns.skills[2].link.label[lang]},
    },
  ]

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

      {/* Skill Cards */}
      <SkillCardBox {...{content}} />

      {/* Wer sind wir */}
      <ContainerBox>
        <h1>{SiteContent.team[lang].title}</h1>
        <p>{SiteContent.team[lang].text}</p>
      </ContainerBox>
      <PortraitBox />

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
      ...imagePre
    }
    background: file(relativePath: {eq: "test/test4.jpg"}) {
      ...imagePre
    }
    consulting: file(relativePath: {eq: "skills/consulting.jpg"}) {
      ...imagePre
    }
    sw: file(relativePath: {eq: "skills/sw.jpg"}) {
      ...imagePre
    }
    ml: file(relativePath: {eq: "skills/ml.jpg"}) {
      ...imagePre
    }
  }
`
