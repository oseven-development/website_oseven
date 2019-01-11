/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import {StyledIcon} from './styled'

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
  {title: 'Teamwork', icon: iconTeamwork},
  {title: 'Bildung', icon: iconBildung},
  {title: 'Sicherheit', icon: iconSicherheit},
]
class IconList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: false,
    }
  }
  handleActiveTab(active) {
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
    this.setState({activeTab: content})
  }

  render() {
    return (
      <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
        {item.map(item => {
          return (
            <Box
              key={item.title}
              width={[1 / 2, 1 / 2, 1 / 4]}
              style={{textAlign: 'center'}}
              onClick={() => this.handleActiveTab(item.title)}>
              <StyledIcon>
                <Image p={paddingImage} width={[70, 85, 100]} src={item.icon} />
              </StyledIcon>
              <h4>{item.title}</h4>
            </Box>
          )
        })}
        {this.state.activeTab ? (
          <Box
            my={['1em', '2em', '2em']}
            px={['30px']}
            pt={['1em']}
            width={[1]}
            style={{
              textAlign: 'center',
              background: 'rgb(230,230,230)',
              borderRadius: '4px',
              boxShadow: '1px 1px 1px #ccc',
            }}>
            {this.state.activeTab}
          </Box>
        ) : (
          ''
        )}
      </Flex>
    )
  }
}
//
export const Beratung = () => {
  return (
    <div>
      <h3>Beratung</h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
  )
}

export const Technologie = () => {
  return <div>Technologie</div>
}

export const Innovation = () => {
  return <div>Innovation</div>
}

export const Erfolg = () => {
  return <div>Erfolg</div>
}

export const Zuverlaessigkeit = () => {
  return <div>Zuverlässigkeit</div>
}

export const Teamwork = () => {
  return <div>Teamwork</div>
}

export const Bildung = () => {
  return <div>Bildung</div>
}

export const Sicherheit = () => {
  return <div>Sicherheit</div>
}

export {IconList}
