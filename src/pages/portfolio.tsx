/** @format */

import React from 'react'
import {graphql, Link} from 'gatsby'
// content
import SiteContent from '../assets/content/portfolio.json'
// illustrations
import PortfolioSvg from '../assets/images/illustrations/portfolio.svg'
import Entwicklung from '../assets/images/illustrations/entwicklung.svg'
import Consultant from '../assets/images/illustrations/consultant.svg'
import Workshop from '../assets/images/illustrations/workshop.svg'
import AI from '../assets/images/illustrations/ai.svg'
import Blocks from '../assets/images/illustrations/blocks.svg'
import Scale from '../assets/images/illustrations/scale.svg'
import Pros from '../assets/images/illustrations/pros.svg'
import Pros2 from '../assets/images/illustrations/pros2.svg'
// partners
import GCP from '../assets/images/partner/gcp.svg'
import AWS from '../assets/images/partner/aws.svg'
import Azure from '../assets/images/partner/azure.svg'
import Firebase from '../assets/images/partner/firebase.svg'
// tools
import py from '../assets/images/tools/pytorch.svg'
import tf from '../assets/images/tools/tf.svg'
import k8 from '../assets/images/tools/k8.svg'
// architecture
import serverless from '../assets/images/architecture/serverless-architektur.svg'
import Model from '../assets/images/architecture/model.svg'
// Components
import {Seo, Container, Content, SvgImage, Parallax, ContactButton, List} from '../components'
import {Flex} from 'rebass'
// Bilder Backgrounds
const lang = 'de'

