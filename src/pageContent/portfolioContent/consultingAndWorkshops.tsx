/** @format */

import React from 'react'

import {
  portfolio as SiteContent,
  SVGpros2,
  SVGconsultant,
  SVGworkshop,
  SVGclassroom,
  SVGcollegeGraduation,
  SVGevent,
} from '../../assets'

import {
  SvgImage,
  List,
  ContentDivider,
  DoubleContentBox,
  CenterContent,
  TypographyRenderP,
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
          <CenterContent>
            <h2>{SiteContent.consulting[lang].subtitle}</h2>
            <SvgImage dWidth={250} src={SVGworkshop} />
          </CenterContent>
          <TypographyRenderP content={SiteContent.consulting[lang].text} />
        </>
      }
      // left={<ShadowBox>Some Picture?</ShadowBox>}
    />

    {/* soft skills */}
    <ContentImgGallery
      title={SiteContent.workshops[lang].title}
      image={[
        {SVG: SVGclassroom, dWidth: 120, mWidth: 60},
        {SVG: SVGcollegeGraduation, dWidth: 120, mWidth: 60},
        {SVG: SVGevent, dWidth: 120, mWidth: 60},
      ]}
    />

    {/* //! Workshop 2  */}
    <DoubleContentBox
      left={
        <>
          <CenterContent>
            <h2>{SiteContent.workshops[lang].title}</h2>

            <SvgImage dWidth={250} src={SVGpros2} />
          </CenterContent>

          <TypographyRenderP content={SiteContent.workshops[lang].text} />
        </>
      }
      right={<List items={SiteContent.workshops[lang].arguments} />}
    />
  </>
)

export {ConsultingAndWorkshops}
