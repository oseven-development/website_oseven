/** @format */

import React from 'react'
import {Seo} from '../components'

import {Image} from 'rebass'

import {IconList} from '../../content/home/AboutIcon'

import {SmallContainers, ContentBox, IntroScreen, Parallax} from '../container'

import team2 from '../assets/images/backgrounds/team2.jpg'
import maxhaensel from '../assets/images/maxhaensel.jpg'

const IndexPage = () => (
  <React.Fragment>
    <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
    <IntroScreen />
    <SmallContainers backgroundColor={'white'}>
      <ContentBox
        width={1}
        h1={{content: ['ÜBER', 'O-SEVEN'], style: 'block', color: ['blue', 'contrast']}}
        h2={{content: 'Unsere Werte und Motivation', color: 'main'}}
        // h1={{content: 'Swift Style', style: 'swift', color: 'main'}}
        paragraph={
          'Digitalisierung, Industrie 4.0, Vernetzung – Schlagworte wie diese sind in aller Munde – Wichtig ist dabei die passende Antwort! Wir setzen auf ...'
        }
        textCenter
        // componentTop={<Inside width={[1]} />}
        componentBottom={<IconList width={[1]} />}
        // componentBottom={<Inside width={[1]} />}
      />
    </SmallContainers>
    <Parallax image={team2} />
    <SmallContainers backgroundColor={'white'}>
      <ContentBox
        width={[1, 3 / 4]}
        h2={{content: 'WER SIND WIR', color: 'main'}}
        // h1={{content: 'Swift Style', style: 'swift', color: 'main'}}
        paragraph={
          'Hallo mein Name ist Max. Die Idee zu O-SEVEN kam mir im Studium, Wir möchten damit auch kleinen Unternehmen helfen das Beste aus ihrer IT rauszuholen. In der IT gibt es viele faszinierende Möglichkeiten doch muss man bei all den technischen Möglichkeiten immer die Wirtschaftlichkeit berücksichtigen. IT-Lösungen die etwas zu 100% lösen sollen sind durch die hohe Komplexität sehr teuer und oftmals einfach nicht mehr wirtschaftlich. Als Wirtschaftsinformatiker versucht man immer die Balance zwischen einer umfangreichen sowie einer Wirtschaftlichen Lösung zu finden, und den Kunden dabei bestmöglich zu beraten.'
        }
        componentBottom={<Image src={maxhaensel} width={'200px'} style={{borderRadius: '50%'}} />}
      />
    </SmallContainers>
  </React.Fragment>
)

export default IndexPage
// {renderEngine(data)}

//     <IconBoxWithClickableContent />

// <ContantBox width={1 / 2} h1={{content: ['Text', 'h1'], style: 'block', color: ['blue', 'contrast']}} />

// <Headline width={[1]} h2color={'blue'}>
//   <h2>{'subtitle'}</h2>
//   <p>{'content'}</p>
// </Headline>
// <IconList width={[1]} />
