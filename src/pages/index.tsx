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
  const image = useStaticQuery<ImageQuery>(graphql`
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
      <Seo title="Homepage oseven" description="Wir machen ML und Cloud" keywords="Cloud CC ML" />
      <HeadTextIntro>Wir sind Spezialisten für Künstliche Intelligenz (KI) und Cloud-Entwicklung</HeadTextIntro>

      <section>
        <Img ref={ref} fluid={image.file.childImageSharp.fluid} alt={'name'} className="md:h-128" />
      </section>

      <section className="py-12">
        <p className="md:w-6/12 mb-8">
          Um in schnell verändernden Märkten wettbewerbsfähig zu bleiben, müssen Sie in Ihre digitalen Prozesse, die
          Infrastruktur und deren Architektur investieren. Wir unterstützen Sie dabei bestmöglich und finden gemeinsam
          mit Ihnen Lösungen für die Fragen von heute und Probleme von Morgen. Dazu entwickeln wir native
          Cloud-Lösungen, die genauso flexibel und agil wachsen, wie ihr Unternehmen, sich aber zugleich nach Ihren
          individuellen Bedürfnissen richten.
        </p>
        <Link className="rounded-full bg-white text-black p-6 inline-block" to="UnsereDienstleistungen">
          Unsere Dienstleistungen
        </Link>
      </section>

      <section className="py-12 bg-white -mx-4 md:-mx-12 px-4 flex flex-col">
        <h2 className="text-4xl text-center text-primary md:w-6/12 mx-auto mb-8">
          Wir entwickeln für Sie passgenaue Softwarelösungen oder helfen Ihnen Ihre Anwendungen in die Cloud zu
          migrieren.
        </h2>
        <Link className="rounded-full bg-primary text-white p-6 inline-block mx-auto" to="UnsereArbeit">
          Unsere Arbeit
        </Link>
      </section>
    </>
  )
}
