/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Flex, Box} from 'rebass'
import {Layout, Slider, Headline, Container, ImageBackground} from '../components'
import img1 from '../assets/images/slider/business.jpg'
import img2 from '../assets/images/slider/computer.jpg'
import img3 from '../assets/images/slider/home-office.jpg'
import img4 from '../assets/images/slider/keyboard.jpg'
import img5 from '../assets/images/slider/laptop.jpg'
import img6 from '../assets/images/slider/mobile.jpg'
import img7 from '../assets/images/slider/notebook.jpg'
import img8 from '../assets/images/slider/notebook2.jpg'
import img9 from '../assets/images/slider/office.jpg'
import img10 from '../assets/images/slider/paper.jpg'
import img11 from '../assets/images/slider/table.jpg'
import Index from '../../content/referenzen/index.md'
import theme from '../components/theme'
import kd1 from '../../content/referenzen/logo/heikehänsel.png'
import kd2 from '../../content/referenzen/logo/paulschaefer.png'
import kd3 from '../../content/referenzen/logo/priofol.png'
import kd4 from '../../content/referenzen/logo/wagner.png'

const Kunden = () => {
  return (
    <Flex>
      <Box width={[1, 1 / 4, 1 / 4]}>
        <ImageBackground img={kd1} />
      </Box>
      <Box width={[1, 1 / 4, 1 / 4]}>
        <ImageBackground img={kd2} />
      </Box>
      <Box width={[1, 1 / 4, 1 / 4]}>
        <ImageBackground img={kd3} />
      </Box>
      <Box width={[1, 1 / 4, 1 / 4]}>
        <ImageBackground img={kd4} />
      </Box>
    </Flex>
  )
}

const ReferencePage = () => (
  <Layout>
    <Slider items={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]} height="800px">
      <Headline h1color="white" bgColor="#232323" padding="7px 30px">
        <h1 className="headline" style={{opacity: 0.95}}>
          Unsere Referenzen
        </h1>
      </Headline>
    </Slider>
    <Container>
      <div style={{margin: '50px 0'}}>
        <Index />
      </div>
    </Container>
    <div style={{background: theme.colors.second}}>
      <Container>
        <Headline h1color="white">
          <h1 className="headline">
            <span style={{backgroundColor: theme.colors.contrast, padding: 5}}>Unsere</span> Kunde
          </h1>
        </Headline>
      </Container>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2, 1 / 4]}>
          <ImageBackground img={kd1} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]}>
          <ImageBackground img={kd2} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]}>
          <ImageBackground img={kd3} />
        </Box>
        <Box width={[1, 1 / 2, 1 / 4]}>
          <ImageBackground img={kd4} />
        </Box>
      </Flex>
    </div>
  </Layout>
)

export default ReferencePage
