/** @format */

// react and gatsby
import React from 'react'
import { graphql, Link } from 'gatsby'

import { ChildImageSharp } from '..'
import { HeadTextIntro, Seo } from '../components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  {
    file(relativePath: { eq: "consultingParallax.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

const Index = ({
  data,
}: {
  data: {
    file: ChildImageSharp
  }
}) => {
  return (
    <>
      <Seo
        title="oseven aws-cloud und maschine-learning consulting"
        description="We make AWS-Cloud and ML"
        keywords="oseven aws cloud consulting maschine-learning ml"
        image={data.file.childImageSharp.gatsbyImageData.images.fallback.src}
      />

      <HeadTextIntro english>
        <>
          We are <span className="font-bold text-secondary">specialists</span> in{' '}
          <span className="font-bold text-secondary">cloud development </span> and{' '}
          <span className="font-bold text-secondary">machine learning</span>
        </>
      </HeadTextIntro>

      <section className="md:flex md:flex-row-reverse p-0 md:py-20 w-full">
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt={'name'}
          aria-hidden="true"
          className="md:w-1/2"
        />
        <div className="md:mx-6 p-6 md:p-8 md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <p className="md:w-full mb-8 md:text-2xl">
            We use our expertise and experience to help you{' '}
            <span className="text-secondary">transform your business idea</span> into a{' '}
            <span className="text-secondary">sound business model</span>
            and implement <span className="text-secondary">fast and efficient software solutions</span>!
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2" to="UnsereDienstleistungen">
            Our services
          </Link>
        </div>
      </section>

      <div className="bg-black text-white">
        <section className="flex flex-col md:py-36 space-y-8 md:space-y-24">
          <p className="text-center  md:w-1/2 mx-auto md:text-2xl">
            We create customized software solutions for you and support with bringing your applications into the cloud.
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2 mx-auto" to="UnsereArbeit">
            Our work
          </Link>
        </section>
      </div>

      <div className="bg-white text-black">
        <section className="flex flex-col md:py-36 space-y-8 md:space-y-24">
          <p className="text-center md:w-1/2 mx-auto md:text-2xl">
            You always wanted to benefit from machine learning and have use cases that are just waiting to be solved?
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2 mx-auto" to="UnsereArbeit">
            Our work
          </Link>
        </section>
      </div>
    </>
  )
}

export default Index
