/** @format */

import React from 'react'
import {Flex} from 'rebass'
import background from '../assets/images/backgrounds/story.jpg'
// Containers
import {WrapperBox, ContentBox} from '../container'

// Components
import {BackgroundImage, Headline} from '../components'

export default () => (
  <React.Fragment>
    <BackgroundImage
      img={background}
      bgHeight={['30vh', '80vh']}
      bgColor={'linear-gradient(90deg, rgb(0,0,0,0.6) 8%, rgb(255,255,255,0.2) 140%)'}>
      <Flex justifyContent="center" alignItems="center" style={{height: '100%', width: '100%'}}>
        <Headline h1color="white" bgColor="#232323" padding="7px 30px">
          <h1 className="headline" style={{opacity: 0.95}}>
            Unsere Stories
          </h1>
        </Headline>
      </Flex>
    </BackgroundImage>

    <WrapperBox>
      <ContentBox
        width={[1]}
        h3={'Wir befinden uns noch in unsere Gründungsphase...'}
        paragraph={[
          '... daher können wir Ihnen noch nicht all zu viele Geschichten zeigen. Doch lassen Sie sich davon nicht abschrecken wir können Ihnen trotzdem einige unsere Ideen und Umsetzungen nahe bringen.',
        ]}
      />
    </WrapperBox>
  </React.Fragment>
)