export default props => (
  <React.Fragment>
    <Seo
      title="Portfolio"
      description="Portfolioübersicht"
      keywords="Cloud Cloudnative Serverless Software Development Aws Gcp Azure Workshops"
    />
    {/* //! Header */}
    <Container pt={'0px'} transparent>
      <Content
        title={SiteContent.header[lang].title}
        subtitle={SiteContent.header[lang].subtitle}
        text={
          <React.Fragment>
            {SiteContent.header[lang].text}
            {SiteContent.header[lang].nav.map((link: any) => (
              <ContactButton
                key={Math.random()}
                text={link.label}
                link={`#${link.href}`}
                textColor={'primary'}
                type={'out'}
                border
              />
            ))}
          </React.Fragment>
        }
        textVariant={'div'}
      />

      <Content
        image={{
          src: <SvgImage dWidth={450} src={PortfolioSvg} />,
          type: 'svg',
        }}
      />
    </Container>
    {/* //! Was ist CN */}
    <Container inbox fullscreen bg={'secondary'}>
      <Container transparent flexDirection={'column'}>
        <Content subtitleColor={'inherit'} subtitle={SiteContent.cn[lang].title} />
        <Container inbox transparent flexDirection={'row'}>
          <Content
            textColor={'inherit'}
            image={{
              src: <SvgImage dWidth={250} src={Blocks} />,
              type: 'svg',
              padding: '0px 0px 10px 0px',
            }}
            text={SiteContent.cn[lang].text[0]}
          />
          <Content
            textColor={'inherit'}
            image={{
              src: <SvgImage dWidth={209} src={Scale} />,
              type: 'svg',
            }}
            text={SiteContent.cn[lang].text[1]}
          />
        </Container>
      </Container>
    </Container>
    {/* //! Parallax 1 */}
    <Container inbox fullscreen>
      <Parallax src={props.data.domore.childImageSharp.fluid} alt={'do more'} />
    </Container>
    {/* //! Software Entwicklung */}
    <Container id="sw">
      <Content title={SiteContent.sw[lang].title} />
      <Content
        image={{
          src: <SvgImage dWidth={250} src={Entwicklung} />,
          type: 'svg',
        }}
      />
    </Container>
    <Container ratio={12}>
      <Content
        column
        text={
          <React.Fragment>
            {SiteContent.sw[lang].text[0]}
            <br /> {SiteContent.sw[lang].text[3]}
          </React.Fragment>
        }
      />
    </Container>
    <Container>
      <Content
        textAlign={'center'}
        text={
          <React.Fragment>
            <i>Architektur einer Serverless Anwendung bei AWS</i>
          </React.Fragment>
        }
        textColor={'secondary'}
        image={{
          src: <SvgImage dWidth={750} mWidth={300} src={serverless} />,
          type: 'svg',
        }}
      />
      <Content
        text={
          <React.Fragment>
            {SiteContent.sw[lang].text[1]} <br />
            {SiteContent.sw[lang].text[2]}
          </React.Fragment>
        }
      />
    </Container>

    {/* //! Key Partners */}
    <Container inbox fullscreen bg={'third'} style={{border: '1px solid #7F83885F'}}>
      <Container transparent flexDirection={'column'}>
        <Content subtitle={SiteContent.partners[lang].title} />
        <Content
          imageDirection={'row'}
          image={[
            {
              src: <SvgImage dWidth={300} mWidth={200} src={GCP} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={90} mWidth={50} src={AWS} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={180} mWidth={120} src={Azure} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={180} mWidth={120} src={Firebase} />,
              type: 'svg',
            },
          ]}
        />
      </Container>
    </Container>
    {/* //! pro Software Entwicklung */}
    <Container>
      <Content subtitle={SiteContent.pro[lang].subtitle} text={SiteContent.pro[lang].text} />
    </Container>
    <Container ratio={12}>
      <Content
        image={{
          src: <SvgImage dWidth={250} src={Pros} />,
          type: 'svg',
        }}
      />
      <Content textVariant={'div'} textAlign={'left'} text={<List items={SiteContent.pro[lang].arguments} />} />
    </Container>
    {/* { // ! Parllax } */}
    <Container inbox fullscreen>
      <Parallax src={props.data.punch.childImageSharp.fluid} alt={'post its'} />
    </Container>
    {/* //! ML & AI */}
    <Container id="ml">
      <Content title={SiteContent.ml[lang].title} />
      <Content
        image={{
          src: <SvgImage dWidth={250} src={AI} />,
          type: 'svg',
        }}
      />
    </Container>
    <Container>
      <Content column text={SiteContent.ml[lang].text} />
    </Container>
    <Container alignItems={'flex-start'}>
      <Content
        textAlign={'center'}
        text={
          <React.Fragment>
            <i>Machine learning lifecycle by Google</i>
          </React.Fragment>
        }
        image={{
          src: <SvgImage dWidth={750} mWidth={300} src={Model} />,
          type: 'svg',
        }}
      />
      <Content text={SiteContent.ml[lang].text2} />
    </Container>
    {/* //! Tools */}
    <Container inbox fullscreen bg={'third'} style={{border: '1px solid #7F83885F'}}>
      <Container transparent flexDirection={'column'}>
        <Content subtitle={SiteContent.tools[lang].title} />
        <Content
          imageDirection={'row'}
          image={[
            {
              src: <SvgImage dWidth={250} mWidth={150} src={py} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={250} mWidth={150} src={tf} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={250} mWidth={150} src={k8} />,
              type: 'svg',
            },
          ]}
        />
      </Container>
    </Container>
    {/* //! Parllax 2  */}
    <Container inbox fullscreen>
      <Parallax src={props.data.projects.childImageSharp.fluid} alt={'projectplan'} />
    </Container>
    {/* //! Beratung 2  */}
    <Container inbox fullscreen bg={'secondary'} flexDirection={'column'}>
      <Container pt={['20px 0px 0px 0px', '40px 0px 0px 0px']} transparent id="bw">
        <Content titleColor={'inherit'} title={SiteContent.consulting[lang].title} />
      </Container>

      <Container pt={['0px 0px 20px 0px', '0px 0px 40px 0px']} transparent>
        <Content textColor={'inherit'} text={SiteContent.consulting[lang].text} />
        <Content
          image={{
            src: <SvgImage dWidth={250} src={Consultant} />,
            type: 'svg',
          }}
        />
      </Container>
    </Container>

    {/* //! Workshop 2  */}
    <Container pt={['20px 0px 0px 0px', '40px 0px 0px 0px']}>
      <Content title={SiteContent.workshops[lang].title} />
      <Content
        image={{
          src: <SvgImage dWidth={250} src={Workshop} />,
          type: 'svg',
        }}
      />
    </Container>
    <Container pt={['0px 0px 20px 0px', '0px 0px 40px 0px']} transparent>
      <Content text={SiteContent.workshops[lang].text} />
    </Container>
    <Container pt={['0px 0px 20px 0px', '0px 0px 40px 0px']} ratio={12} transparent>
      <Content
        image={{
          src: <SvgImage dWidth={650} src={Pros2} />,
          type: 'svg',
        }}
      />
      <Content textVariant={'div'} textAlign={'left'} text={<List items={SiteContent.workshops[lang].arguments} />} />
    </Container>
  </React.Fragment>
)
// props.data.clock.childImageSharp.fluid

