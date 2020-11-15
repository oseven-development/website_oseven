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

interface Node {
  node: {
    title: string
    creator: string
    link: string
    guid: string
    isoDate: string
    pubDate: string
    content: {encodedSnippet: string} | string
    image?: string
  }
}
interface Blog {
  edges: Node[]
}

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

export default () => {
  const [sorted, setSorted] = React.useState<Node[]>([])
  const {
    file,
    allFeedPhilschmidBlog,
    allFeedStefanSeegererBlog,
    allFeedLarsNeusesserBlog,
    allFeedStefanBlosBlog,
  } = useStaticQuery<{
    file: ImageQuery
    allFeedPhilschmidBlog: Blog
    allFeedStefanSeegererBlog: Blog
    allFeedLarsNeusesserBlog: Blog
    allFeedStefanBlosBlog: Blog
  }>(graphql`
    query {
      file(relativePath: {eq: "consultingParallax.png"}) {
        ...FileFragment
      }
      allFeedPhilschmidBlog {
        edges {
          node {
            title
            creator
            link
            guid
            isoDate
            pubDate
            content
            image
          }
        }
      }
      allFeedStefanSeegererBlog {
        edges {
          node {
            title
            creator
            link
            guid
            isoDate
            pubDate
            content {
              encodedSnippet
            }
          }
        }
      }
      allFeedLarsNeusesserBlog {
        edges {
          node {
            title
            creator
            link
            guid
            isoDate
            pubDate
            content {
              encodedSnippet
            }
          }
        }
      }
      allFeedStefanBlosBlog {
        edges {
          node {
            title
            creator
            link
            guid
            isoDate
            pubDate
            content {
              encodedSnippet
            }
          }
        }
      }
    }
  `)

  React.useLayoutEffect(() => {
    const all = [
      ...allFeedPhilschmidBlog.edges,
      ...allFeedStefanSeegererBlog.edges,
      ...allFeedLarsNeusesserBlog.edges,
      ...allFeedStefanBlosBlog.edges,
    ]
    const data = all.sort((cur, next) => (cur.node.isoDate >= next.node.isoDate ? -1 : 0))
    console.log(data)
    setSorted(data)
  }, [setSorted])

  return (
    <>
      <Seo title="Homepage oseven" description="Wir machen ML und Cloud" keywords="Cloud CC ML" />
      <HeadTextIntro english>News</HeadTextIntro>

      <section>
        <div className="grid grid-cols-2 gap-16">
          {sorted.map(({node}, index) => (
            <A
              key={node.guid}
              href={node.link}
              aria-label={node.link}
              className={`flex items-center col-span-2  lg:col-span-1  hover:-translate-y-px transform scale-102 transition duration-300 ease-in-out`}>
              <article className="rounded-lg overflow-hidden bg-light-primary h-full w-full">
                <div className="w-full h-40 overflow-hidden">
                  {node.image ? <img src={node.image} /> : <Img fluid={file.childImageSharp.fluid} alt={'name'} />}
                </div>

                <section className="p-6 space-y-2 grid grid-row h-64">
                  <p className="text-sm text-gray-1 text-truncate leading-6 ">
                    Author: <span className="font-semibold">{node.creator}</span>
                  </p>

                  <h2 className="text-lg"> {node.title}</h2>
                  <div className="grid-1"></div>
                  <div className="text-gray-2 text-sm md:text-base font-semibold "></div>

                  <p className="text-sm text-gray-1 text-truncate leading-6 ">
                    <span className="font-semibold">{new Date(node.pubDate).toLocaleDateString('de', options)}</span>
                    <br />
                    {node.content.encodedSnippet ? node.content.encodedSnippet : node.content}
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
