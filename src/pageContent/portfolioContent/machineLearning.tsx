/** @format */

import React from 'react'

import {portfolio as SiteContent, SVGai, SVGpy, SVGtf, SVGk8, SVGmodel} from '../../assets'
// illustrations

import {
  SvgImage,
  ShadowBox,
  ContentDivider,
  DoubleContentBox,
  TypographyRenderP,
  ContentImgGallery,
  JumpAnchor,
} from '../../components'
const lang = 'de'

const MachineLearning = () => (
  <>
    <JumpAnchor id={'ml'} />
    <ContentDivider color={'secondary'} title={SiteContent.ml.title[lang]} text={''} image={SVGai} />

    <DoubleContentBox
      right={
        <>
          <h2>{SiteContent.ml.subtitle[lang]}</h2>
          <TypographyRenderP content={SiteContent.ml.text[lang]} />
        </>
      }
      left={
        <ShadowBox>
          <SvgImage dWidth={750} mWidth={300} src={SVGmodel} />
          <i>Machine learning lifecycle by Google</i>
        </ShadowBox>
      }
    />

    {/* //! Tools */}
    <ContentImgGallery
      title={SiteContent.partners.title[lang]}
      image={[
        {SVG: SVGpy, dWidth: 250, mWidth: 150},
        {SVG: SVGtf, dWidth: 250, mWidth: 150},
        {SVG: SVGk8, dWidth: 250, mWidth: 150},
      ]}
    />
  </>
)

export {MachineLearning}
