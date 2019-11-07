/** @format */

/** @format */

import React from 'react'

import {
  portfolio as SiteContent,
  SVGgcp,
  SVGaws,
  SVGazure,
  SVGfirebase,
  SVGpros,
  SVGentwicklung,
  SVGserverless,
} from '../../assets'

// Components
import {
  SvgImage,
  List,
  ShadowBox,
  ContentDivider,
  ContentImgGallery,
  DoubleContentBox,
  TypographyRenderP,
  JumpAnchor,
} from '../../components'
const lang = 'de'

const SoftwareEngineering = () => (
  <>
    <JumpAnchor id={'sw'} />
    <ContentDivider color={'secondary'} title={SiteContent.sw.title[lang]} text={''} image={SVGentwicklung} />

    <DoubleContentBox
      right={
        <>
          <h2>{SiteContent.sw.subtitle[lang]}</h2>
          <TypographyRenderP content={SiteContent.sw.text[lang]} />
        </>
      }
      left={
        <ShadowBox>
          <SvgImage dWidth={750} mWidth={300} src={SVGserverless} />
          <i>Architektur einer Serverless Anwendung bei AWS</i>
        </ShadowBox>
      }
    />

    {/* //! Key Partners */}
    <ContentImgGallery
      title={SiteContent.partners.title[lang]}
      image={[
        {SVG: SVGgcp, dWidth: 300, mWidth: 200},
        {SVG: SVGaws, dWidth: 90, mWidth: 50},
        {SVG: SVGazure, dWidth: 180, mWidth: 120},
        {SVG: SVGfirebase, dWidth: 180, mWidth: 120},
      ]}
    />

    {/* //! pro Software Entwicklung */}
    <DoubleContentBox
      left={
        <>
          <h2>{SiteContent.pro[lang].subtitle}</h2>
          <SvgImage dWidth={250} src={SVGpros} />
          <TypographyRenderP content={SiteContent.pro[lang].text} />
        </>
      }
      right={<List items={SiteContent.pro[lang].arguments} />}
    />
  </>
)

export {SoftwareEngineering}
