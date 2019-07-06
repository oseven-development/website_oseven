/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import {Parallax as Parallaxm, Background} from 'react-parallax'

// Containers
import {WrapperBox, CentertContant, ContantBoxFull, ContantBoxHalf} from '../container'

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
} from '../components'

// Bilder Backgrounds
import background from '../assets/images/backgrounds/application.jpg'

export default props => (
  <React.Fragment>
    <Seo
      title="Applikation"
      description="Übersicht des Services Webseiten"
      keywords="Cool Fancy Beste Seite Webdeveloper"
    />

    <BackgroundImage image={background} overlay={{color: 'linear-gradient(90deg, #111 0%, #555 100%)', opacity: 0.9}}>
      <CentertContant>
        <h1>APPPS</h1>
      </CentertContant>
    </BackgroundImage>

    <WrapperBox backgroundColor={'main'} jumpid={'aboutus'}>
      <ContantBoxFull>
        <RobotoSlab elementColor={'contrast'}>
          <h1>
            Deine <span>Application</span>
          </h1>
          <DefaultHeadline>
            <h3>einfach und überall</h3>
          </DefaultHeadline>
        </RobotoSlab>
      </ContantBoxFull>
      <ContantBoxHalf>
        <p>Text1</p>
      </ContantBoxHalf>
      <ContantBoxHalf>
        <p>Text2</p>
      </ContantBoxHalf>
    </WrapperBox>

    <Parallax img={props.data.clock.childImageSharp.fluid} />
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    clock: file(relativePath: {eq: "backgrounds/clock.jpg"}) {
      ...fluidImage
    }
  }
`
