/** @format */

// React and Libarys
import React from 'react'
import {graphql} from 'gatsby'

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
import powerbi1 from '../assets/icon/biandreport/powerbi1.png'
import powerbi2 from '../assets/icon/biandreport/powerbi2.png'

// // Containers
// import {WrapperBox, ContentBox, HeadlineBackgroundWithSubNavigation} from '../container'

// // Old components maybe Merge
// import {Seo, Parallax, TextSlider, ListContainer as Mylist, Lightbox, FadeImageOrIconBox, Button} from '../components'

// Containers
import {
  ContantBox,
  WrapperBox,
  CentertContant,
  ContantBoxFull,
  ContantBoxHalf,
  ContantBoxFullThirds,
} from '../container'

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
  // Assets
  Button,
  Lightbox,
  TextSlider,
  SubNavigation,
} from '../components'

import {FaMagic, FaBalanceScale} from 'react-icons/fa'

export default props => (
  <React.Fragment>
    <Seo
      title="Business Intelligence & Reporting"
      description="Startseite von Oseven"
      keywords="Cool Fancy Beste Seite Webdeveloper"
    />

    <BackgroundImage
      image={HeadlineBackground}
      overlay={{color: 'linear-gradient(90deg, rgb(0,0,0,1) 0%,  rgb(255,255,255,0.2) 200%)', opacity: 0.9}}>
      <WrapperBox>
        <CentertContant>
          <RobotoSlab textColor={'white'} textAlignLeft elementColor={'main'}>
            <h1>
              <span>Business Intelligence</span>
              <br /> <span>& Reporting</span>
            </h1>
          </RobotoSlab>
          <DefaultHeadline textColor={'white'}>
            <h3>Mehr Informationen über ihre Kunden, Produkte und Standorte gewinnen.</h3>
          </DefaultHeadline>
          <SubNavigation
            color={'main'}
            items={[
              {name: 'Business Intelligence', to: 'BusinessIntelligence'},
              {name: 'Business Reporting', to: 'BusinessReporting'},
              {name: 'Power Bi', to: 'PowerBi'},
            ]}
          />
          <a href="#BusinessIntelligence">
            <AnimatedArrow />
          </a>
        </CentertContant>
      </WrapperBox>
    </BackgroundImage>

    {/* <HeadlineBackgroundWithSubNavigation
      img={HeadlineBackground}
      Headline={'Business Intelligence & Reporting'}
      Subtitle="Mehr Informationen über ihre Kunden, Produkte und Standorte gewinnen."
      SubNavigation={[
        {name: 'Business Intelligence', to: 'BusinessIntelligence'},
        {name: 'Business Reporting', to: 'BusinessReporting'},
        {name: 'Power Bi', to: 'PowerBi'},
      ]}
      ArrowNavigationTarget="#BusinessIntelligence"
    /> */}

    <WrapperBox backgroundColor={'second'} jumpid={'BusinessIntelligence'}>
      <ContantBox width={[1, 1 / 3]}>
        <IconBox
          direction={['row', 'column']}
          icons={[
            {icon: icon1, fade: {delay: 500, duration: 500, left: true}},
            {icon: icon2, fade: {delay: 1000, duration: 500, left: true}},
            {icon: icon3, fade: {delay: 1500, duration: 500, left: true}},
          ]}
        />
      </ContantBox>
      <ContantBox width={[1, 2 / 3]}>
        <HeadlineWithSublime>
          <h2>Buisness Intelligence</h2>
          <h3>Der Weg zur Datenkontrolle</h3>
        </HeadlineWithSublime>

        <p>
          Business Intelligence (BI) ist im Zeitalter der Digitalisierung in Unternehmen ein nicht mehr wegzudenkendes
          Instrument bei der Steuerung eines Unternehmens. Es ermöglicht
        </p>
        {/* <Mylist bgcolor={'#eee'} dotColor={'#334D5C'}> */}
        <ul>
          <li>Systematische Generierung, Analyse und Nutzung geschäftsrelevanten Daten</li>
          <li>Erkenntnisgewinnung zur operativen und strategischen Entscheidungen</li>
          <li>Erhalt der Wettbewerbsfähigkeit Unser Ziel ist die Entwicklung</li>
        </ul>
        {/* </Mylist> */}
        <p>
          effizienter sowie transparenter Datenstrukturen, Prozesse und Informationsysteme für kleine und
          mittelständische Unternehmen. Es geht um die Verbesserung der Leistungsfähigkeit Ihres Unternehmens.
        </p>
      </ContantBox>
    </WrapperBox>
    <Parallax img={props.data.ParallaxBackgroundBi1.childImageSharp.fluid} />
    <WrapperBox backgroundColor={'main'} jumpid={'BusinessReporting'}>
      <ContantBoxFull>
        <DefaultHeadline>
          <h2>Business Reporting</h2>
        </DefaultHeadline>
        <TextSlider
          textColor="white"
          headingColor="white"
          padding={'0px 5px'}
          items={[
            <BerichtswesenRichtigVerstehen key={Math.random()} />,
            <DerZweckVonBerichten key={Math.random()} />,
            <TransparentImBerichtswesen key={Math.random()} />,
            <GutesBerichtswesenErmoeglicht key={Math.random()} />,
          ]}
        />
      </ContantBoxFull>
    </WrapperBox>

    <Parallax img={props.data.ParallaxBackgroundBi2.childImageSharp.fluid} />

    <WrapperBox backgroundColor={'bi'} jumpid={'PowerBi'}>
      <ContantBox width={[1, 1 / 3]}>
        <IconBox
          icons={[
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg',
              width: [130, 150, 180],
            },
          ]}
        />
      </ContantBox>
      <ContantBox width={[1, 2 / 3]}>
        <HeadlineWithSublime>
          <h2>Power Bi</h2>
          <h3>Das Datenvisualierungs-Tool für Alle</h3>
        </HeadlineWithSublime>
        <p>
          Power BI ist eine Business Intelligence Lösung, mit der Sie Ihre Daten visualisieren und Erkenntnisse in Ihrem
          Unternehmen austauschen oder in Ihre App oder Website einbetten können. Erwecken Sie Ihre Daten mit
          Live-Dashboards und Berichten zum Leben.
        </p>
      </ContantBox>
    </WrapperBox>
    <WrapperBox>
      <ContantBoxFull>
        <DefaultHeadline>
          <h1>Power Bi für Sie</h1>
        </DefaultHeadline>
        <p>
          Hier finden Sie nun ein paar Beispielbilder, wie Power Bi Reports aussehen können und was alles möglich ist.
          Weiterunten finden Sie noch Live-Demo Berichte, die Sie sich gerne ansehen dürfen.
        </p>
        <Lightbox
          images={[
            {img: powerbi1, alt: 'Beispiel Business Intelligence Reports'},
            {img: powerbi2, alt: 'Beispiel Business Intelligence Reports'},
          ]}
        />
      </ContantBoxFull>
    </WrapperBox>

    <WrapperBox backgroundColor={'bi'}>
      <ContantBoxFull>
        <DefaultHeadline>
          <h2>Was wir Ihnen ermöglichen</h2>
        </DefaultHeadline>
        <IconBox
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
      </ContantBoxFull>
    </WrapperBox>

    <WrapperBox>
      <ContantBoxFull>
        <DefaultHeadline>
          <h2>Live-Demo Berichte</h2>
        </DefaultHeadline>

        <Button
          linkto="https://app.powerbi.com/view?r=eyJrIjoiY2E0M2I3ZjktYmYyOS00ZWI5LTg3ODQtNjFkOTliZDVmNjVmIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9"
          background={true}
          color={'bi'}
          border={false}
          icon={<FaBalanceScale />}>
          Jahresvergleichsbericht
        </Button>

        <Button
          linkto={
            'https://app.powerbi.com/view?r=eyJrIjoiYTM0YmVlMzgtNWY3OC00ZjEyLTg1ZDgtMWFhNzQ3ZmU3ZWFiIiwidCI6Ijk5MjA2Nzg3LWRiMzEtNGRiMy1hYTRjLTlhNjNkZWNmNjVmNSIsImMiOjl9'
          }
          background={true}
          color={'bi'}
          border={false}
          icon={<FaMagic />}>
          Produktdetailbericht
        </Button>
      </ContantBoxFull>
    </WrapperBox>
  </React.Fragment>
)

