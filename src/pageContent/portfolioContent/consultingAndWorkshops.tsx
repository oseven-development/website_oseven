/** @format */

import React from 'react'

import {portfolio as SiteContent, SVGpy, SVGtf, SVGk8, SVGpros2, SVGconsultant, SVGworkshop} from '../../assets'

import {Container, Content, SvgImage, List, ContentDivider} from '../../components'

const lang = 'de'

const ConsultingAndWorkshops = () => (
  <>
    <div id={'bw'} />
    <ContentDivider color={'secondary'} title={SiteContent.consulting[lang].title} text={''} image={SVGconsultant} />

    <Container pt={'0px'} alignItems={'flex-start'}>
      <Container inbox flexDirection={'column'}>
        <Content
          subtitle={SiteContent.consulting[lang].subtitle}
          image={{
            src: <SvgImage dWidth={250} src={SVGworkshop} />,
            type: 'svg',
          }}
          text={SiteContent.consulting[lang].text}
        />
      </Container>
      <Content textVariant={'div'} textAlign={'left'} />
    </Container>

    {/* soft skills */}
    <Container inbox fullscreen bg={'third'} style={{border: '1px solid #7F83885F'}}>
      <Container transparent flexDirection={'column'}>
        <Content subtitle={SiteContent.tools[lang].title} />
        <Content
          imageDirection={'row'}
          image={[
            {
              src: <SvgImage dWidth={250} mWidth={150} src={SVGpy} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={250} mWidth={150} src={SVGtf} />,
              type: 'svg',
            },
            {
              src: <SvgImage dWidth={250} mWidth={150} src={SVGk8} />,
              type: 'svg',
            },
          ]}
        />
      </Container>
    </Container>

    {/* //! Workshop 2  */}

    <Container pt={'0px'} alignItems={'flex-start'}>
      <Content textVariant={'div'} textAlign={'left'} text={<List items={SiteContent.workshops[lang].arguments} />} />
      <Container inbox flexDirection={'column'}>
        <Content
          subtitle={SiteContent.workshops[lang].title}
          image={{
            src: <SvgImage dWidth={250} src={SVGpros2} />,
            type: 'svg',
          }}
          text={SiteContent.workshops[lang].text}
        />
      </Container>
    </Container>
  </>
)

export {ConsultingAndWorkshops}
