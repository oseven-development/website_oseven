/** @format */

// React and Libarys
import React from 'react'

// Icons
import powerbicloud from '../assets/icon/biandreport/powerbicloud.svg'
import powerbiresponsive from '../assets/icon/biandreport/powerbiresponsive.svg'
import powerbisecure from '../assets/icon/biandreport/powerbisecure.svg'
import icon1 from '../assets/icon/biandreport/bi1.svg'
import icon2 from '../assets/icon/biandreport/bi2.svg'
import icon3 from '../assets/icon/biandreport/bi3.svg'

import report from '../assets/icon/biandreport/report.svg'
import report1 from '../assets/icon/biandreport/report1.svg'
import report2 from '../assets/icon/biandreport/report2.svg'
import report3 from '../assets/icon/biandreport/report3.svg'
import presentation from '../assets/icon/biandreport/presentation.svg'

// Bilder
import HeadlineBackground from '../assets/images/backgrounds/beard.jpg'
import ParallaxBackgroundBi1 from '../assets/images/backgrounds/powerbi_parallax.jpg'
import ParallaxBackgroundBi2 from '../assets/images/backgrounds/clock.jpg'
import powerbi1 from '../../content/service/bi/powerbi1.png'
import powerbi2 from '../../content/service/bi/powerbi2.png'

// Containers
import {WrapperBox, ContentBox} from '../container'

// Old components maybe Merge
import {
  Seo,
  HeaderTitleBackground,
  smallNav,
  Parallax,
  TextSlider,
  ListContainer as Mylist,
  Lightbox,
  FadeImageOrIconBox,
  Button,
} from '../components'
import {FaMagic, FaBalanceScale} from 'react-icons/fa'

const navObject = [
  {name: 'Business Intelligence', to: 'BusinessIntelligence'},
  {name: 'Business Reporting', to: 'BusinessReporting'},
  {name: 'Power Bi', to: 'PowerBi'},
]

export default () => (
  <React.Fragment>
    <Seo title="Business Intelligence & Reporting" />

    <HeaderTitleBackground
      img={HeadlineBackground}
      h1Text="Business Intelligence & Reporting"
      h3Text="Mehr Informationen über ihre Kunden, Produkte und Standorte gewinnen."
      bgPosition="center right"
      nav={smallNav(navObject)}
    />

    <WrapperBox>
      <ContentBox
        width={[1, 1 / 3]}
        componentTop={
          <FadeImageOrIconBox
            direction={['row', 'column']}
            icons={[
              {icon: icon1, fade: {delay: 500, duration: 500, left: true}},
              {icon: icon2, fade: {delay: 1000, duration: 500, left: true}},
              {icon: icon3, fade: {delay: 1500, duration: 500, left: true}},
            ]}
          />
        }
      />
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'Buisness Intelligence', color: 'black', style: 'sublime'}}
        h2={{content: 'Der Weg zur Datenkontrolle', color: 'black', style: 'sublime'}}
        componentBottom={
          <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}>
            <p>
              Business Intelligence (BI) ist im Zeitalter der Digitalisierung in Unternehmen ein nicht mehr
              wegzudenkendes Instrument bei der Steuerung eines Unternehmens. Es ermöglicht
            </p>
            <ul>
              <li>Systematische Generierung, Analyse und Nutzung geschäftsrelevanten Daten</li>
              <li>Erkenntnisgewinnung zur operativen und strategischen Entscheidungen</li>
              <li>Erhalt der Wettbewerbsfähigkeit Unser Ziel ist die Entwicklung</li>
            </ul>
            <p>
              effizienter sowie transparenter Datenstrukturen, Prozesse und Informationsysteme für kleine und
              mittelständische Unternehmen. Es geht um die Verbesserung der Leistungsfähigkeit Ihres Unternehmens.
            </p>
          </Mylist>
        }
      />
    </WrapperBox>

    <Parallax img={ParallaxBackgroundBi1} />

    <WrapperBox backgroundColor={'second'}>
      <ContentBox
        width={[1]}
        h2={{content: 'Business Reporting', color: 'white'}}
        componentBottom={
          <TextSlider
            textColor="white"
            headingColor="white"
            padding={'0px 5px'}
            items={[
              <Reporting key={Math.random()} />,
              <Zweck key={Math.random()} />,
              <Berichtswesen key={Math.random()} />,
            ]}
          />
        }
      />
    </WrapperBox>

    <Parallax img={ParallaxBackgroundBi2} />

    <WrapperBox backgroundColor={'#f2c811'}>
      <ContentBox
        width={[1, 1 / 3]}
        componentTop={
          <FadeImageOrIconBox
            icons={[
              {
                icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg',
                width: [130, 150, 180],
              },
            ]}
          />
        }
      />
      <ContentBox
        width={[1, 2 / 3]}
        h1={{content: 'Power Bi', color: 'black', style: 'sublime'}}
        h2={{content: 'Das Datenvisualierungs-Tool für Alle', color: 'black', style: 'sublime'}}
        paragraph={
          'Power BI ist eine Business Intelligence Lösung, mit der Sie Ihre Daten visualisieren und Erkenntnisse in Ihrem Unternehmen austauschen oder in Ihre App oder Website einbetten können. Erwecken Sie Ihre Daten mit Live-Dashboards und Berichten zum Leben.'
        }
      />
    </WrapperBox>

    <WrapperBox>
      <ContentBox
        width={[1, 3 / 4]}
        h2={{content: 'Power Bi für Sie', color: 'black'}}
        paragraph={
          'Hier finden Sie nun ein paar Beispielbilder, wie Power Bi Reports aussehen können und was alles möglich ist. Weiterunten finden Sie noch Live-Demo Berichte, die Sie sich gerne ansehen dürfen.'
        }
        componentBottom={<Lightbox images={[{img: powerbi1, alt: 'Beispiel Business Intelligence Reports'}, {img: powerbi2, alt: 'Beispiel Business Intelligence Reports'}]} />}
      />
    </WrapperBox>

    <WrapperBox backgroundColor={'#f2c811'}>
      <ContentBox
        width={1}
        h2={{content: 'WAS WIR IHNEN ERMÖGLICHEN', color: 'black'}}
        paragraph={
          'Hier finden Sie nun ein paar Beispielbilder, wie Power Bi Reports aussehen können und was alles möglich ist. Weiterunten finden Sie noch Live-Demo Berichte, die Sie sich gerne ansehen dürfen.'
        }
        componentMid={
          <FadeImageOrIconBox
            colorSubtitle={'black'}
            icons={[
              {
                icon: powerbisecure,
                fade: {delay: 500, duration: 500},
                width: [35, 40, 80],
                subtitle: 'Interaktive dynamische Berichte',
              },
              {
                icon: powerbicloud,
                fade: {delay: 1000, duration: 500},
                width: [35, 40, 80],
                subtitle: 'Zugriff auf deine Berichte von überall',
              },
              {
                icon: powerbiresponsive,
                fade: {delay: 1500, duration: 500},
                width: [35, 40, 80],
                subtitle: 'Mobile & Desktop Berichte',
              },
            ]}
          />
        }
      />
    </WrapperBox>

    <WrapperBox>
      <ContentBox
        width={1}
        h2={{content: 'LIVE-DEMO BERICHTE', color: 'black'}}
        componentBottom={
          <React.Fragment>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiY2E0M2I3ZjktYmYyOS00ZWI5LTg3ODQtNjFkOTliZDVmNjVmIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
              target="blank">
              <Button
                color="black"
                bgRadius={'0px'}
                border={false}
                bgColor={'#f2c811'}
                icon={<FaBalanceScale size="1.3em" style={{fill: 'black'}} />}>
                Jahresvergleichsbericht
              </Button>
            </a>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiYTM0YmVlMzgtNWY3OC00ZjEyLTg1ZDgtMWFhNzQ3ZmU3ZWFiIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
              target="blank">
              <Button
                bgRadius={'0px'}
                color="black"
                bgColor={'#f2c811'}
                border={false}
                icon={<FaMagic size="1.3em" style={{fill: 'black'}} />}>
                Produktdetailbericht
              </Button>
            </a>
          </React.Fragment>
        }
      />
    </WrapperBox>
  </React.Fragment>
)