const BerichtswesenRichtigVerstehen = () => (
  <WrapperBox backgroundColor={'main'}>
    <ContantBoxFull>
      <DefaultHeadline>
        <h3>Berichtswesen richtig verstehen</h3>
      </DefaultHeadline>

      <p>
        Das Berichtswesen, auch Reporting genannt, ist das systematische Erstellen von Berichten, die das Treffen von
        unternehmensrelevanten Entscheidungen ermöglichen sollen.
      </p>
      <IconBox
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
    </ContantBoxFull>
  </WrapperBox>
)

const DerZweckVonBerichten = () => (
  <WrapperBox backgroundColor={'main'}>
    <ContantBoxFull>
      <DefaultHeadline>
        <h3>Der Zweck von Berichten</h3>
      </DefaultHeadline>

      <p>
        Berichte unterstützen einzelne Entscheidungsebenen bis hin zu Team oder Einzelentscheidungen. Dazu werden im
        Rahmen des Berichtswesens Informationen gesammelt, verarbeitet und präsentiert.
      </p>
      <IconBox
        icons={[
          {
            icon: report,
            width: [100, 150, 180],
          },
        ]}
      />
    </ContantBoxFull>
  </WrapperBox>
)

const TransparentImBerichtswesen = () => (
  <WrapperBox backgroundColor={'main'}>
    <ContantBoxFull>
      <DefaultHeadline>
        <h3>Transparent im Berichtswesen</h3>
      </DefaultHeadline>

      <p>
        So wird für Transparenz gesorgt, Entscheidungsträger erhalten einen Überblick über das Unternehmen und können so
        fundierte Entscheidungen treffen. Durch die Auswertung der Daten aus dem bisherigen Geschäft können
        Entscheidungen für die Zukunft getroffen werden.
      </p>
      <IconBox
        icons={[
          {
            icon: report3,
            width: [100, 150, 180],
          },
        ]}
      />
    </ContantBoxFull>
  </WrapperBox>
)

