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
      <Seo 
        title="Homepage oseven" 
        description="Wir machen ML und Cloud" 
        keywords="Cloud CC ML" 
        image={image.file.childImageSharp.fluid.src}
      />
      <HeadTextIntro english><span><span className="font-bold text-secondary">IT</span> and <span className="font-bold text-secondary">Business Model Mentoring</span> for Startups</span></HeadTextIntro>

      <section className="md:flex md:flex-row-reverse p-0 md:py-20 w-full">
        <Img fluid={image.file.childImageSharp.fluid} alt={'name'} aria-hidden="true" className="md:w-1/2" />
      
        <div className="md:mx-6 p-6 md:p-8 md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <p className="md:w-full mb-8 md:text-2xl">
            With our expertise and experience we help you to <span className="text-secondary">transform your business idea</span> into a <span className="text-secondary">sound business model</span> as
            well as implementing <span className="text-secondary">fast and efficient software solutions</span> - free of charge!
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2" to="UnsereDienstleistungen">
            Our services
          </Link>
        </div>
      </section>

      <div className="bg-white">
        <section className="flex flex-col md:py-48 space-y-8 md:space-y-24">
          <p className="text-center text-primary md:w-1/2 mx-auto md:text-2xl">
            We develop customized software solutions for you or help you bring your applications into the cloud migrate.
          </p>
          <Link className="rounded-full bg-primary text-white px-4 py-2 inline-block mx-auto" to="UnsereArbeit">
            Our work
          </Link>
        </section>
      </div>
    </>
  )
}