const Reporting = () => (
  <ContentBox
    width={[1, 1 / 2]}
    h3={'Berichtswesen richtig verstehen'}
    paragraph={
      'Das Berichtswesen, auch Reporting genannt, ist das systematische Erstellen von Berichten, die das Treffen von unternehmensrelevanten Entscheidungen ermöglichen sollen.'
    }
    componentMid={
      <FadeImageOrIconBox
        colorSubtitle={'black'}
        icons={[
          {
            icon: report1,
            width: [100, 150, 180],
          },
          {
            icon: report2,
            width: [100, 150, 180],
          },
        ]}
      />
    }
  />
)
const Zweck = () => (
  <WrapperBox backgroundColor={'second'}>
    <ContentBox
      width={[1, 1 / 2]}
      h3={'Der Zweck von Berichten'}
      paragraph={
        'Berichte unterstützen einzelne Entscheidungsebenen bis hin zu Team oder Einzelentscheidungen. Dazu werden im Rahmen des Berichtswesens Informationen gesammelt, verarbeitet und präsentiert.'
      }
      componentMid={
        <FadeImageOrIconBox
          colorSubtitle={'black'}
          icons={[
            {
              icon: report,
              width: [100, 150, 180],
            },
          ]}
        />
      }
    />

    <ContentBox
      width={[1, 1 / 2]}
      h3={'Berichtswesen richtig verstehen'}
      paragraph={
        'So wird für Transparenz gesorgt, Entscheidungsträger erhalten einen Überblick über das Unternehmen und können so fundierte Entscheidungen treffen. Durch die Auswertung der Daten aus dem bisherigen Geschäft können Entscheidungen für die Zukunft getroffen werden.'
      }
      componentMid={
        <FadeImageOrIconBox
          colorSubtitle={'black'}
          icons={[
            {
              icon: report3,
              width: [100, 150, 180],
            },
          ]}
        />
      }
    />
  </WrapperBox>
)
const Berichtswesen = () => (
  <ContentBox
    width={[1, 1 / 2]}
    h3={'Gutes Berichtswesen ermöglicht'}
    paragraph={
      'So wird für Transparenz gesorgt, Entscheidungsträger erhalten einen Überblick über das Unternehmen und können so fundierte Entscheidungen treffen. Durch die Auswertung der Daten aus dem bisherigen Geschäft können Entscheidungen für die Zukunft getroffen werden.'
    }
    componentMid={
      <FadeImageOrIconBox
        colorSubtitle={'black'}
        icons={[
          {
            icon: presentation,
            width: [100, 150, 180],
          },
        ]}
      />
    }
    componentBottom={
      <ul>
        <li>Soll-Ist-Vergleiche für einen besser Überblick</li>
        <li>Kompleixtätsreduktion zur Entscheidungshilfe</li>
        <li>Transparenz im Unternehmen</li>
        <li>Effizienzsetierung durch Optimierung von Prozessen</li>
      </ul>
    }
  />
)
