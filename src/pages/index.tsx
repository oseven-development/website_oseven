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
      <HeadTextIntro>IT und Business Model Mentoring für Startups</HeadTextIntro>

      <section>
        <Img ref={ref} fluid={image.file.childImageSharp.fluid} alt={'name'} className="max-h-80" />
      </section>

      <section className="py-12">
        <p className="md:w-6/12 mb-8">
          {/* Um in schnell verändernden Märkten wettbewerbsfähig zu bleiben, müssen Sie in Ihre digitalen Prozesse, die
          Infrastruktur und deren Architektur investieren. Wir unterstützen Sie dabei bestmöglich und finden gemeinsam
          mit Ihnen Lösungen für die Fragen von heute und Probleme von Morgen. Dazu entwickeln wir native
          Cloud-Lösungen, die genauso flexibel und agil wachsen, wie ihr Unternehmen, sich aber zugleich nach Ihren
          individuellen Bedürfnissen richten. */}
          Mit unserer Expertise und Erfahrung helfen wir dir, deine Geschäftsidee in ein nachhaltiges Geschäftsmodell zu
          überführen und schnelle und effiziente Softwarelösungen umzusetzen!
        </p>
        <Link className="rounded-full ghost p-6 inline-block" to="UnsereDienstleistungen">
          Unsere Dienstleistungen
        </Link>
      </section>

      <div className="bg-white">
        <section className=" flex flex-col">
          <h2 className="text-4xl text-center text-primary md:w-6/12 mx-auto mb-8">
            Wir entwickeln maßgeschneiderte Softwarelösungen und helfen dir bei der Migration deiner
            Anwendungen in die Cloud.
          </h2>
          <Link className="rounded-full bg-primary text-white p-6 inline-block mx-auto" to="UnsereArbeit">
            Unsere Arbeit
          </Link>
        </section>
      </div>
    </>
  )
}
