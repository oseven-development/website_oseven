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
  Container,
  Content,
  SvgImage,
  List,
  BoxShadowBox,
  ContentDivider,
  ContentImgGallery,
  DoubleContentBox,
  TypographyRenderHelper,
} from '../../components'
const lang = 'de'

const SoftwareEngineering = () => (
  <>
    <div id={'sw'} />
    <ContentDivider color={'secondary'} title={SiteContent.sw.title[lang]} text={''} image={SVGentwicklung} />

    <DoubleContentBox
      right={
        <>
          <h2>{SiteContent.sw.subtitle[lang]}</h2>
          <TypographyRenderHelper variant={'p'} content={SiteContent.sw.text[lang]} />
        </>
      }
      left={
        <BoxShadowBox>
          <SvgImage dWidth={750} mWidth={300} src={SVGserverless} />
          <i>Architektur einer Serverless Anwendung bei AWS</i>
        </BoxShadowBox>
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
          <TypographyRenderHelper variant={'p'} content={SiteContent.pro[lang].text} />
        </>
      }
      right={<List items={SiteContent.pro[lang].arguments} />}
    />
  </>
)

export {SoftwareEngineering}
