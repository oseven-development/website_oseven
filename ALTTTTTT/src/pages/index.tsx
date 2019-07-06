/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

// Containers
import {WrapperBox, CentertContant, ContantBoxFull} from '../container'

// Components
import {DefaultHeadline, IndieFlower, RobotoSlab, HeadlineWithSublime, EmployerBox} from '../components'
import {Parallax, Seo, BackgroundImage, AnimatedLogo, AnimatedArrow} from '../components'

// Bilder Backgrounds
import background from '../assets/images/backgrounds/homess.jpg'

export default props => (
  <React.Fragment>
    <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />

    <BackgroundImage image={background} overlay={{color: 'linear-gradient(90deg, #111 0%, #555 100%)', opacity: 0.9}}>
      <CentertContant>
        <AnimatedLogo />
        <a href="#aboutus">
          <AnimatedArrow />
        </a>
      </CentertContant>
    </BackgroundImage>

    <WrapperBox backgroundColor={'main'} jumpid={'aboutus'}>
      <ContantBoxFull>
        <RobotoSlab elementColor={'contrast'}>
          <h1>
            ÜBER <span>O-SEVEN</span>
          </h1>
          <DefaultHeadline>
            <h3>Unsere Werte und Motivation</h3>
          </DefaultHeadline>
        </RobotoSlab>
        <p>
          Digitalisierung, Industrie 4.0, Vernetzung – Schlagworte wie diese sind in aller Munde – Wichtig ist dabei die
          passende Antwort! Wir setzen auf ...
        </p>
      </ContantBoxFull>
    </WrapperBox>

    <Parallax img={props.data.team.childImageSharp.fluid} />

    <WrapperBox>
      <ContantBoxFull>
        <RobotoSlab elementColor={'contrast'}>
          <h1>
            Wer <span>sind wir</span>
          </h1>
          <DefaultHeadline>
            <h3>DIE IDEE HINTER O-SEVEN</h3>
          </DefaultHeadline>
        </RobotoSlab>
        <p>
          Hallo mein Name ist Max. Die Idee zu O-SEVEN kam mir im Studium, Wir möchten damit auch kleinen Unternehmen
          helfen das Beste aus ihrer IT rauszuholen. In der IT gibt es viele faszinierende Möglichkeiten doch muss man
          bei all den technischen Möglichkeiten immer die Wirtschaftlichkeit berücksichtigen. IT-Lösungen die etwas zu
          100% lösen sollen sind durch die hohe Komplexität sehr teuer und oftmals einfach nicht mehr wirtschaftlich.
          Als Wirtschaftsinformatiker versucht man immer die Balance zwischen einer umfangreichen sowie einer
          Wirtschaftlichen Lösung zu finden, und den Kunden dabei bestmöglich zu beraten.
        </p>
        <EmployerBox image={props.data.maxhaensel2.childImageSharp.fluid} alt={'Maximilian Hänsel'} />
      </ContantBoxFull>
    </WrapperBox>
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    maxhaensel2: file(relativePath: {eq: "maxhaenselzoom.jpg"}) {
      ...fluidImage
    }
    team: file(relativePath: {eq: "backgrounds/team2.jpg"}) {
      ...fluidImage
    }
  }
`
