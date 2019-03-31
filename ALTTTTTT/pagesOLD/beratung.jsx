/** @format */
// React and Libarys
import React from 'react'
import {Flex, Box, Image} from 'rebass'
import Fade from 'react-reveal/Fade'

// Bilder
import ConsutlingBackground from '../assets/images/backgrounds/consutling.jpg'
import consultingparallax from '../assets/images/backgrounds/consultingparallax.jpg'

// Icons
import projekt1 from '../assets/icon/beratung/content.svg'
import projekt2 from '../assets/icon/beratung/checklist.svg'
import projekt3 from '../assets/icon/beratung/presentation.svg'
import consulting1 from '../assets/icon/beratung/analytics.svg'
import consulting2 from '../assets/icon/beratung/mountains.svg'
import consulting3 from '../assets/icon/beratung/folder.svg'

import lightBulb from '../assets/icon/beratung/light-bulb.svg'
import checklistflat from '../assets/icon/beratung/checklistflat.svg'
import build from '../assets/icon/beratung/build.svg'
import checked from '../assets/icon/beratung/checked.svg'
import refresh from '../assets/icon/beratung/refresh.svg'

// Old components maybe Merge
import {Seo, Parallax, ListContainer as Mylist, FadeImageOrIconBox} from '../components'

// Containers
import {WrapperBox, ContentBox, HeadlineBackgroundWithSubNavigation} from '../container'

export default () => (
  <React.Fragment>
    <Seo title="Business & Projekt Consulting" />

    <HeadlineBackgroundWithSubNavigation
      img={ConsutlingBackground}
      Headline={'Business & Projekt Consulting'}
      Subtitle="Wir beraten Sie bei der Durchführung von IT-Projekte und Unternehmensspezifischen Problemstellungen."
      SubNavigation={[
        {name: 'Projekt Consulting', to: 'Projektberatung'},
        {name: 'Business Consulting', to: 'Unternehmensberatung'},
      ]}
      ArrowNavigationTarget="#Projektberatung"
    />

    <WrapperBox id={'Projektberatung'}>
      <ContentBox
        width={[1, 1 / 3]}
        componentTop={
          <FadeImageOrIconBox
            direction={['row', 'column']}
            icons={[
              {icon: projekt1, fade: {delay: 500, duration: 500, left: true}},
              {icon: projekt2, fade: {delay: 1000, duration: 500, left: true}},
              {icon: projekt3, fade: {delay: 1500, duration: 500, left: true}},
            ]}
          />
        }
      />
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'Erfolgreiche Projekte', color: 'contrast', style: 'sublime'}}
        h2={{content: 'Organisation, Konzeption, Planung und Steuerung', color: 'contrast', style: 'sublime'}}
        componentBottom={
          <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}>
            <p>
              IT-Projekte benötigen aufgrund ihrer starken Veränderungswirkung auf das Unternehmen ein hohes Maß an
              Aufmerksamkeit, es gibt viele Aspekte die beachtet werden müssen. Wir unterstützen Sie bei der
            </p>
            <ul>
              <li> Projekt- & Ideenvalidierung</li>
              <li> Priosierung der Ziele</li>
              <li> Erstellung eines Projektsturkturplan</li>
              <li> Einhalten von Timemanagement</li>
              <li>Umsetzen des Taskmanagement</li>
              <li> Etablierung von Risikomanagement</li>
              <li> Projektcontrolling</li>
            </ul>
          </Mylist>
        }
      />
    </WrapperBox>

    <WrapperBox backgroundColor={'main'}>
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'Projekte gelingen mit einfachen Werkzeugen', color: 'contrast', style: 'sublime'}}
        h2={{content: 'Phasen des Projektmanagements', color: 'contrast', style: 'sublime'}}
        textColor={'black'}
        paragraph={
          'Wichtig ist ein Projekt in die einzelne Phasen einzuteilen, um das Projektziel auf Teilschritte herunter zu brechen. Dieser Aspekt reduziert außerdem die Komplexität des Projektes. Auf diese 5 Phasen setzen wir.'
        }
        componentMid={
          <FadeImageOrIconBox
            spacebetween={25}
            colorSubtitle={'black'}
            icons={[
              {icon: lightBulb, fade: {delay: 500, duration: 500}, width: [35, 40, 80], subtitle: 'Entwickeln'},
              {icon: checklistflat, fade: {delay: 1000, duration: 500}, width: [35, 40, 80], subtitle: 'Planen'},
              {icon: build, fade: {delay: 1500, duration: 500}, width: [35, 40, 80], subtitle: 'Umsetzen'},
              {icon: checked, fade: {delay: 2000, duration: 500}, width: [35, 40, 80], subtitle: 'Überprüfen'},
              {icon: refresh, fade: {delay: 2500, duration: 500}, width: [35, 40, 80], subtitle: 'Optimieren'},
            ]}
          />
        }
      />
    </WrapperBox>

    <Parallax img={consultingparallax} />

    <WrapperBox id={'Unternehmensberatung'}>
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'Business Consulting', color: 'black', style: 'sublime'}}
        h2={{content: 'Beratung für jeden Schritt in Ihrem Unternehmen', color: 'black', style: 'sublime'}}
        componentBottom={
          <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}>
            <p>
              Wer mit Abstand auf ein Unternehmen blickt, erkennt darin Zusammenhänge und Chancen, die dem Insider
              verborgen bleiben. Wir schaffen uns ein allgemeines Bild von der Situation, analysieren diese und
              erarbeiten Vorschläge, wie Verbesserungen, die in Ihrem Sinne durchgeführt werden können. Wir haben uns
              auf kleine und mittlere Unternehmen fokusiert, da Sie viel flexibler sind und die Chance der Veränderungen
              perfekt nutzen können. Wir beraten Sie dabei die für Sie passenden Antworten in folgenden Bereichen zu
              finden.
            </p>
            <ul>
              <li> Optimierung von Geschäftsprozessen</li>
              <li> Umgang mit Software</li>
              <li> Auswahl und Einführung neuer Software</li>
              <li> Product Design</li>
              <li> Optimierung der Unternehmenslandschaft</li>
              <li> Digitalisierung des Unternehmens</li>
            </ul>
          </Mylist>
        }
      />
      <ContentBox
        width={[1, 1 / 3]}
        componentTop={
          <FadeImageOrIconBox
            direction={['row', 'column']}
            icons={[
              {icon: consulting1, fade: {delay: 500, duration: 500, right: true}},
              {icon: consulting2, fade: {delay: 1000, duration: 500, right: true}},
              {icon: consulting3, fade: {delay: 1500, duration: 500, right: true}},
            ]}
          />
        }
      />
    </WrapperBox>
  </React.Fragment>
)
