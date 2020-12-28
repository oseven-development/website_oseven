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
      <HeadTextIntro>
        <span>
          <span className="font-bold text-secondary">IT</span> und{' '}
          <span className="font-bold text-secondary">Business Model Mentoring</span> für Startups
        </span>
      </HeadTextIntro>

      <section className="md:flex md:flex-row-reverse p-0 md:py-20 w-full">
        <Img fluid={image.file.childImageSharp.fluid} alt={'name'} aria-hidden="true" className="md:w-1/2" />

        <div className="md:mx-6 p-6 md:p-8 md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <p className="md:w-full mb-8 md:text-2xl">
            Mit unserer Expertise und Erfahrung helfen wir dir,{' '}
            <span className="text-secondary">deine Geschäftsidee</span> in ein{' '}
            <span className="text-secondary">nachhaltiges Geschäftsmodell</span> zu überführen und{' '}
            <span className="text-secondary">schnelle und effiziente Softwarelösungen</span> umzusetzen!
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2" to="UnsereDienstleistungen">
            Unsere Dienstleistungen
          </Link>
        </div>
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
              <h2>Business Model</h2>
              {/* <p className="text-base leading-6">Was der Lars so macht?</p> */}
            </div>

            <div className="shadow-2xl px-4 py-8">
              <PytorchLogo className="h-16 mx-auto" />
              <h2>pytorch</h2>
              {/* <p className="text-base leading-6">
                Mehrfach zertifiziert in AWS, Microsoft Azure und Google Cloud Platform.
              </p> */}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-black text-white">
        <section className="flex flex-col md:py-48 space-y-8 md:space-y-24">
          <p className="text-center md:w-1/2 mx-auto md:text-2xl">
            Wir entwickeln maßgeschneiderte Softwarelösungen und helfen dir bei der Migration deiner Anwendungen in die
            Cloud.
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2 mx-auto" to="UnsereArbeit">
            Unsere Arbeit
          </Link>
        </section>
      </div>
    </>
  )
}