const GutesBerichtswesenErmoeglicht = () => (
  <WrapperBox backgroundColor={'main'}>
    <ContantBoxFull>
      <DefaultHeadline>
        <h3>Gutes Berichtswesen ermöglicht</h3>
      </DefaultHeadline>

      <p>
        So wird für Transparenz gesorgt, Entscheidungsträger erhalten einen Überblick über das Unternehmen und können so
        fundierte Entscheidungen treffen. Durch die Auswertung der Daten aus dem bisherigen Geschäft können
        Entscheidungen für die Zukunft getroffen werden.
      </p>
      <IconBox
        icons={[
          {
            icon: presentation,
            width: [100, 150, 180],
          },
        ]}
      />
      <ul style={{color: 'white'}}>
        <li>Soll-Ist-Vergleiche für einen besser Überblick</li>
        <li>Kompleixtätsreduktion zur Entscheidungshilfe</li>
        <li>Transparenz im Unternehmen</li>
        <li>Effizienzsetierung durch Optimierung von Prozessen</li>
      </ul>
    </ContantBoxFull>
  </WrapperBox>
)

export const indexQuery = graphql`
  query {
    ParallaxBackgroundBi1: file(relativePath: {eq: "backgrounds/powerbi_parallax.jpg"}) {
      ...fluidImage
    }
    ParallaxBackgroundBi2: file(relativePath: {eq: "backgrounds/clock.jpg"}) {
      ...fluidImage
    }
  }
`
