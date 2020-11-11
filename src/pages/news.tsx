/** @format */

// react and gatsby
import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {ImageQuery} from '..'
import {A, HeadTextIntro, Seo} from '../components'
// import {SVGteam, SVGprofessor} from '../assets'
// import SiteContent from '../assets/content/uberuns'
// Components
// import {Seo, Particles, SkillCardBox, PortraitBox, ContentDivider} from '../components'

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

export default () => {
  const {allFeedPhilschmidBlog} = useStaticQuery<{allFeedPhilschmidBlog: any}>(graphql`
    query {
      allFeedPhilschmidBlog {
        edges {
          node {
            guid
            creator
            image
            pubDate
            title
            link
            content
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Homepage oseven" description="Wir machen ML und Cloud" keywords="Cloud CC ML" />
      <HeadTextIntro>News</HeadTextIntro>

      <section>
        <div className="grid grid-cols-2 gap-16">
          {allFeedPhilschmidBlog.edges.map(({node}) => (
            // <div className="bg-light-primary w-full">
            <A
              href={node.link}
              aria-label={node.link}
              className="flex items-center col-span-2  lg:col-span-1  hover:-translate-y-px transform scale-102 transition duration-300 ease-in-out">
              <article className="rounded-lg overflow-hidden bg-light-primary h-full w-full">
                <div className="w-full h-40 overflow-hidden">
                  <img src={node.image} />
                </div>

                <section className="p-6 space-y-2 grid grid-row h-64">
                  <p className="text-sm text-gray-1 text-truncate leading-6 ">
                    Author: <span className="font-semibold">{node.creator}</span>
                  </p>

                  <h2 className="text-lg"> {node.title || node.slug}</h2>
                  <div className="grid-1"></div>
                  <div className="text-gray-2 text-sm md:text-base font-semibold "></div>

                  <p className="text-sm text-gray-1 text-truncate leading-6 ">
                    <span className="font-semibold">{new Date(node.pubDate).toLocaleDateString('de', options)}</span>
                    <br />
                    {node.content}
                  </p>
                </section>
              </article>
            </A>
            // </div>
          ))}
        </div>
      </section>
    </>
  )
}

//

//     <h5>Author: {node.creator}</h5>
//     <h2 className=" "> {node.title || node.slug}</h2>

//

{
  /* · {readingTime}  */
}
