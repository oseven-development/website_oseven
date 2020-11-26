/** @format */

// react and gatsby
import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {ImageQuery} from '..'
import {HeadTextIntro, Seo, A, OfferCard} from '../components'
import AWSLogo from '../assets/svg/Amazon_Web_Services_Logo.svg'
import GCPLogo from '../assets/svg/google_cloud.svg'
import PytorchLogo from '../assets/svg/pytorch.svg'

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
      <HeadTextIntro>Software und Business Model Mentoring</HeadTextIntro>

      <section>
        <Img ref={ref} fluid={image.file.childImageSharp.fluid} alt={'name'} className="max-h-80" />
      </section>

      <div className="bg-white text-black">
        <section className="py-12">
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6">
            <OfferCard
              {...{
                title: 'Cloud-Workloads',
                logo: AWSLogo,
                content: [
                  'Migration von on-premise workloads in die Cloud.',
                  'Mehrfach von AWS zertifiziert.',
                  'Beratung zu Architekturen und das Aufbauen von verteilten Systemen.',
                  'Aufbau von Release Management und CI-CD pipelines.',
                  'Beratung und Migration zu Kubernetes',
                ],
                technologie: [
                  {href: 'https://aws.amazon.com/de/', text: 'aws'},
                  {href: 'https://cloud.google.com/', text: 'gcp'},
                  {href: 'https://github.com', text: 'github'},
                  {href: 'https://kubernetes.io/de/', text: 'kubernetes'},
                ],
              }}
            />

            <div className="shadow-2xl px-4 py-8">
              <GCPLogo className="h-16 mx-auto" />
              <h2>So Businesszeugs</h2>
              <p className="text-base leading-6">Was der Lars so macht?</p>
            </div>

            <div className="shadow-2xl px-4 py-8">
              <PytorchLogo className="h-16 mx-auto" />
              <h2>pytorch</h2>
              <p className="text-base leading-6">
                Mehrfach zertifiziert in AWS, Microsoft Azure und Google Cloud Platform.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="py-12">
        <p className="md:w-6/12 mb-8">
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
            Wir entwickeln maßgeschneiderte Softwarelösungen und helfen dir bei der Migration deiner Anwendungen in die
            Cloud.
          </h2>
          <Link className="rounded-full bg-primary text-white p-6 inline-block mx-auto" to="UnsereArbeit">
            Unsere Arbeit
          </Link>
        </section>
      </div>
    </>
  )
}
