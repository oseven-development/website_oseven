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

  // const callback = function(entries) {
  //   entries.forEach(entry => {
  //     entry.isIntersecting
  //       ? entry.target.classList.add('motion-safe:animate-fadeIn')
  //       : entry.target.classList.remove('motion-safe:animate-fadeIn')
  //   })
  // }
  // const observer = new IntersectionObserver(callback)

  const ref = React.useRef(null)

  // React.useEffect(() => {
  //   if (ref !== undefined) {
  //     observer.observe(ref.current.imageRef.current)
  //   }
  // }, [observer, ref])

  return (
    <>
      <Seo
        title="Homepage oseven"
        description="Wir machen ML und Cloud"
        keywords="Cloud CC ML"
        image={image.file.childImageSharp.fluid.src}
      />
      {/* <HeadTextIntro>Wir sind Spezialisten für Künstliche Intelligenz (KI) und Cloud-Entwicklung</HeadTextIntro> */}
      <HeadTextIntro><span><span className="font-bold text-secondary">IT</span> und <span className="font-bold text-secondary">Business Model Mentoring</span> für Startups</span></HeadTextIntro>

      <section className="md:flex md:flex-row-reverse p-0 md:py-20 w-full">
        <Img fluid={image.file.childImageSharp.fluid} alt={'name'} aria-hidden="true" className="md:w-1/2" />
      
        <div className="md:mx-6 p-6 md:p-8 md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <p className="md:w-full mb-8 md:text-2xl">
            Mit unserer Expertise und Erfahrung helfen wir euch <span className="text-secondary">eure Geschäftsidee</span> in ein <span className="text-secondary">fundiertes Geschäftsmodell</span> zu
          überführen, sowie <span className="text-secondary">schnelle und effiziente Softwarelösungen</span> umzusetzen - und das kostenfrei!
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2" to="UnsereDienstleistungen">
            Unsere Dienstleistungen
          </Link>
        </div>
      </section>

      <div className="bg-white">
        <section className="flex flex-col md:py-48 space-y-8 md:space-y-24">
          <p className="text-center text-primary md:w-1/2 mx-auto md:text-2xl">
            Wir entwickeln für Sie maßgeschneiderte Softwarelösungen oder helfen Ihnen bei der Migration Ihrer
            Anwendungen in die Cloud.
          </p>
          <Link className="rounded-full bg-primary text-white px-4 py-2 inline-block mx-auto" to="UnsereArbeit">
            Unsere Arbeit
          </Link>
        </section>
      </div>
    </>
  )
}
