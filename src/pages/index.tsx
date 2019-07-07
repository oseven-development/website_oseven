/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

// Components
import {Seo, Container, Typography, Content} from '../components'

// Bilder Backgrounds

export default props => (
  <React.Fragment>
    {/* <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" /> */}
    <Container>
      <Content title="Test" subtitle="test2" text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} />
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
