/** @format */

import React from 'react'

import {portfolio as SiteContent, SVGai, SVGpy, SVGtf, SVGk8, SVGmodel} from '../../assets'
// illustrations

import {Container, Content, SvgImage, BoxShadowBox, ContentDivider} from '../../components'
const lang = 'de'

const MachineLearning = () => (
  <>
    <div id={'ml'} />
    <ContentDivider color={'secondary'} title={SiteContent.ml[lang].title} text={''} image={SVGai} />

    <Container>
      <Content subtitle={SiteContent.ml[lang].subtitle} text={SiteContent.ml[lang].text} />
      <BoxShadowBox>
        <Content
          textAlign={'center'}
          text={
            <React.Fragment>
              <i>Machine learning lifecycle by Google</i>
            </React.Fragment>
          }
          image={{
            src: <SvgImage dWidth={750} mWidth={300} src={SVGmodel} />,
            type: 'svg',
          }}
        />
      </BoxShadowBox>
    </Container>

    {/* //! Tools */}
    <Container inbox fullscreen bg={'third'} style={{border: '1px solid #7F83885F'}}>
      <Container transparent flexDirection={'column'}>
        <Content subtitle={SiteContent.tools[lang].title} />
        <Content
          imageDirection={'row'}
          image={[
            {
              src: <SvgImage dWidth={250} mWidth={150} src={SVGpy} p={'15px 0px'} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={250} mWidth={150} src={SVGtf} p={'15px 0px'} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={250} mWidth={150} src={SVGk8} p={'15px 0px'} />,
              type: 'svg',
            },
          ]}
        />
      </Container>
    </Container>
  </>
)

export {MachineLearning}
