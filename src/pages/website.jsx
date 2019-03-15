/** @format */

// React and Libarys
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import theme from '../components/theme'
import Fade from 'react-reveal/Fade'

// Icons
import chrome from '../assets/icon/website/chrome.svg'
import firefox from '../assets/icon/website/firefox.svg'
import edge from '../assets/icon/website/edge.svg'
import safari from '../assets/icon/website/safari.svg'
import opera from '../assets/icon/website/opera.svg'

import chat from '../assets/icon/website/chat.svg'
import chat2 from '../assets/icon/website/chat2.svg'
import share from '../assets/icon/website/share.svg'

import manager from '../assets/icon/website/manager.svg'
import computer from '../assets/icon/website/computer.svg'
import contract from '../assets/icon/website/contract.svg'

// Bilder
import background from '../assets/images/backgrounds/website.jpg'
import meetingWithText from '../assets/images/backgrounds/meeting_with_text.jpg'

// Containers
import {SmallContainers, ContentBox} from '../container'

// Old components maybe Merge
import {SkewedBackground, Container, ServiceContainer, Parallax, Seo, FadeImageOrIconBox} from '../components'

// Alte mds
import Praesenz from '../../content/produkt/website/zeigenSiePräsens.md'
import OhneGehtsNicht from '../../content/produkt/website/ohneGehtsnicht.md'

const WebsitePage = () => (
  <React.Fragment>
    <Seo
      title="Webseiten"
      description="Übersicht des Services Webseiten"
      keywords="Cool Fancy Beste Seite Webdeveloper"
    />
    <div style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
      <SkewedBackground
        img={background}
        color="linear-gradient(161deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%)"
        bgPosition="center"
        rotation="rotate(6.6deg) translateZ(0)"
      />
      <Container style={{color: theme.colors.textBlack}}>
        <Box mt={['90px', '140px', '240px', '300px']}>
          <Fade left>
            <h1 className="awesome-headline-h1" style={{color: theme.colors.lightwhite}}>
              <span className="span">Deine </span>Webseite
            </h1>
          </Fade>
          <Fade right>
            <h2 className="awesome-headline-h2">mehr als nur Code</h2>
          </Fade>
        </Box>

        <ServiceContainer style={{marginTop: '1em'}} color={theme.colors.second} bgcolor="white">
          <Flex flexDirection="row" flexWrap="wrap">
            <Box py={['0.5em', '1em', '2em']} p={theme.paddings} width={[1, 1, 1 / 2]}>
              <Praesenz />
            </Box>
            <Box py={['0.5em', '1em', '2em']} p={theme.paddings} width={[1, 1, 1 / 2]}>
              <OhneGehtsNicht />
            </Box>
          </Flex>
        </ServiceContainer>
      </Container>
    </div>

    <Parallax img={meetingWithText} />

    <SmallContainers>
      <ContentBox width={[1]} componentMid={<Spinner />} />
    </SmallContainers>

    <SmallContainers backgroundColor={'second'}>
      <ContentBox
        width={[1, 3 / 4]}
        h2={{content: 'DER UNTERSCHIED MACHTS!', color: 'white', style: 'swift'}}
        // h1={{content: 'Swift Style', style: 'swift', color: 'main'}}
        textColor={'white'}
        paragraph={[
          'Ihre eigene Webseite ist rund um die Uhr unabhängig von Öffnungszeiten zu erreichen, täglich und weltweit. Sie können deutlich mehr und präzisere Informationen über sich transportieren, als dies normalerweise mit “klassischen” Werbemitteln möglich ist, da Sie keine Einschränkungen besitzen. Sie können Ihre Leistungen umfassend präsentieren und erklären.',
          <br />,
          'Wie finden neue Kunden zu Ihnen? Richtig, über Empfehlungen. Das Internet ist eine kostengünstige Möglichkeit, den Erstkontakt zu ermöglichen und Unsicherheiten abzubauen.',
          <br />,
          'Durch die Information die Sie Ihren Kunden zur Verfügung stellen erreichen Sie automatisch eine höhere Kundenbindung, da Informationen schnell gefunden werden können (z.b. Telefonnummer oder Öffnungszeiten.',
        ]}
        componentMid={
          <FadeImageOrIconBox
            icons={[
              {icon: share, width: [100, 120, 150]},
              {icon: chat2, width: [100, 120, 150]},
              {icon: chat, width: [100, 120, 150]},
            ]}
          />
        }
      />
    </SmallContainers>

    <SmallContainers backgroundColor={'white'}>
      <ContentBox
        width={[1, 3 / 4]}
        h2={{content: 'WIR OPTIMIEREN', color: 'contrast', style: 'swift'}}
        paragraph={
          'Mit responsiv optimierten Websites können Nutzergruppen optimal bedient werden. In Zeiten rasant wachsender Absatzzahlen von mobilen Endgeräten wie Tablets und Smartphones bildet Responsive Webdesign die Möglichkeit der geräteunabhängigen Kommunikation. Für Unternehmen und Website-Betreiber stellt dieser Lösungsansatz einen wesentlichen Faktor in der Kommunikations-Strategie dar.'
        }
        componentMid={
          <FadeImageOrIconBox
            icons={[
              {icon: chrome, fade: {delay: 500, duration: 500}, width: [35, 70, 80]},
              {icon: firefox, fade: {delay: 1000, duration: 500}, width: [35, 70, 80]},
              {icon: edge, fade: {delay: 1500, duration: 500}, width: [35, 70, 80]},
              {icon: safari, fade: {delay: 2000, duration: 500}, width: [35, 70, 80]},
              {icon: opera, fade: {delay: 2500, duration: 500}, width: [35, 70, 80]},
            ]}
          />
        }
      />
    </SmallContainers>
  </React.Fragment>
)

export default WebsitePage

const Spinner = () => (
  <ServiceContainer>
    <Flex flexDirection="row" flexWrap="wrap">
      <Box p={theme.paddings} width={[1, 1, 1 / 3]}>
        <Fade left fraction={0.6}>
          <h3>Beratung</h3>
          <Image py={[1, 15, 30]} width={[100, 120, 150]} src={manager} />
          <p>
            Vor jeder Homepage steht bei uns eine ausführliche Beratung. Damit erreichen wir das Sie genau das bekommen
            was Sie erwarten.
          </p>
        </Fade>
      </Box>
      <Box p={theme.paddings} width={[1, 1, 1 / 3]}>
        <Fade bottom fraction={0.6}>
          <h3>Aktuelle Technik</h3>
          <Image py={[1, 15, 30]} width={[100, 120, 150]} src={computer} />
          <p>
            Die neuesten Trends und Entwicklungen aus der Welt der Technologie zu nutzen hat für uns Priorität. Um für
            Sie das beste Ergebnis zu erreichen verwende wir aktuelle Technologie. Dabei setzen wir auch auf offen
            Standarts um Flexible zu bleiben.
          </p>
        </Fade>
      </Box>
      <Box p={theme.paddings} width={[1, 1, 1 / 3]}>
        <Fade right fraction={0.6}>
          <h3>Ihre Informationen</h3>
          <Image py={[1, 15, 30]} width={[100, 120, 150]} src={contract} />
          <p>
            Stellen Sie alle wichtigen Informationen zu Ihren Leistungen und Produkten flexibel und einfach zugänglich
            auf Ihrer Webseite dar. Sie zeigen, wofür Sie stehen, wo Ihre Kompetenz liegt und was Sie von anderen
            unterscheidet.
          </p>
        </Fade>
      </Box>
    </Flex>
  </ServiceContainer>
)
