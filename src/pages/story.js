/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import background from '../assets/images/backgrounds/story.jpg'
import {Layout, BackgroundImage, Headline, Container} from '../components'
import Index from '../../content/story/index.md'

const StoryPage = () => (
  <Layout>
    <BackgroundImage
      img={background}
      bgHeight="800px"
      bgColor={'linear-gradient(90deg, rgb(0,0,0,0.6) 8%, rgb(255,255,255,0.2) 140%)'}>
      <Flex justifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
        <Headline h1color="white" bgColor="#232323" padding="7px 30px">
          <h1 className="headline" style={{opacity: 0.95}}>
            Unsere Stories
          </h1>
        </Headline>
      </Flex>
    </BackgroundImage>
    <Container>
      <div style={{margin: '50px 0'}}>
        <Index />
      </div>
    </Container>
  </Layout>
)

export default StoryPage
