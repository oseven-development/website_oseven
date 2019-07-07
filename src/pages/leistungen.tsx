/** @format */

import React from 'react'
import {graphql} from 'gatsby'
import ContainerSvg from '../assets/images/illustrations/blocks.svg'
import RocketSvg from '../assets/images/illustrations/rocket.svg'
import FirmwareSvg from '../assets/images/illustrations/firmware.svg'
// Components
import {Seo, Container, Typography, Content, Parallax, BackgroundImage} from '../components'

// Bilder Backgrounds

export default props => (
  <React.Fragment>
    <Container transparent pt={'20px'}>
      <Content
        title="Cloudnative Software-entwicklung"
        subtitle={'flexibel & skalierbar'}
        text={
          'Cloudnative Anwendungen sind eine Ansammlung kleiner, unabhängiger und lose gekoppelter Services. Sie sind darauf ausgelegt, anerkannte Geschäftswerte bereitzustellen, darunter die Fähigkeit zur schnellen Integration von Benutzer-Feedback für kontinuierliche Verbesserungen. Kurz gesagt, haben wir es hier mit einer Methode zur Beschleunigung der Entwicklung neuer bzw. Optimierung bestehender Anwendungen sowie deren Verknüpfung zu tun. Ziel ist die Bereitstellung maßgeschneiderter, auf die Geschwindigkeit des geschäftlichen Wandels ausgerichteter Anwendungen.'
        }
      />
      <Content
        image={{
          src: <ContainerSvg style={{width: '100%', height: '100%'}} />,
          alt: 'Image für Leistungen',
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
              src: <FirmwareSvg style={{width: '100%', height: '150px', padding: '40px 0px 20px 0px'}} />,
              alt: 'Image für Leistungen',
              type: 'svg',
            }}
            textColor={'inherit'}
            text={
              'Unabhängig davon, ob Ihre Branche nun Telekommunikation, Bankwesen, Gesundheitswesen oder gar Viehzucht ist: Ab jetzt sind Sie auch ein Softwareunternehmen, und im Fokus Ihrer geschäftlichen Strategie liegen Anwendungen. Diese softwaregesteuerte Transformation des Business erfordert eine schnellere Entwicklung und Bereitstellung neuer Apps an die Benutzer, die hohe Qualität erwarten.'
            }
          />
          <Content
            image={{
              src: <RocketSvg style={{width: '100%', height: '150px', padding: '40px 0px 20px 0px'}} />,
              alt: 'Image für Leistungen',
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
