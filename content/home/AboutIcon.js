/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {StyledIcon} from './styled'
import Fade from 'react-reveal/Fade'

// import icon from './icon/deal.svg'
// import icon2 from './icon/diamond.svg'
// import icon3 from './icon/lightbulb.svg'
// import icon4 from './icon/padlock.svg'
// import icon5 from './icon/team.svg'
// import icon6 from './icon/timer.svg'
import iconZuverlaessigkeit from './icon/newicon/calendar.svg'
import iconBildung from './icon/newicon/degree.svg'
import iconInnovation from './icon/newicon/light-bulb.svg'
import iconSicherheit from './icon/newicon/lock.svg'
import iconBeratung from './icon/newicon/manager.svg'
import iconErfolg from './icon/newicon/quality.svg'
import iconTechnologie from './icon/newicon/startup.svg'
import iconTeamwork from './icon/newicon/team.svg'

const paddingImage = ['0.2em 0 0.1em 0', '2em 0 0.1em 0', '3em 0 0.1em 0']

const item = [
  {title: 'Beratung', icon: iconBeratung},
  {title: 'Technologie', icon: iconTechnologie},
  {title: 'Innovation', icon: iconInnovation},
  {title: 'Erfolg', icon: iconErfolg},
  {title: 'Zuverlässigkeit', icon: iconZuverlaessigkeit},
  // {title: 'Teamwork', icon: iconTeamwork},
  {title: 'Bildung', icon: iconBildung},
  // {title: 'Sicherheit', icon: iconSicherheit},
]
class IconList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: <Beratung />,
    }
  }
  handleActiveTab(active) {
    console.log(active)
    let content
    switch (active) {
      case 'Beratung':
        content = <Beratung />
        break
      case 'Technologie':
        content = <Technologie />
        break
      case 'Innovation':
        content = <Innovation />
        break
      case 'Erfolg':
        content = <Erfolg />
        break
      case 'Zuverlässigkeit':
        content = <Zuverlaessigkeit />
        break
      case 'Teamwork':
        content = <Teamwork />
        break
      case 'Bildung':
        content = <Bildung />
        break
      case 'Sicherheit':
        content = <Sicherheit />
        break
      default:
        content = false
    }
    // console.log(content)
    this.setState({activeTab: content})
  }

  render() {
    return (
      <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
        <Box key={item.title} width={[1, 1, 50 / 100]} style={{textAlign: 'center'}} mx={[0, 5]}>
          <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
            {item.map(item => {
              return (
                <Box
                  key={item.title}
                  width={[1 / 3, 1 / 3, 1 / 3]}
                  style={{textAlign: 'center'}}
                  onClick={() => this.handleActiveTab(item.title)}>
                  <StyledIcon>
                    <Image p={paddingImage} width={[70, 85, 100]} src={item.icon} />
                  </StyledIcon>
                  <h4>{item.title}</h4>
                </Box>
              )
            })}
          </Flex>
        </Box>

        <Box
          my={['1em', '2em', '2em']}
          width={[1, 1, 30 / 100]}
          px={['0']}
          pt={['0']}
          style={{
            textAlign: 'center',
            background: 'rgb(230,230,230)',
            borderRadius: '4px',
            boxShadow: '1px 1px 1px #ccc',
            overflow: 'hidden',
          }}>
          {this.state.activeTab}
        </Box>
      </Flex>
    )
  }
}
//
export const Beratung = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #45B39C solid', padding: '0 20px 10px 20px'}}>
        <h3>Beratung</h3>
        <p>
          Als kleines Unternehmen sind Sie viel flexibler und können diese Chance der Veränderungen perfekt nutzen, wir
          möchten Sie dabei beraten die für Sie passenden Antworten zu erarbeiten, sowie diese umzusetzen. Gerade für
          kleinere und mittelgroße Unternehmen wird die digitale Kompetenz des Unternehmens zu einem entscheidenden
          Wettbewerbsfaktor, den es nicht zu vernachlässigen gilt.
        </p>
      </div>
    </Fade>
  )
}

