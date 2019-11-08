/** @format */

import React from 'react'

import {portfolio as SiteContent, SVGpy, SVGtf, SVGk8, SVGpros2, SVGconsultant, SVGworkshop} from '../../assets'

import {
  SvgImage,
  List,
  ContentDivider,
  DoubleContentBox,
  TypographyRenderP,
  ShadowBox,
  ContentImgGallery,
  JumpAnchor,
} from '../../components'

const lang = 'de'

const ConsultingAndWorkshops = () => (
  <>
    <JumpAnchor id={'bw'} />
    <ContentDivider color={'secondary'} title={SiteContent.consulting[lang].title} text={''} image={SVGconsultant} />

    <DoubleContentBox
      right={
        <>
          <h2>{SiteContent.consulting[lang].subtitle}</h2>
          <SvgImage dWidth={250} src={SVGworkshop} />
          <TypographyRenderP content={SiteContent.consulting[lang].text} />
        </>
      }
      // left={<ShadowBox>Some Picture?</ShadowBox>}
    />

    {/* soft skills */}
    <ContentImgGallery
      title={SiteContent.workshops[lang].title}
      image={[
        {SVG: SVGpy, dWidth: 250, mWidth: 150},
        {SVG: SVGtf, dWidth: 250, mWidth: 150},
        {SVG: SVGk8, dWidth: 250, mWidth: 150},
      ]}
    />

    {/* //! Workshop 2  */}
    <DoubleContentBox
      left={
        <>
          <h2>{SiteContent.workshops[lang].title}</h2>
          <div>
            <SvgImage dWidth={250} src={SVGpros2} />
          </div>
          <TypographyRenderP content={SiteContent.workshops[lang].text} />
        </>
      }
      right={<List items={SiteContent.workshops[lang].arguments} />}
    />
  </>
)

export {ConsultingAndWorkshops}
