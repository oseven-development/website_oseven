/** @format */

import React from 'react'

// Containers
import {WrapperBox, ContentBox} from '../container'

// Components
import {Slider, Headline, FadeImageOrIconBox} from '../components'

// Bilder
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

// Kunden
import kd1 from '../../content/kundenlogos/heikehänsel.png'
import kd2 from '../../content/kundenlogos/paulschaefer.png'
import kd3 from '../../content/kundenlogos/priofol.png'
import kd4 from '../../content/kundenlogos/wagner.png'

export default () => (
  <React.Fragment>
    <Slider items={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]} height={['30vh', '80vh']}>
      <Headline h1color="white" bgColor="#232323" padding="7px 30px">
        <h1 className="headline" style={{opacity: 0.95}}>
          Unsere Referenzen
        </h1>
      </Headline>
    </Slider>

    <WrapperBox>
      <ContentBox
        width={[1]}
        h3={'Wir befinden uns noch in unsere Gründungsphase...'}
        paragraph={[
          '... daher können wir Ihnen noch nicht all zu viele Referenzen zeigen. Doch lassen Sie sich davon nicht abschrecken wir können Ihnen trotzdem einige unsere Ideen und Umsetzungen nahe bringen.',
        ]}
      />
    </WrapperBox>

    <WrapperBox backgroundColor={'main'}>
      <ContentBox
        width={[1]}
        h1={{content: ['UNSERE', 'Kunden'], style: 'block', color: ['white', 'contrast']}}
        textColor={'white'}
        componentBottom={
          <FadeImageOrIconBox
            direction={['column', 'row']}
            icons={[
              {icon: kd1, width: [200], linkto: 'https://heikehaensel.de', fade: {delay: 500, duration: 500}},
              {
                icon: kd2,
                width: [200],
                linkto: 'https://kfz-gutachter-schaefer.de',
                fade: {delay: 1000, duration: 500},
              },
              {icon: kd3, width: [200], linkto: 'https://priofol.de', fade: {delay: 1500, duration: 500}},
              {icon: kd4, width: [200], linkto: 'https://wagnerbauservice.de', fade: {delay: 2000, duration: 500}},
            ]}
          />
        }
      />
    </WrapperBox>
  </React.Fragment>
)