export const Technologie = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #ADD8E6 solid', padding: '0 20px 10px 20px'}}>
        <h3>Technologie</h3>
        <p>
          Digitalisierung führt nicht nur bei den großen Konzernen zur Veränderung, sondern auch bei den kleinen und
          mittelgroßen Unternehmen. Doch was bedeutet das alles und wie können Sie von dieser Veränderung in der
          digitalen Welt profitieren. Wir führen Sie in die richtige Richtung, sodass Sie den Anschluss an die
          Konkurrenz nicht verlieren.
        </p>
      </div>
    </Fade>
  )
}

export const Innovation = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #E05B49 solid', padding: '0 20px 10px 20px'}}>
        <h3>Innovation</h3>
        <p>
          Was bedeutet es Innovativ zu sein? Unter Innovation ist eine geplante und kontrollierte Veränderung, Neuerung
          in einem System durch Anwendung neuer Ideen und Techniken zu verstehen. Wir setzen bei unsere Projekte stets
          modernen Technologien und Methoden und erarbeiten so eine optimale Lösung für Sie.
        </p>
      </div>
    </Fade>
  )
}

export const Erfolg = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #800080 solid', padding: '0 20px 10px 20px'}}>
        <h3>Erfolg</h3>
        <p>
          Wichtig ist es die passende Antwort auf Hindernisse zu finden. Es geht nicht nur um die Optimierung von
          bestehenden Prozessen, sondern vielmehr um das Ergreifen neuer Chancen und Möglichkeiten, wie das Kreieren
          neuer Produkte oder Dienstleistungsangebote. Wir helfen Ihnen den Schritt in die richtige Richtung zu machen.
        </p>
      </div>
    </Fade>
  )
}

export const Zuverlaessigkeit = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #334D5C solid', padding: '0 20px 10px 20px'}}>
        <h3>Zuverlaessigkeit</h3>
        <p>
          Digitalisierung führt nicht nur bei den großen Konzernen zur Veränderung, sondern auch bei den kleinen und
          mittelgroßen Unternehmen. Doch was bedeutet das alles und wie können Sie von dieser Veränderung in der
          digitalen Welt profitieren. Wir führen Sie in die richtige Richtung, sodass Sie den Anschluss an die
          Konkurrenz nicht verlieren.
        </p>
      </div>
    </Fade>
  )
}

export const Teamwork = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #EFC84A solid', padding: '0 20px 10px 20px'}}>
        <h3>Teamwork</h3>
        <p>
          Digitalisierung führt nicht nur bei den großen Konzernen zur Veränderung, sondern auch bei den kleinen und
          mittelgroßen Unternehmen. Doch was bedeutet das alles und wie können Sie von dieser Veränderung in der
          digitalen Welt profitieren. Wir führen Sie in die richtige Richtung, sodass Sie den Anschluss an die
          Konkurrenz nicht verlieren.
        </p>
      </div>
    </Fade>
  )
}

export const Bildung = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px #EFC84A solid', padding: '0 20px 10px 20px'}}>
        <h3>Bildung</h3>
        <p>
          Die Arbeits­welt wandelt sich Ständig und damit auch die Anforderungen. Auch der tech­nische Fort­schritt und
          die Globalisierung, das Internet und der demogra­fische Wandel verändern Arbeits­märkte und Anforderungen. Um
          für morgen gewappnet zu sein, müssen auch wir ständig unser Wissen anpassen und erweitern. Und das bedeutet
          lebens­lang zu lernen.
        </p>
      </div>
    </Fade>
  )
}

export const Sicherheit = () => {
  return (
    <Fade left>
      <div style={{borderTop: '6px red solid', padding: '0 20px 10px 20px'}}>
        <h3>Sicherheit</h3>
        <p>
          Digitalisierung führt nicht nur bei den großen Konzernen zur Veränderung, sondern auch bei den kleinen und
          mittelgroßen Unternehmen. Doch was bedeutet das alles und wie können Sie von dieser Veränderung in der
          digitalen Welt profitieren. Wir führen Sie in die richtige Richtung, sodass Sie den Anschluss an die
          Konkurrenz nicht verlieren.
        </p>
      </div>
    </Fade>
  )
}

export {IconList}
