/** @format */

import React from 'react'
import {Seo} from '../components'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import {IconList} from '../../content/home/AboutIcon'

import {WrapperBox, ContentBox, IntroScreen} from '../container'

import {Parallax, EmployerBox} from '../components'

import team2 from '../assets/images/backgrounds/team2ss.jpg'

export default props => (
  <React.Fragment>
    <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />

    {
      // Intro Screen
    }
    <IntroScreen />

    {
      // ÜBER O-SEVEN
    }
    <WrapperBox backgroundColor={'white'}>
      <ContentBox
        width={1}
        h1={{content: ['ÜBER', 'O-SEVEN'], style: 'block', color: ['black', 'main']}}
        h2={{content: 'Unsere Werte und Motivation', color: 'black'}}
        // h1={{content: 'Swift Style', style: 'swift', color: 'main'}}
        paragraph={
          'Digitalisierung, Industrie 4.0, Vernetzung – Schlagworte wie diese sind in aller Munde – Wichtig ist dabei die passende Antwort! Wir setzen auf ...'
        }
        textCenter
        // componentTop={<Inside width={[1]} />}
        componentBottom={<IconList width={[1]} />}
        // componentBottom={<Inside width={[1]} />}
      />
    </WrapperBox>

    <Parallax img={team2} />

    {
      // Wer sind wir
    }
    <WrapperBox backgroundColor={'white'}>
      <ContentBox
        width={[1, 3 / 4]}
        h1={{content: ['WER SIND', 'WIR'], style: 'block', color: ['black', 'main']}}
        h2={{content: 'Die Idee hinter O-SEVEN', color: 'black'}}
        // h1={{content: 'Swift Style', style: 'swift', color: 'main'}}
        paragraph={
          'Hallo mein Name ist Max. Die Idee zu O-SEVEN kam mir im Studium, Wir möchten damit auch kleinen Unternehmen helfen das Beste aus ihrer IT rauszuholen. In der IT gibt es viele faszinierende Möglichkeiten doch muss man bei all den technischen Möglichkeiten immer die Wirtschaftlichkeit berücksichtigen. IT-Lösungen die etwas zu 100% lösen sollen sind durch die hohe Komplexität sehr teuer und oftmals einfach nicht mehr wirtschaftlich. Als Wirtschaftsinformatiker versucht man immer die Balance zwischen einer umfangreichen sowie einer Wirtschaftlichen Lösung zu finden, und den Kunden dabei bestmöglich zu beraten.'
        }
        componentBottom={<EmployerBox image={props.data.maxhaensel.childImageSharp.fluid} alt={'Maximilian Hänsel'} />}
      />
    </WrapperBox>
  </React.Fragment>
)
