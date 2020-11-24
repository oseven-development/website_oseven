/** @format */

// react and gatsby
import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {ImageQuery} from '..'
import {HeadTextIntro, Seo} from '../components'
// import {SVGteam, SVGprofessor} from '../assets'
// import SiteContent from '../assets/content/uberuns'
// Components
// import {Seo, Particles, SkillCardBox, PortraitBox, ContentDivider} from '../components'

export default () => {
  const image = useStaticQuery<{file: ImageQuery}>(graphql`
    query {
      file(relativePath: {eq: "consultingParallax.png"}) {
        ...FileFragment
      }
    }
  `)

  return (
    <>
      <Seo title="Homepage oseven" description="Wir machen ML und Cloud" keywords="Cloud CC ML" />
      <HeadTextIntro english>IT and Business Model Mentoring for Startups</HeadTextIntro>

      <section>
        <Img fluid={image.file.childImageSharp.fluid} alt={'name'} className="md:h-128" />
      </section>

      <section className="py-12">
        <p className="md:w-6/12 mb-8">
          We use our expertise and experience to help you transform your business idea into a sound business model
          and implement fast and efficient software solutions!
        </p>
        <Link className="rounded-full ghost p-6 inline-block" to="UnsereDienstleistungen">
          Our services
        </Link>
      </section>

      <div className="bg-white">
        <section className=" flex flex-col">
          <h2 className="text-4xl text-center text-primary md:w-6/12 mx-auto mb-8">
            We create customized software solutions for you and support with bringing your applications into the cloud.
          </h2>
          <Link className="rounded-full bg-primary text-white p-6 inline-block mx-auto" to="UnsereArbeit">
            Our work
          </Link>
        </section>
      </div>
    </>
  )
}
