/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

// Components
import {Seo, Container, Typography} from '../components'

// Bilder Backgrounds

export default props => (
  <React.Fragment>
    {/* <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" /> */}
    <h1>hallo</h1>
    <Container>
      <Typography variant={'h1'} color={'primary'}>
        OSEVEN
      </Typography>
    </Container>
    <Container>
      <Typography color={'secondary'} variant="h2">
        OSEVEN
      </Typography>
    </Container>
    <Container>
      <Typography color={'third'} variant="p">
        OSEVEN
      </Typography>
    </Container>
    <Container>
      <Typography variant="link">OSEVEN</Typography>
    </Container>
  </React.Fragment>
)

// export const indexQuery = graphql`
//   query {
//     maxhaensel2: file(relativePath: {eq: "maxhaenselzoom.jpg"}) {
//       ...fluidImage
//     }
//     team: file(relativePath: {eq: "backgrounds/team2.jpg"}) {
//       ...fluidImage
//     }
//   }
// `
