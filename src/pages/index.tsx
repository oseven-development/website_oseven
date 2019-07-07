/** @format */

// react and gatsby
import React from 'react'
import {graphql} from 'gatsby'
import Homescreen from '../assets/images/illustrations/homescreen.svg'

// Components
import {Seo, Container, Typography, Content} from '../components'

// Bilder Backgrounds

export default props => {
  return (
    <React.Fragment>
      <Seo title="Home" description="Startseite von Oseven" keywords="Cool Fancy Beste Seite Webdeveloper" />
      <Container>
        <Content
          title="Test"
          titleColor="primary"
          subtitle="test2"
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        />
        <Content image={[{src: <Homescreen />, type: 'svg'}, {src: <Homescreen />, type: 'svg'}]} />
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
}
export const indexQuery = graphql`
  query {
    Logo: file(relativePath: {eq: "logo.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
