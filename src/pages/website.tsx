/** @format */

// React and Libarys
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import Fade from 'react-reveal/Fade'
import {graphql} from 'gatsby'
import theme from '../library/theme'

// Icons
import radar from '../assets/icon/website/radar.svg'
import image from '../assets/icon/website/image.svg'

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
import {WrapperBox, CentertContant, ContantBoxFull, ContantBoxHalf, ContantBoxFullThirds} from '../container'

// Components
import {
  DefaultHeadline,
  IndieFlower,
  RobotoSlab,
  HeadlineWithSublime,
  EmployerBox,
  Parallax,
  Seo,
  BackgroundImage,
  AnimatedLogo,
  AnimatedArrow,
  IconBox,
} from '../components'

export default props => (
  <React.Fragment>
    <Seo
      title="Webseiten"
      description="Übersicht des Services Webseiten"
      keywords="Cool Fancy Beste Seite Webdeveloper"
    />
    <BackgroundImage image={background} overlay={{color: 'linear-gradient(90deg, #111 0%, #555 100%)', opacity: 0.9}}>
      <CentertContant>
        <RobotoSlab elementColor={'contrast'}>
          <Fade left>
            <h1>
              Deine <span>Webseite</span>
            </h1>
          </Fade>
          <DefaultHeadline textColor={'white'}>
            <Fade right>
              <h3>mehr als nur Code</h3>
            </Fade>
          </DefaultHeadline>
        </RobotoSlab>
      </CentertContant>
    </BackgroundImage>

    <WrapperBox backgroundColor={'main'}>
      <ContantBoxHalf>
        <DefaultHeadline>
          <h3>Zeigen Sie Präsenz</h3>
        </DefaultHeadline>
        <IconBox icons={[{icon: image}]} />
        <DefaultHeadline>
          <h4>Wie eine Visitenkarte für Ihr Unternehmen, </h4>
        </DefaultHeadline>
        <p>
          ... ist Ihre Webseite eine Visitenkarte im Internet. Mit Ihrer Webseite geben Sie ihren Kunden die nötigen
          Informationen um Entscheidungen zu treffen. Lassen Sie es daher nicht auf den Zufall ankommen was ein Kunden
          über Sie erfährt.
        </p>
      </ContantBoxHalf>
      <ContantBoxHalf>
        <DefaultHeadline>
          <h3>ohne Gehts nicht</h3>
        </DefaultHeadline>
        <IconBox icons={[{icon: radar}]} />
        <DefaultHeadline>
          <h4>Überall und immer erreichbar, </h4>
        </DefaultHeadline>
        <p>
          ... über 80% der Internet-Nutzer suchen und finden Produkte und Dienstleistungen über das Internet. Kein
          Haushalt oder Büro ist heute nicht mehr an das Internet angeschlossen. Somit ist Ihre Zielgruppe ein Benutzer
          des Internets.
        </p>
      </ContantBoxHalf>
    </WrapperBox>

    <Parallax img={props.data.meeting.childImageSharp.fluid} />

    <WrapperBox>
      <ContantBoxFullThirds>
        <DefaultHeadline>
          <Fade left fraction={0.6}>
            <h3>Beratung</h3>
            <IconBox icons={[{icon: manager}]} />
            <p>
              Vor jeder Homepage steht bei uns eine ausführliche Beratung. Damit erreichen wir das Sie genau das
              bekommen was Sie erwarten.
            </p>
          </Fade>
        </DefaultHeadline>
      </ContantBoxFullThirds>
      <ContantBoxFullThirds>
        <DefaultHeadline>
          <Fade bottom fraction={0.6}>
            <h3>Aktuelle Technik</h3>
            <IconBox icons={[{icon: computer}]} />
            <p>
              Die neuesten Trends und Entwicklungen aus der Welt der Technologie zu nutzen hat für uns Priorität. Um für
              Sie das beste Ergebnis zu erreichen verwende wir aktuelle Technologie. Dabei setzen wir auch auf offen
              Standarts um Flexible zu bleiben.
            </p>
          </Fade>
        </DefaultHeadline>
      </ContantBoxFullThirds>
      <ContantBoxFullThirds>
        <DefaultHeadline>
          <Fade right fraction={0.6}>
            <h3>Ihre Informationen</h3>
            <IconBox icons={[{icon: contract}]} />
            <p>
              Stellen Sie alle wichtigen Informationen zu Ihren Leistungen und Produkten flexibel und einfach zugänglich
              auf Ihrer Webseite dar. Sie zeigen, wofür Sie stehen, wo Ihre Kompetenz liegt und was Sie von anderen
              unterscheidet.
            </p>
          </Fade>
        </DefaultHeadline>
      </ContantBoxFullThirds>
    </WrapperBox>

    <WrapperBox backgroundColor={'main'}>
      <ContantBoxFull>
        <DefaultHeadline>
          <h1>DER UNTERSCHIED MACHTS!</h1>
        </DefaultHeadline>
        <p>
          Ihre eigene Webseite ist rund um die Uhr unabhängig von Öffnungszeiten zu erreichen, täglich und weltweit. Sie
          können deutlich mehr und präzisere Informationen über sich transportieren, als dies normalerweise mit
          “klassischen” Werbemitteln möglich ist, da Sie keine Einschränkungen besitzen. Sie können Ihre Leistungen
          umfassend präsentieren und erklären.
        </p>
        <IconBox
          icons={[
            {icon: share, width: [100, 120, 150]},
            {icon: chat2, width: [100, 120, 150]},
            {icon: chat, width: [100, 120, 150]},
          ]}
        />
        <p>
          Wie finden neue Kunden zu Ihnen? Richtig, über Empfehlungen. Das Internet ist eine kostengünstige Möglichkeit,
          den Erstkontakt zu ermöglichen und Unsicherheiten abzubauen.
        </p>
        <p>
          Durch die Information die Sie Ihren Kunden zur Verfügung stellen erreichen Sie automatisch eine höhere
          Kundenbindung, da Informationen schnell gefunden werden können (z.b. Telefonnummer oder Öffnungszeiten.
        </p>
      </ContantBoxFull>
    </WrapperBox>

    <WrapperBox>
      <ContantBoxFull>
        <DefaultHeadline textColor={'contrast'}>
          <h1>WIR OPTIMIEREN!</h1>
        </DefaultHeadline>
        <p>
          Mit responsiv optimierten Websites können Nutzergruppen optimal bedient werden. In Zeiten rasant wachsender
          Absatzzahlen von mobilen Endgeräten wie Tablets und Smartphones bildet Responsive Webdesign die Möglichkeit
          der geräteunabhängigen Kommunikation. Für Unternehmen und Website-Betreiber stellt dieser Lösungsansatz einen
          wesentlichen Faktor in der Kommunikations-Strategie dar.
        </p>
        <IconBox
          icons={[
            {icon: chrome, fade: {delay: 500, duration: 500}, width: [35, 70, 80]},
            {icon: firefox, fade: {delay: 1000, duration: 500}, width: [35, 70, 80]},
            {icon: edge, fade: {delay: 1500, duration: 500}, width: [35, 70, 80]},
            {icon: safari, fade: {delay: 2000, duration: 500}, width: [35, 70, 80]},
            {icon: opera, fade: {delay: 2500, duration: 500}, width: [35, 70, 80]},
          ]}
        />
      </ContantBoxFull>
    </WrapperBox>
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    meeting: file(relativePath: {eq: "backgrounds/meeting_with_text_stretch.jpg"}) {
      ...fluidImage
    }
  }
`