export const indexQuery = graphql`
  query {
    domore: file(relativePath: {eq: "parallax/domore.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    punch: file(relativePath: {eq: "parallax/punch.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projects: file(relativePath: {eq: "parallax/projects.jpg"}) {
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

{
  /* <Container transparent pt={'20px'}>
<Content
  title="Cloudnative Software-entwicklung"
  subtitle={'flexibel & skalierbar'}
  text={
    'Cloudnative Anwendungen sind eine Ansammlung kleiner, unabhängiger und lose gekoppelter Services. Sie sind darauf ausgelegt, anerkannte Geschäftswerte bereitzustellen, darunter die Fähigkeit zur schnellen Integration von Benutzer-Feedback für kontinuierliche Verbesserungen. Kurz gesagt, haben wir es hier mit einer Methode zur Beschleunigung der Entwicklung neuer bzw. Optimierung bestehender Anwendungen sowie deren Verknüpfung zu tun. Ziel ist die Bereitstellung maßgeschneiderter, auf die Geschwindigkeit des geschäftlichen Wandels ausgerichteter Anwendungen.'
  }
/>
<Content
  image={{
    src: <SvgImage dWidth={450} src={ContainerSvg} />,
    type: 'svg',
  }}
/>
</Container>
<Container fullscreen bg={'secondary'}>
<Container transparent pt={'20px'} flexDirection={'row'}>
  <Content
    subtitle={'Gründe für die Entwicklung cloudnativer Apps'}
    subtitleColor={'inherit'}
    subtitleAlign={'center'}
  />
  <Container transparent alignItems={'flex-start'}>
    <Content
      image={{
        src: <SvgImage p={'40px 0px 20px 0px'} dWidth={250} src={FirmwareSvg} />,
        type: 'svg',
      }}
      textColor={'inherit'}
      text={
        'Unabhängig davon, ob Ihre Branche nun Telekommunikation, Bankwesen, Gesundheitswesen oder gar Viehzucht ist: Ab jetzt sind Sie auch ein Softwareunternehmen, und im Fokus Ihrer geschäftlichen Strategie liegen Anwendungen. Diese softwaregesteuerte Transformation des Business erfordert eine schnellere Entwicklung und Bereitstellung neuer Apps an die Benutzer, die hohe Qualität erwarten.'
      }
    />
    <Content
      image={{
        src: <SvgImage p={'40px 0px 20px 0px'} dWidth={250} src={RocketSvg} />,
        type: 'svg',
      }}
      textColor={'inherit'}
      text={
        'Wir bei Oseven glauben, dass Sie in Ihre Prozesse, Infrastruktur und Architektur investieren müssen, um auf modernen, sich schnell verändernden Märkten wettbewerbsfähig bleiben zu können. Um diese Anpassung zu unterstützen, entwickeln wir Cloudnative Software, welche sich auf ihre Bedürfnisse anpasst, flexibel vergrößert und verkleinert ist. Sie müssen keine unnötige Serveradminstration durchführen und können sich voll und ganz auf ihre Kernkompetenzen konzentrieren. Unser Ziel ist die Fähigkeit, hochwertige Apps mit noch größerer Agilität zu liefern.'
      }
    />
  </Container>
</Container>
</Container>
<Container fullscreen>
<Parallax src={props.data.domore.childImageSharp.fluid} />
</Container>
<Container transparent pt={'20px'}>
<Content title="Das sind unsere Tools" />
<Content
  image={[
    {
      src: <SvgImage dWidth={150} src={ContainerSvg} />,
      type: 'svg',
    },
    {
      src: <SvgImage dWidth={150} src={ContainerSvg} />,
      type: 'svg',
    },
    {
      src: <SvgImage dWidth={150} src={ContainerSvg} />,
      type: 'svg',
    },
  ]}
/>
<Content
  image={[
    {
      src: <SvgImage dWidth={150} src={ContainerSvg} />,
      type: 'svg',
    },
    {
      src: <SvgImage dWidth={150} src={ContainerSvg} />,
      type: 'svg',
    },
    {
      src: <SvgImage dWidth={150} src={ContainerSvg} />,
      type: 'svg',
    },
  ]}
/>
</Container> */
}
